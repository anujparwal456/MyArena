"use client";

import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Twitter,
  Send,
} from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import { SiGeeksforgeeks, SiLeetcode, SiKaggle } from "react-icons/si";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:anujparwal456089@gmail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`;
    window.location.href = mailto;

    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "anujparwal456089@gmail.com",
      href: "mailto:anujparwal456089@gmail.com",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+91-9579944504",
      href: "tel:+919579944504",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Nanded, Maharashtra, India",
      href: "https://www.google.com/maps/search/Nanded%2C%20Maharashtra%2C%20India",
      target: "_blank",
    },
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/anuj-parwal-805829283/",
      color: "hover:text-blue-500",
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      href: "https://github.com/anujparwal456",
      color: "hover:text-gray-500",
    },
    {
      icon: <Twitter className="w-6 h-6" />,
      label: "Twitter",
      href: "https://x.com/anuj_parwal2155",
      color: "hover:text-sky-400",
    },
    {
      icon: <FaInstagram className="w-6 h-6" />,
      label: "Instagram",
      href: "https://www.instagram.com/anuj_parwal?igsh=MW1hZ2NiMTd1eGluZA==",
      color: "hover:text-pink-500",
    },
    {
      icon: <SiKaggle className="w-6 h-6" />,
      label: "Kaggle",
      href: "https://www.kaggle.com/anuj0967",
      color: "hover:text-blue-400",
    },
    {
      icon: <SiGeeksforgeeks className="w-6 h-6" />,
      label: "GeeksforGeeks",
      href: "https://www.geeksforgeeks.org/profile/anujparwamjuz?from=explore&tab=activity",
      color: "hover:text-green-500",
    },
    {
      icon: <SiLeetcode className="w-6 h-6" />,
      label: "LeetCode",
      href: "https://leetcode.com/anujparwal/",
      color: "hover:text-orange-500",
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-20 text-white overflow-hidden min-h-screen"
    >
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Ready to collaborate on your next AI/ML project or discuss opportunities? Let&apos;s connect!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Section */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Let&apos;s Start a Conversation</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              I&apos;m always interested in new opportunities, innovative projects, and collaborations in AI, ML, and web development.
            </p>

            <div className="space-y-4 mb-6">
              {contactInfo.map((info, idx) => (
                <a
                  key={idx}
                  href={info.href}
                  target={info.target || undefined}
                  rel={info.target === "_blank" ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-3 p-3 bg-gray-800 rounded-xl hover:shadow-[0_0_25px_rgba(99,102,241,0.5)] transition-all duration-300 transform hover:-translate-y-1 group cursor-pointer"
                >
                  <div className="text-blue-500 group-hover:text-blue-400 transition-colors">
                    {info.icon}
                  </div>
                  <div>
                    <p className="font-semibold">{info.label}</p>
                    <p className="text-gray-400">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Icons */}
            <div>
              <h4 className="font-semibold mb-3">Follow Me</h4>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-gray-800 rounded-full text-gray-300 ${social.color} transition-all duration-300 hover:shadow-[0_0_25px_rgba(99,102,241,0.5)] transform hover:-translate-y-1`}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form
              onSubmit={handleSubmit}
              className="space-y-4 bg-gray-800 p-6 rounded-xl shadow-lg"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 text-sm mb-1">
                    Name
                  </label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="bg-gray-900 text-white"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 text-sm mb-1">
                    Email
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="bg-gray-900 text-white"
                    placeholder="name@gmail.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-300 text-sm mb-1">
                  Subject
                </label>
                <Input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="bg-gray-900 text-white"
                  placeholder="Subject"
                />
              </div>

              <div>
                <label className="block text-gray-300 text-sm mb-1">
                  Message
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="bg-gray-900 text-white resize-none"
                  placeholder="Your message"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all flex items-center justify-center gap-2"
              >
                Send Message
                <Send size={20} />
              </Button>
            </form>
          </div>
        </div>

        <footer className="mt-16 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            Designed & Built by{" "}
            <span className="text-purple-400 font-medium">Anuj Parwal</span>
          </p>
          <p className="mt-1 text-sm text-gray-500">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </footer>
      </div>
    </section>
  );
}
