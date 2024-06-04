"use client";
import menuItems from "@/sources/menuItems";
import User from "./user";
import MenuLink from "./menuLink";
import { usePathname } from "next/navigation";
import { MdKeyboardArrowLeft } from "react-icons/md";

import { IconButton } from "@mui/material";
import useTheme from "@/hooks/useTheme";
type TProps = {
    closeSidebar: () => void;
};
export default function Sidebar({ closeSidebar }: TProps) {
    const pathname = usePathname();
    const theme = useTheme();
    return (
        <aside className="flex flex-col gap-y-5 p-2.5">
            <div className="flex justify-between items-center">
                <User username="Masoud Harooni" role="Adminstrator" />
                <IconButton onClick={closeSidebar}>
                    <MdKeyboardArrowLeft
                        size={24}
                        color={theme === "light" ? "#333" : "#FFF"}
                    />
                </IconButton>
            </div>
            <ul className="flex flex-col gap-y-1">
                {menuItems.map((category) => (
                    <li key={category.key}>
                        <span className="text-textSoft text-[13px]">{category.title}</span>
                        {category.list.map((item) => (
                            <MenuLink
                                title={item.title}
                                path={item.path}
                                Icon={item.icon}
                                key={item.key}
                                isActive={item.path === pathname}
                            />
                        ))}
                    </li>
                ))}
            </ul>
        </aside>
    );
}
