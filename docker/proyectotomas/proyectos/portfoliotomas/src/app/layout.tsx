import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tomás - Técnico Informático de ASIR | Portfolio",
  description: "Portfolio de Tomás, Técnico Superior en Administración de Sistemas Informáticos en Red (ASIR). Especialista en redes, servidores, ciberseguridad y soporte IT.",
  keywords: ["Técnico Informático", "ASIR", "Administración de Sistemas Informáticos en Red", "Redes", "Servidores", "Portfolio", "Tomás"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={outfit.variable}>
        {children}
      </body>
    </html>
  );
}
