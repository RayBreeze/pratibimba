"use client";

import ReCAPTCHA from "react-google-recaptcha";
import { useState, useRef, ChangeEvent, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

interface FormData {
  name: string;
  email: string;
  message: string;
}

function ContactForm() {
  const [userInput, setUserInput] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [token, setToken] = useState<string | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setUserInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!token) {
      toast.error("Please verify the captcha");
      return;
    }

    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

    try {
      const emailParams = {
        name: userInput.name,
        email: userInput.email,
        message: userInput.message,
        "g-recaptcha-response": token, // ✅ Required for EmailJS CAPTCHA
      };

      const res = await emailjs.send(
        serviceID,
        templateID,
        emailParams,
        publicKey
      );

      if (res.status === 200) {
        toast.success("Message sent successfully!");

        setUserInput({
          name: "",
          email: "",
          message: "",
        });

        recaptchaRef.current?.reset(); // reset captcha
        setToken(null);
      }
    } catch (error) {
      toast.error("Failed to send message. Please try again later.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      
      <div>
        <h2 className="text-3xl font-semibold tracking-tight mb-10">
          Reach the Editorial Team
        </h2>
      </div>

      {/* Name */}
      <div>
        <label className="block mb-2 text-sm font-medium">
          Your Name
        </label>
        <input
          type="text"
          name="name"
          value={userInput.name}
          onChange={handleChange}
          required
          className="w-full border border-neutral-300 px-4 py-2 rounded-md focus:outline-none focus:border-rose-600"
        />
      </div>

      {/* Email */}
      <div>
        <label className="block mb-2 text-sm font-medium">
          Your Email
        </label>
        <input
          type="email"
          name="email"
          value={userInput.email}
          onChange={handleChange}
          required
          className="w-full border border-neutral-300 px-4 py-2 rounded-md focus:outline-none focus:border-rose-600"
        />
      </div>

      {/* Message */}
      <div>
        <label className="block mb-2 text-sm font-medium">
          Your Message
        </label>
        <textarea
          name="message"
          value={userInput.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full border border-neutral-300 px-4 py-2 rounded-md focus:outline-none focus:border-rose-600 resize-none"
        />
      </div>

      {/* CAPTCHA */}
      <div className="pt-2 scale-90 origin-left">
        <ReCAPTCHA
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
          ref={recaptchaRef}
          onChange={(value) => setToken(value)}
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="bg-rose-600 text-white px-6 py-2 rounded-md hover:bg-rose-700 transition"
      >
        Share Your Reflection
      </button>

    </form>
  );
}

export default ContactForm;