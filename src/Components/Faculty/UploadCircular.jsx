"use client";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Circulars from "../Circulars/Circular";
import Loader from "../Loader";

export default function UploadCircular({ circulars }) {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    department: "",
    title: "",
    pdf: null,
  });

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    if (!formData.pdf) {
      toast.error("Please upload PDF");
      return;
    }

    const data = new FormData();
    data.append("title", formData.title);
    data.append("department", formData.department);
    data.append("pdf", formData.pdf);
    try {
      const res = await fetch("/api/faculty/circular/upload", {
        method: "POST",
        body: data,
      });

      const result = await res.json();

      if (result.success) {
        toast.success("Circular uploaded successfully");
        setFormData({
          title: "",
          description: "",
          department: "",
          pdf: null,
        });
      } else {
        toast.error(result.message);
      }
    } catch (err) {
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-xl font-semibold text-red-800 mb-4">
          Upload Circular
        </h2>
        {loading && (
          <div className="flex justify-center my-2">
            <Loader />
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <select
            required
            className="w-full border p-2 rounded"
            value={formData.department}
            onChange={(e) =>
              setFormData({ ...formData, department: e.target.value })
            }
          >
            <option value="">Select Department</option>
            <option value="Examination">Examination</option>
            <option value="Ragistrar Office">Registrar Office</option>
            <option value="Training & Placement">Training & Placement</option>
          </select>

          <input
            type="text"
            required
            placeholder="Circular Title"
            className="w-full border p-2 rounded"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
          />

          <input
            type="file"
            accept="application/pdf"
            required
            onChange={(e) =>
              setFormData({ ...formData, pdf: e.target.files[0] })
            }
          />

          <button
          disabled={loading}
            type="submit"
            className="cursor-pointer bg-red-800 text-white px-6 py-2 rounded hover:bg-red-700"
          >
            Upload Circular
          </button>
        </form>
      </div>
      <div>
        <Circulars circulars={circulars} />
      </div>
    </>
  );
}
