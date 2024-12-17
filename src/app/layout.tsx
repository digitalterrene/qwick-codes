import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui-components/Navbar";
import Footer from "@/components/ui-components/Footer";
import { headDetails, keyswords } from "@/assets/data";
import { Metadata } from "@/utils/tsTypes";
import Banner from "@/components/ui-components/home/Banner";
import Theme from "@/utils/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://qwick-codes.vercel.app"),
  title: {
    default: headDetails?.title || "Web Services Agency: Qwik Codes",
    template: "%s - Qwik Codes",
  },
  description: headDetails?.description,
  author: "Qwik Codes",
  keywords: keyswords,
  image: "/logo.png",
  siteUrl: "https://qwick-codes.vercel.app",
  url: "https://qwick-codes.vercel.app",
  siteName: "Qwik Codes Agency",
  type: "website",
  locale: "en_US",
  openGraph: {
    title: headDetails?.title,
    description: headDetails?.description,
    url: "https://qwick-codes.vercel.app",
    siteName: "Qwik Codes",
    locale: "en_US",
    type: "website",
    images: ["https://qwick-codes.vercel.app/og.png"],
  },
  twitter: {
    card: "/images/og.png",
    title: headDetails?.title,
    description: `${headDetails?.description}`,
    creator: "@qcodesSa",
    creatorId: "1467726470533754880",
    images: ["https://qwick-codes.vercel.app/og.png"], // Must be an absolute URL
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en" className="  ">
      <body className={inter.className}>
        <Theme>
          <div className="dark:bg-gradient-to-r from-gray-100 via-[#bce1ff] to-gray-100 bg-_primary font-primary  min-h-screen">
            <Banner />
            <Navbar />
            {children}
            <Footer />
          </div>
        </Theme>
      </body>
    </html>
  );
}

// theme colors
// Headings ------>
// Paragraphs ---------->
// Icons ------->
