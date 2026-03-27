import Image from "next/image";

export const metadata = {
  title: "Principal Message | Kismat Pharmacy College",
  description: "Message from the Principal of Kismat Pharmacy College",
};

export default function PrincipalMessage() {
  return (
    <section className="bg-gradient-to-br from-[#f0fdf4] via-[#dcfce7] to-[#bbf7d0] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto bg-white shadow-xl rounded-2xl p-6 sm:p-10">

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#166534] text-center mb-10">
          Principal’s Message
        </h1>

        {/* Content */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10">

          {/* Image Section */}
          <div className="flex flex-col items-center text-center">
            <div className="w-44 h-44 relative rounded-full overflow-hidden border-4 border-[#166534] shadow-md">
              <Image
                src="/assets/Principal.jpeg"
                alt="Principal"
                fill
                className="object-cover"
              />
            </div>

            {/* Name + Designation */}
            <h2 className="mt-4 text-lg font-semibold text-gray-800">
              Mr. Himesh Kumar Nayak
            </h2>
            <p className="text-sm text-gray-500">
              Principal
            </p>
          </div>

          {/* Message Text */}
          <div className="text-gray-700 text-base leading-relaxed text-justify">
            <p className="mb-4">
              Welcome to Kismat Pharmacy College. We focus on building strong
              academic foundations while encouraging practical skills,
              creativity, and problem-solving abilities.
            </p>

            <p className="mb-4">
              With the support of experienced faculty, modern infrastructure,
              and industry-oriented programs, we aim to equip our students with
              the competencies required to excel in the global pharmaceutical
              landscape.
            </p>

            <p className="mb-4">
              I extend my best wishes to all students for a bright and successful
              future.
            </p>

            {/* Signature */}
            <div className="mt-6">
              <p className="font-semibold text-[#166534]">
                — Principal
              </p>
              <p className="text-sm text-gray-600">
                Mr. Himesh Kumar Nayak
              </p>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}