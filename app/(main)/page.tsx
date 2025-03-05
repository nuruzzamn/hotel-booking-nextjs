import BlogSection from "./_components/BlogSection";
import Home from "./_components/Home";
import ReservationContent from "./_components/ReservationContent";
import RoomsDetails from "./_components/RoomsDetails";

const page: React.FC = async () => {
  return (
    <div className="">
      <Home />
      <RoomsDetails />
      <BlogSection />
      <ReservationContent />
    </div>
  );
};

export default page;
