import ContactForm from "@/Components/Contact/ContactForm";

export const metadata = {
  title:
    "Contact Us - Rajarshi Rananjay Sinh Institute of Management & Technology, Amethi",
  description:
    "Rajarshi Rananjay Sinh Institute of Management & Technology (RRSIMT) is set-up in Amethi, Uttar Pradesh. This is a private college which was established in the year 2008. It is affiliated to Dr A.P.J Abdul Kalam Technical University (AKTU), Lucknow and approved by AICTE. ",
  keywords: ["rrsimtcollege", "rrsimtamethi", "rrsimtaktu", "rrsimtmunshiganj"],
  authors: [{ name: "Arman Ali" }],
};

export default function Contact() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10">

      <div className="mb-8">
        <h1 className="text-3xl font-semibold border-b-2 border-red-800 inline-block pb-1">
          Contact Us
        </h1>
      </div>
      <div className="bg-white border rounded-lg p-6 mb-8">
        <h2 className="text-lg font-semibold mb-3">
          Rajarshi Rananjay Singh Institute of Management & Technology
        </h2>
        <p className="text-gray-700">
          Campus: Munshiganj, District Amethi – 227405, Uttar Pradesh, India
        </p>
        <p className="mt-2">
          <strong>Contact No:</strong> 05368-256200
        </p>

        <p className="mt-3 text-red-800 font-semibold">
          For Admission Enquiry:
        </p>
        <p className="text-gray-700">
          +91 80815 28232 | +91 9648333660 | +91 9956180598
        </p>
      </div>

      <div className="mb-10">
        <h2 className="text-xl font-semibold mb-4">
          Important Contact Numbers
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full border text-sm">
            <thead className="bg-yellow-300">
              <tr>
                <th className="border px-3 py-2">S. No.</th>
                <th className="border px-3 py-2">Name</th>
                <th className="border px-3 py-2">Designation</th>
                <th className="border px-3 py-2">E-mail</th>
                <th className="border px-3 py-2">Contact No.</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-center">
                <td className="border px-3 py-2">1</td>
                <td className="border px-3 py-2">Mrs. Kirti Jain</td>
                <td className="border px-3 py-2">TPO</td>
                <td className="border px-3 py-2">placement@rrsimt.ac.in</td>
                <td className="border px-3 py-2">9140046095</td>
              </tr>
              <tr className="text-center">
                <td className="border px-3 py-2">2</td>
                <td className="border px-3 py-2">Mrs. Renu Maurya</td>
                <td className="border px-3 py-2">Registrar</td>
                <td className="border px-3 py-2">registrar@rrsimt.ac.in</td>
                <td className="border px-3 py-2">9648333660</td>
              </tr>
              <tr className="text-center">
                <td className="border px-3 py-2">3</td>
                <td className="border px-3 py-2">Dr. Ashish Kumar Tripathi</td>
                <td className="border px-3 py-2">Library Incharge</td>
                <td className="border px-3 py-2">library@rrsimt.ac.in</td>
                <td className="border px-3 py-2">9554020945</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="mb-10">
        <h2 className="text-xl font-semibold mb-4">
          For Admission Enquiry
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full border text-sm">
            <thead className="bg-yellow-300">
              <tr>
                <th className="border px-3 py-2">S. No.</th>
                <th className="border px-3 py-2">Name</th>
                <th className="border px-3 py-2">Designation</th>
                <th className="border px-3 py-2">E-mail</th>
                <th className="border px-3 py-2">Contact No.</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-center">
                <td className="border px-3 py-2">1</td>
                <td className="border px-3 py-2">Mr. Raj Kumar Pal</td>
                <td className="border px-3 py-2">Admission Incharge</td>
                <td className="border px-3 py-2">admission@rrsimt.ac.in</td>
                <td className="border px-3 py-2">8081528232</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

        <h2 className="text-xl font-semibold mb-4">
          How to Reach RRSIMT
        </h2>
      <div className="md:flex mb-10">

        <div className="w-full h-[350px] border mb-5 md:mb-0">
          <iframe
            src="https://www.google.com/maps?q=RRSIMT%20Amethi&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      <ContactForm/>
      </div>
    </section>
  );
}
