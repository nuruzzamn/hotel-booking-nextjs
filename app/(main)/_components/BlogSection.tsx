import Image from "next/image";

const BlogSection = () => {
  const blogs = [
    {
      image: "/img/blog-1.jpg",
      date: "27",
      month: "July",
      year: "2022",
      title: "The ultimate guide to finding the best hotels in your area.",
      link: "#",
    },
    {
      image: "/img/blog-2.jpg",
      date: "27",
      month: "July",
      year: "2022",
      title: "Book a room today at the most affordable rates.",
      link: "#",
    },
    {
      image: "/img/blog-3.jpg",
      date: "27",
      month: "July",
      year: "2022",
      title: "Hotel booking is the best choice for hotel booking.",
      link: "#",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="text-center">
        <p className="text-yellow-600 uppercase text-sm font-semibold">
          Our Blog
        </p>
        <h2 className="text-3xl font-bold text-gray-900">
          Read Our Blog and News
        </h2>
      </div>

      <div className="flex basis-full items-center justify-center gap-y-4 md:gap-8 mt-10">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="max-w-sm rounded-lg overflow-hidden shadow-lg"
          >
            <Image
              className="w-full h-64 object-cover"
              src={blog.image}
              alt={blog.title}
              width={256}
              height={256}
              priority
            />
            <div className="p-6 bg-white relative -mt-10 shadow-md">
              <div className="flex items-center space-x-2 text-gray-500 text-sm">
                <span className="text-3xl font-bold text-black">
                  {blog.date}
                </span>
                <div>
                  <p>{blog.month}</p>
                  <p>{blog.year}</p>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mt-2">
                {blog.title}
              </h3>
              <a
                href={blog.link}
                className="text-yellow-600 font-semibold text-sm mt-2 inline-block"
              >
                READ MORE →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
