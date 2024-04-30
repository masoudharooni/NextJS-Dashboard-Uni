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
            className={`flex gap-x-3 items-center p-5 ${isActive && "bg-[#2e374a]"
                } hover:bg-[#2e374a] rounded-lg transition-all ease-in-out duration-100`}
        >
            <span>
                <Icon size={20} />
            </span>
            <span>{title}</span>
        </Link>
    );
}
