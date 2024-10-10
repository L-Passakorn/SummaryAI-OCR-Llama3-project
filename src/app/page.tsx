"use client";

import { useState } from "react";
import axios from "axios";

const Page = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null); // State to store the image preview URL
  const [summary, setSummary] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false); // Loading state for summarization

  // Handle file selection
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setSelectedFile(file);

      // Create a URL for the selected image file to use for preview
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  // Function to handle summarization
  const handleSummarize = async () => {
    if (!selectedFile) {
      alert("Please upload an image file first.");
      return;
    }

    // Create a FormData object to send the file
    const formData = new FormData();
    formData.append("file", selectedFile);
    setLoading(true); // Set loading to true when starting summarization

    try {
      // Send POST request to FastAPI
      const response = await axios.post(
        "http://127.0.0.1:8000/summarize-ocr/",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      // Set summarized text
      setSummary(response.data.summary);
    } catch (error) {
      console.error("Error summarizing:", error);
      setSummary("Error occurred during summarization.");
    } finally {
      setLoading(false); // Set loading to false after the API call
      // Optionally clear the selected file and image here if needed
    }
  };

  return (
    <div className="min-h-screen bg-[#003135]">
      {/* Sticky Navbar */}
      <nav className="sticky top-0 z-50 bg-[#003135]">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-2 md:flex-row justify-between items-center">
          <h1 className="text-xl font-extrabold text-white">Summary.AI</h1>
          <ul className="flex space-x-6">
            <li>
              <a
                href="#about"
                className="hover:text-yellow-400 transition font-mono"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="hover:text-yellow-400 transition font-mono"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-yellow-400 transition font-mono"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center h-96 md:h-screen bg-[#003135] text-white text-center">
        <h2 className="text-2xl md:text-5xl font-extrabold mb-4">
          Welcome to Summary.AI
        </h2>
        <p className="mb-6 text-sm md:text-lg max-w-2xl font-medium font-mono">
          We will summarize your images in a minute
        </p>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-10 bg-[#124950]">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-2xl md:text-5xl font-extrabold mb-10 text-[#ffffff]">
            About Us
          </h3>
          <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="flex flex-col md:flex-row items-center justify-center space-x-0 md:space-x-8">
              <img
                src="/about.png"
                alt="About Us"
                className="w-full md:w-1/2 h-auto rounded-lg mb-4 md:mb-0"
              />
              <p className="text-[#ffffff] md:w-1/2 text-sm md:text-lg text-justify font-mono indent-10">
                At Summary.AI, we simplify how you handle documents. Using
                advanced OCR and AI-powered language models, our platform
                extracts text from images and turns it into concise summaries,
                saving you time and effort. Whether you're a student or a
                professional, our tool helps you quickly access key information
                from scanned files, notes, or printed documents. We're dedicated
                to making document processing fast, accurate, and easy for
                everyone. Experience smarter document management with
                Summary.AI!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-10 bg-[#003135]">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-2xl md:text-5xl font-extrabold mb-10">
            Our Services
          </h3>
          {selectedImage ? (
            <div className="p-2 w-full h-96 my-4 bg-gray-700 rounded-lg">
              <div className="flex h-full items-center overflow-auto justify-center rounded-lg">
                <img
                  src={selectedImage}
                  alt="Selected Preview"
                  className="w-full h-auto"
                />
              </div>
            </div>
          ) : (
            <div className="flex items-center w-full h-96 justify-center my-3 bg-gray-700 rounded-lg">
              <p className="text-gray-400 font-mono">No image selected</p>
            </div>
          )}

          <div className="flex flex-col md:flex-row items-center justify-center gap-5">
            <div className="flex items-center justify-center w-full font-mono">
              <label
                htmlFor="dropzone-file"
                className={`flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-800 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500`}
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">Click to upload</span> or
                    drag and drop
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    SVG, PNG, JPG or GIF
                  </p>
                </div>

                <input
                  id="dropzone-file"
                  type="file"
                  className="hidden"
                  onChange={handleFileChange}
                />
              </label>
            </div>
            <div className="flex rounded-lg items-center h-64 justify-center w-full bg-gray-700 py-5 text-white font-mono relative overflow-hidden">
              {loading ? (
                <p className="p-4">Loading...</p> // Skeleton loading text
              ) : summary ? (
                <div className="pl-4 pr-2 w-full h-full my-2 overflow-hidden relative">
                  {/* Top Gradient */}
                  <div className="absolute z-20 inset-x-4 top-0 h-2 bg-gradient-to-b from-gray-700 to-transparent pointer-events-none"></div>
                  {/* Bottom Gradient */}
                  <div className="absolute z-20 inset-x-0 bottom-0 h-2 bg-gradient-to-t from-gray-700 to-transparent pointer-events-none"></div>
                  <p className="pr-2 whitespace-pre-line max-h-full text-justify overflow-y-auto scrollable relative z-10">
                    {summary}
                  </p>
                </div>
              ) : (
                <p className="text-gray-400 font-mono">
                  Summarized Text will appear here...
                </p>
              )}
            </div>
          </div>
          <button
            className="flex mt-4 h-12 w-full justify-center items-center px-4 py-2 bg-[#124950] text-white font-mono rounded-lg hover:bg-yellow-400 transition"
            onClick={handleSummarize}
          >
            Summarize
          </button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-10 bg-[#124950]">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-2xl md:text-5xl font-extrabold mb-6 text-[#ffffff]">
            Contact Us
          </h3>
          <p className="text-sm md:text-lg text-[#ffffff] mb-4 font-mono">
            If you have any questions, feel free to reach out to us!
          </p>
          {/* Rotating Border */}
          <div className="flex justify-center mb-3">
            <div className="relative w-48 h-48 rounded-full p-2 border-element">
              <img
                src="/profile.jpg"
                alt="Profile"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>
          <p className="text-md text-[#ffffff] font-mono">
            Github: L-Passakorn
          </p>
          <p className="text-md text-[#ffffff] font-mono">
            Email: 6510110356@email.psu.ac.th
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#003135] text-white py-4 text-center">
        <p className="text-sm font-mono">
          © 2024 Summary.AI. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Page;
