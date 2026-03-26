'use client';

import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      
      {/* BACKGROUND IMAGE */}
      <Image
        src="/assets/heroImg1.jpeg"
        alt="Kismat Pharmacy College"
        fill
        className="object-cover"
        priority
      />

      {/* OVERLAY (important for text visibility) */}
      <div className="absolute inset-0 bg-black/50" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        
        <div className="max-w-3xl text-white">
          
          {/* Badge */}
          <span className="inline-block px-4 py-1.5 bg-green-700 text-white text-xs font-semibold rounded-full mb-6">
            PCI Approved | Affiliated University
          </span>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
            Welcome to{" "}
            <span className="text-green-400">Kismat</span> <br />
            Pharmacy College
          </h1>

          {/* Subheading */}
          <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-green-200">
            Excellence in Pharmaceutical Education
          </h2>

          {/* Description */}
          <p className="text-gray-200 text-base sm:text-lg mb-10">
            Empowering future pharmacists with world-class education,
            cutting-edge laboratories, and expert faculty.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <Link
              href="/courses"
              className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700"
            >
              Explore Courses
            </Link>

            <Link
              href="/admissions"
              className="px-6 py-3 bg-white text-green-700 font-semibold rounded-lg"
            >
              Apply Now
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}