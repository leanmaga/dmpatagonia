// app/layout.js o app/page.js según tu estructura
import "../styles/globals.css";

const RootLayout = ({ children }) => (
  <html lang="en">
    <body className="bg-primary-black">{children}</body>
  </html>
);

export default RootLayout;
