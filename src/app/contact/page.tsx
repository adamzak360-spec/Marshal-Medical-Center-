import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram } from "lucide-react";

export default function Contact() {
  return (
    <div className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Have questions or need assistance? Reach out to us through any of the channels below. 
            We are here to help you 24/7.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center shrink-0">
                <MapPin className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Our Location</h3>
                <p className="text-gray-600">
                  Opposite Bi-Water Junction, Off Kumbungu Road, Tamale, Northern Region, Ghana
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center shrink-0">
                <Phone className="text-secondary" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Phone Number</h3>
                <p className="text-gray-600">+233 24 982 8497</p>
                <p className="text-gray-600">+233 50 XXX XXXX</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center shrink-0">
                <Clock className="text-purple-600" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Operating Hours</h3>
                <p className="text-gray-600">Open 24 Hours</p>
                <p className="text-gray-600">Monday - Sunday</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 bg-gray-50 p-8 lg:p-12 rounded-3xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Send us a Message</h2>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Your Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary outline-none transition-all"
                  placeholder="Enter your name"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Email Address</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary outline-none transition-all"
                  placeholder="Enter your email"
                />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-sm font-bold text-gray-700">Subject</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary outline-none transition-all"
                  placeholder="How can we help?"
                />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-sm font-bold text-gray-700">Message</label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary outline-none transition-all resize-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              <div className="md:col-span-2">
                <button
                  type="button"
                  className="bg-primary text-white px-10 py-4 rounded-xl font-bold hover:bg-primary-dark transition-all"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Social Media */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Follow Us</h3>
          <div className="flex justify-center gap-6">
            <a href="#" className="w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:text-primary hover:border-primary transition-all">
              <Facebook size={24} />
            </a>
            <a href="#" className="w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:text-primary hover:border-primary transition-all">
              <Twitter size={24} />
            </a>
            <a href="#" className="w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:text-primary hover:border-primary transition-all">
              <Instagram size={24} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
