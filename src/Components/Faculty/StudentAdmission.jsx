"use client";

import { useState } from "react";
import StudentModal from "./StudentModal";
import { toast } from "react-toastify";
import Loader from "../Loader";

export default function StudentAdmissions({ admissions }) {
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const recordsPerPage = 5;

  const handleDeleteAdmission = async () => {
    let confirms = confirm("Are you sure want to clear all admission ?");
    if (confirms) {
      if(admissions.length!=0){
        try {
          setLoading(true);
          const res = await fetch("/api/faculty/delete-admission", {
            method: "DELETE",
          });
          const data = await res.json();
          if (data.success) {
            toast.success(data.message);
            window.location.reload();
          } else {
            toast.error(data.message);
          }
        } catch (err) {
          toast.error("Something went wrong!");
        } finally {
          setLoading(false);
        }
      }else{
        toast.error("Student Admission already Empty!");
      }
    } else {
      toast.error("Action Aborted");
    }
  };

  const filteredAdmissions = admissions.filter((a) =>
    `${a.studentName} ${a.course} ${a.mobile}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const currentRecords = filteredAdmissions.slice(firstIndex, lastIndex);

  const totalPages = Math.ceil(filteredAdmissions.length / recordsPerPage);

  return (
    <div className="bg-white p-6 rounded shadow">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-red-800">
          Student Admissions
        </h2>

        <button
          disabled={loading}
          onClick={handleDeleteAdmission}
          className="cursor-pointer bg-red-500 text-white p-2 rounded-md"
        >
          Clear All
        </button>
      </div>
      {loading && (
        <div className="flex justify-center my-2">
          <Loader />
        </div>
      )}
      <input
        type="text"
        placeholder="Search by name, course or mobile..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setCurrentPage(1); // reset page on search
        }}
        className="border p-2 mb-4 rounded"
      />

      <table className="w-full border text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-2">Name</th>
            <th className="border p-2">Course</th>
            <th className="border p-2">Mobile</th>
            <th className="border p-2">Action</th>
          </tr>
        </thead>

        <tbody>
          {currentRecords.map((a) => (
            <tr key={a._id} className="text-center">
              <td className="border p-2">{a.studentName}</td>
              <td className="border p-2">{a.course}</td>
              <td className="border p-2">{a.mobile}</td>
              <td className="border p-2">
                <button
                  onClick={() => setSelectedStudent(a)}
                  className="bg-red-800 text-white px-3 py-1 rounded-md cursor-pointer"
                >
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {filteredAdmissions.length === 0 && (
        <p className="text-center mt-3">
          There is no any Admission request found.
        </p>
      )}
      {totalPages > 1 && (
        <div className="flex justify-center gap-2 mt-4">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
            className="px-3 py-1 border rounded disabled:opacity-50"
          >
            Prev
          </button>

          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={`px-3 py-1 border rounded ${
                currentPage === index + 1 ? "bg-red-600 text-white" : ""
              }`}
            >
              {index + 1}
            </button>
          ))}

          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(currentPage + 1)}
            className="px-3 py-1 border rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}

      {selectedStudent && (
        <StudentModal
          student={selectedStudent}
          onClose={() => setSelectedStudent(null)}
        />
      )}
    </div>
  );
}
