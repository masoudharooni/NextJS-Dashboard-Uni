import React from "react";
import Layout from "@/app/auth/auth-layout";
import placeholderSvg from "@/public/svgs/auth/login.placeholder.svg";

export default function LoginPage() {
  return (
    <Layout placeholderImg={placeholderSvg}>
      <div>
        <span className="font-vazirBold">Login</span>
      </div>
    </Layout>
  );
}
