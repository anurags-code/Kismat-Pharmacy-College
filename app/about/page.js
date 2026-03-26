import Link from "next/link";

export const metadata = {
  title: "About Us | Kismat Pharmacy College",
  description:
    "Learn about Kismat Pharmacy College — our history, mission, vision, and commitment to pharmaceutical education excellence.",
};

const values = [
  {
    title: "Excellence",
    desc: "We maintain the highest standards in pharmaceutical education, research, and student development.",
    icon: "🏆",
  },
  {
    title: "Innovation",
    desc: "We foster creative thinking and research-oriented minds for the evolving pharma industry.",
    icon: "💡",
  },
  {
    title: "Integrity",
    desc: "Ethical practice and professional responsibility are at the core of our education philosophy.",
    icon: "🤝",
  },
  {
    title: "Community",
    desc: "We are committed to serving society through healthcare awareness and community pharmacy.",
    icon: "❤️",
  },
];

// const milestones = [
//   { year: '2001', event: 'College established with D.Pharm program, first batch of 60 students.' },
//   { year: '2005', event: 'B.Pharm program launched, affiliated to State University.' },
//   { year: '2010', event: 'M.Pharm (Pharmaceutics & Pharmacology) programs started.' },
//   { year: '2015', event: 'Pharm.D program introduced; new laboratory block inaugurated.' },
//   { year: '2018', event: 'Achieved A+ grade in state pharmacy college ranking.' },
//   { year: '2022', event: '5000+ alumni milestone celebrated; Research Center inaugurated.' },
//   { year: '2026', event: 'Digital smart classrooms and AI-assisted pharmacy lab launched.' },
// ];

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-[#f0fdf4] to-[#dcfce7] py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-gray-500 mb-4" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#166534]">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-[#166534] font-medium">About Us</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#14532d] mb-3">
            About Us
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl">
            Shaping pharmaceutical leaders since 2023 through quality education
            and dedicated mentorship.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#14532d] mb-5">
                Our Story
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Kismat Pharmacy College was founded in 2023 with a vision to
                provide world-class pharmaceutical education in an environment
                that nurtures academic excellence and professional integrity.
                Starting with just 60 students, we have grown to become one of
                the region's most respected pharmacy institutions.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our college is approved by the Pharmacy Council of India (PCI)
                and affiliated to the State University, offering undergraduate,
                postgraduate, and doctoral programs in pharmaceutical sciences.
              </p>
              <p className="text-gray-600 leading-relaxed">
                With state-of-the-art laboratories, a dedicated research center,
                and a faculty comprising PhDs and industry experts, we prepare
                students to excel in pharmaceutical manufacturing, clinical
                practice, research, and entrepreneurship.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "3+", label: "Years of Excellence" },
                { value: "50+", label: "Alumni Worldwide" },
                { value: "15+", label: "Expert Faculty" },
                { value: "1", label: "Programs Offered" },
                { value: "5+", label: "Research Labs" },
                { value: "90%", label: "Placement Rate" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-[#f0fdf4] rounded-xl p-5 text-center border border-green-100"
                >
                  <p className="text-3xl font-extrabold text-[#166534]">
                    {stat.value}
                  </p>
                  <p className="text-sm text-gray-600 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-[#f0fdf4] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-green-100">
              <div className="w-12 h-12 bg-[#166534] rounded-lg flex items-center justify-center text-white mb-5">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-[#14532d] mb-3">
                Our Vision
              </h2>
              <p className="text-gray-600 leading-relaxed">
                To be the premier institution for pharmaceutical education in
                the region, producing competent and ethical pharmacists who
                contribute meaningfully to healthcare, industry, and research at
                national and global levels.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm border border-green-100">
              <div className="w-12 h-12 bg-[#22c55e] rounded-lg flex items-center justify-center text-white mb-5">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-[#14532d] mb-3">
                Our Mission
              </h2>
              <p className="text-gray-600 leading-relaxed">
                To deliver quality pharmaceutical education through innovative
                teaching, practical training, and research, while instilling
                professional values, promoting evidence-based practice, and
                fostering lifelong learning in our students.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#14532d] mb-2">
              Our Core Values
            </h2>
            <p className="text-gray-600">
              The principles that guide everything we do.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val) => (
              <div
                key={val.title}
                className="text-center p-6 rounded-xl border border-gray-100 hover:border-[#22c55e] hover:shadow-md transition-all duration-200"
              >
                <div className="text-4xl mb-4">{val.icon}</div>
                <h3 className="text-lg font-bold text-[#14532d] mb-2">
                  {val.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      {/* <section className="bg-[#14532d] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Journey</h2>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-green-600" aria-hidden="true" />
            <ul className="space-y-6">
              {milestones.map((m) => (
                <li key={m.year} className="flex gap-6 items-start">
                  <div className="w-16 shrink-0 text-center">
                    <span className="inline-block px-2 py-1 bg-[#22c55e] text-white text-xs font-bold rounded">{m.year}</span>
                  </div>
                  <div className="flex-1 bg-green-800 rounded-lg p-4">
                    <p className="text-green-100 text-sm">{m.event}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section> */}

      {/* CTA */}
      <section className="bg-white py-14 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-[#14532d] mb-3">
            Join Our Growing Family
          </h2>
          <p className="text-gray-600 mb-6">
            Be part of a tradition of excellence in pharmaceutical education.
          </p>
          <Link
            href="/admissions"
            className="inline-flex items-center px-8 py-3 bg-[#166534] text-white font-bold rounded-lg hover:bg-[#14532d] transition-colors shadow-lg"
          >
            Apply for Admission
          </Link>
        </div>
      </section>
    </>
  );
}
