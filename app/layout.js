import "./globals.css";

export const metadata = {
  title: "52 Week - 52 Stuff",
  description: "one cool stuff at a time for 52 weeks ;)",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body>
        {children}
      </body>
    </html>
  );
}
