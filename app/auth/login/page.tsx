import React, { ReactNode } from "react";
import Layout from "@/app/auth/auth-layout";
import Image from "next/image";

import placeholderSvg from "@/public/svgs/auth/login.placeholder.svg";
import googleLogo from "@/public/svgs/auth/login.google.logo.svg";
import facebookLogo from "@/public/svgs/auth/login.facebook.logo.svg";
import appleLogo from "@/public/svgs/auth/login.apple.logo.svg";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

function LoginOptionCard({
  logo,
  text,
}: {
  logo: string | StaticImport;
  text: string;
}) {
  return (
    <button className="flex gap-x-4 px-4 py-[9px] shadow w-full rounded-[14px]">
      <div className="pl-4 ml-4 border-l border-gray-200">
        <Image src={logo} alt={text} />
      </div>
      <span className="text-sm text-gray-500 font-medium">{text}</span>
    </button>
  );
}

export default function LoginPage() {
  return (
    <Layout placeholderImg={placeholderSvg}>
      <div className="flex flex-col gap-y-6">
        <div className="flex flex-col items-center gap-y-2.5">
          <h1 className="font-vazirBold text-[26px]">Login</h1>
          <span className="font-vazirLight text-sm">
            خوش برگشتی! لطفا اطلاعاتت رو وارد کن.
          </span>
        </div>
        <div className="flex flex-col gap-y-[26px] bg-red-500 p-2">
          <input type="text" />
          <input type="text" />
        </div>
        <div className="flex flex-col gap-y-2">
          <button className="bg-blue-500 rounded-[14px] p-[13px] text-white shadow ">
            ورود
          </button>
          <button className="p-[9px] rounded-[14px] text-blue-500 font-vazirLight text-sm">
            فراموشی رمز عبور
          </button>
        </div>
        {/* separator */}
        <div className="h-[18px] items-center gap-3 inline-flex">
          <div className="grow shrink basis-0 h-[0px] border border-zinc-200"></div>
          <div className="text-slate-500 text-sm font-normal font-['Noto Sans'] leading-[18px]">
            or{" "}
          </div>
          <div className="grow shrink basis-0 h-[0px] border border-zinc-200"></div>
        </div>
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
