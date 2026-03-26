import Link from 'next/link';

export const metadata = {
  title: 'Admin Dashboard | Kismat Pharmacy College',
};

const adminModules = [
  {
    title: 'Courses Management',
    desc: 'Add, view, and manage all pharmacy courses offered by the college.',
    href: '/admin/courses',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
    color: 'bg-blue-600',
    stat: '5 Courses',
  },
  {
    title: 'Admissions Management',
    desc: 'Review, track, and manage student admission applications.',
    href: '/admin/admissions',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
    color: 'bg-[#166534]',
    stat: '4 Applications',
  },
];

const quickStats = [
  { label: 'Total Courses', value: '5', change: '+0 new', icon: '📚' },
  { label: 'Total Applications', value: '4', change: '+2 this week', icon: '📋' },
  { label: 'Approved', value: '2', change: '50% approval rate', icon: '✅' },
  { label: 'Pending Review', value: '2', change: 'Action needed', icon: '⏳' },
];

export default function AdminPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-[#14532d] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-300 text-sm font-medium mb-1">Admin Panel</p>
              <h1 className="text-3xl sm:text-4xl font-bold text-white">Dashboard</h1>
              <p className="text-green-200 mt-1">Manage courses and admissions for Kismat Pharmacy College</p>
            </div>
            <Link
              href="/"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 bg-green-700 text-white text-sm font-medium rounded-lg hover:bg-green-600 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Website
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="bg-white py-10 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {quickStats.map((stat) => (
              <div key={stat.label} className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-2xl mb-2">{stat.icon}</div>
                <p className="text-2xl font-bold text-[#14532d]">{stat.value}</p>
                <p className="text-gray-700 text-sm font-medium">{stat.label}</p>
                <p className="text-gray-400 text-xs mt-0.5">{stat.change}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modules */}
      <section className="bg-[#f9fafb] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-gray-800 mb-6">Admin Modules</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl">
            {adminModules.map((module) => (
              <Link
                key={module.title}
                href={module.href}
                className="group bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-[#22c55e] transition-all duration-200 overflow-hidden"
              >
                <div className={`${module.color} px-6 py-5 flex items-center justify-between`}>
                  <div className="text-white">{module.icon}</div>
                  <span className="text-white text-xs font-semibold bg-white/20 px-2 py-1 rounded">{module.stat}</span>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-gray-800 group-hover:text-[#166534] transition-colors">{module.title}</h3>
                  <p className="text-gray-600 text-sm mt-1">{module.desc}</p>
                  <div className="flex items-center gap-1 text-[#166534] text-sm font-semibold mt-3">
                    Manage
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Note */}
      <section className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 flex gap-3">
            <svg className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-amber-800 text-sm">
              <strong>Note:</strong> This is a demo admin panel. Data is stored in-memory and will reset on server restart. For production, connect a database like PostgreSQL or MongoDB.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
