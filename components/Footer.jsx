import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#14532d] text-white" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#166534] font-bold text-lg">
                K
              </div>
              <span className="font-bold text-lg leading-tight">
                Kismat Pharmacy College
              </span>
            </div>
            <p className="text-green-200 text-sm leading-relaxed">
              Committed to excellence in pharmaceutical education, research, and
              community healthcare.
            </p>
            <div className="flex gap-3 mt-4">
              <a
                href="#"
                aria-label="Facebook"
                className="w-8 h-8 bg-green-700 rounded-full flex items-center justify-center hover:bg-[#22c55e] transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="w-8 h-8 bg-green-700 rounded-full flex items-center justify-center hover:bg-[#22c55e] transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-8 h-8 bg-green-700 rounded-full flex items-center justify-center hover:bg-[#22c55e] transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-base mb-4 text-[#22c55e]">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { href: "/about", label: "About Us" },
                { href: "/courses", label: "Courses Offered" },
                // { href: "/admissions", label: "Admissions" },
                { href: "/faculties", label: "Our Faculty" },
                { href: "/committees", label: "Committees" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-green-200 text-sm hover:text-white hover:underline transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="font-semibold text-base mb-4 text-[#22c55e]">
              Programs
            </h3>
            <ul className="space-y-2 text-green-200 text-sm">
              
              <li>D.Pharm (Diploma in Pharmacy)</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-base mb-4 text-[#22c55e]">
              Contact Us
            </h3>
            <address className="not-italic space-y-3 text-green-200 text-sm">
              <div className="flex items-start gap-2">
                <svg
                  className="w-4 h-4 mt-0.5 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>Kanchan Nagar, Ramanujganj, dist- Balrampur - 497220</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.22 1.22 2 2 0 012.22 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.41 7.56a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 13.92z" />
                </svg>
                <a
                  href="tel:+91 83193 88919"
                  className="hover:text-white transition-colors"
                >
                  +91 83193 88919
                </a>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <a
                  href="mailto:info@kismatpharmacy.edu.in"
                  className="hover:text-white transition-colors"
                >
                  kismatpharmacycollege@gmail.com
                </a>
              </div>
            </address>
          </div>
        </div>

        <div className="border-t border-green-700 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-sm text-green-300">
          <p>
            &copy; {new Date().getFullYear()} Kismat Pharmacy College. All
            rights reserved.
          </p>
          <p>Approved by PCI | Affiliated to Chhattisgarh Swami Vivekanand Technical University</p>
        </div>
      </div>
    </footer>
  );
}
