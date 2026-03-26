import Link from 'next/link';
import coursesData from '@/data/courses.json';

export const metadata = {
  title: 'Courses | Kismat Pharmacy College',
  description:
    'Explore all pharmacy programs at Kismat Pharmacy College — B.Pharm, D.Pharm, M.Pharm, and Pharm.D.',
};

const categoryColors = {
  Undergraduate: 'bg-blue-100 text-blue-800',
  Diploma: 'bg-yellow-100 text-yellow-800',
  Postgraduate: 'bg-purple-100 text-purple-800',
  Doctorate: 'bg-red-100 text-red-800',
};

export default function CoursesPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-[#f0fdf4] to-[#dcfce7] py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-gray-500 mb-4" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#166534]">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-[#166534] font-medium">Courses</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#14532d] mb-3">Courses Offered</h1>
          <p className="text-gray-600 text-lg max-w-2xl">
            PCI-approved pharmacy programs designed to build skilled, knowledgeable pharmaceutical professionals.
          </p>
        </div>
      </section>

      {/* Course Cards */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coursesData.map((course) => (
              <article key={course.id} className="border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-200">
                <div className="bg-[#166534] px-6 py-5">
                  <span className={`inline-block px-3 py-0.5 rounded-full text-xs font-semibold mb-2 ${categoryColors[course.category] || 'bg-gray-100 text-gray-700'}`}>
                    {course.category}
                  </span>
                  <h2 className="text-white font-bold text-xl leading-snug">{course.name}</h2>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">{course.description}</p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                    {[
                      { label: 'Duration', value: course.duration },
                      { label: 'Intake', value: `${course.intake} Seats` },
                      { label: 'Annual Fee', value: course.fee },
                      { label: 'Eligibility', value: course.eligibility },
                    ].map((info) => (
                      <div key={info.label} className="bg-[#f0fdf4] rounded-lg p-3">
                        <p className="text-gray-400 text-xs">{info.label}</p>
                        <p className="text-[#166534] font-semibold text-xs mt-0.5">{info.value}</p>
                      </div>
                    ))}
                  </div>
                  <Link
                    href="/admissions"
                    className="inline-flex items-center gap-2 px-5 py-2 bg-[#166534] text-white text-sm font-semibold rounded-lg hover:bg-[#14532d] transition-colors"
                  >
                    Apply for this Course
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#f0fdf4] py-14 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-[#14532d] mb-3">Have Questions About Our Programs?</h2>
          <p className="text-gray-600 mb-6">Our admissions team is ready to help you choose the right course.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="px-6 py-3 bg-[#166534] text-white font-bold rounded-lg hover:bg-[#14532d] transition-colors">
              Contact Us
            </Link>
            <Link href="/admissions" className="px-6 py-3 border-2 border-[#166534] text-[#166534] font-bold rounded-lg hover:bg-[#f0fdf4] transition-colors">
              Apply Now
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
