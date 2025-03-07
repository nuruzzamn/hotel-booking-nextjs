import React from "react";
import LoginForm from "../login/LoginForm";
import { auth } from "@/app/auth";
import { redirect } from "next/navigation";

const page = async () => {
  const session = await auth();

  if (session?.user) {
    redirect("/dashboard");
  } else {
    redirect("/login");
  }
  return (
    <main className="">
      <div className="mx-auto">
        <LoginForm />
      </div>
    </main>
  );
};

export default page;
