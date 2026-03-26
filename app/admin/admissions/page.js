'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const courses = [
  'Bachelor of Pharmacy (B.Pharm)',
  'Diploma in Pharmacy (D.Pharm)',
  'Master of Pharmacy (M.Pharm) - Pharmaceutics',
  'Master of Pharmacy (M.Pharm) - Pharmacology',
  'Pharm.D (Doctor of Pharmacy)',
];

const emptyForm = {
  applicantName: '',
  email: '',
  phone: '',
  course: '',
  academicScore: '',
};

const statusColors = {
  Approved: 'bg-green-100 text-green-800',
  Pending: 'bg-yellow-100 text-yellow-800',
  'Under Review': 'bg-blue-100 text-blue-800',
  Rejected: 'bg-red-100 text-red-800',
};

export default function AdminAdmissionsPage() {
  const [admissions, setAdmissions] = useState([]);
  const [form, setForm] = useState(emptyForm);
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    fetchAdmissions();
  }, []);

  const fetchAdmissions = async () => {
    setFetching(true);
    try {
      const res = await fetch('/api/admissions');
      const data = await res.json();
      setAdmissions(data);
    } catch {
      setError('Failed to load admissions.');
    } finally {
      setFetching(false);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.applicantName || !form.email || !form.phone || !form.course || !form.academicScore) {
      setError('Please fill all required fields.');
      return;
    }
    setLoading(true);
    try {
      const res = await fetch('/api/admissions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        const newApplication = await res.json();
        setAdmissions((prev) => [...prev, newApplication]);
        setForm(emptyForm);
        setShowForm(false);
        setSuccess('Application added successfully!');
        setTimeout(() => setSuccess(''), 4000);
      } else {
        setError('Failed to add application.');
      }
    } catch {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const statuses = ['All', 'Approved', 'Pending', 'Under Review', 'Rejected'];
  const filtered = filter === 'All' ? admissions : admissions.filter((a) => a.status === filter);

  const countByStatus = (s) => admissions.filter((a) => a.status === s).length;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-[#166534] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 text-green-300 text-sm mb-1">
              <Link href="/admin" className="hover:text-white transition-colors">Admin</Link>
              <span>/</span>
              <span className="text-white font-medium">Admissions</span>
            </div>
            <h1 className="text-2xl font-bold text-white">Admissions Management</h1>
          </div>
          <button
            onClick={() => { setShowForm(!showForm); setError(''); }}
            className="flex items-center gap-2 px-4 py-2 bg-white text-[#166534] text-sm font-bold rounded-lg hover:bg-gray-100 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
            Add Application
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Total Applications', value: admissions.length, color: 'text-gray-800' },
            { label: 'Approved', value: countByStatus('Approved'), color: 'text-green-700' },
            { label: 'Pending', value: countByStatus('Pending'), color: 'text-yellow-700' },
            { label: 'Under Review', value: countByStatus('Under Review'), color: 'text-blue-700' },
          ].map((s) => (
            <div key={s.label} className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
              <p className={`text-2xl font-bold ${s.color}`}>{s.value}</p>
              <p className="text-gray-500 text-sm">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Alerts */}
        {success && (
          <div className="mb-5 p-4 bg-green-50 border border-green-200 text-green-800 rounded-lg flex items-center gap-2">
            <svg className="w-5 h-5 text-green-600 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {success}
          </div>
        )}
        {error && (
          <div className="mb-5 p-4 bg-red-50 border border-red-200 text-[#dc2626] rounded-lg">{error}</div>
        )}

        {/* Add Application Form */}
        {showForm && (
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-8 overflow-hidden">
            <div className="bg-[#f0fdf4] px-6 py-4 border-b border-gray-200">
              <h2 className="font-bold text-[#14532d]">Add New Application</h2>
            </div>
            <form onSubmit={handleSubmit} className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-5" noValidate>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Applicant Name <span className="text-[#dc2626]">*</span>
                </label>
                <input
                  name="applicantName"
                  type="text"
                  value={form.applicantName}
                  onChange={handleChange}
                  placeholder="Full name"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#166534]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email <span className="text-[#dc2626]">*</span>
                </label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="applicant@email.com"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#166534]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone <span className="text-[#dc2626]">*</span>
                </label>
                <input
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="10-digit number"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#166534]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Academic Score <span className="text-[#dc2626]">*</span>
                </label>
                <input
                  name="academicScore"
                  type="text"
                  value={form.academicScore}
                  onChange={handleChange}
                  placeholder="e.g. 75%"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#166534]"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Applied Course <span className="text-[#dc2626]">*</span>
                </label>
                <select
                  name="course"
                  value={form.course}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#166534] bg-white"
                >
                  <option value="">-- Select a course --</option>
                  {courses.map((c) => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
              <div className="sm:col-span-2 flex gap-3">
                <button
                  type="submit"
                  disabled={loading}
                  className="px-6 py-2 bg-[#166534] text-white font-semibold rounded-lg hover:bg-[#14532d] transition-colors disabled:opacity-60 text-sm"
                >
                  {loading ? 'Adding...' : 'Add Application'}
                </button>
                <button
                  type="button"
                  onClick={() => { setShowForm(false); setForm(emptyForm); setError(''); }}
                  className="px-6 py-2 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition-colors text-sm"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-5">
          {statuses.map((s) => (
            <button
              key={s}
              onClick={() => setFilter(s)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                filter === s
                  ? 'bg-[#166534] text-white'
                  : 'bg-white border border-gray-200 text-gray-700 hover:border-[#22c55e]'
              }`}
            >
              {s} {s !== 'All' && `(${countByStatus(s)})`}
            </button>
          ))}
        </div>

        {/* Admissions Table */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="font-bold text-gray-800">Applications ({filtered.length})</h2>
          </div>
          {fetching ? (
            <div className="py-16 text-center text-gray-500">
              <svg className="animate-spin w-8 h-8 mx-auto mb-3 text-[#166534]" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Loading applications...
            </div>
          ) : filtered.length === 0 ? (
            <div className="py-16 text-center text-gray-500">No applications found.</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="text-left px-6 py-3 font-semibold text-gray-600">Applicant</th>
                    <th className="text-left px-6 py-3 font-semibold text-gray-600">Course</th>
                    <th className="text-left px-6 py-3 font-semibold text-gray-600">Score</th>
                    <th className="text-left px-6 py-3 font-semibold text-gray-600">Applied Date</th>
                    <th className="text-left px-6 py-3 font-semibold text-gray-600">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {filtered.map((app) => (
                    <tr key={app.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <p className="font-medium text-gray-900">{app.applicantName}</p>
                        <p className="text-gray-400 text-xs">{app.email}</p>
                        <p className="text-gray-400 text-xs">{app.phone}</p>
                      </td>
                      <td className="px-6 py-4 text-gray-700 max-w-[180px]">
                        <p className="truncate">{app.course}</p>
                      </td>
                      <td className="px-6 py-4 font-semibold text-[#166534]">{app.academicScore}</td>
                      <td className="px-6 py-4 text-gray-600">{app.appliedDate}</td>
                      <td className="px-6 py-4">
                        <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${statusColors[app.status] || 'bg-gray-100 text-gray-700'}`}>
                          {app.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
