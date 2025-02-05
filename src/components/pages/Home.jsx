import React from "react";
import { motion } from "framer-motion";
import Carousel from "../carouse_images";


const Home = () => (
  <motion.div
    className="container mx-auto py-16 text-center"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    <h2 className="text-4xl font-bold mb-4">Welcome to My Resort</h2>
    <p className="text-lg mb-8">Experience luxury and serenity like never before.</p>
    <Carousel />

    {/* <img
      src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      alt="Resort view"
      className="rounded-xl shadow-lg mx-auto"
    /> */}
    <br />

    <h1 className="text-4xl font-bold mb-4">Opening Soon</h1>


  </motion.div>
);

export default Home;
