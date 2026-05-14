import { 
  Stethoscope, 
  FlaskConical, 
  Baby, 
  HeartPulse, 
  Smile, 
  Ear, 
  ShieldPlus, 
  Pill, 
  UserPlus 
} from "lucide-react";

const services = [
  {
    title: "General Consultation",
    desc: "Expert medical advice and diagnosis for a wide range of health conditions.",
    icon: <Stethoscope className="text-primary" size={32} />,
  },
  {
    title: "Emergency Care",
    desc: "Immediate medical attention for critical and life-threatening situations, available 24/7.",
    icon: <HeartPulse className="text-primary" size={32} />,
  },
  {
    title: "Laboratory Services",
    desc: "Comprehensive diagnostic testing including blood work, urinalysis, and more.",
    icon: <FlaskConical className="text-primary" size={32} />,
  },
  {
    title: "Maternity Care",
    desc: "Complete prenatal, delivery, and postnatal care for mothers and newborns.",
    icon: <Baby className="text-primary" size={32} />,
  },
  {
    title: "Dental Care",
    desc: "Professional dental services including checkups, cleaning, and restorative procedures.",
    icon: <Smile className="text-primary" size={32} />,
  },
  {
    title: "ENT Care",
    desc: "Specialized treatment for Ear, Nose, and Throat conditions.",
    icon: <Ear className="text-primary" size={32} />,
  },
  {
    title: "Child Healthcare",
    desc: "Pediatric services focused on the health and development of children.",
    icon: <ShieldPlus className="text-primary" size={32} />,
  },
  {
    title: "Pharmacy Services",
    desc: "Fully stocked pharmacy providing essential medications and professional advice.",
    icon: <Pill className="text-primary" size={32} />,
  },
  {
    title: "Outpatient Care",
    desc: "Medical services that do not require an overnight hospital stay.",
    icon: <UserPlus className="text-primary" size={32} />,
  },
];

export default function Services() {
  return (
    <div className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Medical Services</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Marshal Medical Centre Limited offers a comprehensive range of healthcare services 
            designed to meet the diverse needs of our patients in Tamale and surrounding areas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all border border-gray-100">
              <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
