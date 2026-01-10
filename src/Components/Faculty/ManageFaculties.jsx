"use client";

import { useState } from "react";
import { toast } from "react-toastify";
import FacultyViewModal from "./FacultyViewModal";
import AddNewFaculties from "./AddNewFaculties";
import Loader from "../Loader";
import { CiUser } from "react-icons/ci";

export default function ManageFaculties({ faculties }) {
  const [selectedFaculty, setSelectedFaculty] = useState(null);
  const [isnewFacultyModelOpen, setIsNewFacultyOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const recordsPerPage = 5;

  const handleDeleteFaculty = async (id) => {
    let confirms = confirm("Are you sure want to delete this faculty ?");
    if (confirms) {
      try {
        setLoading(true);
        const res = await fetch(`/api/faculty/delete/${id}`, {
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
    } else {
      toast.error("Action Aborted");
    }
  };

  const filteredFaculties = faculties
    .filter((f) => f.role !== "director")
    .filter((f) =>
      `${f.name} ${f.email} ${f?.department?.name} ${f.role}`
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const currentRecords = filteredFaculties.slice(firstIndex, lastIndex);

  const totalPages = Math.ceil(filteredFaculties.length / recordsPerPage);

  return (
    <div className="bg-white p-6 rounded shadow">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-red-800">Manage Faculties</h2>

        <button
          onClick={() => setIsNewFacultyOpen(true)}
          className="cursor-pointer bg-green-700 text-white p-2 rounded-md"
        >
          <CiUser className="inline mb-1"/> Add New Faculty
        </button>
      </div>

      <input
        type="text"
        placeholder="Search by name, email, department or role..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setCurrentPage(1);
        }}
        className="border p-2 mb-4 rounded"
      />
      {loading && (
        <div className="flex justify-center my-2">
          <Loader />
        </div>
      )}
      <table className="w-full border text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-2">Name</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Department</th>
            <th className="border p-2">Role</th>
            <th className="border p-2">Action</th>
          </tr>
        </thead>

        <tbody>
          {currentRecords.map((a) => (
            <tr key={a._id} className="text-center">
              <td className="border p-2">{a.name}</td>
              <td className="border p-2">{a.email}</td>
              <td className="border p-2">{a?.department?.name}</td>
              <td className="border p-2">{a.role}</td>
              <td className="border p-2">
                <button
                  onClick={() => setSelectedFaculty(a)}
                  className="bg-green-600 text-white px-3 py-1 rounded-md cursor-pointer"
                >
                  View
                </button>
                <button
                  onClick={() => handleDeleteFaculty(a._id)}
                  className="ms-3 bg-red-500 text-white px-3 py-1 rounded-md cursor-pointer"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {filteredFaculties.length === 0 && (
        <p className="text-center mt-3">No Faculties Found.</p>
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

      {isnewFacultyModelOpen && (
        <AddNewFaculties onClose={() => setIsNewFacultyOpen(false)} />
      )}

      {selectedFaculty && (
        <FacultyViewModal
          faculty={selectedFaculty}
          onClose={() => setSelectedFaculty(null)}
        />
      )}
    </div>
  );
}
