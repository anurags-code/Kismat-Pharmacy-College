import Link from 'next/link';
import HeroSection from '@/components/HeroSection';
import coursesData from '@/data/courses.json';

export const metadata = {
  title: 'Kismat Pharmacy College | Best Pharmacy College',
  description:
    'Kismat Pharmacy College offers quality pharmaceutical education with modern facilities and expert faculty.',
};

const highlights = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
    title: 'Quality Education',
    desc: 'Curriculum designed by industry experts following PCI guidelines with regular updates.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1 1 .03 2.603-1.337 2.603H4.135c-1.367 0-2.337-1.603-1.337-2.603L4.2 15.3" />
      </svg>
    ),
    title: 'Modern Labs',
    desc: 'State-of-the-art pharmaceutical laboratories equipped with advanced instruments.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
    title: 'Expert Faculty',
    desc: 'Over 50 experienced faculty members with PhD qualifications and industry experience.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
      </svg>
    ),
    title: '100% Placement',
    desc: 'Dedicated placement cell ensuring students get hired by top pharmaceutical companies.',
  },
];

export default function HomePage() {
  const featuredCourses = coursesData.slice(0, 3);

  return (
    <>
      <HeroSection />

      {/* Why Choose Us */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#14532d] mb-3">Why Choose Us?</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We are committed to providing top-quality pharmaceutical education with a focus on practical skills and research.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-[#22c55e] transition-all duration-200 group"
              >
                <div className="w-14 h-14 bg-[#f0fdf4] rounded-xl flex items-center justify-center text-[#166534] mb-4 group-hover:bg-[#166534] group-hover:text-white transition-colors duration-200">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-[#14532d] mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="bg-[#f0fdf4] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#14532d] mb-2">Our Programs</h2>
              <p className="text-gray-600">Industry-aligned courses for your pharmaceutical career.</p>
            </div>
            <Link href="/courses" className="hidden sm:inline-flex items-center gap-1 text-[#166534] font-semibold hover:underline text-sm">
              View All
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredCourses.map((course) => (
              <div key={course.id} className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-200 overflow-hidden border border-gray-100">
                <div className="bg-[#166534] px-6 py-4">
                  <span className="text-xs font-semibold text-green-200 uppercase tracking-wider">{course.category}</span>
                  <h3 className="text-white font-bold text-lg mt-1 leading-snug">{course.name}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{course.description}</p>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="bg-[#f0fdf4] rounded-lg p-2.5">
                      <p className="text-gray-500 text-xs">Duration</p>
                      <p className="font-semibold text-[#166534]">{course.duration}</p>
                    </div>
                    <div className="bg-[#f0fdf4] rounded-lg p-2.5">
                      <p className="text-gray-500 text-xs">Intake</p>
                      <p className="font-semibold text-[#166534]">{course.intake} Seats</p>
                    </div>
                  </div>
                  <Link
                    href="/admissions"
                    className="mt-4 block text-center py-2 bg-[#166534] text-white text-sm font-semibold rounded-lg hover:bg-[#14532d] transition-colors"
                  >
                    Apply Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8 sm:hidden">
            <Link href="/courses" className="inline-flex items-center gap-1 text-[#166534] font-semibold hover:underline">
              View All Courses
            </Link>
          </div>
        </div>
      </section>

      {/* Notice Board */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Notices */}
            <div>
              <h2 className="text-2xl font-bold text-[#14532d] mb-6 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-[#166534] rounded inline-block" />
                Notice Board
              </h2>
              <ul className="space-y-3">
                {[
                  { date: 'Mar 20, 2026', text: 'Admissions open for B.Pharm 2026-27 batch. Apply before April 30.' },
                  { date: 'Mar 15, 2026', text: 'National Pharmacy Week seminar on March 28. All students must attend.' },
                  { date: 'Mar 10, 2026', text: 'Practical examinations schedule for III semester published.' },
                  { date: 'Mar 05, 2026', text: 'Campus placement drive by MedPharma Ltd. on April 5, 2026.' },
                  { date: 'Feb 28, 2026', text: 'Library extended hours during examination period: 7 AM – 10 PM.' },
                ].map((notice, i) => (
                  <li key={i} className="flex gap-4 p-4 rounded-lg border border-gray-100 hover:border-[#22c55e] hover:bg-[#f0fdf4] transition-all duration-200">
                    <div className="text-xs text-gray-400 shrink-0 pt-0.5 w-20">{notice.date}</div>
                    <div className="flex-1">
                      <span className="inline-block w-1.5 h-1.5 bg-[#dc2626] rounded-full mr-2 mt-1.5 align-top" />
                      <span className="text-gray-700 text-sm">{notice.text}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Events */}
            <div>
              <h2 className="text-2xl font-bold text-[#14532d] mb-6 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-[#22c55e] rounded inline-block" />
                Upcoming Events
              </h2>
              <div className="space-y-4">
                {[
                  { month: 'APR', day: '05', title: 'Campus Placement Drive', desc: 'MedPharma Ltd. visiting for B.Pharm & M.Pharm recruitments.' },
                  { month: 'APR', day: '15', title: 'Annual Science Exhibition', desc: 'Students showcase pharmaceutical research and innovations.' },
                  { month: 'MAY', day: '01', title: 'Last Date – B.Pharm Admission', desc: 'Deadline for admission applications for 2026-27.' },
                  { month: 'MAY', day: '20', title: 'Fresher\'s Orientation', desc: 'Welcome ceremony for new batch of students.' },
                ].map((event, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-lg border border-gray-100 hover:shadow-md transition-shadow duration-200">
                    <div className="text-center bg-[#166534] text-white rounded-lg px-3 py-2 shrink-0 min-w-[52px]">
                      <p className="text-xs font-semibold">{event.month}</p>
                      <p className="text-xl font-bold leading-none">{event.day}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 text-sm">{event.title}</h3>
                      <p className="text-gray-500 text-xs mt-0.5">{event.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-gradient-to-r from-[#166534] to-[#14532d] py-14">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Ready to Start Your Pharmacy Career?</h2>
          <p className="text-green-200 mb-8 text-lg">Join thousands of successful pharmacists who started their journey here.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/admissions" className="px-8 py-3 bg-white text-[#166534] font-bold rounded-lg hover:bg-gray-100 transition-colors shadow-lg">
              Apply for Admission
            </Link>
            <Link href="/contact" className="px-8 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-[#166534] transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
