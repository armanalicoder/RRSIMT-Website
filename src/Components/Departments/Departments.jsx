"use client";
import Link from "next/link";
import { useState } from "react";

export default function Departments({ departments }) {
  const [open, setOpen] = useState("btech");

  return (
    <section className="max-w-7xl mx-auto px-4 pb-8 pt-5">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-3">
        Our <span className="text-red-800">Courses</span>
      </h2>
      <p className="text-center text-gray-600 mb-10">
        RRSIMT offers industry-oriented programs through its B.Tech and MBA
        departments.
      </p>
      <div className="flex justify-center gap-4 mb-8">
        <button
          onClick={() => setOpen("btech")}
          className={`px-6 cursor-pointer rounded font-semibold border
            ${
              open === "btech"
                ? "bg-red-800 text-white"
                : "bg-white text-red-800"
            }`}
        >
          B.Tech
        </button>
        <button
          onClick={() => setOpen("mba")}
          className={`px-6 cursor-pointer py-2 rounded font-semibold border
            ${
              open === "mba" ? "bg-red-800 text-white" : "bg-white text-red-800"
            }`}
        >
          MBA
        </button>
      </div>

      {/* B.Tech Departments */}
      {open === "btech" && (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {departments.map((department, i) => {
            return (
              department.course == "BTECH" && (
                <Link key={i} href={`/departments/${department.slug}`}>
                  <div className="border rounded-lg p-5 bg-white hover:shadow-lg transition">
                    <h3 className="text-lg font-semibold text-red-800 mb-2">
                      {department.name}
                    </h3>
                    <p className="text-sm text-gray-600">
                      Department of {department.name}
                    </p>
                  </div>
                </Link>
              )
            );
          })}
        </div>
      )}

      {/* MBA Departments */}
      {open === "mba" && (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {departments.map((department, i) => {
            return (
              department.course === "MBA" && (
                <Link key={i} href={`/departments/${department.slug}`}>
                  <div className="border rounded-lg p-5 bg-white hover:shadow-lg transition">
                    <h3 className="text-lg font-semibold text-red-800 mb-2">
                      {department.name}
                    </h3>
                    <p className="text-sm text-gray-600">
                      Department of {department.name}
                    </p>
                  </div>
                </Link>
              )
            );
          })}
        </div>
      )}
    </section>
  );
}
