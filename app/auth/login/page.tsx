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
import MuiButton from "@/components/MUI/muiButton";

function LoginOptionCard({
  logo,
  text,
  imageKey,
}: {
  logo: string | StaticImport;
  text: string;
  imageKey?: React.Key;
}) {
  return (
    <button className="flex gap-x-4 px-4 py-2 shadow w-full rounded-[14px] dark:bg-gray-700 ">
      <div className="pr-4 mr-4 border-r border-gray-200">
        <Image src={logo} alt={text} key={imageKey} />
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
            Welcome back! Please enter the information.
          </span>
        </div>
        <div className="flex flex-col gap-y-7 p-2">
          <CustomInput
            id="email"
            label="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <CustomInput
            id="username"
            label="Username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
        </div>
        <div className="flex flex-col gap-y-2">
          <MuiButton
            color="primary"
            sx={{ width: "100%", borderRadius: "12px", p: "12px" }}
          >
            Login
          </MuiButton>
          <MuiButton variant="text">Forget password</MuiButton>
        </div>
        <OrSeparator />
        <div className="flex flex-col gap-y-5 items-center">
          <LoginOptionCard logo={googleLogo} text="Login with Google" />
          <LoginOptionCard
            logo={theme === "dark" ? facebookDarkLogo : facebookLogo}
            text="Login with Facebook"
            imageKey={theme}
          />
          <LoginOptionCard
            logo={theme === "dark" ? appleDarkLogo : appleLogo}
            text="Login with Apple"
            imageKey={theme}
          />
        </div>
      </div>
    </Layout>
  );
}
