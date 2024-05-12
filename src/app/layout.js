import { Inter } from "next/font/google";
import "./globals.css";
import ContactBar from "@/components/contactBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Cuze",
  description: "Cuze is a cyber security company",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
        
        {children}
        </body>
    </html>
  );
}
