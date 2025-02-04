import type { Metadata } from "next";
import { Roboto_Condensed } from 'next/font/google';
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";

const robotoCondensed = Roboto_Condensed({
  subsets: ['latin'], // Define los caracteres necesarios (opcional)
  weight: ['400', '700'], // Define los pesos que necesitas
});


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${robotoCondensed.className}  antialiased`}
      >
        <Navbar/>
        {children}
        {/* Footer */}
        {/* <section id="footer" className=" text-gray-100 py-3 text-center text-sm">
          <p >Desarrollado por: Federico Alaniz - 2657660312 - Propiedad: Hospital Privado de la Villa</p>
        </section> */}
        <Footer/>
      </body>
    </html>
  );
}
