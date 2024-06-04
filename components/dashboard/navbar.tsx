"use client";
import menuItems from "@/sources/menuItems";
import { IconButton } from "@mui/material";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { MdNotifications, MdOutlineChat, MdPublic } from "react-icons/md";
import { IoMdMenu } from "react-icons/io";
import useTheme from "@/hooks/useTheme";
type TProps = {
    openSidebar: () => void;
    sidebar: boolean;
};
export default function Navbar({ openSidebar, sidebar }: TProps) {
    const [search, setSearch] = useState("");
    const pathname = usePathname();
    const title = menuItems.map((category) =>
        category.list.find((item) => item.path === pathname)
    )[0]?.title;
    const theme = useTheme();
    return (
        <nav className="bg-bgSoftLight dark:bg-bgSoft py-2 px-4 rounded-md flex justify-between items-center">
            <div className="flex items-center gap-x-5">
                {!sidebar && (
                    <IconButton onClick={openSidebar}>
                        <IoMdMenu color={theme === "light" ? "#333" : "#fff"} />
                    </IconButton>
                )}
                <span>{title}</span>
            </div>
            <ul className="flex gap-x-5 items-center text-textLight dark:text-text">
                <input
                    placeholder="Search..."
                    id="search"
                    type="search"
                    className="hidden md:block dark:bg-bg bg-bgLight p-2 rounded-md outline-none"
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
