import Link from 'next/link';
import committeesData from '@/data/committees.json';

export const metadata = {
  title: 'Committees | Kismat Pharmacy College',
  description:
    'Learn about the various committees at Kismat Pharmacy College ensuring quality, welfare, and discipline.',
};

export default function CommitteesPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-[#f0fdf4] to-[#dcfce7] py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav
            className="text-sm text-gray-500 mb-4"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="hover:text-[#166534]">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-[#166534] font-medium">
              Committees
            </span>
          </nav>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#14532d] mb-3">
            Committees
          </h1>

          <p className="text-gray-600 text-lg max-w-2xl">
            Our college maintains a transparent and well-organized
            governance structure through dedicated committees.
          </p>
        </div>
      </section>

      {/* Committees Grid */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {committeesData.map((committee, index) => (
              <article
                key={committee.name || index}
                className="border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                {/* Header */}
                <div className="bg-[#166534] px-6 py-4">
                  <h2 className="text-white font-bold text-lg">
                    {committee.name}
                  </h2>
                  <p className="text-green-200 text-sm mt-0.5">
                    Chairman: {committee.chairman}
                  </p>
                </div>

                {/* Body */}
                <div className="p-6">
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {committee.purpose}
                  </p>

                  {/* Members */}
                  <div className="mb-6">
                    <h3 className="text-xs font-semibold text-[#14532d] uppercase tracking-wider mb-2">
                      Committee Members
                    </h3>
                    <ul className="space-y-1">
                      {committee.members.map((member, memberIndex) => (
                        <li
                          key={memberIndex}
                          className="text-sm text-gray-700 flex items-center gap-2"
                        >
                          <span className="w-1.5 h-1.5 bg-[#22c55e] rounded-full shrink-0" />
                          {member}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* PDF Button */}
                  {committee.pdf && (
                    <div className="mb-4 p-3 bg-green-50 border border-green-100 rounded-lg">
                      <a
                        href={committee.pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full bg-[#166534] hover:bg-[#14532d] text-white px-4 py-2.5 rounded-lg font-medium transition-all duration-200 shadow-sm hover:shadow-md text-sm group"
                      >
                        <svg
                          className="w-4 h-4 group-hover:scale-110 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                        📄 View / Download PDF
                      </a>

                      {/* Optional file size */}
                      {committee.size && (
                        <p className="text-xs text-gray-500 mt-2 text-center">
                          File size: {committee.size}
                        </p>
                      )}
                    </div>
                  )}

                  {/* Contact */}
                  {/* <div className="flex items-center gap-2 text-xs text-gray-500 border-t border-gray-100 pt-4">
                    <svg
                      className="w-3.5 h-3.5 text-[#166534]"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>

                    <a
                      href={`mailto:${committee.contact}`}
                      className="text-[#166534] hover:underline"
                    >
                      {committee.contact}
                    </a>
                  </div> */}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="bg-[#f0fdf4] py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-[#14532d] mb-3">
            Regulatory Compliance
          </h2>

          <p className="text-gray-600 mb-6">
            All committees function in strict compliance with UGC, PCI,
            and institutional guidelines to ensure the highest standards
            of governance.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              'PCI Approved',
            ].map((badge, index) => (
              <span
                key={badge || index}
                className="px-4 py-2 bg-white border border-[#22c55e] text-[#166534] text-sm font-semibold rounded-full shadow-sm"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}