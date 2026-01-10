export default function StudentModal({ student, onClose }) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-lg rounded shadow p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-xl font-bold text-gray-600"
        >
          ✕
        </button>
        <h3 className="text-xl font-semibold confirm text-red-800 mb-4">
          Student Details
        </h3>

        <div className="space-y-3 text-sm">
          <p>
            <strong>Name:</strong> {student.studentName}
          </p>
          <p>
            <strong>Father Name:</strong> {student.fatherName}
          </p>
          <p>
            <strong>Course:</strong> {student.course}
          </p>
          <p>
            <strong>Department :</strong> {student?.department?.name}
          </p>
          <p>
            <strong>Mobile:</strong> {student.mobile}
          </p>
          <p>
            <strong>Email:</strong> {student.email}
          </p>
          <p>
            <strong>Category:</strong> {student.category}
          </p>
          <p>
            <strong>Roll No:</strong>{" "}
            {student.rollNo == "" ? "N/A" : student.rollNo}
          </p>
          <p>
            <strong>Rank:</strong> {student.rank=="" ? "N/A" : student.rank}
          </p>
          <p>
            <strong>Gender:</strong> {student.gender}
          </p>
          <p>
            <strong>Address:</strong> {student.address}
          </p>
        </div>

        <div className="mt-6 text-right">
          <button
            onClick={onClose}
            className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
