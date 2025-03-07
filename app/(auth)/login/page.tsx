import React from "react";
import LoginForm from "./LoginForm";
import { auth } from "@/app/auth";
import { redirect } from "next/navigation";

const Login = async () => {
  const session = await auth();

  if (session?.user) {
    redirect("/dashboard");
  }
  return (
    <div>
      <LoginForm />
    </div>
  );
};

export default Login;
