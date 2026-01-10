import Circulars from "@/Components/Circulars/Circular";
import connectToDB from "@/lib/dbConnect";
import circularModel from "@/models/circularModel";

export const metadata = {
  title:
    "Circulars - Rajarshi Rananjay Sinh Institute of Management & Technology, Amethi",
  description:
    "Rajarshi Rananjay Sinh Institute of Management & Technology (RRSIMT) is set-up in Amethi, Uttar Pradesh. This is a private college which was established in the year 2008. It is affiliated to Dr A.P.J Abdul Kalam Technical University (AKTU), Lucknow and approved by AICTE. ",
  keywords: ["rrsimtcollege", "rrsimtcircular", "rrsimtaktu", "rrsimtmunshiganj"],
  authors: [{ name: "Arman Ali" }],
};

const fetchAllCircular = async () => {
  await connectToDB();
  const circulars = await circularModel.find({});
  return JSON.parse(JSON.stringify(circulars));
};
export default async function AllCirculars(){
    const data = await fetchAllCircular();
    return(
       <Circulars circulars={data}/>
    )
}