import Image from "next/image";
import Link from "next/link";
export default function QuickLink() {
  const leaders = [
    {
      name: "Smt. Anandiben Patel",
      desc: "Hon'ble Governor Uttar Pradesh",
      img: "/governor.jpg",
    },
    {
      name: "Shri Yogi Adityanath",
      desc: "Hon'ble CM of Uttar Pradesh",
      img: "/cm.jpg",
    },
    {
      name: "Shri Ashish Patel",
      desc: "Hon'ble Minister of TE U.P",
      img: "/ashish-patel.jpeg",
    },
    {
      name: "Prof. J. P. Pandey",
      desc: "Vice Chancellor Dr. APJ AKTU",
      img: "/professor.jpg",
    },
    {
      name: "Dr. Sanjay Sinh",
      desc: "Chairaman",
      img: "/chairman.jpg",
    },
    {
      name: "Dr. Shashank Srivastava",
      desc: "Director of RRSIMT",
      img: "/Director.jpg",
    },
  ];
  const links = [
    {
      title: "AKTU ERP",
      img: "/aktuerp.png",
      link: "https://erp.aktu.ac.in/login.aspx",
    },
    {
      title: "AKTU Result",
      img: "/akturesult.png",
      link: "https://oneview.aktu.ac.in/WebPages/AKTU/OneView.aspx",
    },
    {
      title: "Exam Form",
      img: "/aktuexam.png",
      link: "https://exams.aktu.ac.in/StudentLogin.aspx",
    },
    {
      title: "Syllabus",
      img: "/aktusyllabus.png",
      link: "https://aktu.ac.in/syllabus.html",
    },
    {
      title: "Notice",
      img: "/aktucircular.png",
      link: "https://erp.aktu.ac.in/Webpages/Public/Circular/frmCircularForWebsite.aspx",
    },
    {
      title: "Fees Pay",
      img: "/fees_pay.png",
      link: "#",
    },
  ];
  return (
    <section>
      <h1 className="uppercase text-3xl text-center font-bold">
        Quick <span className="text-red-800">Links</span>
      </h1>
      <div className="md:flex justify-around">
        <div className="grid grid-cols-3 p-2 md:h-20 text-center mx-auto gap-3">
          {links.map((item,index) => {
            return (
              <div key={index} className="shadow p-2 hover:shadow-black">
                <Link target="_blank" href={item.link}>
                  <Image
                    src={item.img}
                    className="mx-auto"
                    width={50}
                    height={50}
                    alt="aktu_erp"
                  />
                  <h3 className="font-semibold">{item.title}</h3>
                </Link>
              </div>
            );
          })}
        </div>
        <div className="md:flex flex-wrap justify-center gap-3 md:w-[50%]">
          {leaders.map((leader, index) => {
            return (
              <div
                key={index}
                className="flex justify-center text-center shadow p-2 my-3 gap-2"
              >
                <div>
                  <Image
                    src={leader.img}
                    className="rounded-full"
                    width={50}
                    height={50}
                    alt="rrsimt_leader_image"
                  />
                </div>
                <div>
                  <h2 className="text-red-800 font-semibold">{leader.name}</h2>
                  <p className="text-sm">{leader.desc} </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="my-5 h-px bg-linear-to-r from-transparent via-red-800 to-transparent"></div>
    </section>
  );
}
