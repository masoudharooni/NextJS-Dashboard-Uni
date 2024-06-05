"use client";
import React, { ReactNode, useEffect, useState } from "react";
import Navbar from "@/components/dashboard/navbar";
import Sidebar from "@/components/dashboard/sidebar/sidebar";
import useWindowSize from "@/hooks/useWindowSize";
export default function DashboardLayoutPage({
    children,
}: {
    children: ReactNode;
}) {
    const [sidebar, setSidebar] = useState(false);
    const [widthVP] = useWindowSize();
    useEffect(() => {
        if (widthVP < 768) {
            setSidebar(false);
        } else {
            setSidebar(true);
        }
    }, [widthVP]);
    return (
        <main className={`${sidebar ? "relative md:flex md:gap-x-5" : ""}`}>
            <div
                className={`${sidebar
                        ? "z-50 absolute right-0 left-0 bottom-0 top-0 md:relative md:flex-1"
                        : "hidden"
                    }  bg-bgSoftLight dark:bg-bgSoft min-h-screen rounded-l-lg`}
            >
                <Sidebar closeSidebar={() => setSidebar(false)} />
            </div>
            <div className={`flex-[4] relative min-h-screen`}>
                <Navbar openSidebar={() => setSidebar(true)} sidebar={sidebar} />
                <div className="mt-5">{children}</div>
            </div>
        </main>
    );
}
