'use client';

import { useState } from 'react';

export default function ContactUsPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col min-h-screen">

      {/* Hero Section */}
      <section className="relative h-[50vh] bg-[url('/contactus/contact-us.jpg')] bg-cover bg-center flex items-center justify-center">
        <div className="absolute inset-0 bg-black/60" />
        <h1 className="relative text-5xl font-bold text-white z-10 text-center">
          Contact Us
        </h1>
      </section>

      {/* Intro Text */}
      <section className="py-16 bg-white px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4">
            We&apos;d Love to Hear From You
          </h2>
          <p className="text-gray-600 text-lg">
            Whether you have a question about services, pricing, or anything else, our team is ready to answer all your questions.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 bg-gray-50 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* Form */}
          <div className="bg-white shadow-lg rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Send us a message</h3>

            {submitted ? (
              <div className="text-green-600 text-center text-lg font-semibold">
                Thank you! We&apos;ll get back to you shortly.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2 font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block mb-2 font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2 font-medium text-gray-700">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="bg-primary hover:bg-primary-dark text-white py-3 px-6 rounded-full font-semibold transition"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Contact Information */}
          <div className="flex flex-col space-y-8">
            <div className="flex items-start gap-4">
              <div className="text-primary">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path d="M3 5h18M3 12h18M3 19h18" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-800 mb-1">Our Office</h4>
                <p className="text-gray-600">Karen, Nairobi, Kenya</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-primary">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path d="M16 12a4 4 0 01-8 0 4 4 0 018 0z" />
                  <path d="M12 2a10 10 0 0110 10c0 7-10 18-10 18S2 19 2 12a10 10 0 0110-10z" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-800 mb-1">Email Us</h4>
                <p className="text-gray-600">info@tripatiteinteriors.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-primary">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path d="M2 8.5C2 5.462 4.462 3 7.5 3h9C19.538 3 22 5.462 22 8.5V15.5C22 18.538 19.538 21 16.5 21h-9C4.462 21 2 18.538 2 15.5V8.5z" />
                  <path d="M8 7h8M8 11h8M8 15h5" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-800 mb-1">Call Us</h4>
                <p className="text-gray-600">+254 712 345678</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Google Map */}
      <section className="py-16">
        <div className="w-full h-[400px]">
          <iframe
            title="Tripatite Interiors Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.941421847747!2d36.953396887158206!3d-1.1707980000000038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f41372431de7b%3A0x4ee6c12128d2c5!2sKamaki&#39;s%20Palace!5e0!3m2!1sen!2ske!4v1752151022563!5m2!1sen!2ske"            
            className="w-full h-full border-0"
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>
      </section>

    </div>
  );
}
