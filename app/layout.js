import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"

export const metadata = {
  title: "52 Week - 52 Stuff",
  description: "one cool stuff at a time for 52 weeks ;)",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
