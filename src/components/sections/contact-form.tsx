"use client";

import { Phone, MapPin, Clock, Mail } from 'lucide-react';

const ContactForm = () => {
  return (
    <section id="contact" className="bg-background py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column: Contact Info */}
          <div className="flex flex-col space-y-8 lg:pt-2">
            <div className="flex items-start gap-4">
              <Phone className="h-5 w-5 text-[#999999] mt-1 flex-shrink-0" />
              <div>
                <p className="text-sm text-[#999999]">Phone number:</p>
                <p className="text-sm text-foreground">(917) 244-9324</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MapPin className="h-5 w-5 text-[#999999] mt-1 flex-shrink-0" />
              <div>
                <p className="text-sm text-[#999999]">Address:</p>
                <p className="text-sm text-foreground">41 Monroe St, New York, NY 10002</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="h-5 w-5 text-[#999999] mt-1 flex-shrink-0" />
              <div>
                <p className="text-sm text-[#999999]">Restaurant Hours:</p>
                <p className="text-sm text-foreground">Monday to Sunday</p>
                <p className="text-sm text-foreground">8:00 am -10:00 pm</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="h-5 w-5 text-[#999999] mt-1 flex-shrink-0" />
              <div>
                <p className="text-sm text-[#999999]">Email:</p>
                <p className="text-sm text-foreground">Ivan.Qiu7@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="w-full">
            <form className="flex flex-col gap-6">
              <div>
                <label htmlFor="full-name" className="block text-xs text-[#999999] mb-2 font-medium">
                  Full Name <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  id="full-name"
                  name="full-name"
                  placeholder="Jane Smith"
                  className="w-full bg-input text-foreground border border-white/10 rounded-[6px] p-3 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-colors placeholder:text-[#666666]"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs text-[#999999] mb-2 font-medium">
                  Email <span className="text-primary">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="jane@framer.com"
                  className="w-full bg-input text-foreground border border-white/10 rounded-[6px] p-3 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-colors placeholder:text-[#666666]"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-xs text-[#999999] mb-2 font-medium">
                  Phone <span className="text-primary">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="(123) 456-7890"
                  className="w-full bg-input text-foreground border border-white/10 rounded-[6px] p-3 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-colors placeholder:text-[#666666]"
                />
              </div>
              <div>
                <label htmlFor="inquiry" className="block text-xs text-[#999999] mb-2 font-medium">
                  Inquiry <span className="text-primary">*</span>
                </label>
                <textarea
                  id="inquiry"
                  name="inquiry"
                  rows={5}
                  placeholder="Please type in your inquiry here."
                  className="w-full bg-input text-foreground border border-white/10 rounded-[6px] p-3 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-colors placeholder:text-[#666666] resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground uppercase text-sm font-semibold py-4 rounded-[6px] hover:bg-[#6B0000] transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background focus:ring-primary"
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;