import React, { useState } from "react";
import emailjs from 'emailjs-com';
import { IoLogoFacebook, IoLogoTwitter, IoLogoInstagram } from "react-icons/io5";

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs.send(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID,{
      name,
      email,
      message
    }, import.meta.env.VITE_PUBLIC_KEY)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setIsSending(false);
        setSuccess(true);
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((err) => {
        console.log('FAILED...', err);
        setIsSending(false);
        setError('Failed to send message, please try again later.');
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="container mx-auto p-5">
        <div className="flex flex-wrap bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="w-full md:w-1/2 p-5">
            <h2 className="text-3xl font-bold mb-5">Contact Us</h2>
            <form onSubmit={sendEmail}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Your email"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Your message"
                  rows="4"
                  required
                />
              </div>
              <div className="mb-4">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  disabled={isSending}
                >
                  {isSending ? 'Sending...' : 'Send Message'}
                </button>
              </div>
              {success && <p className="text-green-500">Message sent successfully!</p>}
              {error && <p className="text-red-500">{error}</p>}
            </form>
          </div>
          <div className="w-full md:w-1/2 p-5 bg-gray-200">
            <h2 className="text-3xl font-bold mb-5">About Us</h2>
            <p className="mb-4">
              Welcome to our company! We are dedicated to providing the best service possible. Our team is passionate about our work and we are always here to help you.
            </p>
            <p className="mb-4">
              Follow us on our social media channels to stay updated with the latest news and offers.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-500 hover:text-blue-700">
                <IoLogoFacebook size={30} />
              </a>
              <a href="#" className="text-blue-400 hover:text-blue-600">
                <IoLogoTwitter size={30} />
              </a>
              <a href="#" className="text-pink-500 hover:text-pink-700">
                <IoLogoInstagram size={30} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
