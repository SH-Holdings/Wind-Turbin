import '@/app/ui/global.css'; // added to make the first page more dynamic
import { inter } from '@/app/ui/fonts';// changed the font of the first page to a more subtle tone 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
