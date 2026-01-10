"use client";

export default function ContactForm() {
  return (
    <section className="mx-auto px-4">

      {/* Heading */}
      <div className="text-center">
        <h2 className="text-3xl font-semibold">
          Get in <span className="text-red-800">Touch</span>
        </h2>
        <p className="text-gray-600 mt-2">
          Feel free to contact us for any admission or general enquiry
        </p>
      </div>

      {/* Form */}
      <form className="p-6 md:p-8 rounded-lg space-y-6">

        <input
          type="text"
          placeholder="Enter your name"
          className="w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-800"
          required
        />

        <input
          type="email"
          placeholder="Enter your Email Address"
          className="w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-800"
          required
        />

        <input
          type="text"
          placeholder="Enter your Query"
          className="w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-800"
        />

        <textarea
          rows="3"
          placeholder="Message"
          className="w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-800"
          required
        ></textarea>

        <div className="text-center">
          <button
            type="submit"
            className="border border-black px-8 py-3 rounded-md text-lg font-medium hover:bg-black hover:text-white transition"
          >
            Send Message
          </button>
        </div>

      </form>
    </section>
  );
}
