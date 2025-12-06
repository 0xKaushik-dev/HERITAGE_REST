import Navigation from '@/components/sections/navigation';
import Footer from '@/components/sections/footer';

export default function BookPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24">
        {/* Hero Header */}
        <section className="container mx-auto px-8 py-16 text-center lg:px-20 lg:py-24">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            RESERVATIONS
          </p>
          <h1 className="font-['Cinzel'] text-5xl font-normal text-foreground lg:text-6xl">
            BOOK YOUR TABLE
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Reserve your spot for an unforgettable dining experience. We look forward to serving you.
          </p>
        </section>

        {/* Booking Form Section */}
        <section className="container mx-auto px-8 pb-16 lg:px-20 lg:pb-24">
          <div className="mx-auto max-w-3xl">
            <div className="p-0">
              <form className="space-y-6">
                {/* Name and Email Row */}
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="fullName" className="mb-2 block text-sm text-[#CCCCCC]">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      placeholder="Jane Smith"
                      required
                      className="w-full rounded-none border border-white/20 bg-transparent px-4 py-3 text-white placeholder:text-white/30 focus:border-white focus:outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm text-[#CCCCCC]">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="jane@example.com"
                      required
                      className="w-full rounded-none border border-white/20 bg-transparent px-4 py-3 text-white placeholder:text-white/30 focus:border-white focus:outline-none"
                    />
                  </div>
                </div>

                {/* Phone Number */}
                <div>
                  <label htmlFor="phone" className="mb-2 block text-sm text-[#CCCCCC]">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="(555) 123-4567"
                    required
                    className="w-full rounded-none border border-white/20 bg-transparent px-4 py-3 text-white placeholder:text-white/30 focus:border-white focus:outline-none"
                  />
                </div>

                {/* Date and Time Row */}
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="date" className="mb-2 block text-sm text-[#CCCCCC]">
                      Date <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="date"
                      name="date"
                      placeholder="dd-mm-yyyy"
                      required
                      className="w-full rounded-none border border-white/20 bg-transparent px-4 py-3 text-white placeholder:text-white/30 focus:border-white focus:outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="time" className="mb-2 block text-sm text-[#CCCCCC]">
                      Time <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="time"
                      name="time"
                      required
                      className="w-full rounded-none border border-white/20 bg-transparent px-4 py-3 text-white focus:border-white focus:outline-none [&>option]:bg-zinc-900 [&>option]:text-white"
                    >
                      <option value="">Select time</option>
                      <option value="11:00">11:00 AM</option>
                      <option value="11:30">11:30 AM</option>
                      <option value="12:00">12:00 PM</option>
                      <option value="12:30">12:30 PM</option>
                      <option value="13:00">1:00 PM</option>
                      <option value="13:30">1:30 PM</option>
                      <option value="14:00">2:00 PM</option>
                      <option value="14:30">2:30 PM</option>
                      <option value="17:00">5:00 PM</option>
                      <option value="17:30">5:30 PM</option>
                      <option value="18:00">6:00 PM</option>
                      <option value="18:30">6:30 PM</option>
                      <option value="19:00">7:00 PM</option>
                      <option value="19:30">7:30 PM</option>
                      <option value="20:00">8:00 PM</option>
                      <option value="20:30">8:30 PM</option>
                      <option value="21:00">9:00 PM</option>
                    </select>
                  </div>
                </div>

                {/* Number of Guests */}
                <div>
                  <label htmlFor="guests" className="mb-2 block text-sm text-[#CCCCCC]">
                    Number of Guests <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="guests"
                    name="guests"
                    required
                    className="w-full rounded-none border border-white/20 bg-transparent px-4 py-3 text-white focus:border-white focus:outline-none [&>option]:bg-zinc-900 [&>option]:text-white"
                  >
                    <option value="">Select number of guests</option>
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests</option>
                    <option value="3">3 Guests</option>
                    <option value="4">4 Guests</option>
                    <option value="5">5 Guests</option>
                    <option value="6">6 Guests</option>
                    <option value="7">7 Guests</option>
                    <option value="8">8 Guests</option>
                    <option value="9+">9+ Guests</option>
                  </select>
                </div>

                {/* Special Requests */}
                <div>
                  <label htmlFor="requests" className="mb-2 block text-sm text-[#CCCCCC]">
                    Special Requests
                  </label>
                  <textarea
                    id="requests"
                    name="requests"
                    rows={4}
                    placeholder="Any dietary restrictions, allergies, or special occasions we should know about..."
                    className="w-full rounded-none border border-white/20 bg-transparent px-4 py-3 text-white placeholder:text-white/30 focus:border-white focus:outline-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full rounded-none bg-[#8B0000] px-12 py-4 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-[#6B0000]"
                >
                  CONFIRM RESERVATION
                </button>

                <p className="text-center text-sm text-[#808080]">
                  You will receive a confirmation email shortly after submitting your reservation.
                </p>
              </form>
            </div>
          </div>
        </section>

        {/* Info Section */}
        <section className="container mx-auto px-8 pb-16 lg:px-20 lg:pb-24">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-lg border border-border bg-card p-6 text-center">
              <div className="mb-4 flex justify-center">
                <svg
                  className="h-8 w-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 font-['Inter'] text-sm font-semibold uppercase tracking-[0.05em] text-foreground">
                HOURS
              </h3>
              <p className="text-sm text-muted-foreground">
                Monday - Sunday<br />
                9:00 AM - 8:00 PM
              </p>
            </div>

            <div className="rounded-lg border border-border bg-card p-6 text-center">
              <div className="mb-4 flex justify-center">
                <svg
                  className="h-8 w-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 font-['Inter'] text-sm font-semibold uppercase tracking-[0.05em] text-foreground">
                LOCATION
              </h3>
              <p className="text-sm text-muted-foreground">
                36 Market St<br />
                New York, NY 10002
              </p>
            </div>

            <div className="rounded-lg border border-border bg-card p-6 text-center">
              <div className="mb-4 flex justify-center">
                <svg
                  className="h-8 w-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 font-['Inter'] text-sm font-semibold uppercase tracking-[0.05em] text-foreground">
                PHONE
              </h3>
              <p className="text-sm text-muted-foreground">
                (917) 244-9324
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
