import connectToDB from "@/lib/dbConnect";
import departmentModel from "@/models/departmentModel";
import facultyModel from "@/models/facultyModel";
import Image from "next/image";
import Link from "next/link";

async function getDepartmentData(slug) {
  await connectToDB();

  const department = await departmentModel.findOne({ slug: slug });
  if (!department) return null;

  const faculties = await facultyModel.find({
    department: department._id,
  });

  return {
    department: JSON.parse(JSON.stringify(department)),
    faculties: JSON.parse(JSON.stringify(faculties)),
  };
}

export default async function DepartmentPage({ params }) {
  const { slug } = await params;
  const data = await getDepartmentData(slug);

  if (!data) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold">Department Not Found</h2>
        <Link href="/departments" className="text-red-800 underline">
          Go Back
        </Link>
      </div>
    );
  }

  const { department, faculties } = data;

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <nav className="text-sm mb-4">
        <Link href="/" className="text-red-800 hover:underline">
          Home
        </Link>{" "}
        /{" "}
        <Link href="/departments" className="text-red-800 hover:underline">
          Departments
        </Link>{" "}
        / <span className="text-gray-600">{department.name}</span>
      </nav>

      <div className="bg-white border rounded-lg p-6 mb-10">
        <h1 className="text-2xl md:text-3xl font-bold text-red-800 mb-2">
          {department.name}
        </h1>
        <p className="text-gray-700 mb-2">
          <strong>Course:</strong> {department.course}
        </p>
        <p className="text-gray-600">{department.description}</p>
      </div>

      <div>
        <h2 className="text-xl md:text-2xl font-semibold mb-6">
          Faculty Members
        </h2>

        {faculties.length === 0 ? (
          <p className="text-gray-600">
            No faculty members assigned to this department yet.
          </p>
        ) : (
          <div className="flex ">
            {faculties.map((faculty) => (
              <div
                key={faculty._id}
                className="shadow p-3 text-center rounded-lg g-white hover:shadow-md transition"
              >
                <Image
                  src={"/ajaycs.jpeg"}
                  width={200}
                  height={200}
                  className="rounded-full"
                  alt="factulty_image"
                />
                <h3 className="text-lg font-semibold text-red-800">
                  {faculty.name}
                </h3>
                <p className="text-sm text-gray-700">{faculty.designation}</p>
                <p className="text-sm text-gray-500">{faculty.email}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
