import Image from "next/image";
import faculties from "@/data/faculties.json";

export default function FacultiesPage() {
  // Group data by designation
  const grouped = {
    Principal: faculties.filter((f) => f.designation === "Principal"),
    "Assistant Professor": faculties.filter(
      (f) => f.designation.toLowerCase() === "assistant professor",
    ),
    Lecturer: faculties.filter((f) => f.designation === "Lecturer"),
  };

  const renderSection = (title, data) => (
    <section className="mb-12">
      <h2 className="text-3xl font-extrabold text-green-800 mb-6 border-b-2 border-green-600 inline-block">
        {title}
      </h2>

      <div className="flex flex-wrap justify-center gap-8">
        {data.map((faculty) => (
          <div
            key={faculty.id}
            className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition w-full sm:w-[300px]"
          >
            <div className="w-40 h-40 mx-auto relative mb-4">
              <Image
                src={faculty.image}
                alt={faculty.name}
                fill
                className="object-cover rounded-full border-4 border-green-600"
              />
            </div>

            <h3 className="text-lg font-semibold text-gray-800">
              {faculty.name}
            </h3>

            <p className="text-green-700 font-medium">{faculty.designation}</p>

            <p className="text-sm text-gray-500 mt-2">
              {faculty.qualification}
            </p>
          </div>
        ))}
      </div>
    </section>
  );

  return (
    <main className="min-h-screen px-6 py-10 bg-gray-50 text-center ">
      <h1 className="text-3xl font-bold text-green-800 mb-10 text-center">
        Our Faculties
      </h1>

      {renderSection("Principal", grouped.Principal)}
      {renderSection("Assistant Professor", grouped["Assistant Professor"])}
      {renderSection("Lecturer", grouped.Lecturer)}
    </main>
  );
}
