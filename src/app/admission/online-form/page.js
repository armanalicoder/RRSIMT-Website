import AdmissionForm from "@/Components/Admission/AdmissionForm";
import Link from "next/link";

export const metadata = {
  title:
    "Online Admission Form - Rajarshi Rananjay Sinh Institute of Management & Technology, Amethi",
  description:
    "Rajarshi Rananjay Sinh Institute of Management & Technology (RRSIMT) is set-up in Amethi, Uttar Pradesh. This is a private college which was established in the year 2008. It is affiliated to Dr A.P.J Abdul Kalam Technical University (AKTU), Lucknow and approved by AICTE. ",
  keywords: ["rrsimtcollege", "rrsimtamethi", "rrsimtaktu", "rrsimtmunshiganj"],
  authors: [{ name: "Arman Ali" }],
};

export default function OnlineForm(){
    return(
        <section>

            <div>
           <div className="relative h-50 w-full bg-[url('/rrsimtimg1.jpg')] bg-cover bg-center flex items-center justify-center">
             <div className="absolute inset-0 bg-black/60"></div>
             <div className="relative z-10 text-center text-white space-y-3">
               <h2 className="text-3xl md:text-4xl font-semibold">Admission Form</h2>
               <nav className="text-sm flex justify-center gap-2">
                 <Link href="/" className="hover:underline">
                   Home
                 </Link>
                 <span>/</span>
                 <Link href={'/admission'} className="hover:underline text-gray-300">Admission</Link>
                 <span> /</span>
                 <span> Admission Form</span>
               </nav>
             </div>
           </div>
         </div>
           <AdmissionForm/>
        </section>
    )
}