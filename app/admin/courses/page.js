'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const emptyForm = {
  name: '',
  duration: '',
  intake: '',
  eligibility: '',
  description: '',
  fee: '',
  category: 'Undergraduate',
};

const categories = ['Undergraduate', 'Postgraduate', 'Diploma', 'Doctorate'];

const categoryBadge = {
  Undergraduate: 'bg-blue-100 text-blue-800',
  Postgraduate: 'bg-purple-100 text-purple-800',
  Diploma: 'bg-yellow-100 text-yellow-800',
  Doctorate: 'bg-red-100 text-red-800',
};

export default function AdminCoursesPage() {
  const [courses, setCourses] = useState([]);
  const [form, setForm] = useState(emptyForm);
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    setFetching(true);
    try {
      const res = await fetch('/api/courses');
      const data = await res.json();
      setCourses(data);
    } catch {
      setError('Failed to load courses.');
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
    if (!form.name || !form.duration || !form.intake || !form.eligibility || !form.fee) {
      setError('Please fill all required fields.');
      return;
    }
    setLoading(true);
    try {
      const res = await fetch('/api/courses', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, intake: Number(form.intake) }),
      });
      if (res.ok) {
        const newCourse = await res.json();
        setCourses((prev) => [...prev, newCourse]);
        setForm(emptyForm);
        setShowForm(false);
        setSuccess('Course added successfully!');
        setTimeout(() => setSuccess(''), 4000);
      } else {
        setError('Failed to add course.');
      }
    } catch {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-[#166534] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 text-green-300 text-sm mb-1">
              <Link href="/admin" className="hover:text-white transition-colors">Admin</Link>
              <span>/</span>
              <span className="text-white font-medium">Courses</span>
            </div>
            <h1 className="text-2xl font-bold text-white">Courses Management</h1>
          </div>
          <button
            onClick={() => { setShowForm(!showForm); setError(''); }}
            className="flex items-center gap-2 px-4 py-2 bg-white text-[#166534] text-sm font-bold rounded-lg hover:bg-gray-100 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
            Add Course
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Alerts */}
        {success && (
          <div className="mb-5 p-4 bg-green-50 border border-green-200 text-green-800 rounded-lg flex items-center gap-2">
            <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {success}
          </div>
        )}
        {error && (
          <div className="mb-5 p-4 bg-red-50 border border-red-200 text-[#dc2626] rounded-lg">{error}</div>
        )}

        {/* Add Course Form */}
        {showForm && (
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-8 overflow-hidden">
            <div className="bg-[#f0fdf4] px-6 py-4 border-b border-gray-200">
              <h2 className="font-bold text-[#14532d]">Add New Course</h2>
            </div>
            <form onSubmit={handleSubmit} className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-5" noValidate>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Course Name <span className="text-[#dc2626]">*</span>
                </label>
                <input
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="e.g. Bachelor of Pharmacy (B.Pharm)"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#166534]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Category <span className="text-[#dc2626]">*</span>
                </label>
                <select
                  name="category"
                  value={form.category}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#166534] bg-white"
                >
                  {categories.map((c) => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Duration <span className="text-[#dc2626]">*</span>
                </label>
                <input
                  name="duration"
                  type="text"
                  value={form.duration}
                  onChange={handleChange}
                  placeholder="e.g. 4 Years"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#166534]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Intake (Seats) <span className="text-[#dc2626]">*</span>
                </label>
                <input
                  name="intake"
                  type="number"
                  value={form.intake}
                  onChange={handleChange}
                  placeholder="e.g. 60"
                  min="1"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#166534]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Annual Fee <span className="text-[#dc2626]">*</span>
                </label>
                <input
                  name="fee"
                  type="text"
                  value={form.fee}
                  onChange={handleChange}
                  placeholder="e.g. ₹85,000/year"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#166534]"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Eligibility <span className="text-[#dc2626]">*</span>
                </label>
                <input
                  name="eligibility"
                  type="text"
                  value={form.eligibility}
                  onChange={handleChange}
                  placeholder="e.g. 10+2 with PCB/PCM (Min. 50%)"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#166534]"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea
                  name="description"
                  rows={3}
                  value={form.description}
                  onChange={handleChange}
                  placeholder="Brief description of the course..."
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#166534] resize-none"
                />
              </div>
              <div className="sm:col-span-2 flex gap-3">
                <button
                  type="submit"
                  disabled={loading}
                  className="px-6 py-2 bg-[#166534] text-white font-semibold rounded-lg hover:bg-[#14532d] transition-colors disabled:opacity-60 text-sm"
                >
                  {loading ? 'Adding...' : 'Add Course'}
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

        {/* Courses Table */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
            <h2 className="font-bold text-gray-800">All Courses ({courses.length})</h2>
          </div>
          {fetching ? (
            <div className="py-16 text-center text-gray-500">
              <svg className="animate-spin w-8 h-8 mx-auto mb-3 text-[#166534]" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Loading courses...
            </div>
          ) : courses.length === 0 ? (
            <div className="py-16 text-center text-gray-500">No courses found. Add one above.</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="text-left px-6 py-3 font-semibold text-gray-600">Course Name</th>
                    <th className="text-left px-6 py-3 font-semibold text-gray-600">Category</th>
                    <th className="text-left px-6 py-3 font-semibold text-gray-600">Duration</th>
                    <th className="text-left px-6 py-3 font-semibold text-gray-600">Intake</th>
                    <th className="text-left px-6 py-3 font-semibold text-gray-600">Fee</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {courses.map((course) => (
                    <tr key={course.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <p className="font-medium text-gray-900">{course.name}</p>
                        <p className="text-gray-400 text-xs mt-0.5">{course.eligibility}</p>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${categoryBadge[course.category] || 'bg-gray-100 text-gray-700'}`}>
                          {course.category}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-gray-700">{course.duration}</td>
                      <td className="px-6 py-4 text-gray-700">{course.intake} Seats</td>
                      <td className="px-6 py-4 text-gray-700">{course.fee}</td>
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
