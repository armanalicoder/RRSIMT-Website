"use client";

import Image from "next/image";
import { useState } from "react";
import { MdClose } from "react-icons/md";
import { toast } from "react-toastify";
import Loader from "../Loader";

export default function FacultyViewModal({ faculty, onClose }) {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    new_password: "",
    confirm_new_password: "",
  });
  const handleChangePassword = async (facultyId) => {
    setLoading(true);
    formData._id = facultyId;
    if (
      formData.new_password == formData.confirm_new_password &&
      (formData.new_password != "" || formData.confirm_new_password != "")
    ) {
      try {
        const res = await fetch("/api/faculty/change-password", {
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
          setFormData({
            new_password: "",
            confirm_new_password: "",
          });
        }
      } catch (err) {
        toast.error("Something went wrong!");
      } finally {
        setLoading(false);
      }
    } else {
      toast.error("Confirm Password doesn't match");
      setFormData({
        new_password: "",
        confirm_new_password: "",
      });
    }
  };

  const changeLoginStatus = async (e, id) => {
    const value = e.target.value;
    try {
      setLoading(true);
      const res = await fetch(`/api/faculty/change-login-status/${id}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: value }),
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
      <div className="bg-white w-full max-w-2xl rounded-lg shadow-lg relative">
        <div className="flex justify-between items-center p-4 border-b">
          <h3 className="text-lg font-semibold text-red-800">
            Faculty Details
          </h3>
          <button onClick={onClose}>
            <MdClose size={22} />
          </button>
        </div>

        <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col items-center">
            <Image
              src={faculty.image || "/user.png"}
              alt="Faculty"
              width={120}
              height={120}
              className="rounded-full border"
            />
            <p className="mt-2 font-semibold">{faculty.name}</p>
            <p className="text-sm text-gray-600">{faculty.designation}</p>
          </div>

          <div className="md:col-span-2 space-y-2 text-sm">
            <p>
              <strong>Email:</strong> {faculty.email}
            </p>
            <p>
              <strong>Department:</strong> {faculty.department?.name}
            </p>
            <p>
              <strong>Role:</strong> {faculty.role}
            </p>
            <p>
              <strong>Login Status:</strong>{" "}
              <span
                className={
                  faculty.login === "enabled"
                    ? "text-green-600 me-5"
                    : "text-red-600 me-5"
                }
              >
                {faculty.login}
              </span>
              <select
                name="login"
                className="border p-2 rounded"
                onChange={(e) => changeLoginStatus(e, faculty._id)}
              >
                <option value="">Login Status *</option>
                <option value="enabled">Enabled</option>
                <option value="disabled">Disabled</option>
              </select>
            </p>
            <p>
              <strong>Created At:</strong>{" "}
              {new Date(faculty.createdAt).toLocaleDateString()}
            </p>
          </div>
        </div>
        {loading && (
          <div className="flex justify-center my-2">
            <Loader />
          </div>
        )}
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold text-red-800 mb-4">
            Change Password
          </h2>
          <div className="mb-2">
            <label className="block text-sm font-medium mb-1">
              New Password
            </label>
            <input
              onChange={(e) =>
                setFormData({ ...formData, [e.target.name]: e.target.value })
              }
              type="password"
              placeholder="Enter New Password"
              className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-red-800"
              required
              name="new_password"
            />
          </div>
          <div className="mb-2">
            <label className="block text-sm font-medium mb-1">
              Confirm New Password
            </label>
            <input
              onChange={(e) =>
                setFormData({ ...formData, [e.target.name]: e.target.value })
              }
              type="password"
              placeholder="Confirm New Password"
              className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-red-800"
              required
              name="confirm_new_password"
            />
          </div>
          <div>
            <button
              onClick={() => handleChangePassword(faculty._id)}
              type="submit"
              className="cursor-pointer w-full bg-red-800 text-white py-2 rounded font-semibold hover:bg-red-700 transition"
            >
              Change Password
            </button>
          </div>
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
