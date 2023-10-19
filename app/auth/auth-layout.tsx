import Image from "next/image";
import React, { ReactNode } from "react";

type TProps = {
  children: ReactNode;
  placeholderImg: string;
};

export default function AuthLayout({ children, placeholderImg }: TProps) {
  return (
    <main className="flex flex-col md:flex-row gap-3 min-h-screen">
      <section className="flex justify-center md:items-center md:p-[30px] md:w-1/2 md:min-h-full">
        <div className="w-full h-full bg-gray-50 rounded-3xl md:px-20 md:py-32">
          <Image
            src={placeholderImg}
            alt="placeholder image"
            className="w-full h-full"
          />
        </div>
      </section>
      <section className="p-6 md:p-32 bg-white shadow-md md:shadow-none rounded-t-[34px] md:h-full md:w-1/2">
        {children}
      </section>
    </main>
  );
}
