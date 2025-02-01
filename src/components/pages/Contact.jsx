import React from "react";
import { motion } from "framer-motion";

const Contact = () => (
  <motion.div
    className="container mx-auto py-16"
    initial={{ y: 200 }}
    animate={{ y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
    <form className="max-w-md mx-auto">
      <input
        type="text"
        placeholder="Your Name"
        className="w-full p-2 mb-4 border rounded-lg"
      />
      <input
        type="email"
        placeholder="Your Email"
        className="w-full p-2 mb-4 border rounded-lg"
      />
      <textarea
        placeholder="Your Message"
        className="w-full p-2 mb-4 border rounded-lg"
      ></textarea>
      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
        Send Message
      </button>
    </form>
  </motion.div>
);

export default Contact;
