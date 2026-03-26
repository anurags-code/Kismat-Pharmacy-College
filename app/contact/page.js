"use client";

import { useState } from "react";
import Link from "next/link";

const contactInfo = [
  {
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: "Address",
    value: "123 Pharmacy Road, Medical District, City – 110001",
    link: null,
  },
  {
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.22 1.22 2 2 0 012.22 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.41 7.56a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 13.92z" />
      </svg>
    ),
    label: "Phone",
    value: "+91 12345 67890",
    link: "tel:+911234567890",
  },
  {
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    label: "Email",
    value: "info@kismatpharmacy.edu.in",
    link: "mailto:info@kismatpharmacy.edu.in",
  },
  {
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    label: "Office Hours",
    value: "Monday – Saturday: 9:00 AM – 5:00 PM",
    link: null,
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API delay
    await new Promise((r) => setTimeout(r, 800));
    setSubmitted(true);
    setLoading(false);
    setForm({ name: "", email: "", subject: "", message: "" });
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
            <span className="text-[#166534] font-medium">Contact</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#14532d] mb-3">
            Contact Us
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl">
            We are here to help. Reach out to us for admissions, academic
            queries, or general information.
          </p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-[#14532d] mb-8">
                Get In Touch
              </h2>
              <div className="space-y-5">
                {contactInfo.map((info) => (
                  <div
                    key={info.label}
                    className="flex items-start gap-4 p-4 rounded-xl border border-gray-100 hover:border-[#22c55e] hover:bg-[#f0fdf4] transition-all duration-200"
                  >
                    <div className="w-10 h-10 bg-[#166534] rounded-lg flex items-center justify-center text-white shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-0.5">
                        {info.label}
                      </p>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-gray-800 text-sm font-medium hover:text-[#166534] transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-800 text-sm font-medium">
                          {info.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Departments */}
              <div className="mt-8">
                <h3 className="text-lg font-bold text-[#14532d] mb-4">
                  Department Contacts
                </h3>
                <div className="space-y-2">
                  {[
                    {
                      dept: "Admissions Office",
                      email: "admissions@kismatpharmacy.edu.in",
                      phone: "+91 12345 67891",
                    },
                    {
                      dept: "Academic Office",
                      email: "academics@kismatpharmacy.edu.in",
                      phone: "+91 12345 67892",
                    },
                    {
                      dept: "Placement Cell",
                      email: "placement@kismatpharmacy.edu.in",
                      phone: "+91 12345 67893",
                    },
                  ].map((d) => (
                    <div
                      key={d.dept}
                      className="p-3 rounded-lg bg-[#f0fdf4] border border-green-100 text-sm"
                    >
                      <p className="font-semibold text-[#14532d]">{d.dept}</p>
                      <p className="text-gray-600 text-xs mt-0.5">
                        {d.email} | {d.phone}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-[#14532d] mb-8">
                Send Us a Message
              </h2>

              {submitted ? (
                <div className="bg-[#f0fdf4] rounded-xl p-8 text-center border border-green-200">
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
                    Message Sent!
                  </h3>
                  <p className="text-gray-600 text-sm mb-5">
                    Thank you for reaching out. Our team will get back to you
                    within 24–48 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2 bg-[#166534] text-white font-semibold rounded-lg hover:bg-[#14532d] transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        className="block text-sm font-medium text-gray-700 mb-1"
                        htmlFor="name"
                      >
                        Full Name <span className="text-[#dc2626]">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Your name"
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#166534] focus:border-transparent"
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
                        required
                        placeholder="your@email.com"
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#166534] focus:border-transparent"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      className="block text-sm font-medium text-gray-700 mb-1"
                      htmlFor="subject"
                    >
                      Subject <span className="text-[#dc2626]">*</span>
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      value={form.subject}
                      onChange={handleChange}
                      required
                      placeholder="How can we help?"
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#166534] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label
                      className="block text-sm font-medium text-gray-700 mb-1"
                      htmlFor="message"
                    >
                      Message <span className="text-[#dc2626]">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      required
                      placeholder="Write your message here..."
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#166534] focus:border-transparent resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 bg-[#166534] text-white font-bold rounded-lg hover:bg-[#14532d] transition-colors disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <>
                        <svg
                          className="animate-spin w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                          />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      {/* <section className="bg-[#f0fdf4] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#14532d] mb-6 text-center">
            Find Us
          </h2>
          <div className="rounded-xl overflow-hidden border border-green-100 shadow-sm bg-[#e8f5e9] h-64 flex items-center justify-center">
            <div className="text-center">
              <svg
                className="w-12 h-12 text-[#166534] mx-auto mb-3"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <p className="text-[#166534] font-semibold">
                123 Pharmacy Road, Medical District
              </p>
              <p className="text-gray-500 text-sm mt-1">City – 110001</p>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
}
