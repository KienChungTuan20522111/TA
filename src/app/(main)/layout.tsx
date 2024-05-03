import '../globals.css';
import Navbar from '../Components/navbar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Layout UI */}
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
