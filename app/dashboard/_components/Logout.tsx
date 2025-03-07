import { doLogout } from "@/app/actions";
import { LockKeyholeOpen } from "lucide-react";

const Logout = () => {
  return (
    <form action={doLogout}>
      {/* <button className="bg-blue-400 my-2 text-white p-1 rounded" type="submit">
        Logout
      </button> */}

      <button
        type="submit"
        className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary cursor-pointer`}
      >
        <LockKeyholeOpen className="size-5" />
        <span className="inline lg:hidden xl:inline">Logout</span>
      </button>
    </form>
  );
};

export default Logout;
