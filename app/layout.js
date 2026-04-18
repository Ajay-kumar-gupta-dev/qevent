import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ThemeProvider } from "@/components/theme-provider";
import SessionWrapper from "@/components/SessionWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "QEvent",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* ✅ SessionProvider should wrap everything */}
        <SessionWrapper>
          <ThemeProvider attribute="class" defaultTheme="light">
            <Header />
            <main>{children}</main> {/* ✅ good practice */}
          </ThemeProvider>
        </SessionWrapper>
      </body>
    </html>
  );
}

