"use client";

import { useEffect, useState } from "react";
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

export default function AdmissionForm() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    course: "",
    department: "",
    studentName: "",
    fatherName: "",
    fatherOccupation: "",
    gender: "",
    category: "",
    address: "",
    mobile: "",
    email: "",
    entranceExam: "",
    rollNo: "",
    rank: "",
    academics: [
      {
        exam: "",
        board: "",
        year: "",
        stream: "",
        percentage: "",
      },
      {
        exam: "",
        board: "",
        year: "",
        stream: "",
        percentage: "",
      },
    ],
    query: "",
  });

  const handleAcademicChange = (index, field, value) => {
    const updatedAcademics = [...formData.academics];
    updatedAcademics[index][field] = value;

    setFormData({
      ...formData,
      academics: updatedAcademics,
    });
  };

  const handleCourseChange = (e) => {
    const selectedCourse = e.target.value;

    setFormData((prev) => ({
      ...prev,
      course: selectedCourse,
      department: "",
    }));
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      // setUploading(true);
      const res = await fetch("/api/user/new/admission", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: formData }),
      });
      const data = await res.json();
      if (data.success) {
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
      // setUploading(false);
      setFormData({
        course: "",
        department: "",
        studentName: "",
        fatherName: "",
        fatherOccupation: "",
        gender: "",
        category: "",
        address: "",
        mobile: "",
        email: "",
        entranceExam: "",
        rollNo: "",
        rank: "",
        academics: [
          {
            exam: "",
            board: "",
            year: "",
            stream: "",
            percentage: "",
          },
          {
            exam: "",
            board: "",
            year: "",
            stream: "",
            percentage: "",
          },
        ],
        query: "",
      });
    } catch (err) {
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      academics: prev.academics.map((a, i) => ({
        ...a,
        exam: ["High School", "Intermediate", "Graduation", "Post Graduation"][
          i
        ],
      })),
    }));
  }, []);

  return (
    <section className="max-w-6xl mx-auto px-4 py-10">

      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl md:text-3xl font-bold">
          Online <span className="text-red-800">Admission Form</span>
        </h1>
        <p className="text-sm font-semibold">AKTU Code: 383</p>
      </div>
      {loading && (
        <div className="flex justify-center my-2">
          <Loader />
        </div>
      )}
      <form
        onSubmit={handleSubmit}
        className="space-y-10 bg-white border p-6 rounded-lg"
      >
        <div>
          <h2 className="font-semibold text-lg mb-4 border-b pb-2">
            Course Details
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <select
              name="course"
              value={formData.course}
              className="border p-2 rounded"
              onChange={handleCourseChange}
              required
            >
              <option value="">Select Course *</option>
              <option value="BTECH">B.Tech</option>
              <option value="MBA">MBA</option>
            </select>

            <select
              name="department"
              value={formData.department}
              className="border p-2 rounded"
              onChange={handleInputChange}
              disabled={!formData.course}
              required
            >
              <option value="">Select Branch *</option>

              {formData.course &&
                departmentOptions[formData.course]?.map((dept) => (
                  <option key={dept.value} value={dept.value}>
                    {dept.label}
                  </option>
                ))}
            </select>
          </div>
        </div>

        <div>
          <h2 className="font-semibold text-lg mb-4 border-b pb-2">
            Basic Information
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <input
              onChange={handleInputChange}
              className="border p-2 rounded"
              placeholder="Student Name *"
              name="studentName"
              required
            />
            <input
              onChange={handleInputChange}
              className="border p-2 rounded"
              placeholder="Father's Name *"
              name="fatherName"
              required
            />
            <input
              onChange={handleInputChange}
              className="border p-2 rounded"
              placeholder="Father's Occupation"
              name="fatherOccupation"
              required
            />

            <select
              name="gender"
              className="border p-2 rounded"
              onChange={handleInputChange}
              required
            >
              <option>Gender *</option>
              <option>Male</option>
              <option>Female</option>
            </select>

            <select
              name="category"
              className="border p-2 rounded"
              onChange={handleInputChange}
              required
            >
              <option>Category *</option>
              <option>GEN</option>
              <option>OBC</option>
              <option>SC</option>
              <option>ST</option>
            </select>
          </div>
        </div>
        <div>
          <h2 className="font-semibold text-lg mb-4 border-b pb-2">
            Contact Information
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <input
              onChange={handleInputChange}
              className="border p-2 rounded"
              placeholder="Postal Address *"
              name="address"
              required
            />
            <input
              onChange={handleInputChange}
              className="border p-2 rounded"
              placeholder="Contact Number *"
              name="mobile"
              required
            />
            <input
              onChange={handleInputChange}
              className="border p-2 rounded"
              placeholder="Email Address *"
              name="email"
              required
            />
          </div>
        </div>

        <div>
          <h2 className="font-semibold text-lg mb-4 border-b pb-2">
            Entrance Examination Details
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <input
              required
              onChange={handleInputChange}
              className="border p-2 rounded"
              placeholder="JEE / CUET Roll No"
              name="rollNo"
            />
            <input
              required
              name="rank"
              onChange={handleInputChange}
              className="border p-2 rounded"
              placeholder="Rank"
            />
          </div>
        </div>

        <div>
          <h2 className="font-semibold text-lg mb-4 border-b pb-2">
            Academic Qualification
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border p-2">Exam</th>
                  <th className="border p-2">Board / University</th>
                  <th className="border p-2">Year</th>
                  <th className="border p-2">Stream</th>
                  <th className="border p-2">% / Division</th>
                </tr>
              </thead>
              <tbody>
                {[
                  "High School",
                  "Intermediate",
                  "Graduation",
                  "Post Graduation",
                ].map((exam, i) => (
                  <tr key={i}>
                    <td className="border p-2">{exam}</td>

                    <td className="border p-2">
                      <input
                        className="w-full border p-1"
                        value={formData.academics[i]?.board || ""}
                        onChange={(e) =>
                          handleAcademicChange(i, "board", e.target.value)
                        }
                      />
                    </td>

                    <td className="border p-2">
                      <input
                        className="w-full border p-1"
                        value={formData.academics[i]?.year || ""}
                        onChange={(e) =>
                          handleAcademicChange(i, "year", e.target.value)
                        }
                      />
                    </td>

                    <td className="border p-2">
                      <input
                        className="w-full border p-1"
                        value={formData.academics[i]?.stream || ""}
                        onChange={(e) =>
                          handleAcademicChange(i, "stream", e.target.value)
                        }
                      />
                    </td>

                    <td className="border p-2">
                      <input
                        className="w-full border p-1"
                        value={formData.academics[i]?.percentage || ""}
                        onChange={(e) =>
                          handleAcademicChange(i, "percentage", e.target.value)
                        }
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h2 className="font-semibold text-lg mb-4 border-b pb-2">
            Query (Optional)
          </h2>
          <textarea
            rows="4"
            onChange={handleInputChange}
            className="w-full border p-2 rounded"
            placeholder="Write your query here..."
            name="query"
          ></textarea>
        </div>

        <div className="text-center">
          <button
            disabled={loading}
            type="submit"
            className="bg-red-800 text-white px-8 py-3 rounded hover:bg-red-700 transition"
          >
            {loading ? "Submitting..." : "Submit Admission Form"}
          </button>
        </div>
      </form>
    </section>
  );
}
