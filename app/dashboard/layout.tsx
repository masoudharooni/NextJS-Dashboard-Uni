"use client";
import React, { ReactNode, useState } from "react";
import Navbar from "@/components/dashboard/navbar";
import Sidebar from "@/components/dashboard/sidebar/sidebar";
import UserType from "@/contracts/types/userType";
import DashboardContext from "@/contexts/dashboardContext";
import ProductType from "@/contracts/types/productType";
export default function DashboardLayoutPage({
    children,
}: {
    children: ReactNode;
}) {
    const [sidebar, setSidebar] = useState(false);
    const [users, setUsers] = useState<UserType[]>([]);
    const [products, setProducts] = useState<ProductType[]>([]);
    return (
        <DashboardContext.Provider
            value={{
                users,
                setUsers,
                products,
                setProducts,
            }}
        >
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
        </DashboardContext.Provider>
    );
}
