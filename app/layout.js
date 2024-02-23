import "./globals.css";
import Nav from "./nav";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-row">
        <div>
          <Nav />
        </div>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
