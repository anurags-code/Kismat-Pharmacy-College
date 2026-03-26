import Link from 'next/link';

export const metadata = {
  title: 'Faculty | Kismat Pharmacy College',
  description: 'Meet the expert faculty at Kismat Pharmacy College — experienced professors and researchers in pharmaceutical sciences.',
};

const faculty = [
  {
    name: 'Dr. Ramesh Kumar',
    designation: 'Professor & Principal',
    department: 'Pharmaceutics',
    qualification: 'Ph.D (Pharmaceutics), M.Pharm',
    experience: '22 Years',
    specialization: 'Novel Drug Delivery Systems',
    publications: 45,
  },
  {
    name: 'Dr. Sunita Mehta',
    designation: 'Professor & HOD',
    department: 'Pharmacology',
    qualification: 'Ph.D (Pharmacology), M.Pharm',
    experience: '18 Years',
    specialization: 'Clinical Pharmacology',
    publications: 38,
  },
  {
    name: 'Dr. Anil Sharma',
    designation: 'Professor & HOD',
    department: 'Pharmaceutical Chemistry',
    qualification: 'Ph.D (Medicinal Chemistry), M.Pharm',
    experience: '20 Years',
    specialization: 'Drug Design & Synthesis',
    publications: 52,
  },
  {
    name: 'Dr. Priya Nair',
    designation: 'Professor & HOD',
    department: 'Pharmacognosy',
    qualification: 'Ph.D (Pharmacognosy), M.Pharm',
    experience: '15 Years',
    specialization: 'Herbal Drug Technology',
    publications: 30,
  },
  {
    name: 'Prof. Deepa Rao',
    designation: 'Associate Professor',
    department: 'Pharmaceutics',
    qualification: 'M.Pharm, B.Pharm',
    experience: '12 Years',
    specialization: 'Biopharmaceutics & Pharmacokinetics',
    publications: 18,
  },
  {
    name: 'Prof. Sanjay Verma',
    designation: 'Associate Professor',
    department: 'Pharmaceutical Chemistry',
    qualification: 'M.Pharm, B.Pharm',
    experience: '10 Years',
    specialization: 'Pharmaceutical Analysis',
    publications: 15,
  },
  {
    name: 'Prof. Kavitha Reddy',
    designation: 'Assistant Professor',
    department: 'Pharmacology',
    qualification: 'M.Pharm, B.Pharm',
    experience: '8 Years',
    specialization: 'Toxicology',
    publications: 10,
  },
  {
    name: 'Prof. Mohammed Iqbal',
    designation: 'Assistant Professor',
    department: 'Pharmacognosy',
    qualification: 'M.Pharm, B.Pharm',
    experience: '6 Years',
    specialization: 'Natural Product Chemistry',
    publications: 8,
  },
  {
    name: 'Prof. Anjali Patil',
    designation: 'Assistant Professor',
    department: 'Pharmaceutics',
    qualification: 'M.Pharm, B.Pharm',
    experience: '5 Years',
    specialization: 'Dosage Form Design',
    publications: 6,
  },
  {
    name: 'Prof. Vikram Singh',
    designation: 'Assistant Professor',
    department: 'Pharmaceutical Chemistry',
    qualification: 'M.Pharm, B.Pharm',
    experience: '4 Years',
    specialization: 'Organic Synthesis',
    publications: 4,
  },
  {
    name: 'Prof. Nisha Gupta',
    designation: 'Lecturer',
    department: 'Pharmacology',
    qualification: 'M.Pharm, B.Pharm',
    experience: '3 Years',
    specialization: 'Experimental Pharmacology',
    publications: 2,
  },
  {
    name: 'Prof. Rahul Desai',
    designation: 'Lecturer',
    department: 'Pharmacognosy',
    qualification: 'M.Pharm, B.Pharm',
    experience: '2 Years',
    specialization: 'Phytochemistry',
    publications: 1,
  },
];

const departmentColors = {
  'Pharmaceutics': 'bg-blue-100 text-blue-700',
  'Pharmacology': 'bg-purple-100 text-purple-700',
  'Pharmaceutical Chemistry': 'bg-orange-100 text-orange-700',
  'Pharmacognosy': 'bg-green-100 text-green-700',
};

const designationColors = {
  'Professor & Principal': 'bg-[#166534] text-white',
  'Professor & HOD': 'bg-[#14532d] text-white',
  'Associate Professor': 'bg-[#22c55e] text-white',
  'Assistant Professor': 'bg-green-200 text-green-900',
  'Lecturer': 'bg-gray-100 text-gray-700',
};

export default function FacultiesPage() {
  const departments = [...new Set(faculty.map((f) => f.department))];

  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-[#f0fdf4] to-[#dcfce7] py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-gray-500 mb-4" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#166534]">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-[#166534] font-medium">Faculty</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#14532d] mb-3">Our Faculty</h1>
          <p className="text-gray-600 text-lg max-w-2xl">
            Meet our team of {faculty.length} dedicated educators with combined expertise spanning decades of academic and industry experience.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#166534] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center text-white">
            {[
              { val: `${faculty.length}+`, label: 'Total Faculty' },
              { val: `${faculty.filter(f => f.designation.includes('Professor')).length}`, label: 'Professors' },
              { val: `${faculty.reduce((sum, f) => sum + f.publications, 0)}+`, label: 'Publications' },
              { val: '4', label: 'Departments' },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-3xl font-extrabold">{s.val}</p>
                <p className="text-green-200 text-sm mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty by Department */}
      {departments.map((dept) => (
        <section key={dept} className="bg-white py-12 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-[#14532d] mb-8 flex items-center gap-3">
              <span className="w-2 h-7 bg-[#166534] rounded inline-block" />
              Department of {dept}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {faculty
                .filter((f) => f.department === dept)
                .map((member) => (
                  <div key={member.name} className="border border-gray-100 rounded-xl p-5 hover:shadow-md transition-shadow duration-200">
                    {/* Avatar */}
                    <div className="w-16 h-16 bg-gradient-to-br from-[#166534] to-[#22c55e] rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 mx-auto">
                      {member.name.split(' ').map(n => n[0]).slice(0, 2).join('')}
                    </div>
                    <div className="text-center mb-3">
                      <h3 className="font-bold text-gray-900 text-sm">{member.name}</h3>
                      <span className={`inline-block mt-1 px-2 py-0.5 text-xs font-semibold rounded-full ${designationColors[member.designation] || 'bg-gray-100 text-gray-700'}`}>
                        {member.designation}
                      </span>
                    </div>
                    <div className="space-y-1.5 text-xs text-gray-600">
                      <div className="flex items-center gap-1.5">
                        <svg className="w-3.5 h-3.5 text-[#166534] shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" /><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                        </svg>
                        <span>{member.qualification}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <svg className="w-3.5 h-3.5 text-[#166534] shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                        </svg>
                        <span>{member.experience} Experience</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <svg className="w-3.5 h-3.5 text-[#166534] shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span>{member.publications} Publications</span>
                      </div>
                    </div>
                    <div className="mt-3 pt-3 border-t border-gray-100">
                      <p className="text-xs text-gray-500">Specialization:</p>
                      <p className="text-xs font-medium text-[#166534]">{member.specialization}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>
      ))}

      {/* Join Us */}
      <section className="bg-[#f0fdf4] py-14 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-[#14532d] mb-3">Join Our Academic Team</h2>
          <p className="text-gray-600 mb-6">We are always looking for dedicated educators and researchers to join our growing faculty.</p>
          <Link href="/contact" className="inline-flex items-center px-8 py-3 bg-[#166534] text-white font-bold rounded-lg hover:bg-[#14532d] transition-colors">
            Get In Touch
          </Link>
        </div>
      </section>
    </>
  );
}
