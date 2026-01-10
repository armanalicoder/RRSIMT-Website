"use client";

import { useEffect, useState } from "react";

export default function FacultySidebar({ activeTab, setActiveTab }) {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/api/auth/me")
      .then((res) => res.json())
      .then((data) => {
        if (data.loggedIn) {
          setUser(data.user);
        }
        setLoading(false);
      });
  }, []);

  const menu = [
    { label: "Dashboard", value: "dashboard" },
    { label: "My Profile", value: "profile" },
    { label: "Circulars", value: "circular" },
    { label: "Student Admissions", value: "admissions" },
  ];
  if (user?.role == "director") {
    menu.push({
      label: "Manage Faculties",
      value: "faculties",
    },{
      label: "Manage Departments",
      value : "departments"
    });
  }

  return (
    <aside className="w-64 bg-red-800 text-white min-h-screen p-5">
      <h2 className="text-xl font-bold mb-8">
        {user?.role == "director" ? "Director" : "Faculty"} Dashboard
      </h2>

      <nav className="space-y-3">
        {menu.map((item) => (
          <button
            key={item.value}
            onClick={() => setActiveTab(item.value)}
            className={`cursor-pointer block w-full text-left px-3 py-2 rounded transition
              ${
                activeTab === item.value
                  ? "bg-white text-red-800 font-semibold"
                  : "hover:bg-red-700"
              }`}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </aside>
  );
}
