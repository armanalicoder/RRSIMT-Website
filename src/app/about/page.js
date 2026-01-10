import ChairmanMessage from "@/Components/Home/ChairmanMessage";
import DirectorMessage from "@/Components/Home/DirectorMessage";
import AboutPage from "@/Components/Home/About";
import Link from "next/link";
import AboutRajarshi from "@/Components/About/AboutRajarshi";
import Infrastructure from "@/Components/About/Infrastructure";
import connectToDB from "@/lib/dbConnect";

export const metadata = {
  title:
    "About - Rajarshi Rananjay Sinh Institute of Management & Technology, Amethi",
  description:
    "Rajarshi Rananjay Sinh Institute of Management & Technology (RRSIMT) is set-up in Amethi, Uttar Pradesh. This is a private college which was established in the year 2008. It is affiliated to Dr A.P.J Abdul Kalam Technical University (AKTU), Lucknow and approved by AICTE. ",
  keywords: ["rrsimtcollege", "rrsimtamethi", "rrsimtaktu", "rrsimtmunshiganj"],
  authors: [{ name: "Arman Ali" }],
};

export default async function About() {
  // await connectToDB();
  // await facultyModel.create({
  //   name: "Arman Ali",
  //   email: "director@gmail.com",
  //   password: "arman",
  //   designation: "Director",
  //   department :"694a83ceec4cd99b3fe61480",
  // });
  // console.log("Saved successfully");
  return (
    <section>
      <div>
        <div className="relative h-50 w-full bg-[url('/rrsimtimg1.jpg')] bg-cover bg-center flex items-center justify-center">
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="relative z-10 text-center text-white space-y-3">
            <h2 className="text-3xl md:text-4xl font-semibold">About RRSIMT</h2>
            <nav className="text-sm flex justify-center gap-2">
              <Link href="/" className="hover:underline">
                Home
              </Link>
              <span>/</span>
              <span className="text-gray-300">About RRSIMT</span>
            </nav>
          </div>
        </div>
      </div>
      <div>
        <AboutRajarshi />
        <AboutPage />
        <ChairmanMessage />
        <DirectorMessage />
        <Infrastructure />
      </div>
    </section>
  );
}
