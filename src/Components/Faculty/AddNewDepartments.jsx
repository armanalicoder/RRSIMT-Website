"use client";

import Image from "next/image";
import { useState } from "react";
import { MdClose } from "react-icons/md";
import { toast } from "react-toastify";
import Loader from "../Loader";

const departmentOptions = {
  BTECH: [
    { label: "Computer Science & Engineering", value: "CSE" },
    { label: "Information Technology", value: "IT" },
    { label: "Mechanical Engineering", value: "ME" },
    { label: "Electrical Engineering", value: "EE" },
    { label: "Electronics & Communication", value: "ECE" },
    { label: "Civil Engineering", value: "CE" },
  ],
  MBA: [
    { label: "MBA – Finance", value: "mba_fin" },
    { label: "MBA – Marketing", value: "mba_mkt" },
    { label: "MBA – Human Resource", value: "mba_hr" },
    { label: "MBA – Operations", value: "mba_ops" },
    { label: "MBA – International Business", value: "mba_ibm" },
  ],
};

export default function AddNewDepartments({ onClose }) {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    code: "",
    slug: "",
    course: "",
  });

  const HandleAddNewDepartment = async () => {
    if (
      formData.name != "" &&
      formData.description != "" &&
      formData.code != "" &&
      formData.slug != "" &&
      formData.course != ""
    ) {
      try {
        setLoading(true);
        const res = await fetch(`/api/department/new`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ data: formData }),
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
      toast.error("All fields required!");
    }
  };
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white max-w-2xl rounded-lg shadow-lg relative">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h3 className="text-lg font-semibold text-red-800">
            Department Details
          </h3>
          <button onClick={onClose}>
            <MdClose size={22} />
          </button>
        </div>

        {/* Body */}
        <h2 className="text-center text-xl font-semibold text-red-800 mb-4">
          Add New Department
        </h2>
        {loading && (
          <div className="flex justify-center my-2">
            <Loader />
          </div>
        )}
        <div className="grid grid-cols-1 gap-3  bg-white p-6 rounded shadow">
          <div className=" flex justify-between gap-3 mb-2">
            <select
              name="course"
              value={formData.course}
              onChange={(e) =>
                setFormData({ ...formData, course: e.target.value })
              }
              className="border p-2 rounded"
              required
            >
              <option value="">Select Course *</option>
              <option value="BTECH">B.Tech</option>
              <option value="MBA">MBA</option>
            </select>

            <select
              name="name"
              value={formData.code}
              onChange={(e) => {
                const selectedCode = e.target.value;

                const selectedDept = departmentOptions[formData.course].find(
                  (d) => d.value === selectedCode
                );

                setFormData({
                  ...formData,
                  code: selectedCode,
                  name: selectedDept.label,
                });
              }}
              className="border p-2 rounded"
              disabled={!formData.course}
              required
            >
              <option value="">Select Branch *</option>
              {departmentOptions[formData.course]?.map((dept) => (
                <option key={dept.value} value={dept.value}>
                  {dept.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label>Code</label>
            <br />
            <input
              type="text"
              className="border p-2 bg-slate-200 rounded focus:outline-none focus:ring-2 focus:ring-red-800"
              readOnly
              name="code"
              value={formData.code}
            />
          </div>
          <div className="mb-2">
            <label className="block text-sm font-medium mb-1">
              Description
            </label>
            <textarea
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              placeholder="Enter Description"
              className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-red-800"
              required
              name="description"
              value={formData.value}
            />
          </div>
          <div className="mb-2">
            <label className="block text-sm font-medium mb-1">Slug</label>
            <input
              onChange={(e) =>
                setFormData({ ...formData, slug: e.target.value })
              }
              type="text"
              placeholder="Ex - computer-science-engineering"
              className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-red-800"
              required
              name="slug"
              value={formData.value}
            />
          </div>
        </div>
        <div className="m-3">
          <button
            onClick={HandleAddNewDepartment}
            type="submit"
            className="w-full cursor-pointer bg-red-800 text-white py-2 rounded font-semibold hover:bg-red-700 transition"
          >
            Add Department
          </button>
        </div>
        {/* Footer */}
        <div className="p-4 border-t flex justify-end">
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
