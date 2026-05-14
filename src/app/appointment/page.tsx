"use client";

import { useState } from "react";
import { Calendar, Clock, User, Phone, Mail, MessageSquare, CheckCircle2 } from "lucide-react";

export default function Appointment() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="py-24 lg:py-32">
        <div className="max-w-md mx-auto px-4 text-center">
          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 size={48} />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Appointment Requested!</h1>
          <p className="text-gray-600 mb-8">
            Thank you for choosing Marshal Medical Centre. We have received your request and will contact you shortly to confirm your appointment.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="bg-primary text-white px-8 py-3 rounded-lg font-bold hover:bg-primary-dark transition-colors"
          >
            Book Another Appointment
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="bg-primary p-8 lg:p-12 text-white text-center">
            <h1 className="text-3xl font-bold mb-4">Book an Appointment</h1>
            <p className="text-blue-100">
              Fill out the form below and our team will get back to you to confirm your visit.
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="p-8 lg:p-12 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                  <User size={16} /> Full Name
                </label>
                <input
                  required
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                />
              </div>
              
              {/* Phone */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                  <Phone size={16} /> Phone Number
                </label>
                <input
                  required
                  type="tel"
                  placeholder="+233 XX XXX XXXX"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                />
              </div>
              
              {/* Email */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                  <Mail size={16} /> Email Address
                </label>
                <input
                  required
                  type="email"
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                />
              </div>
              
              {/* Preferred Date */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                  <Calendar size={16} /> Preferred Date
                </label>
                <input
                  required
                  type="date"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                />
              </div>
            </div>
            
            {/* Department */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                <Clock size={16} /> Department
              </label>
              <select
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white"
              >
                <option value="">Select Department</option>
                <option value="general">General Consultation</option>
                <option value="maternity">Maternity Care</option>
                <option value="dental">Dental Care</option>
                <option value="lab">Laboratory Services</option>
                <option value="ent">ENT Care</option>
              </select>
            </div>
            
            {/* Message */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                <MessageSquare size={16} /> Additional Message
              </label>
              <textarea
                rows={4}
                placeholder="Tell us about your concern..."
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-primary-dark transition-all shadow-lg shadow-primary/20"
            >
              Confirm Appointment Request
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
