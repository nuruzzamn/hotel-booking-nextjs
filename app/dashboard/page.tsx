// import Image from "next/image";
import { auth } from "../auth";

import { redirect } from "next/navigation";
import Hotels from "./_components/Hotels";

const page = async () => {
  const session = await auth();

  if (!session?.user) {
    redirect("/");
  } else {
    // redirect("/dashboard");
  }

  return (
    <>
      {/* <div className="max-w-7xl mx-auto px-4 md:px-8 flex gap-4 py-10">
        <Image
          src={session?.user?.image || ""}
          alt={session?.user?.name || ""}
          width={72}
          height={72}
          className="rounded-full"
        />
        <div className="text-xl flex items-center">{session?.user?.name}</div>
      </div>

      <Dashboard /> */}

      {/* <h1 className="text-2xl font-semibold px-6 pt-4">My Dashboard</h1> */}
      {/* <Dashboard /> */}
      <Hotels />
    </>
  );
};

export default page;
