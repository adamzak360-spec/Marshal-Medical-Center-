import Link from "next/link";
import { ArrowRight, ShieldCheck, Clock, Users, Activity, Phone } from "lucide-react";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-blue-50 py-20 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:w-2/3">
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
              Your Health is Our <span className="text-primary">Priority</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl">
              Marshal Medical Centre Limited provides world-class healthcare services in Tamale. 
              Professional care, modern facilities, and a compassionate team dedicated to your well-being.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/appointment"
                className="bg-primary text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary-dark transition-all flex items-center justify-center gap-2"
              >
                Book Appointment <ArrowRight size={20} />
              </Link>
              <Link
                href="/services"
                className="bg-white text-primary border-2 border-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-all text-center"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 transform translate-x-1/2 hidden lg:block"></div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <ShieldCheck className="text-primary" size={40} />, title: "Quality Care", desc: "Professional medical services with high standards." },
              { icon: <Clock className="text-primary" size={40} />, title: "24/7 Support", desc: "Emergency services available around the clock." },
              { icon: <Users className="text-primary" size={40} />, title: "Expert Team", desc: "Experienced doctors and specialized medical staff." },
              { icon: <Activity className="text-primary" size={40} />, title: "Modern Tech", desc: "Equipped with latest diagnostic and lab tools." },
            ].map((feature, index) => (
              <div key={index} className="p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-shadow bg-white">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer a wide range of medical services to meet the needs of our patients.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "General Consultation", desc: "Comprehensive health checkups and expert medical advice for all ages." },
              { title: "Emergency Care", desc: "Rapid response and critical care for urgent medical situations 24/7." },
              { title: "Maternity Care", desc: "Dedicated support for mothers and babies throughout pregnancy and delivery." },
              { title: "Laboratory Services", desc: "Accurate and timely diagnostic testing with modern equipment." },
              { title: "Dental Care", desc: "Professional oral health services including cleaning, fillings, and surgery." },
              { title: "Pharmacy Services", desc: "On-site pharmacy providing essential medications and expert guidance." },
            ].map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold mb-3 text-primary">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.desc}</p>
                <Link href="/services" className="text-primary font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                  Learn more <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/services" className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">In Case of Emergency?</h2>
          <p className="text-blue-100 text-xl mb-8 max-w-2xl mx-auto">
            Our emergency department is open 24/7. Call us immediately for urgent medical assistance.
          </p>
          <a
            href="tel:+233249828497"
            className="inline-flex items-center gap-3 bg-white text-primary px-10 py-4 rounded-full font-bold text-2xl hover:bg-blue-50 transition-colors"
          >
            <Phone size={28} />
            +233 24 982 8497
          </a>
        </div>
      </section>
    </div>
  );
}
