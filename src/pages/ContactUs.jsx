import React, { useState } from "react";
import emailjs from "emailjs-com";
// import Location from "../components/Location/Location";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
  FaWhatsapp,
  FaPhone,
} from "react-icons/fa";
import {
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoWhatsapp,
} from "react-icons/io5";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        {
          name,
          email,
          message,
        },
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setIsSending(false);
        setSuccess(true);
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((err) => {
        console.log("FAILED...", err);
        setIsSending(false);
        setError("Failed to send message, please try again later.");
      });
  };

  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="container mx-auto p-5 pt-24">
          <div className="flex flex-wrap bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="w-full md:w-1/2 p-5">
              <h2 className="text-3xl font-bold mb-5">Contact Us</h2>
              <form onSubmit={sendEmail}>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="name"
                  >
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
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="email"
                  >
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
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="message"
                  >
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
                    {isSending ? "Sending..." : "Send Message"}
                  </button>
                </div>
                {success && (
                  <p className="text-green-500">Message sent successfully!</p>
                )}
                {error && <p className="text-red-500">{error}</p>}
              </form>
            </div>
            <div className="w-full md:w-1/2 p-5 bg-slate-100">
              <h2 className="text-3xl font-bold mb-5">Discover Us</h2>
              <p className="mb-4">
                Discover life-changing travel at Travello.in. We specialize in
                personalized itineraries crafted to enrich and inspire, tailored
                to your unique preferences.
              </p>
              <p className="mb-4">
                Follow us on our social media channels to stay updated with the
                latest news and offers.
              </p>
              <div className="flex flex-col  justify-center">
                <div className="py-8 px-4">
                  <div className="flex items-center gap-3 ">
                    <FaLocationArrow />
                    <p>Kozhikode, Kerala</p>
                  </div>
                  <div className="flex items-center gap-3 mt-3">
                    <FaMobileAlt />
                    <p>+91 8848514035</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mt-6">
                      <a href="https://www.instagram.com/travello.in?igsh=MXAxcmYxb3lrOGhrZA==">
                        <FaInstagram className="text-2xl" />
                      </a>
                      <a href="https://fb.me/5NpnYupa2">
                        <FaFacebook className="text-2xl" />
                      </a>
                      <a href="https://api.whatsapp.com/send?phone=%2B918848514035&context=ARApTa-M9zmvX2IQu-KNuS-B9Hff8qfNFtBOzZ4dGmjJZtsZWr-xpUXYNaaIkNq3__uMdF5BBYUU3f9K4B6aRQwywS1lNMVVHwvdjo8NDJofzOt27atMXcnt5IKXngVBZpUMRRWOGsZmvx9ygyj2DkTwYg&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwZXh0bgNhZW0CMTAAAR23dmgBZyPNadby5_oxhp82rcPqA8zypFnOHUbrn3ctzP2gvFV_MKehdXo_aem_veets8wdjcplkrWZrUmEZg">
                        <FaWhatsapp className="text-2xl" />
                      </a>
                      <a href="#">
                        <FaPhone className="text-2xl" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Location /> */}
      <a
          href="tel:+91 8848514035"
          
          rel="noopener noreferrer"
          className="fixed bottom-4 right-4 z-50 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition duration-300"
        >
          <FaWhatsapp size={32} />
        </a>
    </div>
  );
};

export default ContactUs;
