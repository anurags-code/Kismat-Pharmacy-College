import Link from 'next/link';

export const metadata = {
  title: 'Committees | Kismat Pharmacy College',
  description: 'Learn about the various committees at Kismat Pharmacy College ensuring quality, welfare, and discipline.',
};

const committees = [
  {
    name: 'Anti-Ragging Committee',
    chairman: 'Dr. Ramesh Kumar',
    members: ['Prof. Sunita Mehta', 'Prof. Anil Sharma', 'Mr. Ravi Patil (Administrative)', 'Student Representative'],
    purpose: 'Ensures a ragging-free campus by monitoring, receiving complaints, and taking strict action against any form of ragging.',
    contact: 'antiragging@kismatpharmacy.edu.in',
  },
  {
    name: 'Internal Complaints Committee (ICC)',
    chairman: 'Dr. Priya Nair',
    members: ['Prof. Deepa Rao', 'Prof. Sanjay Verma', 'Ms. Kavita Sharma (Legal Expert)', 'NGO Representative'],
    purpose: 'Addresses complaints related to sexual harassment at the workplace as per POSH Act 2013 guidelines.',
    contact: 'icc@kismatpharmacy.edu.in',
  },
  {
    name: 'Academic Committee',
    chairman: 'Dr. Anil Sharma',
    members: ['Dr. Sunita Mehta', 'Dr. Ramesh Kumar', 'Dr. Priya Nair', 'Dr. Deepa Rao'],
    purpose: 'Oversees curriculum development, academic quality, examination planning, and academic policy implementation.',
    contact: 'academics@kismatpharmacy.edu.in',
  },
  {
    name: 'Student Welfare Committee',
    chairman: 'Prof. Sanjay Verma',
    members: ['Prof. Kavitha Reddy', 'Mr. Mohan Das (Admin)', 'Student Body President', 'Student Vice-President'],
    purpose: 'Supports student well-being, organizes cultural events, addresses grievances, and promotes student development activities.',
    contact: 'welfare@kismatpharmacy.edu.in',
  },
  {
    name: 'Research & Development Committee',
    chairman: 'Dr. Ramesh Kumar',
    members: ['Dr. Priya Nair', 'Dr. Anil Sharma', 'Dr. Deepa Rao', 'External Research Advisor'],
    purpose: 'Promotes research culture, manages research grants, guides project work, and facilitates publications and patents.',
    contact: 'research@kismatpharmacy.edu.in',
  },
  {
    name: 'Grievance Redressal Committee',
    chairman: 'Dr. Sunita Mehta',
    members: ['Prof. Kavitha Reddy', 'Mr. Ravi Patil', 'Student Ombudsman', 'Parent Representative'],
    purpose: 'Provides a formal channel for students and staff to submit and resolve academic, administrative, or personal grievances.',
    contact: 'grievance@kismatpharmacy.edu.in',
  },
  {
    name: 'Placement & Training Committee',
    chairman: 'Prof. Deepa Rao',
    members: ['Prof. Sanjay Verma', 'Industry Liaison Officer', 'Student Placement Coordinator'],
    purpose: 'Coordinates campus recruitment, training programs, industry visits, and internship placements for students.',
    contact: 'placement@kismatpharmacy.edu.in',
  },
  {
    name: 'Library Committee',
    chairman: 'Dr. Anil Sharma',
    members: ['Chief Librarian', 'Prof. Kavitha Reddy', 'Student Representative'],
    purpose: 'Manages library resources, procurement of books and journals, digital access, and library policies.',
    contact: 'library@kismatpharmacy.edu.in',
  },
];

export default function CommitteesPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-[#f0fdf4] to-[#dcfce7] py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-gray-500 mb-4" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#166534]">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-[#166534] font-medium">Committees</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#14532d] mb-3">Committees</h1>
          <p className="text-gray-600 text-lg max-w-2xl">
            Our college maintains a transparent and well-organized governance structure through dedicated committees.
          </p>
        </div>
      </section>

      {/* Committees Grid */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {committees.map((committee) => (
              <article key={committee.name} className="border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="bg-[#166534] px-6 py-4">
                  <h2 className="text-white font-bold text-lg">{committee.name}</h2>
                  <p className="text-green-200 text-sm mt-0.5">Chairman: {committee.chairman}</p>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{committee.purpose}</p>
                  <div className="mb-4">
                    <h3 className="text-xs font-semibold text-[#14532d] uppercase tracking-wider mb-2">Committee Members</h3>
                    <ul className="space-y-1">
                      {committee.members.map((m) => (
                        <li key={m} className="text-sm text-gray-700 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-[#22c55e] rounded-full shrink-0" />
                          {m}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-500 border-t border-gray-100 pt-4">
                    <svg className="w-3.5 h-3.5 text-[#166534]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
                    </svg>
                    <a href={`mailto:${committee.contact}`} className="text-[#166534] hover:underline">{committee.contact}</a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="bg-[#f0fdf4] py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-[#14532d] mb-3">Regulatory Compliance</h2>
          <p className="text-gray-600 mb-6">All committees function in strict compliance with UGC, PCI, and institutional guidelines to ensure the highest standards of governance.</p>
          <div className="flex flex-wrap justify-center gap-4">
            {['UGC Compliant', 'PCI Approved', 'NAAC Accredited', 'ISO 9001:2015'].map((badge) => (
              <span key={badge} className="px-4 py-2 bg-white border border-[#22c55e] text-[#166534] text-sm font-semibold rounded-full shadow-sm">
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
