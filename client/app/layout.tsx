import type { Metadata } from "next";

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
      <body>{children}</body>
    </html>
  );
}