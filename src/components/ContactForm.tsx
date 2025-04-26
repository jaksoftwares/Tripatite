'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionStatus(null);

    // Placeholder for form submission logic
    try {
      // Assuming we are sending data to an email service or an API
      // You can replace this with actual API integration
      console.log('Form Submitted:', formData);

      // Simulating form submission
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmissionStatus('Thank you for reaching out! We will get back to you soon.');
        setFormData({ name: '', email: '', message: '' }); // Clear the form
      }, 2000);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setIsSubmitting(false);
      setSubmissionStatus('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="bg-blue-50 py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Get In Touch</h2>
        <p className="text-lg text-gray-600 mb-12">We&apos;d love to hear from you! Fill out the form below and we will respond shortly.</p>
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-lg shadow-md max-w-md mx-auto"
        >
          <div className="mb-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-6">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
          {submissionStatus && (
            <div className="mt-4 text-sm text-gray-600">{submissionStatus}</div>
          )}
        </form>
      </div>
    </div>
  );
}
