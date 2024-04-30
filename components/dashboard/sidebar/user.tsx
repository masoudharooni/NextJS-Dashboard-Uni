import Image from "next/image";

type TProps = {
    username: string;
    role: string;
};

export default function User({ username, role }: TProps) {
    return (
        <div className="flex gap-5">
            <Image
                src="/noavatar.png"
                alt="User Avatart"
                width="50"
                height="50"
                className="rounded-full"
            />
            <div className="flex flex-col">
                <span>{username}</span>
                <span className="text-textSoft text-[12px]">{role}</span>
            </div>
        </div>
    );
}
