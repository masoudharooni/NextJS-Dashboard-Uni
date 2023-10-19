"use client";
import React, { useState } from "react";
import Layout from "@/app/auth/auth-layout";
import Image from "next/image";

import placeholderSvg from "@/public/svgs/auth/login.placeholder.svg";
import googleLogo from "@/public/svgs/auth/login.google.logo.svg";
import facebookLogo from "@/public/svgs/auth/login.facebook.logo.svg";
import appleLogo from "@/public/svgs/auth/login.apple.logo.svg";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import CustomInput from "@/components/CustomInput";

function LoginOptionCard({
  logo,
  text,
}: {
  logo: string | StaticImport;
  text: string;
}) {
  return (
    <button className="flex gap-x-4 px-4 py-2 shadow w-full rounded-[14px]">
      <div className="pl-4 ml-4 border-l border-gray-200">
        <Image src={logo} alt={text} />
      </div>
      <span className="text-sm text-gray-500 font-medium">{text}</span>
    </button>
  );
}

function OrSeparator() {
  return (
    <div className="h-5 items-center gap-3 inline-flex">
      <div className="grow shrink basis-0 h-0 border border-zinc-200"></div>
      <div className="text-slate-500 text-sm font-normal font-['Noto Sans'] leading-[18px]">
        or{" "}
      </div>
      <div className="grow shrink basis-0 h-0 border border-zinc-200"></div>
    </div>
  );
}

export default function LoginPage() {
  const [email, setEmail] = useState("");
  return (
    <Layout placeholderImg={placeholderSvg}>
      <div className="flex flex-col gap-y-6">
        <div className="flex flex-col items-center gap-y-2.5">
          <h1 className="font-vazirBold text-2xl md:text-4xl">Login</h1>
          <span className="font-vazirLight text-sm md:text-base">
            خوش برگشتی! لطفا اطلاعاتت رو وارد کن.
          </span>
        </div>
        <div className="flex flex-col gap-y-7 p-2">
          <CustomInput
            id="email"
            label="ایمیل"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="masoudharooni50@gmail.com"
          />
          <CustomInput
            id="email"
            label="ایمیل"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="masoudharooni50@gmail.com"
          />
        </div>
        <div className="flex flex-col gap-y-2">
          <button className="bg-blue-500 rounded-[14px] p-3 md:p-4 text-white shadow text-sm md:text-base">
            ورود
          </button>
          <button className="p-[9px] rounded-[14px] text-blue-500 font-vazirLight text-sm md:text-base">
            فراموشی رمز عبور
          </button>
        </div>
        {/* separator */}
        <OrSeparator />
        {/* singIn ways */}
        <div className="flex flex-col gap-y-5 items-center">
          <LoginOptionCard logo={googleLogo} text="ورود با گوگل" />
          <LoginOptionCard logo={facebookLogo} text="ورود با فیسبوک" />
          <LoginOptionCard logo={appleLogo} text="ورود با اپل" />
        </div>
      </div>
    </Layout>
  );
}
