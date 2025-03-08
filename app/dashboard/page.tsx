import { auth } from "../auth";

import { redirect } from "next/navigation";
import Hotels from "./_components/Hotels";

const page = async () => {
  const session = await auth();

  if (!session?.user) {
    redirect("/login");
  } else {
    // redirect("/dashboard");
  }

  return (
    <>
      <Hotels />
    </>
  );
};

export default page;
