import Image from "next/image";

const infrastructure = [
  {
    title: "Modern Classrooms",
    desc: "Well-ventilated classrooms equipped with smart boards and audio-visual teaching aids.",
    img: "/Infrastructure/classroom.jpg",
  },
  {
    title: "Computer Laboratories",
    desc: "Advanced computer labs with high-speed internet and latest software for students.",
    img: "/Infrastructure/cs.jpg",
  },
  {
    title: "Central Library",
    desc: "A rich collection of books, journals, e-resources and a peaceful study environment.",
    img: "/Infrastructure/library.png",
  },
  {
    title: "Campus & Hostels",
    desc: "Spacious green campus with separate hostels for boys and girls ensuring safety.",
    img: "/Infrastructure/hostel.jpg",
  },
  {
    title: "Sports & Recreation",
    desc: "Indoor and outdoor sports facilities for physical fitness and overall development.",
    img: "/Infrastructure/playground.jpg",
  },
  {
    title: "Seminar & Conference Halls",
    desc: "Fully equipped halls for seminars, workshops, guest lectures and events.",
    img: "/Infrastructure/seminar.jpg",
  },
];

export default function Infrastructure() {
  return (
    <section className="max-w-7xl mx-auto px-4 pb-10">
      
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-3">
        RRSIMT <span className="text-red-800">Infrastructure</span>
      </h2>
      <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10">
        RRSIMT provides a modern and student-friendly infrastructure to support
        quality education, innovation, and overall development.
      </p>

      {/* Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {infrastructure.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow p-2 rounded-lg overflow-hidden hover:shadow-lg transition"
          >
            <Image
              src={item.img}
              alt={item.title}
              width={400}
              height={250}
              className="w-full h-48 object-cover rounded-md"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
