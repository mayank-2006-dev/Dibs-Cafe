import SiteShell from "../components/SiteShell.jsx";
import "../styles.css";

export const metadata = {
  title: "Dibs Cafe | Delhi",
  description:
    "Dibs Cafe is a cozy Delhi cafe for coffee, bakery treats, casual hangouts, and warm little memories.",
  openGraph: {
    title: "Dibs Cafe | Small cafe, big comfort",
    description:
      "A cute hidden cafe in Delhi with warm coffee, bakery treats, and cozy corners.",
    images: ["/images/iced-coffee-counter.png"],
  },
  themeColor: "#f9efe4",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
