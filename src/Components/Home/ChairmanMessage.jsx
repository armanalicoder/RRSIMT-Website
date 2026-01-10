import Image from "next/image";

export default function ChairmanMessage() {
  return (
    <section className="mx-auto px-4">
      <h1 className="text-3xl md:text-3xl uppercase text-center font-bold mb-6">
        Our <span className="text-red-800">"Chairman Message"</span>
      </h1>

      <div
        className="bg-red-800 text-white rounded-lg p-5 md:p-8
                      flex flex-col md:flex-row gap-6 items-center"
      >
        <div className="text-center">
          <Image
            src="/chairman_image.png"
            alt="Chairman"
            width={220}
            height={220}
            className="rounded-full md:rounded-md mx-auto"
          />
          <h3 className="text-lg md:text-xl font-semibold mt-3">
            Dr. Sanjay Sinh
          </h3>
        </div>

        <div className="w-full md:w-3/4">
          <p className="text-sm md:text-base leading-relaxed text-justify">
            The wind of changes blowing across the Indian subcontinent has
            pointed a bright future for the young generation. The transformation
            from regulation to global market presents a whole new world of
            opportunity.
            <br />
            <br />
            Global development places a premium on well-trained young men and
            women possessing superior professional skills. RRSIMT, Amethi,
            Sultanpur offers career-oriented professional courses designed to
            impart this relevant training to aspiring professionals of our
            country.
            <br />
            <br />
            We invite all those aspirants who are endowed with inquisitive minds
            and strength of purpose to join hands in our efforts to build a new
            cadre of professionals.
          </p>
        </div>
      </div>
      <div className="my-5 h-px bg-linear-to-r from-transparent via-red-800 to-transparent"></div>
    </section>
  );
}
