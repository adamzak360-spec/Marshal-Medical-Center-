import Link from "next/link";
import { MapPin, Phone, Clock, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <div>
            <h3 className="text-2xl font-bold text-primary-light mb-4">Marshal Medical</h3>
            <p className="text-gray-400 mb-4">
              Providing professional and compassionate healthcare services to the Tamale community and beyond.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors">Our Services</Link></li>
              <li><Link href="/doctors" className="text-gray-400 hover:text-white transition-colors">Our Team</Link></li>
              <li><Link href="/appointment" className="text-gray-400 hover:text-white transition-colors">Book Appointment</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Core Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>General Consultation</li>
              <li>Emergency Care</li>
              <li>Laboratory Services</li>
              <li>Maternity Care</li>
              <li>Dental Care</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="text-primary-light shrink-0" size={20} />
                <span>Opposite Bi-Water Junction, Off Kumbungu Road, Tamale, Ghana</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="text-primary-light shrink-0" size={20} />
                <span>+233 24 982 8497</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Clock className="text-primary-light shrink-0" size={20} />
                <span>Open 24 Hours</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Marshal Medical Centre Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
