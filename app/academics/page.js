import Link from 'next/link';

export const metadata = {
  title: 'Academics | Kismat Pharmacy College',
  description:
    'Explore the academic programs, curriculum, and research opportunities at Kismat Pharmacy College.',
};

const departments = [
  {
    name: 'Department of Pharmaceutics',
    head: 'Dr. Ramesh Kumar, Ph.D',
    overview: 'Focuses on drug formulation, dosage forms, and drug delivery systems. Equipped with advanced formulation labs.',
    subjects: ['Physical Pharmacy', 'Novel Drug Delivery Systems', 'Biopharmaceutics & Pharmacokinetics', 'Quality Assurance'],
  },
  {
    name: 'Department of Pharmacology',
    head: 'Dr. Sunita Mehta, Ph.D',
    overview: 'Covers drug action, mechanisms, clinical applications, and toxicology with a modern animal lab and clinical pharmacology resources.',
    subjects: ['General Pharmacology', 'Clinical Pharmacology', 'Toxicology', 'Drug Interactions'],
  },
  {
    name: 'Department of Pharmaceutical Chemistry',
    head: 'Dr. Anil Sharma, Ph.D',
    overview: 'Focuses on organic synthesis, medicinal chemistry, and drug design with well-equipped chemistry laboratories.',
    subjects: ['Organic Chemistry', 'Medicinal Chemistry', 'Pharmaceutical Analysis', 'Drug Design'],
  },
  {
    name: 'Department of Pharmacognosy',
    head: 'Dr. Priya Nair, Ph.D',
    overview: 'Studies medicinal plants, herbal drugs, and natural product research with a dedicated herbal garden.',
    subjects: ['Pharmacognosy', 'Phytochemistry', 'Herbal Drug Technology', 'Natural Product Chemistry'],
  },
];

const facilities = [
  { name: 'Pharmaceutical Lab', desc: 'Modern formulation and dispensing laboratory' },
  { name: 'Chemistry Lab', desc: 'Organic synthesis and analysis laboratory' },
  { name: 'Pharmacology Lab', desc: 'Experimental pharmacology with advanced equipment' },
  { name: 'Computer Lab', desc: 'Drug design and bioinformatics software access' },
  { name: 'Research Center', desc: 'Dedicated research facility for M.Pharm & Ph.D' },
  { name: 'Central Library', desc: '20,000+ books, e-journals, PubMed access' },
];

export default function AcademicsPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-[#f0fdf4] to-[#dcfce7] py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-gray-500 mb-4" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#166534]">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-[#166534] font-medium">Academics</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#14532d] mb-3">Academics</h1>
          <p className="text-gray-600 text-lg max-w-2xl">
            Rigorous curriculum, expert faculty, and modern facilities for a world-class pharmaceutical education.
          </p>
        </div>
      </section>

      {/* Departments */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#14532d] mb-10">Departments</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {departments.map((dept) => (
              <div key={dept.name} className="border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-[#166534] px-6 py-4">
                  <h3 className="text-white font-bold text-lg">{dept.name}</h3>
                  <p className="text-green-200 text-sm mt-1">HOD: {dept.head}</p>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-sm mb-4">{dept.overview}</p>
                  <h4 className="text-sm font-semibold text-[#14532d] mb-2">Key Subjects:</h4>
                  <ul className="grid grid-cols-2 gap-1">
                    {dept.subjects.map((s) => (
                      <li key={s} className="text-xs text-gray-600 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 bg-[#22c55e] rounded-full shrink-0" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="bg-[#f0fdf4] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#14532d] mb-10 text-center">Academic Facilities</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((f) => (
              <div key={f.name} className="bg-white rounded-xl p-6 shadow-sm border border-green-100 hover:border-[#22c55e] transition-colors">
                <div className="w-10 h-10 bg-[#166534] rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-[#14532d] mb-1">{f.name}</h3>
                <p className="text-gray-600 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Calendar */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#14532d] mb-8 text-center">Academic Calendar 2026–27</h2>
          <div className="overflow-x-auto rounded-xl border border-gray-100 shadow-sm">
            <table className="w-full text-sm">
              <thead className="bg-[#166534] text-white">
                <tr>
                  <th className="text-left px-6 py-3 font-semibold">Event</th>
                  <th className="text-left px-6 py-3 font-semibold">Date</th>
                  <th className="text-left px-6 py-3 font-semibold">Details</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { event: 'Admission Open', date: 'Mar 1, 2026', details: 'Applications open for all programs' },
                  { event: 'Last Date to Apply', date: 'Apr 30, 2026', details: 'Submit applications with documents' },
                  { event: 'Merit List', date: 'May 15, 2026', details: 'First merit list published' },
                  { event: 'Orientation', date: 'Jun 10, 2026', details: 'Orientation for new batch' },
                  { event: 'Classes Begin', date: 'Jun 15, 2026', details: 'First day of academic session' },
                  { event: 'Internal Exams', date: 'Sep 1–10, 2026', details: 'First internal assessment' },
                  { event: 'Semester Exams', date: 'Nov 15–30, 2026', details: 'End semester examinations' },
                  { event: 'Annual Day', date: 'Dec 20, 2026', details: 'Annual college celebration' },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-[#f0fdf4]'}>
                    <td className="px-6 py-4 font-medium text-gray-800">{row.event}</td>
                    <td className="px-6 py-4 text-[#166534] font-medium">{row.date}</td>
                    <td className="px-6 py-4 text-gray-600">{row.details}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
