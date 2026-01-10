import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title:
    "Our Activities - Rajarshi Rananjay Sinh Institute of Management & Technology, Amethi",
  description:
    "Rajarshi Rananjay Sinh Institute of Management & Technology (RRSIMT) is set-up in Amethi, Uttar Pradesh. This is a private college which was established in the year 2008. It is affiliated to Dr A.P.J Abdul Kalam Technical University (AKTU), Lucknow and approved by AICTE. ",
  keywords: ["rrsimtcollege", "rrsimtamethi", "rrsimtaktu", "rrsimtmunshiganj"],
  authors: [{ name: "Arman Ali" }],
};

export default function Activities() {
  return (
    <>
    <div>
        <div className="relative h-50 w-full bg-[url('/rrsimtimg1.jpg')] bg-cover bg-center flex items-center justify-center">
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="relative z-10 text-center text-white space-y-3">
            <h2 className="text-3xl md:text-4xl font-semibold">Activities</h2>
            <nav className="text-sm flex justify-center gap-2">
              <Link href="/" className="hover:underline">
                Home
              </Link>
              <span>/</span>
              <span className="text-gray-300">Activities</span>
            </nav>
          </div>
        </div>
      </div>
    <section className="max-w-7xl mx-auto px-4 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-semibold">
          <span className="border-b-2 border-red-800 pb-1">
            Activities
          </span>
        </h1>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 mb-12">

        <div className="grid grid-cols-2 gap-3">
          <Image
            src="/Activities/activities_1.jpg"
            alt="Activity"
            width={400}
            height={300}
            className="w-full h-48 object-cover"
          />
          <Image
            src="/Activities/activities_2.jpg"
            alt="Activity"
            width={400}
            height={300}
            className="w-full h-48 object-cover"
          />
          <Image
            src="/Activities/activities_3.jpg"
            alt="Activity"
            width={400}
            height={300}
            className="w-full h-48 object-cover"
          />
          <Image
            src="/Activities/activities_4.jpg"
            alt="Activity"
            width={400}
            height={300}
            className="w-full h-48 object-cover"
          />
        </div>

        <div className="text-gray-700 text-justify space-y-6">

          <div>
            <h2 className="text-lg font-semibold mb-2">
              Summer / AICTE Internship Training
            </h2>
            <p>
              RRSIMT education methodology is totally industry-oriented and
              follows the same phenomenon. The institute has quality tie-ups
              with industries for internships. Students get hands-on exposure
              and incentives during internship training.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">
              Industrial Visits
            </h2>
            <p>
              RRSIMT regularly conducts industrial visits to reputed companies
              so that students gain industry exposure and practical experience
              during their academic journey.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">
              Seminars, Conferences & Workshops
            </h2>
            <p>
              RRSIMT invites industry experts for seminars and conferences.
              Specialized professionals conduct workshops of 3–5 days to
              enhance technical and professional skills of students.
            </p>
          </div>

        </div>
      </div>

      <div className="border-t pt-8">
        <h2 className="text-xl font-semibold mb-3">
          Personality Development Programs
        </h2>
        <p className="text-gray-700 text-justify leading-relaxed">
          RRSIMT has a specialized Personality Development Program (PDP) cell
          including industry professionals devoted to developing skills in
          students. From day one, personality development sessions are
          conducted, and performance charts are prepared to ensure gradual and
          holistic growth of students.
        </p>
      </div>
    </section>
    </>

  );
}
