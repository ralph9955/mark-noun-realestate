"use client";

import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Lead submitted:", formData);
    alert("Thank you! We'll be in touch shortly.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-white">
      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-gray-900">Mark Noun</div>
          <div className="hidden md:flex gap-8 text-gray-600">
            <a href="#about" className="hover:text-gray-900">
              About
            </a>
            <a href="#expertise" className="hover:text-gray-900">
              Expertise
            </a>
            <a href="#contact" className="hover:text-gray-900">
              Contact
            </a>
          </div>
          <button className="bg-gray-900 text-white px-6 py-2 rounded-full hover:bg-gray-800 transition">
            Let&apos;s Talk
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Premium Dubai Real Estate, Guided by Expertise.
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            18+ years in UAE real estate. SuperAgent with proven success in
            Business Bay, Jumeirah Village Triangle, and Mohammed Bin Rashid
            City. Let&apos;s find your perfect property.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-gray-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition text-lg"
            >
              Start Your Search
            </button>
            <a
              href="tel:+971504676253"
              className="border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-900 hover:text-white transition text-lg"
            >
              Call Me Directly
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Who is Mark Noun?
              </h2>
              <p className="text-gray-600 text-lg mb-4">
                With 18 years in the UAE and 8 years in real estate, I bring
                deep market knowledge combined with a family legacy in property
                investment. I hold an international business degree and stay at
                the forefront of Dubai&apos;s dynamic market.
              </p>
              <p className="text-gray-600 text-lg mb-6">
                I&apos;m bilingual (English & Arabic) and committed to helping
                you navigate every step of your property journey.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">⭐</span>
                  <span className="text-gray-700">
                    <strong>SuperAgent</strong> - Verified expert
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">📊</span>
                  <span className="text-gray-700">
                    <strong>4.3/5 Stars</strong> - Trusted by clients
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">💼</span>
                  <span className="text-gray-700">
                    <strong>License: BRN 64559</strong>
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl h-80 flex items-center justify-center">
              <div className="text-center text-gray-600">
                <span className="text-6xl">📸</span>
                <p className="mt-4">Your photo here</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
            I Specialize in Premium Dubai Locations
          </h2>
          <p className="text-gray-600 text-lg text-center mb-12 max-w-2xl mx-auto">
            From skyline penthouses to beachfront villas, I help high-net-worth
            individuals and investors make informed property decisions.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Business Bay",
                description:
                  "Prime commercial real estate and luxury apartments in the heart of Dubai's business district.",
              },
              {
                title: "Jumeirah Village Triangle",
                description:
                  "Modern residences combining affordability with lifestyle in one of Dubai's fastest-growing areas.",
              },
              {
                title: "Mohammed Bin Rashid City",
                description:
                  "Iconic developments featuring world-class amenities and premium living experiences.",
              },
            ].map((location, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {location.title}
                </h3>
                <p className="text-gray-600">{location.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-8 text-center">
            <div className="bg-white p-6 rounded-xl">
              <div className="text-4xl font-bold text-gray-900">AED 1.15M+</div>
              <p className="text-gray-600 mt-2">Property range</p>
            </div>
            <div className="bg-white p-6 rounded-xl">
              <div className="text-4xl font-bold text-gray-900">18+ Years</div>
              <p className="text-gray-600 mt-2">Market experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Capture Form */}
      <section
        id="contact"
        className="py-20 px-6 bg-gray-900 text-white"
      >
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">
            Ready to Find Your Perfect Property?
          </h2>
          <p className="text-gray-300 text-center mb-12">
            Share your details and I&apos;ll be in touch within 24 hours with
            personalized recommendations.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-white focus:outline-none"
                placeholder="Your name"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-white focus:outline-none"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-white focus:outline-none"
                  placeholder="+971 50 1234567"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Tell me about your needs
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-white focus:outline-none"
                placeholder="What are you looking for? Budget? Location preference?"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-white text-gray-900 font-bold py-4 rounded-lg hover:bg-gray-100 transition text-lg"
            >
              Get in Touch
            </button>

            <p className="text-gray-400 text-sm text-center">
              Or call directly: +971 50 467 6253 | mark.noun@providentestate.com
            </p>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-400 py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p>Mark Noun | Property Consultant | BRN 64559</p>
          <p className="mt-2 text-sm">
            Provident Real Estate | Dubai, UAE
          </p>
        </div>
      </footer>
    </div>
  );
}
