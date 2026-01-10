import Link from "next/link";

export const metadata = {
  title:
    "Admissions - Rajarshi Rananjay Sinh Institute of Management & Technology, Amethi",
  description:
    "Rajarshi Rananjay Sinh Institute of Management & Technology (RRSIMT) is set-up in Amethi, Uttar Pradesh. This is a private college which was established in the year 2008. It is affiliated to Dr A.P.J Abdul Kalam Technical University (AKTU), Lucknow and approved by AICTE. ",
  keywords: ["rrsimtcollege", "rrsimtamethi", "rrsimtaktu", "rrsimtmunshiganj"],
  authors: [{ name: "Arman Ali" }],
};

export default function AdmissionDetails() {
  return (
    <>
    <div>
        <div className="relative h-50 w-full bg-[url('/rrsimtimg1.jpg')] bg-cover bg-center flex items-center justify-center">
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="relative z-10 text-center text-white space-y-3">
            <h2 className="text-3xl md:text-4xl font-semibold">Admission</h2>
            <nav className="text-sm flex justify-center gap-2">
              <Link href="/" className="hover:underline">
                Home
              </Link>
              <span>/</span>
              <span className="text-gray-300">Admission</span>
            </nav>
          </div>
        </div>
      </div>
    <section className="max-w-7xl mx-auto px-4 py-10">

      <div className="mb-8 text-center">
        <h1 className="text-3xl md:text-4xl font-bold">
          Admission <span className="text-red-800">Details</span>
        </h1>
        <p className="text-gray-600 mt-2">
          Courses, eligibility criteria and fee structure
        </p>
      </div>

      <div className="border rounded-lg p-6 mb-10 bg-white">
        <h2 className="text-2xl font-semibold text-red-800 mb-4">
          B.Tech (Bachelor of Technology)
        </h2>

        <p className="mb-3"><strong>Duration:</strong> 4 Years (Full Time)</p>

        <p className="mb-4 text-justify">
          Admission to the first year of B.Tech is open to candidates who have
          passed the Intermediate (10+2) examination with Physics and
          Mathematics as compulsory subjects from a recognized board/university.
          Admission is done through JEE / AKTU counseling as per university
          norms.
        </p>

        <p className="mb-6">
          <strong>Lateral Entry:</strong> Diploma holders in Engineering are
          eligible for direct admission to second year B.Tech as per AKTU rules.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full border text-sm">
            <thead className="bg-red-800 text-white">
              <tr>
                <th className="border px-3 py-2">Year</th>
                <th className="border px-3 py-2">Tuition Fee (₹)</th>
                <th className="border px-3 py-2">1st Installment (₹)</th>
                <th className="border px-3 py-2">2nd Installment (₹)</th>
              </tr>
            </thead>
            <tbody>
              {["First", "Second", "Third", "Fourth"].map((year, i) => (
                <tr key={i} className="text-center">
                  <td className="border px-3 py-2">{year}</td>
                  <td className="border px-3 py-2">55,000</td>
                  <td className="border px-3 py-2">27,500</td>
                  <td className="border px-3 py-2">27,500</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-xs text-gray-500 mt-3">
          * Examination fee, security money, hostel & transportation fee are
          extra as per institute / AKTU norms.
        </p>
      </div>

      <div className="border rounded-lg p-6 bg-white">
        <h2 className="text-2xl font-semibold text-red-800 mb-4">
          MBA (Master of Business Administration)
        </h2>

        <p className="mb-3"><strong>Duration:</strong> 2 Years (Full Time)</p>

        <p className="mb-6 text-justify">
          Admission to MBA is open to candidates who have completed a bachelor’s
          degree of minimum three years duration from a recognized university.
          Admission is done as per AKTU norms.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border text-sm">
            <thead className="bg-red-800 text-white">
              <tr>
                <th className="border px-3 py-2">Year</th>
                <th className="border px-3 py-2">Tuition Fee (₹)</th>
                <th className="border px-3 py-2">1st Installment (₹)</th>
                <th className="border px-3 py-2">2nd Installment (₹)</th>
              </tr>
            </thead>
            <tbody>
              {["First", "Second"].map((year, i) => (
                <tr key={i} className="text-center">
                  <td className="border px-3 py-2">{year}</td>
                  <td className="border px-3 py-2">59,700</td>
                  <td className="border px-3 py-2">29,850</td>
                  <td className="border px-3 py-2">29,850</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-xs text-gray-500 mt-3">
          * Examination fee, security money, hostel & transportation fee are
          extra as per institute / AKTU norms.
        </p>
      </div>

      <div className="text-center mt-10">
        <Link
          href="/admission/online-form"
          className="inline-block bg-red-800 text-white px-6 py-3 rounded hover:bg-red-700 transition"
        >
          Fill Online Admission Form
        </Link>
      </div>

    </section>
    </>
  );
}
