import { MdOutlineEmail } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import NavbarMenu from "./NavbarMenu";
export default function Navbar() {
  return (
    <>
      {/* TopBar Code */}
      <nav className="bg-red-800 text-center text-white">
        <div className="sm:flex sm:justify-around p-3 border-b-2 border-dotted border-yellow-400">
          <div className="">
            <p className="">Approved by AICTE | Affiliated to AKTU Lucknow</p>
          </div>
          <div>
            <span>
              <MdOutlineEmail className="inline" /> admission@rrsimt.ac.in
            </span>
            <span>
              &nbsp;<IoIosCall className="inline" /> +91 7080102007
            </span>
          </div>
        </div>
        {/* <div class="w-full border-b-2 border-dotted border-yellow-400"></div> */}
        <div className="font-bold p-2 border-b-2 border-dotted border-yellow-400">
          <p>
            For any Admission and Examination related query, Kindly call on
            given helpline Numbers +91 80815 28232 | +91 9648333660 | +91
            9956180598
          </p>
        </div>
      </nav>
      {/* TopBar Code End */}
      <div className="md:flex justify-around items-center">
        <div className="md:flex items-center text-center">
          <Link href={"/"}>
            <Image
              src="/rrsimt.png"
              className="mx-auto"
              alt="rrsimt_logo"
              width={150}
              height={150}
            />
          </Link>
          <h1 className="text-2xl md:text-3xl font-bold text-red-800 md:w-120">
            Rajarshi Rananjay Sinh Institute of Management & Technology, Amethi
          </h1>
        </div>
        <div className="my-2">
          <div className="flex justify-center gap-4">
            <div className="border-2 rounded-full p-2 text-cyan-500">
              <Link target="_blank" href={"https://x.com/rrsimtplacement"}>
                <FaTwitter />
              </Link>
            </div>
            <div className="border-2 rounded-full p-2 text-blue-600">
              <Link target="_blank" href={"https://www.facebook.com/rrsimtamethi/"}>
                <FaFacebook />
              </Link>
            </div>
            <div className="border-2 rounded-full p-2 text-fuchsia-500">
              <Link href={"https://www.instagram.com/rrsimtamethi/"} target="_blank">
                <FaInstagram />
              </Link>
            </div>
            <div className="border-2 rounded-full p-2 text-blue-600">
              <Link href={"https://www.linkedin.com/in/rrsimt-amethi-97871112b"} target="_blank">
                <FaLinkedin />
              </Link>
            </div>
            <div className="border-2 rounded-full p-2 text-red-600">
              <Link href={"https://www.youtube.com/@rrsimt-amethi7017"} target="_blank">
                <FaYoutube />
              </Link>
            </div>
          </div>
          <div className="my-2 text-sm font-bold text-center text-red-800">
            <p>Looking Forward | Looking Onward | Looking Upward</p>
            <p>College code - 383</p>
          </div>
        </div>
      </div>
      <NavbarMenu />
    </>
  );
}
