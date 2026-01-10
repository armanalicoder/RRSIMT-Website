import Image from "next/image";
export default function AboutRajarshi() {
  return (
    <section>
      <div className="p-2 my-3">
        <h1 className="uppercase text-3xl text-center font-bold">
          About <span className="text-red-800">"Rajarshi Group"</span>
        </h1>

        <div className="lg:flex justify-around">
          <div className="lg:w-[50%]">
            <p className="p-3 text-lg text-justify">
              RRSIMT is part of 'RAJARSHI RANANJAY SINH GROUP OF INSTITUTIONS”
              which was started in the Year 1916 and hence is almost one of the
              oldest educational group in Eastern UP with a rich history of more
              than 97 years.
              <br />
              <br />
              The Late Raja of Amethi, Rajarshi Rananjay Sinh had a grand vision
              to develop constituent of Amethi by improving the educational
              qualification of local people. With this vision Rajarshi Rananjay
              Sinh established first educational Institute in 1916. Rajarshi
              Rananjay Sinh's vision of creating value through knowledge was
              further carried out by his Son Dr.Sanjay Sinh and Daughter-in-law
              Rani Ameeta Sinh.
              <br />
              <br /> Today the society has 10 educational campuses spread over
              60 acres including one Engineering college (Rajarshi Rananjay Sinh
              Institute of Management & Technology) approved by AICTE with
              Affiliation of UPTU ( Code - 383 ).
              <br />
            </p>
            <div className="ps-5">
                <ul className="ps-4 list-disc mx-auto">
                <li>Rajarshi Rananjay Sinh College of Pharmacy, Amethi.</li>
                <li>Rajarshi Rananjay Sinh Global School, Amethi.</li>
                <li>Ranvir Rananjay Post Graduate College, Amethi </li>
                <li>Rani Sushma Devi Girls High School, Munshiganj, Amethi</li>
                <li>Rani Sushma Devi Mahila Mahavidyalaya, Amethi</li>
                <li>
                  Rajarshi Rananjay Vaidik Bal Vidya Mandir, Arya Samaj, Amethi
                </li>
                <li>
                  Rajarshi Rananjay Asaldev Mahavidyalaya,Piparpur, Amethi
                </li>
                <li>
                  Sri Ranvir Inter College,Ram Nagar, Amethi Krishi Vigyan
                  Kendra,Sitapur
                </li>
              </ul>
            </div>
          </div>
          <div className="relative">
            <Image
              className="mx-auto rounded-tl-2xl rounded-br-2xl"
              src={"/aboutrajarshi.gif"}
              width={500}
              height={20}
              alt="rararshi_group_image"
            />
          </div>
        </div>
      </div>
      <div className="my-5 h-px bg-linear-to-r from-transparent via-red-800 to-transparent"></div>
    </section>
  );
}
