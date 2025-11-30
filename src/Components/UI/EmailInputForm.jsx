import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

// Hardcoded credentials for simplicity in this example
const SERVICE_ID = "service_jl3rlii";
const TEMPLATE_ID = "template_gdm3p9n";
const PUBLIC_KEY = "tOBbCpkMZKUFtZ-cW";

const EmailInputForm = ({ placeholder }) => {
  const form = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        // Using your specific IDs directly in the function call
        .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
        .then(
          (result) => {
            console.log("SUCCESS!", result.text);
            alert("Email sent successfully!");
            form.current?.reset();
          },
          (error) => {
            console.log("FAILED...", error.text);
            alert("Failed to send email.");
          }
        );
    }
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="relative">
      <input
        type="email"
        name="user_email"
        placeholder={placeholder}
        className="w-full pl-5 pr-10 py-2 rounded-xl outline-none shadow-md border-[#1d4d85] border-2 bg-transparent placeholder:text-[#1d4d85]"
        required
      />
      <button
        type="submit"
        aria-label="Send Email"
        className="absolute right-2 top-1/2 transform -translate-y-1/2"
      >
        <PaperAirplaneIcon className="w-6 h-6 text-[#1d4d85] hover:text-[#14365d] transition-colors" />
      </button>
    </form>
  );
};

export default EmailInputForm;
