import Departments from "@/Components/Departments/Departments";
import connectToDB from "@/lib/dbConnect";
import departmentModel from "@/models/departmentModel";
import Link from "next/link";

export const metadata = {
  title:
    "Our Departments - Rajarshi Rananjay Sinh Institute of Management & Technology, Amethi",
  description:
    "Rajarshi Rananjay Sinh Institute of Management & Technology (RRSIMT) is set-up in Amethi, Uttar Pradesh. This is a private college which was established in the year 2008. It is affiliated to Dr A.P.J Abdul Kalam Technical University (AKTU), Lucknow and approved by AICTE. ",
  keywords: ["rrsimtcollege", "rrsimtamethi", "rrsimtaktu", "rrsimtdepartments"],
  authors: [{ name: "Arman Ali" }],
};

const fetchAllDepartment = async()=>{
  await connectToDB();
  const data = await departmentModel.find({});
  return JSON.parse(JSON.stringify(data));
}
export default async function departments() {
  const departments = await fetchAllDepartment();
  return (
    <section>
      <div>
        <div className="relative h-50 w-full bg-[url('/rrsimtimg1.jpg')] bg-cover bg-center flex items-center justify-center">
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="relative z-10 text-center text-white space-y-3">
            <h2 className="text-3xl md:text-4xl font-semibold">Departments</h2>
            <nav className="text-sm flex justify-center gap-2">
              <Link href="/" className="hover:underline">
                Home
              </Link>
              <span>/</span>
              <span className="text-gray-300">Departments</span>
            </nav>
          </div>
        </div>
      </div>
      <Departments departments={departments}/>
    </section>
  );
}
