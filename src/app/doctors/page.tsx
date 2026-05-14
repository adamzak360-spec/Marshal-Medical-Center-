const doctors = [
  {
    name: "Dr. Samuel Mensah",
    role: "Medical Director / General Surgeon",
    specialty: "Surgery & General Medicine",
    bio: "Over 15 years of experience in surgical procedures and hospital management.",
  },
  {
    name: "Dr. Fatima Ibrahim",
    role: "Senior Consultant",
    specialty: "Obstetrics & Gynecology",
    bio: "Expert in maternal health and specialized women's healthcare services.",
  },
  {
    name: "Dr. Kwame Owusu",
    role: "Consultant Physician",
    specialty: "Internal Medicine",
    bio: "Specializes in diagnosing and treating complex adult medical conditions.",
  },
  {
    name: "Dr. Aisha Mohammed",
    role: "Pediatrician",
    specialty: "Child Healthcare",
    bio: "Dedicated to providing the best medical care for infants, children, and adolescents.",
  },
];

export default function Doctors() {
  return (
    <div className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Expert Medical Team</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Meet our team of highly qualified and compassionate healthcare professionals 
            dedicated to providing you with the best possible care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctors.map((doctor, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all">
              <div className="h-64 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-400 font-bold text-xl">Photo Placeholder</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{doctor.name}</h3>
                <p className="text-primary font-semibold text-sm mb-3">{doctor.role}</p>
                <div className="mb-4">
                  <span className="inline-block bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded-md font-bold uppercase tracking-wider">
                    {doctor.specialty}
                  </span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {doctor.bio}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-primary rounded-3xl p-8 lg:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Join Our Team?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            We are always looking for passionate and skilled medical professionals to join our growing team.
          </p>
          <Link href="/contact" className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors">
            Contact HR
          </Link>
        </div>
      </div>
    </div>
  );
}

import Link from "next/link";
