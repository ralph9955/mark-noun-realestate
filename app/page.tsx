"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const listings = [
  {
    id: 1,
    title: "Park Residences - Brand New",
    price: "AED 4,900,000",
    beds: 5,
    baths: 7,
    area: "3,058 sqft",
    pricePerSqft: "1,602 AED/sqft",
    features: "Brand New | Vacant | End Unit",
    offer: "Up to 12K Mortgage Cashback",
    color: "from-purple-200 to-blue-100",
    image: "https://static.shared.propertyfinder.ae/media/images/listing/SHY3Y1H9F4RQVAB790K5BCGBTW/bbf500f3-2287-4bf2-82ba-ba457e6fe7c1/1312x894.jpg",
    link: "https://www.propertyfinder.ae/en/plp/buy/townhouse-for-sale-dubai-damac-hills-park-residences-park-residence-1-16288582.html",
  },
  {
    id: 2,
    title: "Milestone Residences - JVT",
    price: "AED 1,150,000",
    beds: 1,
    baths: 2,
    area: "780 sqft",
    pricePerSqft: "1,474 AED/sqft",
    monthlyPayment: "From 4,730 AED/month",
    features: "Bright | Brand New | Spacious",
    color: "from-green-200 to-blue-100",
    image: "https://static.shared.propertyfinder.ae/media/images/listing/N7JXP0YTX8S8HMTD792GV5Y0WR/3221ee1d-c67a-469b-b24c-456187d09236/668x452.jpg",
    link: "https://www.propertyfinder.ae/en/plp/buy/apartment-for-sale-dubai-jumeirah-village-triangle-16290249.html",
  },
];

const rentals = [
  {
    id: 1,
    title: "Luxury Apartment - Business Bay",
    price: "AED 8,500/month",
    beds: 2,
    baths: 2,
    area: "1,200 sqft",
    features: "Fully Furnished | Balcony | Parking",
    color: "from-blue-200 to-cyan-100",
    image: "https://static.shared.propertyfinder.ae/media/images/listing/SHY3Y1H9F4RQVAB790K5BCGBTW/bbf500f3-2287-4bf2-82ba-ba457e6fe7c1/1312x894.jpg",
    link: "https://www.propertyfinder.ae/en/plp/rent/apartment-for-rent-dubai-business-bay",
  },
  {
    id: 2,
    title: "Studio - JVT",
    price: "AED 2,200/month",
    beds: 1,
    baths: 1,
    area: "450 sqft",
    features: "Modern | Pet Friendly | Community",
    color: "from-orange-200 to-yellow-100",
    image: "https://static.shared.propertyfinder.ae/media/images/listing/N7JXP0YTX8S8HMTD792GV5Y0WR/3221ee1d-c67a-469b-b24c-456187d09236/668x452.jpg",
    link: "https://www.propertyfinder.ae/en/plp/rent/apartment-for-rent-dubai-jumeirah-village-triangle",
  },
];

const testimonials = [
  {
    name: "Sarah Al Mansouri",
    title: "Investor",
    text: "Mark's expertise in Business Bay was invaluable. He helped me find the perfect investment property with excellent ROI potential.",
    rating: 5,
  },
  {
    name: "Ahmed Hassan",
    title: "Property Buyer",
    text: "Professional, knowledgeable, and genuinely cared about finding me the right home. Highly recommended!",
    rating: 5,
  },
  {
    name: "Fatima Al Dhaheri",
    title: "First-time Buyer",
    text: "Mark made the whole process smooth and stress-free. His bilingual support was incredibly helpful.",
    rating: 5,
  },
];

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    needs: [] as string[],
    budget: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const needsOptions = [
    "Looking to Buy",
    "Looking to Invest",
    "Looking to Rent",
    "Property Valuation",
    "Market Consultation",
    "Other",
  ];

  const budgetOptions = ["Cash", "Financing"];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({ name: "", email: "", phone: "", message: "" });
        setTimeout(() => setSuccess(false), 5000);
      } else {
        alert("Error sending message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error sending message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const toggleNeed = (need: string) => {
    setFormData((prev) => ({
      ...prev,
      needs: prev.needs.includes(need)
        ? prev.needs.filter((n) => n !== need)
        : [...prev.needs, need],
    }));
  };

  const setBudget = (budget: string) => {
    setFormData((prev) => ({
      ...prev,
      budget: prev.budget === budget ? "" : budget,
    }));
  };

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Mark Noun",
    "description": "Dubai Real Estate Agent - Premium Property Specialist",
    "url": "https://marknoun.ae",
    "telephone": "+971504676253",
    "email": "mark.noun@providentestate.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Dubai, UAE",
      "addressCountry": "AE"
    },
    "areaServed": [
      "Business Bay",
      "Jumeirah Village Triangle",
      "Mohammed Bin Rashid City"
    ],
    "priceRange": "AED 1150000 - AED 6000000",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.3",
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": "4"
    }
  };

  return (
    <div className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      {/* Navigation */}
      <nav className={`fixed left-1/2 transform -translate-x-1/2 z-50 bg-white/95 backdrop-blur-md border border-blue-100 rounded-full shadow-lg animate-slide-in-down transition-all duration-300 ${
        scrolled
          ? "w-[98%] px-6 md:px-8 py-4 top-2 max-w-5xl"
          : "w-[95%] max-w-4xl px-4 md:px-6 py-3 top-4"
      }`}>
        <div className="flex justify-between items-center gap-2 md:gap-8">
          <div className="text-lg md:text-2xl font-bold text-blue-900 whitespace-nowrap">Mark Noun</div>
          <div className="hidden md:flex gap-4 text-blue-700 text-sm">
            <a href="#about" className="hover:text-blue-900 transition">
              About
            </a>
            <a href="#listings" className="hover:text-blue-900 transition">
              Buy
            </a>
            <a href="#rentals" className="hover:text-blue-900 transition">
              Rent
            </a>
            <a href="#testimonials" className="hover:text-blue-900 transition">
              Testimonials
            </a>
            <a href="#contact" className="hover:text-blue-900 transition">
              Contact
            </a>
          </div>
          <button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="bg-gradient-to-r from-blue-900 to-blue-700 text-white px-4 md:px-6 py-2 rounded-full hover:shadow-lg transition text-sm md:text-base whitespace-nowrap"
          >
            Let&apos;s Talk
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative min-h-screen flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/mark-vid.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Premium Dubai Real Estate, Guided by Expertise.
          </h1>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
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
              className="bg-gradient-to-r from-blue-900 to-blue-700 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition text-lg"
            >
              Start Your Search
            </button>
            <a
              href="tel:+971504676253"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-900 transition text-lg"
            >
              Call Me Directly
            </a>
          </div>
        </div>
      </section>

      {/* About Section with Photo */}
      <section id="about" className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-4xl font-bold text-blue-900 mb-6 animate-slide-in-left" style={{animationDelay: '0.1s'}}>
                Who is Mark Noun?
              </h2>
              <p className="text-black text-lg mb-4 animate-slide-in-left" style={{animationDelay: '0.2s'}}>
                With 18 years in the UAE and 8 years in real estate, I bring
                deep market knowledge combined with a family legacy in property
                investment. I hold an international business degree and stay at
                the forefront of Dubai&apos;s dynamic market.
              </p>
              <p className="text-black text-lg mb-6 animate-slide-in-left" style={{animationDelay: '0.3s'}}>
                I&apos;m bilingual (English & Arabic) and committed to helping
                you navigate every step of your property journey.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-amber-400 rounded-full"></div>
                  <span className="text-black">
                    <strong>SuperAgent</strong> - Verified expert
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-blue-400 rounded-full"></div>
                  <span className="text-black">
                    <strong>4.3/5 Stars</strong> - Trusted by clients
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-blue-600 rounded-full"></div>
                  <span className="text-black">
                    <strong>License: BRN 64559</strong>
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl h-96 overflow-hidden shadow-lg border border-blue-100 animate-slide-in-right" style={{animationDelay: '0.2s'}}>
              <img
                src="/mark-noun.jpg"
                alt="Mark Noun - Professional Headshot"
                className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Listings Showcase */}
      <section id="listings" className="py-20 px-6 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-blue-900 mb-4 text-center animate-slide-in-up">
            Featured Listings
          </h2>
          <p className="text-black text-lg text-center mb-12 max-w-2xl mx-auto animate-slide-in-up" style={{animationDelay: '0.15s'}}>
            Explore my latest premium properties across Dubai&apos;s most sought-after locations.
          </p>

          <div className="grid md:grid-cols-2 gap-8 md:max-w-4xl md:mx-auto">
            {listings.map((listing, idx) => (
              <div
                key={listing.id}
                className="bg-white rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition overflow-hidden border border-blue-100 animate-slide-in-up"
                style={{animationDelay: `${0.2 + idx * 0.15}s`}}
              >
                {listing.image ? (
                  <img
                    src={listing.image}
                    alt={listing.title}
                    className="w-full h-48 object-cover"
                  />
                ) : (
                  <div className={`bg-gradient-to-br ${listing.color} h-48`}></div>
                )}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-2">
                    {listing.title}
                  </h3>
                  <div className="text-2xl font-bold text-amber-600 mb-1">
                    {listing.price}
                  </div>
                  {listing.pricePerSqft && (
                    <div className="text-sm text-amber-500 mb-3">
                      {listing.pricePerSqft}
                    </div>
                  )}
                  <div className="flex gap-4 text-sm text-black mb-3">
                    <span>{listing.beds} Beds</span>
                    <span>{listing.baths} Baths</span>
                    <span>{listing.area}</span>
                  </div>
                  {listing.features && (
                    <div className="text-xs text-blue-600 mb-2 pb-2 border-b border-blue-100">
                      {listing.features}
                    </div>
                  )}
                  {listing.monthlyPayment && (
                    <div className="text-xs bg-blue-50 text-blue-700 p-2 rounded mb-2 font-semibold">
                      {listing.monthlyPayment}
                    </div>
                  )}
                  {listing.offer && (
                    <div className="text-xs bg-green-50 text-green-700 p-2 rounded mb-3">
                      {listing.offer}
                    </div>
                  )}
                  <a
                    href={listing.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-gradient-to-r from-blue-900 to-blue-700 text-white py-2 rounded-lg hover:shadow-lg transition font-semibold text-center block"
                  >
                    View on PropertyFinder →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Rent Section */}
      <section id="rentals" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-blue-900 mb-4 text-center animate-slide-in-up">
            Properties for Rent
          </h2>
          <p className="text-black text-lg text-center mb-12 max-w-2xl mx-auto animate-slide-in-up" style={{animationDelay: '0.15s'}}>
            Premium rental properties available across Dubai&apos;s finest locations.
          </p>

          <div className="grid md:grid-cols-2 gap-8 md:max-w-4xl md:mx-auto">
            {rentals.map((rental, idx) => (
              <div
                key={rental.id}
                className="bg-white rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition overflow-hidden border border-blue-100 animate-slide-in-up"
                style={{animationDelay: `${0.2 + idx * 0.15}s`}}
              >
                {rental.image ? (
                  <img
                    src={rental.image}
                    alt={rental.title}
                    className="w-full h-48 object-cover"
                  />
                ) : (
                  <div className={`bg-gradient-to-br ${rental.color} h-48`}></div>
                )}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-2">
                    {rental.title}
                  </h3>
                  <div className="text-2xl font-bold text-green-600 mb-3">
                    {rental.price}
                  </div>
                  <div className="flex gap-4 text-sm text-black mb-3">
                    <span>{rental.beds} Beds</span>
                    <span>{rental.baths} Baths</span>
                    <span>{rental.area}</span>
                  </div>
                  {rental.features && (
                    <div className="text-xs text-blue-600 mb-3 pb-2 border-b border-blue-100">
                      {rental.features}
                    </div>
                  )}
                  <a
                    href={rental.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-gradient-to-r from-green-600 to-green-500 text-white py-2 rounded-lg hover:shadow-lg transition font-semibold text-center block"
                  >
                    View on PropertyFinder →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Running Banner Section */}
      <section className="py-12 px-6 bg-gradient-to-r from-blue-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-sm text-blue-700 font-semibold mb-8">
            Featured Developments & Partners
          </p>
          <div className="relative overflow-hidden">
            <div className="flex gap-16 animate-scroll">
              {/* Original set */}
              <div className="flex gap-16 items-center flex-shrink-0">
                <img src="/logos/png-clipart-damac-properties-real-estate-off-plan-property-property-developer-limited-offer-miscellaneous-angle.png" alt="DAMAC" className="h-16 object-contain" />
                <img src="/logos/pngegg.png" alt="Partner" className="h-16 object-contain" />
              </div>
              {/* Duplicate set for seamless loop */}
              <div className="flex gap-16 items-center flex-shrink-0">
                <img src="/logos/png-clipart-damac-properties-real-estate-off-plan-property-property-developer-limited-offer-miscellaneous-angle.png" alt="DAMAC" className="h-16 object-contain" />
                <img src="/logos/pngegg.png" alt="Partner" className="h-16 object-contain" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-blue-900 mb-4 text-center animate-slide-in-up">
            What Clients Say
          </h2>
          <p className="text-black text-lg text-center mb-12 animate-slide-in-up" style={{animationDelay: '0.15s'}}>
            Real experiences from real clients.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-blue-50 to-amber-50 p-6 rounded-xl border border-blue-100 animate-slide-in-up"
                style={{animationDelay: `${0.2 + idx * 0.1}s`}}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-xl">
                      ⭐
                    </span>
                  ))}
                </div>
                <p className="text-black mb-4 italic">
                  &quot;{testimonial.text}&quot;
                </p>
                <div>
                  <p className="font-bold text-blue-900">{testimonial.name}</p>
                  <p className="text-sm text-amber-600">{testimonial.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Capture Form */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center animate-slide-in-up">
            Ready to Find Your Perfect Property?
          </h2>
          <p className="text-blue-100 text-center mb-12 animate-slide-in-up" style={{animationDelay: '0.15s'}}>
            Share your details and I&apos;ll be in touch within 24 hours with
            personalized recommendations.
          </p>

          {success && (
            <div className="mb-6 p-4 bg-green-500 text-white rounded-lg text-center font-semibold">
              ✓ Thank you! I'll contact you shortly.
            </div>
          )}

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
                className="w-full px-4 py-3 rounded-lg bg-blue-800 text-white border border-blue-600 focus:border-amber-500 focus:outline-none placeholder-blue-300"
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
                  className="w-full px-4 py-3 rounded-lg bg-blue-800 text-white border border-blue-600 focus:border-amber-500 focus:outline-none placeholder-blue-300"
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
                  className="w-full px-4 py-3 rounded-lg bg-blue-800 text-white border border-blue-600 focus:border-amber-500 focus:outline-none placeholder-blue-300"
                  placeholder="+971 50 1234567"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-3">
                What are you interested in? (Select all that apply)
              </label>
              <div className="grid grid-cols-2 gap-3">
                {needsOptions.map((need) => (
                  <button
                    key={need}
                    type="button"
                    onClick={() => toggleNeed(need)}
                    className={`p-3 rounded-lg font-semibold transition border-2 ${
                      formData.needs.includes(need)
                        ? "bg-amber-500 border-amber-500 text-blue-900"
                        : "bg-blue-800 border-blue-600 text-white hover:border-amber-500"
                    }`}
                  >
                    {formData.needs.includes(need) ? "✓ " : ""}{need}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-3">
                How will you finance your purchase?
              </label>
              <div className="grid grid-cols-2 gap-3">
                {budgetOptions.map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setBudget(option)}
                    className={`p-3 rounded-lg font-semibold transition border-2 ${
                      formData.budget === option
                        ? "bg-amber-500 border-amber-500 text-blue-900"
                        : "bg-blue-800 border-blue-600 text-white hover:border-amber-500"
                    }`}
                  >
                    {formData.budget === option ? "✓ " : ""}{option}
                  </button>
                ))}
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-blue-900 font-bold py-4 rounded-lg hover:shadow-lg transition text-lg disabled:opacity-50"
            >
              {loading ? "Sending..." : "Get in Touch"}
            </button>

            <div className="flex gap-3">
              <a
                href="https://wa.me/971504676253"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-lg transition text-center"
              >
                WhatsApp
              </a>
              <a
                href="tel:+971504676253"
                className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-lg transition text-center"
              >
                Call
              </a>
            </div>

            <p className="text-blue-200 text-sm text-center">
              Or email: mark.noun@providentestate.com
            </p>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-950 text-blue-200 py-12 px-6">
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
