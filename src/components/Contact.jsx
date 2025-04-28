import { CONTACT } from "../constants";
import { motion } from "motion/react";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Get in <span className="text-neutral-500">Touch</span>
      </motion.h2>

      <div className="flex flex-wrap justify-center">
        {/* Left side - Contact Info */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="w-full max-w-md p-4 lg:w-1/2"
        >
          <div className="text-lg text-neutral-400 space-y-4">
            <p>
              <strong className="text-white">Address:</strong> <br />
              {CONTACT.address}
            </p>
            <p>
              <strong className="text-white">Phone:</strong> <br />
              {CONTACT.phoneNo}
            </p>
            <p>
              <strong className="text-white">Email:</strong> <br />
              <a
                href={`mailto:${CONTACT.email}`}
                className="border-b border-neutral-500 hover:text-white"
              >
                {CONTACT.email}
              </a>
            </p>
          </div>
        </motion.div>

        {/* Right side - Contact Form */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="w-full max-w-md p-4 lg:w-1/2"
        >
          <form className="space-y-6">
            <div>
              <label
                className="block text-sm mb-2 text-neutral-400"
                htmlFor="name"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full rounded-lg border border-neutral-700 bg-neutral-800 p-3 text-white"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label
                className="block text-sm mb-2 text-neutral-400"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full rounded-lg border border-neutral-700 bg-neutral-800 p-3 text-white"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label
                className="block text-sm mb-2 text-neutral-400"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="w-full rounded-lg border border-neutral-700 bg-neutral-800 p-3 text-white"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="rounded-lg bg-purple-700 px-6 py-3 font-semibold text-white hover:bg-purple-800 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
