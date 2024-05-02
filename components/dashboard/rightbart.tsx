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
                    <span className="font-bold">🔥 الان در دسترسه</span>
                    <h3 className="">چطور از نسخه جدید داشبورد ادمین استفاده کنیم؟</h3>
                    <span className="dark:text-textSoft text-textSoftLight font-medium text-xs">
                        فقط چهار دقیقه برای یادگرفتنش وقت بذار...
                    </span>
                    <p className="dark:text-textSoft text-textSoftLight text-sm">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                        استفاده از طراحان گرافیک است
                    </p>
                    <button className="z-10 active:scale-110 transition-all ease-in-out duration-150 delay-75 p-2.5 flex items-center gap-2.5 w-max bg-[#8e88e7] text-white border-none rounded-md cursor-pointer">
                        ببین
                        <MdPlayCircleFilled />
                    </button>
                </div>
            </div>
            <div className="bg-gradient-to-t dark:from-[#182237] from-bgSoftLight dark:to-[#253352] shadow-inner py-5 px-6 rounded-[10px] mb-5 relative">
                <div className="flex flex-col gap-6">
                    <span className="font-bold">🚀 بزودی</span>
                    <h3 className="">سرور اکشن‌های جدید در دسترس هستند 👨‍💻</h3>
                    <span className="dark:text-textSoft text-textSoftLight font-medium text-xs">
                        بهره‌وری خود را افزایش دهید
                    </span>
                    <p className="dark:text-textSoft text-textSoftLight text-sm">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                        استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
                        ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
                    </p>
                    <button className="p-2.5 active:scale-110 transition-all ease-in-out duration-150 delay-75 flex items-center gap-2.5 w-max bg-[#8e88e7] text-white border-none rounded-md cursor-pointer">
                        یادبگیر
                        <MdReadMore />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default memo(Rightbar);
