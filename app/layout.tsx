import "@/app/ui/global.css";
import { inter, acme, lusitana } from '@/app/ui/fonts';
import { Metadata } from "next";

export const metadata: Metadata = {
  title:"Next.js learning app",
  description: "This is an example of a Next.js app"
}


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
