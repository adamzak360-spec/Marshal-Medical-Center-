import { CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <div className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">About Marshal Medical Centre Limited</h1>
            <p className="text-lg text-gray-600 mb-6">
              Located in the heart of Tamale, Marshal Medical Centre Limited is a premier healthcare facility dedicated to providing high-quality, accessible, and compassionate medical care to our community.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Our mission is to improve the health and well-being of those we serve by delivering exceptional clinical care and outstanding patient experiences. We believe in a patient-centered approach where every individual is treated with dignity and respect.
            </p>
            
            <div className="space-y-4">
              {[
                "State-of-the-art medical equipment",
                "Highly qualified and experienced medical staff",
                "Comprehensive range of healthcare services",
                "24/7 emergency and outpatient care",
                "Commitment to patient safety and quality",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="text-secondary" size={24} />
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-blue-50 rounded-3xl p-8 lg:p-12">
            <h2 className="text-2xl font-bold text-primary mb-6">Our Vision</h2>
            <p className="text-gray-700 mb-8 italic text-lg">
              "To be the leading healthcare provider in Northern Ghana, recognized for clinical excellence, innovation, and compassionate service."
            </p>
            
            <h2 className="text-2xl font-bold text-primary mb-6">Our Values</h2>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Excellence</h4>
                <p className="text-gray-600 text-sm">Striving for the highest standards in everything we do.</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Compassion</h4>
                <p className="text-gray-600 text-sm">Caring for our patients with empathy and kindness.</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Integrity</h4>
                <p className="text-gray-600 text-sm">Maintaining honesty and ethical standards in our practice.</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Innovation</h4>
                <p className="text-gray-600 text-sm">Embracing new technologies and methods for better care.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
