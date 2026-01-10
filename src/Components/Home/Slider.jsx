import connectToDB from "@/lib/dbConnect";
import circularModel from "@/models/circularModel";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";
const fetchAllCircular = async () => {
  await connectToDB();
  const circulars = await circularModel.find({});
  return JSON.parse(JSON.stringify(circulars));
};
export default async function Slider() {
  const circulars = await fetchAllCircular();
  return (
    <>
      <section>
        <div className="md:flex item-center">
          <div className="hidden md:block bg-[url('/rrsimtimg2.jpg')] h-110 md:h-100 md:w-[70%] bg-cover bg-no-repeat bg-center"></div>
          <div className="md:w-[30%]">
            <h2 className="text-white p-2 bg-[#ffa500] font-mono text-xl text-center">
              Important Notices
            </h2>
            <div className="p-3">
              <marquee direction="up">
                <ul className="md:flex md:flex-col gap-3 text-sm">
                  {circulars.map((circular,index) => {
                    return <li key={index}>📢 {circular.title}</li>;
                  })}
                </ul>
              </marquee>
            </div>
            <div className="flex mt-40 mb-5 justify-center">
              <Link
                className="bg-red-800 text-white py-1 px-2 rounded-md"
                href={"/circulars"}
              >
                View All <FaAngleRight className="inline mb-1"/>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
