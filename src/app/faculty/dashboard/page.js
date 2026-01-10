export const dynamic = "force-dynamic";
import FacultyHomepage from "@/Components/Faculty/FacultyHomepage";
import connectToDB from "@/lib/dbConnect";
import admissionModel from "@/models/admissionModel";
import circularModel from "@/models/circularModel";
import "@/models/departmentModel";

export const metadata = {
  title: "Welcome to RRSIMT Dashboard",
  robots: {
    index: false, // noindex
    follow: false, // nofollow
  },
};

const fetchAllCircular = async () => {
  await connectToDB();
  const circulars = await circularModel.find({});
  return JSON.parse(JSON.stringify(circulars));
};
const fetchAllAdmission = async () => {
  await connectToDB();
  const data = await admissionModel
    .find({})
    .populate("department", "name -_id");
  return JSON.parse(JSON.stringify(data));
};
export default async function FacultyDashboard() {
  const data = await fetchAllCircular();
  const admissions = await fetchAllAdmission();
  return (
    <FacultyHomepage
      circulars={data}
      admissions={admissions}
    />
  );
}
