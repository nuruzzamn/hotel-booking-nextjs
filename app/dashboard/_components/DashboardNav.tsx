"use client";

import {
  LayoutDashboard,
  LockKeyholeOpen,
  Package,
  PackagePlus,
} from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import { useEffect } from "react";
import Logout from "./Logout";

const DashboardNav = () => {
  const pathname = usePathname();
  const { data: session, status } = useSession();
  // const isAdmin = session?.user?.role === "admin";
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      return;
    }
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [session, status, router]);

  // const handleSignOut = async () => {
  //   try {
  //     await signOut({ redirect: false });
  //     router.push("/login");
  //   } catch (error) {
  //     console.error("Logout error:", error);
  //   }
  // };

  return (
    <nav className="grid items-start px-2 font-medium lg:px-4 gap-1">
      <Link
        href={`/dashboard`}
        className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${
          pathname === `/dashboard` && "bg-muted text-primary"
        } `}
      >
        <LayoutDashboard className="size-5" />
        <span className="inline lg:hidden xl:inline">Dashboard</span>
      </Link>

      <>
        <Link
          href={`/dashboard/hotels`}
          className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${
            pathname.includes("hotels") && "bg-muted text-primary"
          }`}
        >
          <Package className="size-5" />
          <span className="inline lg:hidden xl:inline">Hotels</span>
        </Link>
        <Link
          href={`/dashboard/manage-hotels`}
          className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${
            pathname.includes("manage-hotels") && "bg-muted text-primary"
          }`}
        >
          <PackagePlus className="size-5" />
          <span className="inline lg:hidden xl:inline"> Manage Hotels</span>
        </Link>
      </>
      {/* 
      <button
        onClick={handleSignOut}
        className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary cursor-pointer`}
      >
        <LockKeyholeOpen className="size-5" />
        <span className="inline lg:hidden xl:inline">Logout</span>
      </button> */}

      <Logout />
    </nav>
  );
};

export default DashboardNav;
