import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsDisabled(true);

    emailjs
      .send(
        "service_crttr7d",
        "template_f718r5t",
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "44fk3prhtfC_aRmsC"
      )
      .then(
        (response) => {
          console.log("Email sent!", response);
          setStatus("✅ Message Sent Successfully!");
          setFormData({ name: "", email: "", subject: "", message: "" });
        },
        (error) => {
          console.log("FAILED...", error);
          setStatus("❌ Message Failed to Send.");
          setIsDisabled(false);
        }
      );
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#101828] text-white px-4">
      <h2 className="text-4xl font-bold text-white mb-6 mt-12">
        Get in <span className="text-blue-500">Touch</span>
      </h2>
      <div className="flex gap-6 mb-8">
        <a href="mailto:yashsoni2191@gmail.com">
          <button className="flex items-center cursor-pointer gap-2 bg-[#1a1a1a] text-white px-4 py-2 rounded-full shadow-md hover:bg-blue-600 transition">
            📧 yashsoni2191@gmail.com
          </button>
        </a>
      </div>

      <form
        onSubmit={sendEmail}
        className="bg-[#1a1a1a] p-6 rounded-lg shadow-lg w-full max-w-lg"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 mb-4 rounded-md bg-[#0a0a0a] text-white border border-gray-600 focus:border-blue-500"
          disabled={isDisabled}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 mb-4 rounded-md bg-[#0a0a0a] text-white border border-gray-600 focus:border-blue-500"
          disabled={isDisabled}
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          className="w-full p-3 mb-4 rounded-md bg-[#0a0a0a] text-white border border-gray-600 focus:border-blue-500"
          disabled={isDisabled}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-3 mb-4 rounded-md bg-[#0a0a0a] text-white border border-gray-600 focus:border-blue-500 h-32"
          disabled={isDisabled}
        ></textarea>

        <button
          type="submit"
          className={`w-full py-3 rounded-md transition ${
            isDisabled
              ? "bg-gray-500 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600"
          }`}
          disabled={isDisabled}
        >
          {isDisabled ? "Message Sent" : "Send Message"}
        </button>

        {status && <p className="mt-4 text-center">{status}</p>}
      </form>
    </div>
  );
};

export default Contact;
