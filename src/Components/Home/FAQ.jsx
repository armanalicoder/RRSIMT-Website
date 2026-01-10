"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Is RRSIMT affiliated to AKTU?",
    answer:
      "Yes, RRSIMT is affiliated to Dr. A.P.J. Abdul Kalam Technical University (AKTU), Lucknow and approved by AICTE.",
  },
  {
    question: "Which courses are offered by the institute?",
    answer:
      "The institute offers B.Tech, MBA courses in various disciplines.",
  },
  {
    question: "How can I take admission?",
    answer:
      "Admission is done through AKTU counseling as well as direct admission based on eligibility criteria.",
  },
  {
    question: "Is hostel facility available?",
    answer:
      "Yes, separate hostel facilities are available for boys and girls with proper security and amenities.",
  },
  {
    question: "Does the college provide placement support?",
    answer:
      "Yes, the college has a dedicated placement cell that provides training, internships and placement opportunities.",
  },
  {
    question: "What is the Admission Fee structure of RRSIMT Amethi?",
    answer:
      "The Fee structure varies from category to category of students. It is different for General, OBC, SC/ST. The details are available on RRSIMT Website.",
  },
  {
    question: "Whether there is any Scholarship Scheme for meritorious students?",
    answer:
      "Yes",
  },
  {
    question: "I am not able to afford the fees. Is there any Education Loan facility available?",
    answer:
      "The Institute is not having loan facility. However, assistance can be provided with Banks like Union Bank of India, Canara Bank, Bank of Baroda etc for this purpose."
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="max-w-5xl mx-auto px-4 pb-10">

      <h2 className="text-3xl md:text-3xl font-bold text-center mb-8">
        Frequently Asked <span className="text-red-800">Questions</span>
      </h2>


      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border rounded-md bg-white shadow-sm"
          >
    
            <button
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
              className="w-full text-left px-4 py-4 font-semibold flex justify-between items-center"
            >
              <span>{faq.question}</span>
              <span className="text-xl">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>
            {openIndex === index && (
              <div className="px-4 pb-4 text-sm text-gray-700 leading-relaxed">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>

    </section>
  );
}
