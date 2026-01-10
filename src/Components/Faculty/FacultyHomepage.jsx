"use client";
import { useEffect, useState } from "react";
import FacultySidebar from "@/Components/Faculty/FacultySidebar";
import DashboardHome from "@/Components/Faculty/DashboardHome";
import FacultyProfile from "@/Components/Faculty/FacultyProfile";
import UploadCircular from "@/Components/Faculty/UploadCircular";
import StudentAdmissions from "@/Components/Faculty/StudentAdmission";
import ManageFaculties from "./ManageFaculties";
import ManageDepartments from "./ManageDepartments";
import Loader from "../Loader";

export default function FacultyHomepage({
  circulars,
  admissions,
  faculties,
  departments,
}) {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  useEffect(() => {
    fetch("/api/auth/me")
      .then((res) => res.json())
      .then((data) => {
        if (data.loggedIn) {
          setUser(data.user);
          setLoading(false);
        }
      });
  }, []);
   if (user) {
    user.totalCircular = circulars?.length;
    user.admission_count = admissions?.length;
    user.total_faculties = faculties?.length;
  }

  return (
    <>
      {!loading ? (
        <section className="min-h-screen flex bg-gray-100">
          <FacultySidebar activeTab={activeTab} setActiveTab={setActiveTab} />
          <div className="flex-1 p-6">
            {activeTab === "dashboard" && <DashboardHome faculty={user} />}
            {activeTab === "profile" && <FacultyProfile faculty={user} />}
            {activeTab === "circular" && (
              <UploadCircular circulars={circulars} />
            )}
            {activeTab === "admissions" && (
              <StudentAdmissions admissions={admissions} />
            )}
            {activeTab === "faculties" && (
              <ManageFaculties faculties={faculties} />
            )}
            {activeTab === "departments" && (
              <ManageDepartments departments={departments} />
            )}
          </div>
        </section>
      ) : (
        <div className="flex justify-center my-2">
          <Loader />
        </div>
      )}
    </>
  );
}
