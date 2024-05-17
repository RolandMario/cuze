import { Roboto } from "next/font/google";
import "./globals.css";


const roboto = Roboto({ subsets: ["latin"], weight:"400" });

export const metadata = {
  title: "Cuze",
  description: "Cuze is a cyber security company",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={roboto.className}>
        
        {children}
        </body>
    </html>
  );
}
