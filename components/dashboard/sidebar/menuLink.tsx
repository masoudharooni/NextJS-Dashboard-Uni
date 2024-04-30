import { IconType } from "react-icons";
import Link from "next/link";

type TProps = {
    title: string;
    path: string;
    Icon: IconType;
    isActive: boolean;
};
export default function MenuLink({ title, path, Icon, isActive }: TProps) {
    return (
        <Link
            href={path}
            className={`flex gap-x-3 items-center p-5 ${isActive && "dark:bg-[#2e374a] bg-[#d3dcf5]"
                } hover:dark:bg-[#2e374a] hover:bg-[#d3dcf5] rounded-lg transition-all ease-in-out duration-100`}
        >
            <span>
                <Icon size={22} />
            </span>
            <span>{title}</span>
        </Link>
    );
}
