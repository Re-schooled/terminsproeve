import Footer from "src/components/footer";
import "./globals.css";

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
        className="antialiased"
      >
        {children}
        <Footer/>
      </body>
    </html>
  );
}
