"use client";
import React, { ReactNode, useState } from "react";
import Navbar from "@/components/dashboard/navbar";
import Sidebar from "@/components/dashboard/sidebar/sidebar";
import { Drawer, styled } from "@mui/material";

const drawerWidth = 300;
const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
    open?: boolean;
}>(({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    }),
}));
export default function DashboardLayoutPage({
    children,
}: {
    children: ReactNode;
}) {
    const [sidebar, setSidebar] = useState(false);
    return (
        <main className={`${sidebar ? "relative md:flex md:gap-x-5" : ""}`}>
            <div
                className={`${sidebar
                        ? "z-50 absolute right-0 left-0 bottom-0 top-0 bg-red-200 md:relative md:flex-1"
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
