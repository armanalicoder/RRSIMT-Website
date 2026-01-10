export default function DashboardCards({ faculty }) {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <div className="bg-white rounded-lg shadow p-5 border-l-4 border-red-700">
          <h3 className="text-sm text-gray-500">
            {faculty?.role == "director" ? "Designation" : "Department"}
          </h3>
          <p className="text-2xl font-bold text-red-800 mt-2">
            {faculty?.role == "director"
              ? faculty?.role
              : faculty?.department?.name}
          </p>
        </div>
        <div className="bg-white rounded-lg shadow p-5 border-l-4 border-red-700">
          <h3 className="text-sm text-gray-500">Total Circular</h3>
          <p className="text-3xl font-bold text-red-800 mt-2">
            {faculty?.totalCircular}
          </p>
        </div>
        <div className="bg-white rounded-lg shadow p-5 border-l-4 border-red-700">
          <h3 className="text-sm text-gray-500">Admission Request</h3>
          <p className="text-3xl font-bold text-red-800 mt-2">
            {faculty?.admission_count}
          </p>
        </div>
        {faculty?.role == "director" && (
          <div className="bg-white rounded-lg shadow p-5 border-l-4 border-red-700">
            <h3 className="text-sm text-gray-500">Total Faculties</h3>
            <p className="text-3xl font-bold text-red-800 mt-2">
              {faculty?.total_faculties}
            </p>
          </div>
        )}
      </div>
    </>
  );
}
