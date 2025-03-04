import BlogSection from "./_components/BlogSection";
import Home from "./_components/Home";
import RoomsDetails from "./_components/RoomsDetails";

const page: React.FC = async () => {
  return (
    <div className="">
      <Home />
      <RoomsDetails />
      <BlogSection />
    </div>
  );
};

export default page;
