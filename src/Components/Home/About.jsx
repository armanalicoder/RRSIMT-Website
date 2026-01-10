"use client";
import Image from "next/image";
export default function About() {
  return (
    <section>
      <div className="p-2 my-3">
        <h1 className="uppercase text-3xl text-center font-bold">
          About <span className="text-red-800">RRSIMT</span>
        </h1>
    

        <div className="lg:flex justify-around">
          <div className="lg:w-[50%]">
            <p className="p-3 text-lg text-justify">
              Rajarshi Rananjay Sinh Institute of Management & Technology
              (RRSIMT) is set-up in Amethi, Uttar Pradesh. This is a private
              college which was established in the year 2008. It is affiliated
              to{" "}
              <strong>
                Dr A.P.J Abdul Kalam Technical University (AKTU), Lucknow and
                approved by AICTE.
              </strong>{" "}
              The college is popular for its management and engineering courses.{" "}
              <br />
              <br />
              The college offers placements and the companies that visit the
              college for offering jobs are HCL, Sony, Accenture, Infosys, PVR,
              Axis Bank, ICICI Bank, UNICODE and more. Top packages that are
              offered to students are 8.5 lacs, 8.4 lacs and 7.8 lacs. <br />{" "}
              <br />
              The college is famous for developing user-oriented Websites and
              Applications, good market-oriented Projects for example Farmer
              Dron, AC Helmet. The college’s faculty consists of senior IT
              expert faculty and staff. Admission in this college is given based
              on entrance exams such as JEE (Mains) formerly known as All India
              Engineering Entrance Examinations.
            </p>
          </div>
          <div className="relative">
            <Image
              className="mx-auto rounded-tl-2xl rounded-br-2xl"
              src={"/rrsimtimg1.jpg"}
              width={500}
              height={20}
              alt="rrsimt_background"
            />
            <iframe
              className="absolute bottom-40 right-80 hidden lg:block"
              width="300"
              height="150"
              src="https://www.youtube.com/embed/cKJvvfGj3XI?si=aNigYWqR4DEI-19H"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
       <div className="my-5 h-px bg-linear-to-r from-transparent via-red-800 to-transparent"></div>
    </section>
  );
}
