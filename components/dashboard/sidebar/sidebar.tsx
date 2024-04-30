"use client";
import menuItems from "@/sources/menuItems";
import User from "./user";
import MenuLink from "./menuLink";
import { usePathname } from "next/navigation";

export default function Sidebar() {
    const pathname = usePathname();
    return (
        <aside className="flex flex-col gap-y-5 sticky top-10 p-2.5">
            <User username="مسعود هارونی" role="مدیر سیستم" />
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
