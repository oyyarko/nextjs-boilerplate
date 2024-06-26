import React from "react";
import SideNav from "../ui/dashboard/side-nav";

const Dashboard = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden bg-stone-50 dark:bg-slate-900">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
};

export default Dashboard;
