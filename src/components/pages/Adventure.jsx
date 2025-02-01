import React from "react";
import { motion } from "framer-motion";

const Adventure = () => (
  <motion.div
    className="container mx-auto py-16"
    initial={{ scale: 0.9 }}
    animate={{ scale: 1 }}
    transition={{ duration: 0.5 }}
  >
    <h2 className="text-3xl font-bold mb-4 ">Adventure Activities</h2>
    <p className="text-lg">
      Coming soon: Thrilling adventures like trekking, zip-lining, and more!
    </p>
  </motion.div>
);

export default Adventure;
