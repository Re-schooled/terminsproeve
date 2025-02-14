// import Footer from "src/components/Footer";
import "./globals.css";
import ClientLayout from "../components/ClientLayout";

export const metadata = {
  title: {
    default: "Landrup Dans | Dans for alle fra tango til poledance",
    template: "%s | Landrup Dans",
  },
  description: "Landrup Dans er det sted du lærer at danse, alt fra almindelig dans til tango & poledance",
  keywords: [
    "dans",
    "tango",
    "poledance",
    "senior dance",
    "dansehold",
    "danseintruktør",
    "aktiviteter",
    "danseundervisning",
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="da">
      <body
        className="antialiased">
      <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
