"use client";

import { useState } from "react";
import Link from "next/link";

const courses = ["Diploma in Pharmacy (D.Pharm)"];

const steps = [
  {
    step: "01",
    title: "Online Application",
    desc: "Fill out the admission form with personal, academic, and course details.",
  },
  {
    step: "02",
    title: "Document Submission",
    desc: "Upload required documents: marksheets, ID proof, and photographs.",
  },
  {
    step: "03",
    title: "Merit Evaluation",
    desc: "Applications reviewed based on academic merit and eligibility criteria.",
  },
  {
    step: "04",
    title: "Merit List",
    desc: "Selected candidates receive admission offer via email and on website.",
  },
  {
    step: "05",
    title: "Fee Payment",
    desc: "Pay the admission fee within the stipulated time to confirm your seat.",
  },
  {
    step: "06",
    title: "Enrollment",
    desc: "Complete enrollment formalities and collect your student ID card.",
  },
];

export default function AdmissionsPage() {
  const [form, setForm] = useState({
    applicantName: "",
    email: "",
    phone: "",
    course: "",
    academicScore: "",
    address: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !form.applicantName ||
      !form.email ||
      !form.phone ||
      !form.course ||
      !form.academicScore
    ) {
      setError("Please fill all required fields.");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/admissions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSubmitted(true);
        setForm({
          applicantName: "",
          email: "",
          phone: "",
          course: "",
          academicScore: "",
          address: "",
        });
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

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
            <span className="text-[#166534] font-medium">Admissions</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#14532d] mb-3">
            Admissions 2026–27
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl">
            Applications are now open for all programs. Secure your seat in one
            of the region's top pharmacy colleges.
          </p>
        </div>
      </section>

      {/* Important Dates */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#14532d] mb-6">
            Important Dates
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                label: "Application Open",
                date: "March 1, 2026",
                accent: true,
              },
              {
                label: "Last Date to Apply",
                date: "April 30, 2026",
                accent: false,
              },
              {
                label: "Merit List Published",
                date: "May 15, 2026",
                accent: false,
              },
              { label: "Classes Begin", date: "June 15, 2026", accent: false },
            ].map((d) => (
              <div
                key={d.label}
                className={`rounded-xl p-5 border ${d.accent ? "bg-[#166534] text-white border-[#166534]" : "bg-white border-gray-200 hover:border-[#22c55e]"} transition-colors`}
              >
                <p
                  className={`text-xs font-semibold uppercase tracking-wider mb-1 ${d.accent ? "text-green-200" : "text-gray-500"}`}
                >
                  {d.label}
                </p>
                <p
                  className={`text-lg font-bold ${d.accent ? "text-white" : "text-[#166534]"}`}
                >
                  {d.date}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="bg-[#f0fdf4] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#14532d] mb-6">
            Eligibility Criteria
          </h2>
          <div className="overflow-x-auto rounded-xl border border-green-100 shadow-sm">
            <table className="w-full text-sm">
              <thead className="bg-[#166534] text-white">
                <tr>
                  <th className="text-left px-6 py-3 font-semibold">Program</th>
                  <th className="text-left px-6 py-3 font-semibold">
                    Qualification
                  </th>
                  <th className="text-left px-6 py-3 font-semibold">
                    Min. Marks
                  </th>
                  <th className="text-left px-6 py-3 font-semibold">
                    Duration
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 bg-white">
                {[
                  {
                    program: "D.Pharm",
                    qual: "10+2 with PCB/PCM",
                    marks: "45%",
                    duration: "2 Years",
                  },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "" : "bg-[#f0fdf4]"}>
                    <td className="px-6 py-4 font-semibold text-[#166534]">
                      {row.program}
                    </td>
                    <td className="px-6 py-4 text-gray-700">{row.qual}</td>
                    <td className="px-6 py-4 text-gray-700">{row.marks}</td>
                    <td className="px-6 py-4 text-gray-700">{row.duration}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#14532d] mb-10 text-center">
            Admission Process
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((s) => (
              <div
                key={s.step}
                className="flex gap-4 p-5 rounded-xl border border-gray-100 hover:border-[#22c55e] hover:shadow-sm transition-all"
              >
                <span className="text-3xl font-extrabold text-[#dcfce7] shrink-0 w-12">
                  {s.step}
                </span>
                <div>
                  <h3 className="font-bold text-[#14532d] mb-1">{s.title}</h3>
                  <p className="text-gray-600 text-sm">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="bg-[#f0fdf4] py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-[#14532d] mb-2 text-center">
            Online Application Form
          </h2>
          <p className="text-gray-600 text-center text-sm mb-8">
            Fill out the form below to apply for admission.
          </p>

          {submitted ? (
            <div className="bg-white rounded-xl p-8 text-center shadow-sm border border-green-200">
              <div className="w-16 h-16 bg-[#dcfce7] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-[#166534]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#14532d] mb-2">
                Application Submitted!
              </h3>
              <p className="text-gray-600 text-sm mb-6">
                Thank you for applying. Your application is under review. You
                will be contacted via email shortly.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-6 py-2 bg-[#166534] text-white font-semibold rounded-lg hover:bg-[#14532d] transition-colors"
              >
                Submit Another Application
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 space-y-5"
              noValidate
            >
              {error && (
                <div className="p-3 bg-red-50 border border-red-200 text-[#dc2626] text-sm rounded-lg">
                  {error}
                </div>
              )}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    className="block text-sm font-medium text-gray-700 mb-1"
                    htmlFor="applicantName"
                  >
                    Full Name <span className="text-[#dc2626]">*</span>
                  </label>
                  <input
                    id="applicantName"
                    name="applicantName"
                    type="text"
                    value={form.applicantName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#166534] focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label
                    className="block text-sm font-medium text-gray-700 mb-1"
                    htmlFor="email"
                  >
                    Email Address <span className="text-[#dc2626]">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#166534] focus:border-transparent"
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    className="block text-sm font-medium text-gray-700 mb-1"
                    htmlFor="phone"
                  >
                    Phone Number <span className="text-[#dc2626]">*</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="10-digit mobile number"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#166534] focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label
                    className="block text-sm font-medium text-gray-700 mb-1"
                    htmlFor="academicScore"
                  >
                    Academic Score (%) <span className="text-[#dc2626]">*</span>
                  </label>
                  <input
                    id="academicScore"
                    name="academicScore"
                    type="text"
                    value={form.academicScore}
                    onChange={handleChange}
                    placeholder="e.g. 75%"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#166534] focus:border-transparent"
                    required
                  />
                </div>
              </div>
              <div>
                <label
                  className="block text-sm font-medium text-gray-700 mb-1"
                  htmlFor="course"
                >
                  Select Course <span className="text-[#dc2626]">*</span>
                </label>
                <select
                  id="course"
                  name="course"
                  value={form.course}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#166534] focus:border-transparent bg-white"
                  required
                >
                  <option value="">-- Select a program --</option>
                  {courses.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label
                  className="block text-sm font-medium text-gray-700 mb-1"
                  htmlFor="address"
                >
                  Address
                </label>
                <textarea
                  id="address"
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Enter your current address"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#166534] focus:border-transparent resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-[#166534] text-white font-bold rounded-lg hover:bg-[#14532d] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? "Submitting..." : "Submit Application"}
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
