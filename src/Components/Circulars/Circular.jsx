"use client";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Loader from "../Loader";

export default function Circulars({ circulars }) {
  const [search, setSearch] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  // sort latest circular first
  const sortedCirculars = [...circulars].sort(
    (a, b) => new Date(b.createdAt || b.date) - new Date(a.createdAt || a.date)
  );

  const filtered = sortedCirculars.filter((c) =>
    c.title.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = filtered.slice(startIndex, startIndex + itemsPerPage);

  const handleDeleteCircular = async (id) => {
    let confirms = confirm("Are you sure want to delete this circular?");
    if (confirms) {
      try {
        setLoading(true);
        const res = await fetch(`/api/faculty/circular/delete/${id}`, {
          method: "DELETE",
        });
        const data = await res.json();
        if (data.success) {
          toast.success(data.message);
          window.location.reload();
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

  useEffect(() => {
    fetch("/api/auth/me")
      .then((res) => res.json())
      .then((data) => {
        if (data.loggedIn) {
          setLoggedIn(true);
          setRole(data?.user?.role);
        }
      });
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-semibold mb-6 border-b-2 border-red-800 inline-block pb-1">
        All Circulars
      </h1>
      {loading && (
        <div className="flex justify-center my-2">
          <Loader />
        </div>
      )}
      <div className="flex justify-between items-center mb-3">
        <div className="text-sm">
          Show
          <select
            className="border mx-2 p-1"
            value={itemsPerPage}
            onChange={(e) => {
              setItemsPerPage(Number(e.target.value));
              setCurrentPage(1);
            }}
          >
            <option value={10}>10</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
          </select>
          entries
        </div>

        <div>
          Search:{" "}
          <input
            type="text"
            className="border p-1"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(1);
            }}
          />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border text-sm">
          <thead className="bg-gray-200">
            <tr>
              <th className="border px-2 py-2">S. No.</th>
              <th className="border px-2 py-2">Department</th>
              <th className="border px-2 py-2">Title</th>
              <th className="border px-2 py-2">Date</th>
              <th className="border px-2 py-2">View</th>
              {loggedIn && (role === "director" || role === "faculty") && (
                <th className="border px-2 py-2">Action</th>
              )}
            </tr>
          </thead>

          <tbody>
            {paginatedData.length === 0 ? (
              <tr>
                <td colSpan="6" className="text-center p-4">
                  No records found
                </td>
              </tr>
            ) : (
              paginatedData.map((item, i) => (
                <tr key={item._id} className="hover:bg-yellow-50">
                  <td className="border px-2 py-2 text-center">
                    {startIndex + i + 1}
                  </td>
                  <td className="border px-2 py-2">{item.department}</td>
                  <td className="border px-2 py-2">{item.title}</td>
                  <td className="border px-2 py-2 text-center">{item.date}</td>
                  <td className="border px-2 py-2 text-center">
                    <a
                      href={item.pdfUrl}
                      target="_blank"
                      className="bg-gray-500 text-white px-3 py-1 rounded"
                    >
                      See
                    </a>
                  </td>
                  {loggedIn && (role === "director" || role === "faculty") && (
                    <td className="border px-2 py-2 text-center">
                      <button
                        disabled={loading}
                        onClick={() => handleDeleteCircular(item._id)}
                        className="cursor-pointer bg-red-500 text-white p-2 rounded-md"
                      >
                        Delete
                      </button>
                    </td>
                  )}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between items-center mt-4">
        <span className="text-sm">
          Showing {startIndex + 1} to{" "}
          {Math.min(startIndex + itemsPerPage, filtered.length)} of{" "}
          {filtered.length} entries
        </span>

        <div className="flex gap-2">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => p - 1)}
            className="border px-3 py-1 rounded disabled:opacity-50"
          >
            Prev
          </button>

          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`border px-3 py-1 rounded ${
                currentPage === i + 1 ? "bg-red-800 text-white" : ""
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((p) => p + 1)}
            className="border px-3 py-1 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
}
