import { memo } from "react";
import Image from "next/image";
import { MdPlayCircleFilled, MdReadMore } from "react-icons/md";

const Rightbar = () => {
    return (
        <div className="sticky top-5">
            <div className="bg-gradient-to-t dark:from-bgSoft from-bgSoftLight dark:to-[#253352] shadow-inner py-5 px-6 rounded-[10px] mb-5 relative">
                <div className="absolute right-0 bottom-0 w-1/2 h-1/2">
                    <Image
                        className="object-contain opacity-20"
                        src="/astronaut.png"
                        alt="astronaut image"
                        fill
                    />
                </div>
                <div className="flex flex-col gap-6">
                    <span className="font-bold">🔥 Now available</span>
                    <h3 className="">How to use new version of Admin panel?</h3>
                    <span className="dark:text-textSoft text-textSoftLight font-medium text-xs">
                        Just spend four minutes to learn it...
                    </span>
                    <p className="dark:text-textSoft text-textSoftLight text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
                        atque enim iure velit doloremque cumque, harum eaque aliquam esse
                    </p>
                    <button className="z-10 active:scale-110 transition-all ease-in-out duration-150 delay-75 p-2.5 flex items-center gap-2.5 w-max bg-[#8e88e7] dark:bg-[#5d57c9] text-white border-none rounded-md cursor-pointer">
                        Visit
                        <MdPlayCircleFilled />
                    </button>
                </div>
            </div>
            <div className="bg-gradient-to-t dark:from-[#182237] from-bgSoftLight dark:to-[#253352] shadow-inner py-5 px-6 rounded-[10px] mb-5 relative">
                <div className="flex flex-col gap-6">
                    <span className="font-bold">🚀 soon</span>
                    <h3 className="">New server actions available 👨‍💻</h3>
                    <span className="dark:text-textSoft text-textSoftLight font-medium text-xs">
                        Improve your performance
                    </span>
                    <p className="dark:text-textSoft text-textSoftLight text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
                        atque enim iure velit doloremque cumque, harum eaque aliquam esse
                        eius dolorem, nostrum numquam quos quas nobis, voluptatem sed
                        aspernatur saepe?
                    </p>
                    <button className="p-2.5 active:scale-110 transition-all ease-in-out duration-150 delay-75 flex items-center gap-2.5 w-max bg-[#8e88e7] dark:bg-[#5d57c9] text-white border-none rounded-md cursor-pointer">
                        Learn
                        <MdReadMore />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default memo(Rightbar);
