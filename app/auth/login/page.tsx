"use client";
import React, { useState } from "react";
import Layout from "@/app/auth/auth-layout";
import Image from "next/image";

import placeholderSvg from "@/public/svgs/auth/login.placeholder.svg";
import placeholderDarkSvg from "@/public/svgs/auth/login.placeholder.dark.svg";
import googleLogo from "@/public/svgs/auth/login.google.logo.svg";
import facebookLogo from "@/public/svgs/auth/login.facebook.logo.svg";
import facebookDarkLogo from "@/public/svgs/auth/login.facebook.dark.logo.svg";
import appleLogo from "@/public/svgs/auth/login.apple.logo.svg";
import appleDarkLogo from "@/public/svgs/auth/login.apple.dark.logo.svg";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import CustomInput from "@/components/CustomInput/CustomInput";
import useTheme from "@/hooks/useTheme";

function LoginOptionCard({
  logo,
  text,
}: {
  logo: string | StaticImport;
  text: string;
}) {
  return (
    <button className="flex gap-x-4 px-4 py-2 shadow w-full rounded-[14px] dark:bg-gray-700 ">
      <div className="pl-4 ml-4 border-l border-gray-200">
        <Image src={logo} alt={text} />
      </div>
      <span className="text-sm text-gray-500 dark:text-[#ECEFF2] font-medium">
        {text}
      </span>
    </button>
  );
}

function OrSeparator() {
  return (
    <div className="h-5 items-center gap-3 inline-flex">
      <div className="grow shrink basis-0 h-0 border border-zinc-200"></div>
      <div className="text-slate-500 dark:text-gray-200 text-sm font-normal font-['Noto Sans'] leading-[18px]">
        or{" "}
      </div>
      <div className="grow shrink basis-0 h-0 border border-zinc-200"></div>
    </div>
  );
}

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const theme = useTheme();
  return (
    <Layout
      placeholderImg={theme === "dark" ? placeholderDarkSvg : placeholderSvg}
    >
      <div className="flex flex-col gap-y-6">
        <div className="flex flex-col items-center gap-y-2.5">
          <h1 className="font-vazirBold text-2xl md:text-4xl dark:text-white">
            Login
          </h1>
          <span className="font-vazirLight text-sm md:text-base dark:text-gray-200">
            خوش برگشتی! لطفا اطلاعاتت رو وارد کن.
          </span>
        </div>
        <div className="flex flex-col gap-y-7 p-2">
          <CustomInput
            id="email"
            label="ایمیل"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <CustomInput
            id="username"
            label="نام کاربری"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
        </div>
        <div className="flex flex-col gap-y-2">
          <button className="bg-blue-500 rounded-[14px] p-3 md:p-4 text-white shadow text-sm md:text-base">
            ورود
          </button>
          <button className="p-[9px] rounded-[14px] text-blue-500 dark:text-blue-300 font-vazirLight text-sm md:text-base">
            فراموشی رمز عبور
          </button>
        </div>
        {/* separator */}
        <OrSeparator />
        {/* singIn ways */}
        <div className="flex flex-col gap-y-5 items-center">
          <LoginOptionCard logo={googleLogo} text="ورود با حساب گوگل" />
          <LoginOptionCard
            logo={theme === "dark" ? facebookDarkLogo : facebookLogo}
            text="ورود با حساب فیسبوک"
          />
          <LoginOptionCard
            logo={theme === "dark" ? appleDarkLogo : appleLogo}
            text="ورود با اپل آیدی"
          />
        </div>
      </div>
    </Layout>
  );
}
