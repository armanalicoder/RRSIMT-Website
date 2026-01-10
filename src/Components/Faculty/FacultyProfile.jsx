"use client";

import { useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Loader from "../Loader";

export default function FacultyProfile({ faculty }) {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [formData, setFormData] = useState({
    old_password: "",
    new_password: "",
    confirm_new_password: "",
  });
  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    if (formData.new_password == formData.confirm_new_password) {
      try {
        const res = await fetch("/api/faculty/change-password", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ data: formData }),
        });
        const data = await res.json();
        if (data.success) {
          toast.success(data.message);
          router.push("/");
        } else {
          toast.error(data.message);
          setFormData({
            old_password: "",
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
        old_password: "",
        new_password: "",
        confirm_new_password: "",
      });
      setLoading(false);
    }
  };

  const handleImageUpload = async (e) => {
    e.preventDefault();

    if (!image) {
      toast.error("Please select an image");
      return;
    }

    const formData = new FormData();
    formData.append("image", image);
    try {
      setLoading(true);
      const res = await fetch("/api/faculty/update-profile-pic", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (data.success) {
        toast.success("Profile photo updated");
        window.location.reload(); // simplest & safe
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
    <>
      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-xl font-semibold text-red-800 mb-4">My Profile</h2>
        <Image
          src={faculty?.image}
          width={100}
          height={100}
          alt="image"
          className="rounded-full"
        />
        <p>
          <strong>Name:</strong> {faculty?.name}
        </p>
        <p>
          <strong>Email:</strong> {faculty?.email}
        </p>
        <p>
          <strong>Department:</strong> {faculty?.department?.name || "N/A"}
        </p>
        <p>
          <strong>Designation:</strong> {faculty?.designation}
        </p>
      </div>
      <div className="bg-white p-6 rounded shadow mt-6">
        {loading && (
          <div className="flex justify-center my-2">
            <Loader />
          </div>
        )}
        <h2 className="text-xl font-semibold text-red-800 mb-4">
          Change Profile Photo
        </h2>
        <form onSubmit={handleImageUpload}>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            className="mb-3"
          />

          <button
            type="submit"
            disabled={loading}
            className="bg-red-800 text-white px-4 py-2 rounded cursor-pointer"
          >
            {loading ? "Uploading..." : "Update Photo"}
          </button>
        </form>
      </div>
      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-xl font-semibold text-red-800 mb-4">
          Change Password
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <label className="block text-sm font-medium mb-1">
              Old Password
            </label>
            <input
              onChange={(e) =>
                setFormData({ ...formData, [e.target.name]: e.target.value })
              }
              type="password"
              placeholder="Enter Old Password"
              className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-red-800"
              required
              name="old_password"
            />
          </div>
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
              disabled={loading}
              type="submit"
              className="cursor-pointer w-full bg-red-800 text-white py-2 rounded font-semibold hover:bg-red-700 transition"
            >
              Change Password
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
