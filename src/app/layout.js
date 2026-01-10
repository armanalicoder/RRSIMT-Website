import Navbar from "@/Components/Navbar/Navbar";
import "./globals.css";
import Footer from "@/Components/Footer";
import { ToastContainer } from "react-toastify";
import NextTopLoader from "nextjs-toploader";

export const metadata = {
  title: "Rajarshi Rananjay Sinh Institute of Management & Technology, Amethi",
  description:
    "Rajarshi Rananjay Sinh Institute of Management & Technology (RRSIMT) is set-up in Amethi, Uttar Pradesh. This is a private college which was established in the year 2008. It is affiliated to Dr A.P.J Abdul Kalam Technical University (AKTU), Lucknow and approved by AICTE. ",
  keywords: [
    "rrsimt",
    "rrsimtamethi",
    "rajarshirananjaysinh",
    "btechcollegeinamethi",
    "mbacollegeinamethi",
  ],
  authors: [{ name: "Arman Ali" }],
  openGraph: {
    title: "RRSIMT Amethi",
    description:
      "Rajarshi Rananjay Sinh Institute of Management & Technology, Amethi",
    url: "https://www.rrsimt.ac.in",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Navbar code*/}
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
        <NextTopLoader color="white" />
        <Navbar />
        <div className="min-h-screen">{children}</div>
        {/* Footer code*/}
        <Footer />
      </body>
    </html>
  );
}
