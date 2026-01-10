"use client";

import Image from "next/image";
import { useState } from "react";
import { MdClose } from "react-icons/md";
import { toast } from "react-toastify";
import Loader from "../Loader";

const departmentOptions = [
  { label: "Computer Science & Engineering", value: "CSE" },
  { label: "Information Technology", value: "IT" },
  { label: "Mechanical Engineering", value: "ME" },
  { label: "Electrical Engineering", value: "EE" },
  { label: "Electronics & Communication", value: "ECE" },
  { label: "Civil Engineering", value: "CE" },
  { label: "MBA – Finance", value: "mba_fin" },
  { label: "MBA – Marketing", value: "mba_mkt" },
  { label: "MBA – Human Resource", value: "mba_hr" },
  { label: "MBA – Operations", value: "mba_ops" },
  { label: "MBA – International Business", value: "mba_ibm" },
];

export default function AddNewFaculties({ onClose }) {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    designation: "",
    department: "",
    login: "",
  });

  const HandleAddNewFaculty = async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/faculty/new`, {
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
  };
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white max-w-2xl rounded-lg shadow-lg relative">
        <div className="flex justify-between items-center p-4 border-b">
          <h3 className="text-lg font-semibold text-red-800">
            Faculty Details
          </h3>
          <button onClick={onClose}>
            <MdClose size={22} />
          </button>
        </div>

        <h2 className="text-center text-xl font-semibold text-red-800 mb-4">
          Add New Faculty
        </h2>
        {loading && (
          <div className="flex justify-center my-2">
            <Loader />
          </div>
        )}
        <form onSubmit={HandleAddNewFaculty}>
          <div className="grid grid-cols-2 gap-3  bg-white p-6 rounded shadow">
            <div className="mb-2">
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                onChange={(e) =>
                  setFormData({ ...formData, [e.target.name]: e.target.value })
                }
                type="text"
                placeholder="Enter Full Name"
                className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-red-800"
                required
                name="name"
                value={formData.name}
              />
            </div>
            <div className="mb-2">
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                onChange={(e) =>
                  setFormData({ ...formData, [e.target.name]: e.target.value })
                }
                type="email"
                placeholder="Enter Email"
                className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-red-800"
                required
                name="email"
                value={formData.value}
              />
            </div>
            <div className="mb-2">
              <label className="block text-sm font-medium mb-1">
                Create Password
              </label>
              <input
                onChange={(e) =>
                  setFormData({ ...formData, [e.target.name]: e.target.value })
                }
                type="password"
                placeholder="Create New Password"
                className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-red-800"
                required
                name="password"
                value={formData.value}
              />
            </div>
            <div className="mb-2">
              <label className="block text-sm font-medium mb-1">
                Designation
              </label>
              <input
                onChange={(e) =>
                  setFormData({ ...formData, [e.target.name]: e.target.value })
                }
                type="text"
                placeholder="Enter Designation"
                className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-red-800"
                required
                name="designation"
                value={formData.value}
              />
            </div>
            <div className="mb-2">
              <label className="block text-sm font-medium mb-1">
                Department
              </label>
              <select
                onChange={(e) =>
                  setFormData({ ...formData, [e.target.name]: e.target.value })
                }
                name="department"
                className="border p-2 rounded"
                value={formData.department}
              >
                <option value="">Select Department *</option>

                {departmentOptions.map((dept) => (
                  <option key={dept.value} value={dept.value}>
                    {dept.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-2">
              <label className="block text-sm font-medium mb-1">
                Login Status*
              </label>
              <select
              required
                onChange={(e) =>
                  setFormData({ ...formData, [e.target.name]: e.target.value })
                }
                name="login"
                className="border p-2 rounded"
                value={formData.login}
              >
                <option value="">Login Status</option>
                <option value="enabled">Enabled</option>
                <option value="disabled">Disabled</option>
              </select>
            </div>
          </div>
          <div className="m-3">
            <button
              type="submit"
              className="w-full cursor-pointer bg-red-800 text-white py-2 rounded font-semibold hover:bg-red-700 transition"
            >
              Add Faculty
            </button>
          </div>
        </form>
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
