import { ThemeProvider } from "@/components/theme-provider";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "RazenimeV2",
  description: "Stream anime with ease",
};

export default function RootLayout({ children }) {
  return (
   <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body>  
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar/>
            {children}
            <Footer/>
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
