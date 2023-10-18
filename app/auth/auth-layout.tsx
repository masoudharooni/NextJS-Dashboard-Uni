import Image from "next/image";
import React, { ReactNode } from "react";

type TProps = {
  children: ReactNode;
  placeholderImg: string;
};

export default function AuthLayout({ children, placeholderImg }: TProps) {
  return (
    <main className="flex flex-col gap-3 ">
      <section className="flex justify-center">
        <Image src={placeholderImg} alt="placeholder image" />
      </section>
      <section
        className="p-6 bg-white rounded-t-[34px]"
        style={{ boxShadow: "0px 1px 20px 0px rgba(129, 129, 129, 0.16)" }}
      >
        {children}
      </section>
    </main>
  );
}
