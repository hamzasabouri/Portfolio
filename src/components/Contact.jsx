import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const form = useRef();
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_rmsrcpd',  // Remplace par ton Service ID
        'template_53jz40o', // Remplace par ton Template ID
        form.current,
        '-Kt6r_Gmtm3_bYKLL' // Remplace par ta Public Key
      )
      .then(() => {
        setSent(true);
        setError(null); // Clear previous errors
        form.current.reset();
      })
      .catch((err) => {
        setError('An error occurred. Please try again later.');
        console.error(err);
      });
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-gradient-to-r from-green-400 via-blue-500 to-indigo-600 flex flex-col items-center justify-center px-6 py-16 text-white"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-yellow-300">Contact Me</h2>

        {/* Formulaire EmailJS */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="bg-white shadow-xl rounded-lg p-6 space-y-4"
        >
          <input
            name="user_name"
            type="text"
            placeholder="Name"
            required
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-800"
          />
          <input
            name="user_email"
            type="email"
            placeholder="Email"
            required
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-800"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="5"
            required
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-800"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold py-3 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Send
          </button>
          {sent && (
            <p className="text-green-700 font-semibold">Message sent successfully!</p>
          )}
          {error && <p className="text-red-600 font-semibold">{error}</p>}
        </form>

        <div className="mt-8 flex justify-center gap-6 text-3xl text-gray-700">
          <a
            href="https://github.com/hamzasabouri"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/hamza-sabouri/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-700 transition duration-300"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
