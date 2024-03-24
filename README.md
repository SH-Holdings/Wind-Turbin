# Rules

- `dev-hamza` is a branch for @24ping commits.
- `dev-souf` is a branch for @Sotounsi commits.
- `development` is the main branch of development which requires PRs.

# How to run the project (dev-souf)

- Clone the project
- Run `git checkout dev-souf` to switch to the development branch

## Frontend

- Run `cd frontend`
- Run `npm install` to install dependencies
- Run `npm start` to start the project, or NODE_OPTIONS=--openssl-legacy-provider npm start if you have node 17 installed.
- Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Backend

- Run `cd backend`
- Run `python manage.py migrate` to apply migrations
- Run `python manage.py runserver` to start the project
- Open [http://localhost:8000](http://localhost:8000) to view it in the browser.
