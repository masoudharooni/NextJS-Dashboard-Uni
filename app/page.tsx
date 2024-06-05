"use client";
import React, { FormEvent, useState } from "react";
import Layout from "@/components/auth-layout";
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
import usersSource from "@/sources/users";
import { Alert } from "@mui/material";
import { useRouter } from "next/navigation";

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
    <button className="hover:scale-105 transition ease-in-out duration-150 delay-75 flex gap-x-4 px-4 py-2 items-center shadow w-full rounded-[14px] dark:bg-gray-700 ">
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

type TAlert = {
  message: string;
  type: "error" | "info" | "success" | "warning";
};
export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState<TAlert>({
    message: "",
    type: "error",
  });
  const router = useRouter()
  const theme = useTheme();

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const currentUser = usersSource.find((u) => u.email === email);
    if (!!!currentUser)
      return setAlert((prev) => ({
        ...prev,
        message: "Your Password or Email is incorrect!",
      }));
    if (currentUser.password !== password)
      return setAlert((prev) => ({
        ...prev,
        message: "Your Password or Email is incorrect!",
      }));
    console.log(currentUser);
    setAlert(() => ({
      type: "success",
      message: "You are logged in now :)",
    }));
    router.push("/dashboard");
  };
  return (
    <>
      {!!alert.message && (
        <Alert
          onClose={() => setAlert((prev) => ({ ...prev, message: "" }))}
          variant="filled"
          severity={alert.type}
        >
          {alert.message}
        </Alert>
      )}
      <Layout
        placeholderImg={theme === "dark" ? placeholderDarkSvg : placeholderSvg}
      >
        <div className="flex flex-col gap-y-6 pb-10">
          <div className="flex flex-col items-center gap-y-2.5">
            <h1 className="font-vazirBold text-2xl md:text-4xl dark:text-white">
              Login
            </h1>
            <span className="font-vazirLight text-sm md:text-base dark:text-gray-200">
              Welcome back! Please enter the information.
            </span>
          </div>
          <form onSubmit={submitHandler}>
            <div className="flex flex-col gap-y-7 p-2">
              <CustomInput
                id="email"
                label="Email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <CustomInput
                id="password"
                label="Password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <MuiButton
                type="submit"
                color="primary"
                sx={{ width: "100%", borderRadius: "12px", p: "12px" }}
              >
                Login
              </MuiButton>
              <MuiButton variant="text">Forget password</MuiButton>
            </div>
          </form>
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
    </>
  );
}
