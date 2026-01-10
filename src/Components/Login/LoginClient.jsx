"use client";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";
import { CiLogin } from "react-icons/ci";
import Loader from "@/Components/Loader";



export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const { role } = useParams();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const title = role === "faculty" ? "Faculty Login" : "Director Login";

  const handleLogin = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: formData }),
      });
      const data = await res.json();
      if (data.success) {
        toast.success(data.message);
        window.location.href=`https://rrsimt-website.vercel.app/${role}/dashboard`;
      } else {
        toast.error(data.message);
      }
      setFormData({
        email: "",
        password: "",
      });
    } catch (err) {
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6 mt-15">
        <Image
          className="mx-auto"
          src={"/rrsimt.png"}
          alt="rrsimt_logo"
          width={100}
          height={100}
        />
        <h1 className="text-2xl font-bold text-center mb-2">{title}</h1>
        <p className="text-sm text-center text-gray-600 mb-6">
          Enter your credentials to continue
        </p>
        {loading && (
          <div className="flex justify-center my-2">
            <Loader />
          </div>
        )}
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Username / Email
            </label>
            <input
              onChange={(e) =>
                setFormData({ ...formData, [e.target.name]: e.target.value })
              }
              type="text"
              placeholder="Enter username or email"
              className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-red-800"
              required
              name="email"
              value={formData.email}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              onChange={(e) =>
                setFormData({ ...formData, [e.target.name]: e.target.value })
              }
              type="password"
              placeholder="Enter password"
              className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-red-800"
              required
              name="password"
              value={formData.password}
            />
          </div>

          <button
            type="submit"
            className="cursor-pointer w-full bg-red-800 text-white py-2 rounded font-semibold hover:bg-red-700 transition"
          >
            Login <CiLogin className="inline mb-1" />
          </button>
        </form>

        {/* <div className="text-center mt-4 text-sm text-gray-600">
          Having trouble logging in? <br />
          Contact <span className="font-semibold">Admin Office</span>
        </div> */}
      </div>
    </section>
  );
}
