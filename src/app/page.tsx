// src/app/page.tsx

"use client";

import { useState } from 'react';
import Tesseract from 'tesseract.js';

const Page = () => {
  const [inputValue, setInputValue] = useState('');
  const [submittedValue, setSubmittedValue] = useState('');



  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmittedValue(inputValue);
    setInputValue(''); // Clear the input field after submission
  };

  return (
    <div className="min-h-screen bg-blue-600">
      {/* Sticky Navbar */}
      <nav className="sticky top-0 z-50 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">AI project</h1>
          <ul className="flex space-x-6">
            <li><a href="#about" className="hover:text-blue-600 transition">About</a></li>
            <li><a href="#services" className="hover:text-blue-600 transition">Services</a></li>
            <li><a href="#contact" className="hover:text-blue-600 transition">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center h-screen bg-blue-600 text-white text-center">
        <h2 className="text-5xl font-extrabold mb-4">Welcome to My Landing Page</h2>
        <p className="mb-6 text-lg max-w-2xl">Discover amazing content and services tailored just for you.</p>
        <form onSubmit={handleSubmit} className="flex justify-center space-x-4">
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Join our newsletter..."
            className="p-3 rounded-lg w-64 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <button
            type="submit"
            className="px-4 py-3 bg-white text-blue-600 rounded-lg shadow-lg hover:bg-gray-100 transition"
          >
            Subscribe
          </button>
        </form>
        {submittedValue && (
          <p className="mt-4 text-lg">You submitted: {submittedValue}</p>
        )}
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-4xl font-bold mb-6">About Us</h3>
          <div className="flex flex-col md:flex-row items-center justify-center space-x-0 md:space-x-8">
            <img src="/path/to/your/image.jpg" alt="About Us" className="w-full md:w-1/2 h-auto rounded-lg shadow-lg mb-4 md:mb-0" />
            <p className="text-gray-600 md:w-1/2 text-lg">
              We offer a variety of services to help you achieve your goals. Our team is dedicated to providing the best solutions for our clients.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-200">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-4xl font-bold mb-6">Our Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg transition hover:shadow-xl">
              <h4 className="text-xl font-semibold mb-2">Service 1</h4>
              <p className="text-gray-600">Description of service 1.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg transition hover:shadow-xl">
              <h4 className="text-xl font-semibold mb-2">Service 2</h4>
              <p className="text-gray-600">Description of service 2.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg transition hover:shadow-xl">
              <h4 className="text-xl font-semibold mb-2">Service 3</h4>
              <p className="text-gray-600">Description of service 3.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-4xl font-bold mb-6">Contact Us</h3>
          <p className="text-gray-600 text-lg">Feel free to reach out for inquiries.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-4 bg-gray-800 text-white text-center">
        <p>&copy; 2024 My Brand. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Page;
