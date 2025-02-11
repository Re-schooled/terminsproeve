// import Footer from "src/components/Footer";
import "./globals.css";
import ClientLayout from "../components/ClientLayout";

export const metadata = {
  title: {
    default: "Repetition med verdens bedste Brian",
    template: "%s | Repetition med verdens bedste Brian",
  },
  description: "HØR NU EFTER!!! >:D",
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
