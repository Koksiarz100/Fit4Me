import type { Metadata } from "next";

import Nav from "@/components/layout/nav/Nav";
import './styles/globals.scss';

export const metadata: Metadata = {
  title: "Fit4Me",
  description: "Best gym in the world",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
}