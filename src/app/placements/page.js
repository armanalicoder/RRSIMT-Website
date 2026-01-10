import Image from "next/image";
import Link from "next/link";

const recruiters = [
  "/Companies/rrsimt_placement_1.png",
  "/Companies/rrsimt_placement_2.png",
  "/Companies/rrsimt_placement_3.png",
  "/Companies/rrsimt_placement_4.png",
  "/Companies/rrsimt_placement_5.png",
  "/Companies/rrsimt_placement_6.png",
  "/Companies/rrsimt_placement_8.png",
  "/Companies/rrsimt_placement_9.png",
  "/Companies/rrsimt_placement_10.png",
  "/Companies/rrsimt_placement_11.png",
  "/Companies/rrsimt_placement_12.png",
  "/Companies/rrsimt_placement_13.png",
];

export const metadata = {
  title:
    "Our Placements - Rajarshi Rananjay Sinh Institute of Management & Technology, Amethi",
  description:
    "Rajarshi Rananjay Sinh Institute of Management & Technology (RRSIMT) is set-up in Amethi, Uttar Pradesh. This is a private college which was established in the year 2008. It is affiliated to Dr A.P.J Abdul Kalam Technical University (AKTU), Lucknow and approved by AICTE. ",
  keywords: ["rrsimtcollege", "rrsimtamethi", "rrsimtaktu", "rrsimtplacements"],
  authors: [{ name: "Arman Ali" }],
};


export default function Placement() {
  return (
    <>
      <div>
        <div className="relative h-50 w-full bg-[url('/rrsimtimg1.jpg')] bg-cover bg-center flex items-center justify-center">
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="relative z-10 text-center text-white space-y-3">
            <h2 className="text-3xl md:text-4xl font-semibold">
              Training & Placements
            </h2>
            <nav className="text-sm flex justify-center gap-2">
              <Link href="/" className="hover:underline">
                Home
              </Link>
              <span>/</span>
              <span className="text-gray-300">Training & Placements</span>
            </nav>
          </div>
        </div>
      </div>
      <section className="max-w-7xl mx-auto px-4 py-10">
        {/* Page Heading */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold">
            Training & <span className="text-red-800">Placement</span>
          </h1>
          <p className="text-gray-600 mt-2">
            Building careers through industry-focused training and placement
            support
          </p>
        </div>

        <div className="bg-white border rounded-lg p-6 mb-10">
          <h2 className="text-xl font-semibold text-red-800 mb-4">
            Placement Cell
          </h2>
          <p className="text-justify text-gray-700 leading-relaxed">
            The Training & Placement Cell of RRSIMT plays a vital role in
            shaping the careers of students. The cell provides training, career
            guidance, and placement opportunities through leading national and
            multinational companies. Regular workshops, mock interviews,
            aptitude training, and industry interactions are organized to
            prepare students for the corporate world.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 text-center">
          {[
            { label: "Recruiters", value: "100+" },
            { label: "Students Placed", value: "500+" },
            { label: "Highest Package", value: "8.5 LPA" },
            { label: "Placement Assistance", value: "100%" },
          ].map((item, i) => (
            <div key={i} className="border rounded-lg p-5 bg-white">
              <h3 className="text-2xl font-bold text-red-800">{item.value}</h3>
              <p className="text-sm text-gray-600 mt-1">{item.label}</p>
            </div>
          ))}
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-semibold text-center mb-6">
            Our <span className="text-red-800">Recruiters</span>
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center">
            {recruiters.map((logo, i) => (
              <div
                key={i}
                className="bg-white p-4 flex justify-center items-center"
              >
                <Image
                  src={logo}
                  alt="Recruiter"
                  width={120}
                  height={60}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
          <p className="text-center">+ many more</p>
        </div>

        <div className="bg-white border rounded-lg p-6 mb-10">
          <h2 className="text-xl font-semibold text-red-800 mb-4">
            Training & Career Development
          </h2>
          <p>
            ✓ Our Corporate Training Partner: Focus Academy For Career Enhancement
            (FACE, Bengaluru)
          </p>
          <p>
            ✓ Our Corporate Placement Partner: Cocubes Technologies Pvt. Ltd.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-3">
            <li>Aptitude & technical skill training</li>
            <li>Soft skills & communication workshops</li>
            <li>Mock interviews and group discussions</li>
            <li>Industrial visits & expert lectures</li>
            <li>Internship and live project guidance</li>
          </ul>
        </div>

        <div className="text-center mt-10">
          <p className="mb-4 text-gray-700">
            Our mission is to make students industry-ready and career-focused.
          </p>
          <a
            href="/contact"
            className="inline-block bg-red-800 text-white px-6 py-3 rounded hover:bg-red-700 transition"
          >
            Contact Placement Cell
          </a>
        </div>
      </section>
    </>
  );
}
