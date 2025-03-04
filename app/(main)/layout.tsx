import "../globals.css";
import Footer from "./_components/Footer";
import Navbar from "./_components/Navbar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className={`antialiased`}>
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}
