import React, { useState } from "react";
import Lottie from "react-lottie-player";
import emailjs from "emailjs-com";
import toast, { Toaster } from "react-hot-toast";
import contactLotti from "../assets/contact-lotti.json";

// email sender info
const SERVICE = import.meta.env.VITE_SERVICE_ID;
const TEMPLATED = import.meta.env.VITE_TEMPLATE_ID;
const PUBLIC = import.meta.env.VITE_PUBLIC_KEY;

 console.log(SERVICE);
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleContact = (e) => {
    e.preventDefault();
    setIsSending(true);
  
    const emailParams = {
      to_name: "Maruf",
      from_name: formData.name,  
      email_id: formData.email,
      message: formData.message, 
    };
  
    emailjs
      .send(SERVICE, TEMPLATED, emailParams, PUBLIC)
      .then(
        () => {
          setIsSending(false);
          toast.success("Your message has been sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          setIsSending(false);
          console.error("Error sending email:", error);
          toast.error("Failed to send your message. Please try again.");
        }
      );
  };
  

  return (
    <div className="bg-base-200">
      {/* Toast Container */}
      <Toaster position="top-center" reverseOrder={false} />

      <div id="contact" className="py-14 px-5 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Form Section */}
          <div className="px-10 bg-gradient-to-tr from-[#1B1833] to-[#1C325B] py-10 rounded-lg">
            <form onSubmit={handleContact} className="flex flex-col gap-4 text-white">
              <div className="flex justify-center">
                <label className="font-extrabold text-5xl">Contact With Me</label>
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-bold text-xl">Name</label>
                <input
                  className="border-2 focus:outline-[#413a79] px-3 py-2 text-lg font-bold rounded-md text-black"
                  type="text"
                  name="name"
                  placeholder="Your Name:"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-bold text-xl">Email</label>
                <input
                  className="border-2 focus:outline-[#413a79] px-3 py-2 text-lg font-bold rounded-md text-black"
                  type="email"
                  name="email"
                  placeholder="demo@gmail.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-bold text-xl">Write Your Message</label>
                <textarea
                  name="message"
                  placeholder="Write your message:"
                  rows={6}
                  className="border-2 focus:outline-[#413a79] rounded-md px-3 py-2 text-black font-bold text-lg"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>
              <div className="flex items-center justify-center">
                <button
                  type="submit"
                  className="btn mt-3 bg-transparent border-2 rounded-b-none border-white rounded-md text-white font-bold text-xl hover:bg-white hover:text-black"
                  disabled={isSending}
                >
                  {isSending ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          </div>

          {/* Lottie Animation Section */}
          <div>
            <Lottie
              loop
              animationData={contactLotti}
              play
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
