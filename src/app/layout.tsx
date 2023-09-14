import "./globals.css";
import { Inter } from "next/font/google";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/effect-cards";

export const metadata = {
  title: "Wevvo-Community",
  description:
    "WEVVO is a community-based platform, setup to support female breadwinners and help them thrive.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Jost:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap"
          rel="stylesheet"
        />
        <link
          rel="icon"
          href="https://wevvo.ng/wp-content/uploads/2018/04/wevvo-1.png"
          type="image/x-icon"
          sizes="any"
        />
        <link
          href="https://wevvo.ng/wp-content/uploads/2018/04/wevvo-1.png"
          rel="shortcut icon"
        />
        <link
          href="https://wevvo.ng/wp-content/uploads/2018/04/wevvo-1.png"
          rel="apple-touch-icon"
        />
        <link
          href="https://wevvo.ng/wp-content/uploads/2018/04/wevvo-1.png"
          rel="apple-touch-icon"
          sizes="72x72"
        />
        <link
          href="https://wevvo.ng/wp-content/uploads/2018/04/wevvo-1.png"
          rel="apple-touch-icon"
          sizes="114x114"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
