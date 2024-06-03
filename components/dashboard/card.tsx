import { MdSupervisedUserCircle } from "react-icons/md";

export const Card = () => {
    return (
        <section className="relative hover:-top-0.5 transition-transform ease-in-out delay-500 duration-500 dark:bg-bgSoft w-full hover:dark:bg-[#202a40] hover:bg-[#d9e4ff] bg-bgSoftLight p-5 rounded-lg flex gap-5 cursor-pointer">
            <MdSupervisedUserCircle size="24px" />
            <div className="flex flex-col gap-5">
                <span className="">All users</span>
                <span className="font-vazirBold text-[24px]">10.273</span>
                <span className="text-sm">
                    <span className="text-green-500">12%</span> more than last week
                </span>
            </div>
        </section>
    );
};

export default Card;
