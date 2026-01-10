import Image from "next/image";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";

const companies = [
  "/placement/img1.jpg",
  "/placement/img2.jpg",
  "/placement/img3.jpg",
  "/placement/img4.jpg",
];

export default function Companies() {
  return (
    <section className="max-w-7xl mx-auto px-4">
      
      <h2 className="text-3xl font-bold text-center">
        Excellent <span className="text-red-800">Placement</span>
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 justify-center items-center my-5">
        {companies.map((logo, index) => (
          <div
            key={index}
            className="bg-white flex justify-center items-center"
          >
            <Image
              src={logo}
              alt="Placement Company"
              width={300}
              height={300}
              className="object-contain border-2 border-dotted border-red-800"
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <Link href={'/placements'} className="cursor-pointer bg-red-800 text-white py-1 px-4 rounded-md">See more <FaAngleRight className="inline"/></Link>
      </div>
<div className="my-5 h-px bg-linear-to-r from-transparent via-red-800 to-transparent"></div>
    </section>
  );
}
