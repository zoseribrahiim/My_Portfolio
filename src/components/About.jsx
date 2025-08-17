import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import myPhoto from "../assets/myPhoto.png";


export default function About() {
  return (
    <section id="about" className="py-20 md:py-24 border-t border-white/5">
      <div className="container px-4">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          About Me
        </motion.h2>
        <p className="section-sub mt-1">
          Passionate and motivated programmer seeking an opportunity to enhance
          skills in front-end development and contribute to innovative projects.
          With a solid foundation in HTML, CSS, JavaScript, Bootstrap, and
          React, aiming to leverage technical abilities and strong communication
          skills.
        </p>
        <div className="grid md:grid-cols-2 gap-8 mt-8 items-center">
          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 md:order-1"
          >
            <p className="text-gray-300 leading-relaxed">
              I'm Ibrahim, a Front-end developer based in Benha. I love turning
              complex ideas into simple, beautiful interfaces. I focus on
              performance, accessibility, and clean component architecture.
            </p>

            <ul className="mt-4 grid grid-cols-2 gap-2 text-gray-300">
              <li>• React / Next </li>
              <li>• Tailwind CSS </li>
              <li>• TypeScript </li>
              <li>• JQuery Plugins </li>
            </ul>

            {/* Social Icons */}
            <div className="mt-6 flex gap-4 text-2xl text-white">
              <motion.a
                whileHover={{ scale: 1.2 }}
                className="hover:text-cyan-400 transition-colors duration-300"
                href="https://github.com/zoseribrahiim"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2 }}
                className="hover:text-cyan-400 transition-colors duration-300"
                href="https://www.linkedin.com/in/ibrahim-ahmed-33191a276"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2 }}
                className="hover:text-cyan-400 transition-colors duration-300"
                href="https://www.facebook.com/ibrahim.essam.9469/"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebook />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2 }}
                className="hover:text-cyan-400 transition-colors duration-300"
                href="https://www.instagram.com/ibrahim.essam.9469/"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2 }}
                className="hover:text-cyan-400 transition-colors duration-300"
                href="https://wa.me/201015697277"
                target="_blank"
                rel="noreferrer"
              >
                <FaWhatsapp />
              </motion.a>
            </div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 md:order-2"
          >
            <div className="w-3/4 aspect-square rounded-3xl overflow-hidden border border-white/10 bg-white/5 mx-auto">
              <img
                src={myPhoto}
                alt="Ibrahim Ahmed"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
