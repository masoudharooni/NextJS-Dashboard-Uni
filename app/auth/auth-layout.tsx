import Image from "next/image";
import React, { ReactNode } from "react";

type TProps = {
  children: ReactNode;
  placeholderImg: string;
};

export default function AuthLayout({ children, placeholderImg }: TProps) {
  return (
    <main className="flex flex-col md:flex-row gap-3 min-h-screen dark:bg-gray-800">
      <section className="flex justify-center md:items-center md:p-8 md:w-1/2 md:min-h-full">
        <div className="w-full h-full bg-gray-50 dark:bg-[#39434F] md:rounded-3xl md:px-5 md:py-32">
          <Image
            src={placeholderImg}
            alt="placeholder image"
            className="w-full h-full"
          />
        </div>
      </section>
      <section className="p-6 md:p-16 xl:p-32 bg-white dark:bg-[#2A3240] md:dark:bg-inherit shadow-2xl md:shadow-none rounded-t-[34px] md:h-full md:w-1/2">
        {children}
      </section>
    </main>
  );
}
