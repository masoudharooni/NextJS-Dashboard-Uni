"use client";
import menuItems from "@/sources/menuItems";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { MdNotifications, MdOutlineChat, MdPublic } from "react-icons/md";

export default function Navbar() {
    const [search, setSearch] = useState("");
    const pathname = usePathname();
    const title = menuItems.map((category) =>
        category.list.find((item) => item.path === pathname)
    )[0]?.title;
    console.log("dashboard: ", title);
    return (
        <nav className="bg-bgSoftLight dark:bg-bgSoft py-2 px-4 rounded-md flex justify-between items-center">
            <span>{title}</span>
            <ul className="flex gap-x-5 items-center text-textLight dark:text-text">
                <input
                    placeholder="جست‌وجو کنید..."
                    id="search"
                    type="search"
                    className="dark:bg-bg bg-bgLight p-2 rounded-md outline-none"
                    name="searchbox"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                <button className="relative hover:-top-0.5 cursor-pointer hover:dark:bg-[#2e374a] active:scale-110 hover:bg-[#d9e4ff] rounded-full p-2 transition-all ease-in-out delay-75 duration-100">
                    <MdOutlineChat size={20} />
                </button>
                <button className="relative hover:-top-0.5 duration-500cursor-pointer hover:dark:bg-[#2e374a] active:scale-110 hover:bg-[#d9e4ff] rounded-full p-2 transition-all ease-in-out delay-75 duration-100">
                    <MdNotifications size={20} />
                </button>
                <button className="relative hover:-top-0.5 duration-500cursor-pointer hover:dark:bg-[#2e374a] active:scale-110 hover:bg-[#d9e4ff] rounded-full p-2 transition-all ease-in-out delay-75 duration-100">
                    <MdPublic size={20} />
                </button>
            </ul>
        </nav>
    );
}
