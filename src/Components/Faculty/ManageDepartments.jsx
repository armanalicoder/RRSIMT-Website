"use client";

import { useState } from "react";
import { toast } from "react-toastify";
import AddNewDepartments from "./AddNewDepartments";
import Loader from "../Loader";

export default function ManageDepartments({ departments }) {
  const [isnewDepartmentModelOpen, setIsNewDepartmentOpen] = useState(false);

  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const recordsPerPage = 5;

  const handleDeleteDepartment = async (id) => {
    let confirms = confirm("All Faculties who belongs to this department will also be deleted automatically want to continue ?");
    if (confirms) {
      try {
        setLoading(true);
        const res = await fetch(`/api/department/delete/${id}`, {
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

  const filteredDepartments = departments.filter((d) =>
    `${d.name} ${d.code} ${d.course}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const currentRecords = filteredDepartments.slice(firstIndex, lastIndex);

  const totalPages = Math.ceil(filteredDepartments.length / recordsPerPage);

  return (
    <div className="bg-white p-6 rounded shadow">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-red-800">
          Manage Departments
        </h2>

        <button
          onClick={() => setIsNewDepartmentOpen(true)}
          className="cursor-pointer bg-green-700 text-white p-2 rounded-md"
        >
          Add New Department
        </button>
      </div>

      <input
        type="text"
        placeholder="Search by department name, code or course..."
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
            <th className="border p-2">Code</th>
            <th className="border p-2">Course</th>
            <th className="border p-2">Action</th>
          </tr>
        </thead>

        <tbody>
          {currentRecords.map((a) => (
            <tr key={a._id} className="text-center">
              <td className="border p-2">{a.name}</td>
              <td className="border p-2">{a.code}</td>
              <td className="border p-2">{a.course}</td>
              <td className="border p-2">
                <button
                  disabled={loading}
                  onClick={() => handleDeleteDepartment(a._id)}
                  className="bg-red-500 text-white px-3 py-1 rounded-md cursor-pointer"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {filteredDepartments.length === 0 && (
        <p className="text-center mt-3">No Departments Found.</p>
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

      {isnewDepartmentModelOpen && (
        <AddNewDepartments onClose={() => setIsNewDepartmentOpen(false)} />
      )}
    </div>
  );
}
