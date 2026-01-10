import Image from "next/image";
import { FaStar } from "react-icons/fa";
export default function Courses() {
  const courses = [
    {
      name: "Bachelor of Technology(B.Tech)",
      duration: "4 Year",
      img: "/rrsimt_btech.jpg",
    },
    {
      name: "Master of Business Administration(MBA)",
      duration: "2 Year",
      img: "/rrsimt_mba.jpg",
    },
  ];
  return (
    <section>
      <div>
        <h1 className="uppercase text-3xl text-center font-bold">
          Our <span className="text-red-800">Courses</span>
        </h1>
      </div>
      <div className="sm:flex justify-around">
        {courses.map((course) => {
          return (
            <div className="p-2 text-center">
              <div className="shadow p-5">
                <div>
                  <Image
                    src={course.img}
                    className="rounded-md"
                    width={500}
                    height={300}
                  />
                </div>
                <div className="my-2">
                  <h3 className="text-red-800 text-xl font-bold">
                    {course.name}
                  </h3>
                  <p><span className="text-orange-400">Duration :</span> {course.duration}</p>
                </div>

                <div className="text-center text-xl text-yellow-400">
                  <FaStar className="inline" />
                  <FaStar className="inline" />
                  <FaStar className="inline" />
                  <FaStar className="inline" />
                  <FaStar className="inline" />
                </div>
                <button className="bg-orange-400 text-white py-1 px-2 flex mx-auto rounded-md mt-2">
                  View Course
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="my-5 h-px bg-linear-to-r from-transparent via-red-800 to-transparent"></div>
    </section>
  );
}
