import DashboardCards from "./DashboardCards";

export default function DashboardHome({ faculty }) {
  return (
    <>
      <h1 className="text-2xl font-bold text-red-800 mb-6">
        {faculty?.role == "director" ? "Director" : "Faculty"} Dashboard
      </h1>
      <DashboardCards faculty={faculty} />
    </>
  );
}
