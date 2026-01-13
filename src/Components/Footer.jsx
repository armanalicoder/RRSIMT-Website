import Link from "next/link";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGoogle,
  FaYoutube,
} from "react-icons/fa";
import { PiLinkSimpleBold } from "react-icons/pi";

export default function Footer() {
  return (
    <footer className="bg-red-900 text-white">

      {/* Top Footer */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

        {/* Address */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Address</h3>
          <p className="flex items-start gap-2 mb-2">
            <FaMapMarkerAlt className="mt-1" />
            Rajarshi Rananjay Singh Institute of Management & Technology
          </p>
          <p>Munshiganj, District Amethi</p>
          <p>Uttar Pradesh – 227405</p>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow On Us</h3>

          <p className="flex items-center gap-2 mb-2">
            <FaPhoneAlt /> +91 7080102007
          </p>
          <p className="flex items-center gap-2 mb-4">
            <FaEnvelope /> admission@rrsimt.ac.in
          </p>

          <div className="flex gap-3">
            <Link target="_blank" className="p-2 bg-white text-red-800 rounded-full" href="https://x.com/rrsimtplacement"><FaTwitter /></Link>
            <Link target="_blank" className="p-2 bg-white text-red-800 rounded-full" href="https://m.facebook.com/rrsimtamethi/"><FaFacebookF /></Link>
            <Link target="_blank" className="p-2 bg-white text-red-800 rounded-full" href="https://www.instagram.com/rrsimtamethi/"><FaInstagram /></Link>
            <Link target="_blank" className="p-2 bg-white text-red-800 rounded-full" href="https://www.linkedin.com/in/rrsimt-amethi-97871112b"><FaLinkedinIn /></Link>
            <Link target="_blank" className="p-2 bg-white text-red-800 rounded-full" href="https://www.youtube.com/@rrsimt-amethi7017"><FaYoutube /></Link>
          </div>
        </div>

        {/* Important Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Important Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link className="hover:underline" target="_blank" href="https://aktu.ac.in/"><PiLinkSimpleBold className="inline hover:opacity-100"/> AKTU University</Link></li>
            <li><Link className="hover:underline" target="_blank" href="https://erp.aktu.ac.in/Webpages/Public/Circular/frmCircularForWebsite.aspx"><PiLinkSimpleBold className="inline hover:opacity-100"/> AKTU Circulars</Link></li>
            <li><Link className="hover:underline" target="_blank" href="https://nptel.ac.in/"><PiLinkSimpleBold className="inline hover:opacity-100"/> NPTEL Lectures</Link></li>
            <li><Link className="hover:underline" target="_blank" href="https://swayam.gov.in/"><PiLinkSimpleBold className="inline hover:opacity-100"/> Swayam Student Portal</Link></li>
          </ul>
        </div>

        {/* Map */}
         <div className="w-full h-[150px] mb-5 ">
        <h3 className="text-lg font-semibold mb-4">Find the Way</h3>
          <iframe
            src="https://www.google.com/maps?q=RRSIMT%20Amethi&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>

      </div>

      {/* Bottom Footer */}
      <div className="bg-red-950 text-center py-3 text-sm">
        © Rajarshi Rananjay Sinh Institute of Management & Technology,Amethi (U.P)<br/>
        Website Designed & Developed by Arman Ali
      </div>
{/* <div className="bg-red-950 text-center py-3 text-sm">
        © Design & Devloped By Arman Ali
      </div> */}

    </footer>
  );
}
