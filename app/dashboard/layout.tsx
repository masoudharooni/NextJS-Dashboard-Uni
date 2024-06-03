import React, { ReactNode } from "react";
import Navbar from "@/components/dashboard/navbar";
import Sidebar from "@/components/dashboard/sidebar/sidebar";
import Footer from "@/components/dashboard/footer";

export default function DashboardLayoutPage({
    children,
}: {
    children: ReactNode;
}) {
    return (
        <main className="flex gap-x-5">
            <div className="flex-1 bg-bgSoftLight dark:bg-bgSoft min-h-screen rounded-l-lg">
                <Sidebar />
            </div>
            <div className="flex-[4] relative min-h-screen">
                <Navbar />
                <div className="mt-5">{children}</div>
            </div>
        </main>
    );
}
