import FacultyHomepage from "@/Components/Faculty/FacultyHomepage";
import connectToDB from "@/lib/dbConnect";
import admissionModel from "@/models/admissionModel";
import circularModel from "@/models/circularModel";
import "@/models/departmentModel";
import departmentModel from "@/models/departmentModel";
import facultyModel from "@/models/facultyModel";

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
const fetchAllFaculties = async () => {
  await connectToDB();
  const facultiesData = await facultyModel
    .find({})
    .populate("department", "name _id");
  return JSON.parse(JSON.stringify(facultiesData));
};
const fecthAllDepartments = async () => {
  await connectToDB();
  const data = await departmentModel.find({});
  return JSON.parse(JSON.stringify(data));
};
export default async function DirectorDashboard() {
  const data = await fetchAllCircular();
  const admissions = await fetchAllAdmission();
  const facultData = await fetchAllFaculties();
  const departements = await fecthAllDepartments();
  return (
    <FacultyHomepage
      circulars={data}
      admissions={admissions}
      faculties={facultData}
      departments={departements}
    />
  );
}
