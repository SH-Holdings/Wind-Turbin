from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
import math


@csrf_exempt
def calculate_loads(request):
    if request.method == "POST":
        data = json.loads(request.body)
        print(data)
        B7 = float(data["airDensity"])
        B8 = float(data["gravitationalAcceleration"])
        B9 = float(data["refWindSpeed"])
        B10 = float(data["avgWindSpeed"])
        B11 = float(data["numBlades"])
        B12 = float(data["bladeRadius"])
        B13 = float(data["platformArea"])
        B14 = float(data["dragCoeff"])
        B15 = float(data["maxLiftCoeff"])
        B16 = float(data["thrustCoeff"])
        B17 = float(data["rotorSpeed"])
        B18 = float(data["designRotorSpeed"])
        B20 = float(data["singleBladeMass"])
        B21 = float(data["rotorMass"])
        B22 = float(data["bladeCenterGravity"])
        B23 = float(data["rotorCenterFirstBearing"])
        B24 = float(data["rotorCenterYawAxis"])
        B25 = float(data["gearboxRatio"])
        B26 = data["brakeStatus"]
        B27 = float(data["brakeTorque"])
        B28 = float(data["DesignPower"])
        B29 = float(data["ShortCircuitTorqueFactor"])
        B30 = data["StationaryBlades"]

        B19 = 30.3 * B22**2

        F7 = 1.4 * B10
        F8 = 1.4 * B9

        F9 = B17 * math.pi * B12 / (30 * F8)
        F10 = B12 * math.pi * B18 / (30 * F7)
        F11 = 0.655

        F12 = 30000 * B28 / (B18 * math.pi * F11)
        F13 = math.pi * B12**2
        F14 = B18 * math.pi / 30
        F15 = math.pi * B17 / 30
        F16 = 2.635
        F17 = B17 * math.pi * B12 / (30 * F8)
        F18 = 0.005 * B12
        if B26 == "Y":
            F19 = B25 * B27
        elif B26 == "N":
            F19 = B27

        # -----Load Case A - Fatigue Loads on Blades and Rotor Shaft-------
        # ----Blade loads-----

        K9 = 2 * B20 * B22 * F14**2
        K10 = F12 / B11 + 2 * B20 * B8 * B22
        K11 = F10 * F12 / B11

        # -----Shaft Loads----

        K13 = (1.5 * F10 * F12) / B12
        K14 = F12 + (2 * B21 * B8 * F18)
        K15 = (2 * B21 * B8 * B23) + (B12 * K13 / 6)

        # -----Load Case B - Blade and Rotor Shaft Loads during Yaw------

        K18 = (B20 * F16**2 * B24 * B22) + (2 * F16 * B19 * F14) + B12 * K13 / 9

        if B11 == 2:
            K19 = 4 * F16 * F14 * B19 + B21 * B8 * B23 + B12 * K13 / 6
        else:
            K19 = B11 * F16 * F14 * B19 + B21 * B8 * B23 + B12 * K13 / 6

        # -----Load Case C - Yaw Error Load on Blades-----

        K22 = (
            0.125
            * B7
            * B13
            * B15
            * B12**3
            * F14**2
            * (1 + (4 / (3 * F10)) + (1 / F10**2))
        )

        # -----Load Case D - Maximum Thrust on Shaft----

        K25 = B16 * 3.125 * B7 * B10**2 * math.pi * B12**2

        # ----Load Case E - Maximum Rotational Speed-----

        K28 = B20 * F15**2 * B22
        K29 = B21 * B8 * B23 + B21 * F18 * F15**2 * B23

        # ----Load Case F - Short at Load Connection---

        K32 = B29 * F12
        K33 = K32 / B11

        # ----Load Case G - Shutdown Braking-------

        K36 = B27 + F12
        K37 = K36 / B11 + B20 * B8 * B22

        # ----Load Case H - Parked Wind Loads during Idling------

        if B30 == "Y":
            K40 = B14 * 0.25 * B7 * F8**2 * B13 * B12
        else:
            K40 = B15 * B7 * F8**2 * B13 * B12

        if B30 == "Y":
            K41 = 0.5 * B11 * B14 * B7 * F8**2 * B13
        else:
            K41 = 0.17 * B11 * B14 * B7 * F8**2 * B13

        # ----Enter Additional Data into Grey Cells Only-----

        P41 = math.pi * ((0.09 / 2) ** 2 - (0.06 / 2) ** 2)
        P42 = (math.pi / 64) * (0.09**4 - 0.06**4)

        O7 = 0.09
        O8 = P41
        O9 = P42
        O10 = 2 * O9 / O7
        O11 = (216 * 10 ** (-3)) * (7.8 * 10 ** (-2))
        O12 = (((216 * 10 ** (-3)) ** 3) * (7.8 * 10 ** (-2))) / 12
        O13 = (7.8 * 10 ** (-2)) / 2
        O14 = ((216 * 10 ** (-3)) * ((7.8 * 10 ** (-2)) ** 3)) / 12
        O15 = (216 * 10 ** (-3)) / 2
        O16 = O12 / O13
        O17 = O14 / O15
        O18 = 215
        O19 = 350

        # ----Enter Additional Data for Fatigue Calculations into Yellow Cells-----

        W13 = 1.48

        T8 = ((K9 / O11) + (K10 / O16) + (K11 / O17)) / 1000000
        V27 = T8
        V28 = V27 * W13
        R34 = (1 - (V28 / O18)) / 0.1
        V29 = 10**R34

        O23 = 20
        O24 = O23 * 365.25 * 24 * 60 * 60
        O25 = (B18 * B11 * O24) / 60
        O26 = "INF"
        O27 = V29

        ####-----Calculation of the Equivalent Stresses

        # ----Load Case A - Fatigue Loads on Blades and Rotor Shaft

        T8 = ((K9 / O11) + (K10 / O16) + (K11 / O17)) / 1000000
        T9 = math.sqrt((K13 / O8 + K15 / O10) ** 2 + 0.75 * (K14 / O10) ** 2) / 1000000

        # ----Load Case B - Blade and Rotor Shaft Loads during Yaw

        T11 = (K18 / O17) / 1000000
        T12 = (K19 / O10) / 1000000

        # ----Load Case C - Yaw Error Load on Blades

        T14 = (K22 / O17) / 1000000

        # ----Load Case D - Maximum Thrust on Shaft
        T16 = (K25 / O8) / 1000000

        # ----Load Case E - Maximum Rotational Speed

        T18 = (K28 / O11) / 1000000
        T19 = K29 / O10 / 1000000

        # ----Load Case F - Short at Load Connection

        T21 = K33 / O16 / 1000000
        T22 = 0.5 * math.sqrt(3) * K32 / O10 / 1000000

        # ----Load Case G - Shutdown Braking

        # T24=IF(K36="n/a","n/a",K37/O16/1000000)
        # T25=IF(K37="n/a","n/a",SQRT(0.75*K36/O10)/1000000)

        T24 = K37 / O16 / 1000000
        T25 = math.sqrt(0.75 * K36 / O10) / 1000000

        # ----Load Case H - Parked Wind Loads during Idling

        T27 = (K40 / O17) / 1000000
        T28 = K41 / O8 / 1000000

        # -------Partial Safety Factors (PSF) for SLM

        V7 = 1
        V8 = 3

        # -----Calculations for the material PSF (Enter Data into Grey Cells)

        V12 = "N"
        V16 = "Y"

        # W13=1.48 already mentioned before
        W14 = 1.1
        W17 = 1.25
        W18 = 1.1

        # -------Calculations for the material PSF (Enter Data into Grey Cells)
        V22 = O18 / W14 / V8
        V23 = O19 / W18 / V8

        # -----Calculations for Fatigue (Enter Data into Grey Cells)
        V27 = T8
        V28 = V27 * W13
        V29 = 10**R34
        V30 = T9
        V31 = V30 * W17
        V32 = "INF"

        ###-------------Simple Load Model Results--------------------
        # Load Case A - Fatigue Loads on Blades and Rotor Shaft

        ## Stress limit vs calculated stress
        # Load Case A - Fatigue Loads on Blades and Rotor Shaft
        AA8 = 1
        AA9 = 1

        if V29 == "INF":
            AB8 = "Infinite life"
        else:
            AB8 = O25 / V29
        if V32 == "INF":
            AB9 = "Infinite life"
        else:
            AB9 = O25 / V32

        # Load Case B - Blade and Rotor Shaft Loads during Yaw
        AA12 = V22
        AA13 = V23

        AB12 = T11
        AB13 = T12

        # Load Case C - Yaw Error Load on Blades
        AA16 = V22
        AB16 = T14

        # Load Case D - Maximum Thrust on Shaft

        AA19 = V22
        AB19 = T16

        # Load Case E - Maximum Rotational Speed
        AA22 = V22
        AB22 = T19

        AA23 = V23
        AB23 = T18

        # Load Case F - Short at Load Connection
        AA26 = V22
        AB26 = T21

        AA27 = V23
        AB27 = T22

        # Load Case G - Shutdown Braking
        AA30 = V22
        AB30 = T24

        AA31 = V23
        AB31 = T25

        # Load Case H - Parked Wind Loads during Idling

        AA34 = V23
        AB34 = T28

        AA35 = V22
        AB35 = T27

        def analyze_load_cases():
            results = {
                "Load Case A - Fatigue Loads on Blades and Rotor Shaft": {
                    "Blades": "SAFE" if AA8 > AB8 else "FAIL",
                    "Shaft": "SAFE" if AB9 == "Infinite life" else "FAIL",
                },
                "Load Case B - Blade and Rotor Shaft Loads during Yaw": {
                    "Blades": "SAFE" if AA12 > AB12 else "FAIL",
                    "Shaft": "SAFE" if AA13 > AB13 else "FAIL",
                },
                "Load Case C - Yaw Error Load on Blades": {
                    "Blades": "SAFE" if AA16 > AB16 else "FAIL",
                },
                "Load Case D - Maximum Thrust on Shaft": {
                    "Shaft": "SAFE" if AA19 > AB19 else "FAIL",
                },
                "Load Case E - Maximum Rotational Speed": {
                    "Blades": "SAFE" if AA22 > AB22 else "FAIL",
                    "Shaft": "SAFE" if AA23 > AB23 else "FAIL",
                },
                "Load Case F - Short at Load Connection": {
                    "Blades": "SAFE" if AA26 > AB26 else "FAIL",
                    "Shaft": "SAFE" if AA27 > AB27 else "FAIL",
                },
                "Load Case G - Shutdown Braking": {
                    "Blades": "SAFE" if AA30 > AB30 else "FAIL",
                    "Shaft": "SAFE" if AA31 > AB31 else "FAIL",
                },
                "Load Case H - Parked Wind Loads during Idling": {
                    "Shaft": "SAFE" if AA34 > AB34 else "FAIL",
                    "Blades": "SAFE" if AA35 > AB35 else "FAIL",
                },
            }
            return results

        results = analyze_load_cases()
        return JsonResponse(results)

    return JsonResponse({"error": "This endpoint requires a POST request."}, status=400)
