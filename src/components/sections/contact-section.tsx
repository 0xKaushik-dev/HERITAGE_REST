"use client";

const ContactSection = () => {
  return (
    <section id="contact" className="bg-background py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-5 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-16 gap-x-24 items-start">
          {/* Left Column: Contact Information */}
          <div className="flex flex-col gap-10">
            <div>
              <p className="text-xs uppercase tracking-wider text-text-tertiary mb-3">
                Phone number:
              </p>
              <a
                href="tel:09311442277"
                className="text-2xl text-text-primary font-body hover:text-primary transition-colors"
              >
                093114 42277
              </a>
            </div>

            <div>
              <p className="text-xs uppercase tracking-wider text-text-tertiary mb-3">
                Address:
              </p>
              <p className="text-lg text-text-primary font-body leading-relaxed">
                SCO-55, 1st Floor, Old Judicial Complex, Jail Rd,<br />
                Civil Lines, Gurugram, Haryana 122001
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-wider text-text-tertiary mb-3">
                Restaurant Hours:
              </p>
              <p className="text-lg text-text-primary font-body leading-relaxed">
                Daily <br />
                11:00 AM - 11:00 PM
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-wider text-text-tertiary mb-3">
                Website:
              </p>
              <a
                href="https://heritagegurgaon.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-text-primary font-body hover:text-primary transition-colors"
              >
                heritagegurgaon.in
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="w-full">
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="full-name"
                  className="block text-xs uppercase tracking-wider text-text-tertiary mb-2"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="full-name"
                  name="full-name"
                  placeholder="Jane Smith"
                  className="w-full bg-surface-dark border border-border-standard text-text-primary placeholder:text-text-tertiary rounded-none py-3.5 px-4 focus:ring-1 focus:ring-ring focus:border-ring outline-none transition-colors"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-xs uppercase tracking-wider text-text-tertiary mb-2"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="jane@framer.com"
                  className="w-full bg-surface-dark border border-border-standard text-text-primary placeholder:text-text-tertiary rounded-none py-3.5 px-4 focus:ring-1 focus:ring-ring focus:border-ring outline-none transition-colors"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-xs uppercase tracking-wider text-text-tertiary mb-2"
                >
                  Phone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="(123) 456-7890"
                  className="w-full bg-surface-dark border border-border-standard text-text-primary placeholder:text-text-tertiary rounded-none py-3.5 px-4 focus:ring-1 focus:ring-ring focus:border-ring outline-none transition-colors"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="inquiry"
                  className="block text-xs uppercase tracking-wider text-text-tertiary mb-2"
                >
                  Inquiry *
                </label>
                <textarea
                  id="inquiry"
                  name="inquiry"
                  rows={5}
                  placeholder="Please type in your inquiry here."
                  className="w-full bg-surface-dark border border-border-standard text-text-primary placeholder:text-text-tertiary rounded-none py-3.5 px-4 focus:ring-1 focus:ring-ring focus:border-ring outline-none transition-colors resize-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-accent-red-hover text-white uppercase text-sm font-semibold tracking-wider py-4 hover:brightness-110 transition-all duration-300 rounded-none"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;