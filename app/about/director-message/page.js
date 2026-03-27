import Image from "next/image";

export const metadata = {
  title: "Director Message | Kismat Pharmacy College",
  description: "Message from the Director of Kismat Pharmacy College",
};

export default function DirectorMessage() {
  return (
    <section className="bg-gradient-to-br from-[#f0fdf4] via-[#dcfce7] to-[#bbf7d0] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto bg-white shadow-xl rounded-2xl p-6 sm:p-10">

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#166534] text-center mb-10">
          Director’s Message
        </h1>

        {/* Content */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10">

          {/* Image Section */}
          <div className="flex flex-col items-center text-center">
            <div className="w-44 h-44 relative rounded-full overflow-hidden border-4 border-[#166534] shadow-md">
              <Image
                src="/assets/Director.jpeg"
                alt="Director"
                fill
                className="object-cover"
              />
            </div>

            {/* Name + Designation */}
            <h2 className="mt-4 text-lg font-semibold text-gray-800">
              Dr.Amresh Singh
            </h2>
            <p className="text-sm text-gray-500">
              Director
            </p>
          </div>

          {/* Message Text */}
          <div className="text-gray-700 text-base leading-relaxed text-justify">
            <p className="mb-4">
              Welcome to Kismat Pharmacy College, where we are committed to
              shaping the future of pharmaceutical education and healthcare.
              Our vision is to develop skilled, responsible, and compassionate
              pharmacy professionals who can contribute meaningfully to society.
            </p>

            <p className="mb-4">
              We focus on providing quality education, modern infrastructure,
              and practical exposure to ensure that our students are well-prepared
              for real-world challenges.
            </p>

            <p className="mb-4">
              I encourage all students to stay dedicated, work hard, and make the
              most of the opportunities provided by the institution.
            </p>

            {/* Signature */}
            <div className="mt-6">
              <p className="font-semibold text-[#166534]">
                — Director
              </p>
              <p className="text-sm text-gray-600">
                Dr.Amresh Singh
              </p>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}