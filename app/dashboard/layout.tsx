import { Menu } from "lucide-react";
import { ReactNode } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import UserProfileCard from "@/app/dashboard/_components/UserProfileCard";
import DashboardNav from "./_components/DashboardNav";
import DashboardGoHomeBtn from "./_components/DashboardGoHomeBtn";

interface Props {
  children: ReactNode;
}

const DashboardLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="container mx-auto px-4 md:px-8">
      {/* User Profile Card */}
      <UserProfileCard />

      <div className="grid min-h-screen w-full lg:grid-cols-[80px_1fr] xl:grid-cols-[280px_1fr]">
        {/* Sidebar for Large Screens */}
        <aside className="hidden lg:block border-r bg-muted/40 pt-16">
          <DashboardNav />
        </aside>

        <div className="flex flex-col">
          {/* Header */}
          <header className="flex h-14 items-center justify-between border-b bg-muted/40 px-2 lg:h-[60px] lg:px-6">
            {/* Mobile Navigation */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="lg:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle navigation</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="flex flex-col">
                <span className="font-semibold pl-6">Dashboard</span>
                <DashboardNav />
              </SheetContent>
            </Sheet>

            {/* Right-side Buttons */}
            <div className="ml-auto flex items-center gap-3">
              <DashboardGoHomeBtn />
            </div>
          </header>

          {/* Main Content */}
          <main className="px-4 md:px-6 py-4">{children}</main>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
