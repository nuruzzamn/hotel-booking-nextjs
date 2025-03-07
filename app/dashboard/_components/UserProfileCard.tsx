import React from "react";
import { Card, CardContent } from "../../../components/ui/card";
import { auth } from "@/app/auth";
import Image from "next/image";

const UserProfileCard = async () => {
  const session = await auth();

  return (
    <section className="pt-10">
      <Card className="max-w-sm">
        <CardContent className="p-4 flex gap-4">
          <Image
            src={session?.user?.image || ""}
            alt={session?.user?.name || ""}
            width={72}
            height={72}
            className="rounded-full border border-primary"
          />
          <div className="text-xl flex items-center">{session?.user?.name}</div>
        </CardContent>
      </Card>
    </section>
  );
};

export default UserProfileCard;
