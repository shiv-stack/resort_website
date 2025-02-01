import React from "react";
import { motion } from "framer-motion";

const About = () => (
  <motion.div
    className="container mx-auto py-16"
    initial={{ x: -200 }}
    animate={{ x: 0 }}
    transition={{ duration: 0.5 }}
  >
    <h2 className="text-3xl font-bold mb-4">About Us</h2>
    <p className="text-lg">
      Our resort is located in the heart of nature, offering breathtaking views and unmatched hospitality.
    </p>
  </motion.div>
);

export default About;
