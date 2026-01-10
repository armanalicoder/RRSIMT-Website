import Image from "next/image";

export default function DirectorMessage() {
  return (
    <section className="mx-auto px-4 py-10">
      <h1 className="text-3xl md:text-3xl uppercase text-center font-bold mb-6">
        Our <span className="text-red-800">"Director Message"</span>
      </h1>

      <div
        className="bg-red-800 text-white rounded-lg p-5 md:p-8
                      flex flex-col md:flex-row gap-20 items-center"
      >
        <div className="w-full md:w-3/4">
          <p className="text-sm md:text-base leading-relaxed text-justify">
            RRSIMT is well-positioned to capitalize on emerging trends in
            education, equipping students with a critical competitive edge to
            thrive in a challenging global landscape. At RRSIMT, students are
            nurtured into confident individuals, excelling both technically and
            behaviorally.<br/><br/> The Institute continuously invests in equipment,
            infrastructure, and curriculum enhancements to prepare students for
            the demands of a globalized world. By focusing on upskilling,
            cross-skilling, and reskilling, RRSIMT aims to remain future-ready.
            With the synergy of all stakeholders, RRSIMT is committed to
            differentiating itself through intellectual innovation, patents, and
            strategic partnerships. <br/><br/>Students are provided with extensive
            industrial training and internship opportunities. The visionary
            leadership of the Chairman, dedicated faculty, hardworking students,
            and efficient administrative support collectively drive the
            Institute toward excellence and achievement.
          </p>
        </div>
        <div className="text-center">
          <Image
            src="/Director.jpg"
            alt="Chairman"
            width={220}
            height={220}
            className="rounded-full md:rounded-md mx-auto"
          />
          <h3 className="text-lg md:text-xl font-semibold mt-3">
            Dr. Shashank Srivastava
          </h3>
          <p>Director of RRSIMT Amethi</p>
        </div>
      </div>
      <div className="my-5 h-px bg-linear-to-r from-transparent via-red-800 to-transparent"></div>
    </section>
  );
}
