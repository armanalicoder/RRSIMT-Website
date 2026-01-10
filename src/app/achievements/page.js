import Link from "next/link";
export const metadata = {
  title:
    "Our Achievements - Rajarshi Rananjay Sinh Institute of Management & Technology, Amethi",
  description:
    "Rajarshi Rananjay Sinh Institute of Management & Technology (RRSIMT) is set-up in Amethi, Uttar Pradesh. This is a private college which was established in the year 2008. It is affiliated to Dr A.P.J Abdul Kalam Technical University (AKTU), Lucknow and approved by AICTE. ",
  keywords: ["rrsimtcollege", "rrsimtamethi", "rrsimtaktu", "rrsimtmunshiganj"],
  authors: [{ name: "Arman Ali" }],
};

export default function Achievements() {
  const achievements = [
    "Record number of 11 awards received by the institute at Indo-American Education Summit (2016–2017).",
    "Emerged as an Institute of Engineering Excellence in Uttar Pradesh.",
    "Developed people-oriented websites and Android applications.",
    "Prolific output of national and international research technical and management papers.",
    "Better academic results enabled by highly qualified faculty.",
    "Proven excellent infrastructure, also leveraged by reputed IT companies.",
    "Developed market-oriented projects such as AC Helmet, Farmer Drone, Robotics projects, etc.",
    "Leveraging government and private sector contacts for student benefit and placement.",
    "360-degree development of students.",
    "Leadership development skills among students.",
    "Superior IT-savvy faculty and staff.",
    "Pan-India outlook-based exposure and orientation of students.",
    "TCS iON Centre of Eastern Uttar Pradesh.",
    "Selected as Centre for Skilling under PMKVY Scheme.",
    "Continuous nurturing of partnerships with reputed companies and industry.",
    "Selected in All India Smart India Hackathon & Peace-a-thon competitions.",
    "Won second prize for innovative product AC Helmet among 700 participants in UP (2017).",
    "Student participation in national-level competitions at Delhi, Chandigarh, Kolkata, Lucknow & Kanpur.",
    "Best-in-class industrial exposure for students.",
    "Record number of 55 projects demonstrated by students on Engineers’ Day.",
    "Special classes and workshops on AutoCAD, SolidWorks, Python, Android App Development, Robotics & Drones."
  ];

  return (
    <>
    <div>
        <div className="relative h-50 w-full bg-[url('/rrsimtimg1.jpg')] bg-cover bg-center flex items-center justify-center">
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="relative z-10 text-center text-white space-y-3">
            <h2 className="text-3xl md:text-4xl font-semibold">Achievements</h2>
            <nav className="text-sm flex justify-center gap-2">
              <Link href="/" className="hover:underline">
                Home
              </Link>
              <span>/</span>
              <span className="text-gray-300">Achievements</span>
            </nav>
          </div>
        </div>
      </div>
    <section className="max-w-6xl mx-auto px-4 py-10">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold">
          RRSIMT <span className="text-red-800">Achievements</span>
        </h1>
        <p className="mt-2 text-sm text-gray-600 font-medium">
          Our achievements reflect our commitment to excellence and innovation
        </p>
      </div>

      <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 mb-8 text-center font-semibold">
        RRSIMT has vast depth of achievements to its credit.  
        The ambition doesn’t stop at any point of time.
      </div>

      <div className="grid md:grid-cols-2 gap-4 space-y-3">
        {achievements.map((item, index) => (
          <div
            key={index}
            className="flex gap-4 bg-white border rounded-md p-4 hover:shadow transition"
          >
            <span className="text-red-800 font-bold">
              {index + 1}.
            </span>
            <p className="text-gray-700 text-justify leading-relaxed">
              {item}
            </p>
          </div>
        ))}
      </div>

    </section>
    </>
  );
}
