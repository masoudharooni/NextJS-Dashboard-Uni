import React, { ReactNode } from "react";
import Navbar from "@/components/dashboard/navbar/navbar";
import Sidebar from "@/components/dashboard/sidebar/sidebar";

export default function DashboardLayoutPage({
    children,
}: {
    children: ReactNode;
}) {
    return (
        <main className="flex">
            <div className="flex-1 bg-bgSoft p-5">
                <Sidebar />
            </div>
            <div className="flex-[4] p-5">
                <Navbar />
                {children}
            </div>
        </main>
    );
}
