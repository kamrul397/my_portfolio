export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 sm:px-12 scroll-mt-16">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
          Get In <span className="text-blue-600">Touch</span>
        </h2>
        <p className="mt-3 text-lg text-slate-600">
          Have an exciting opportunity or project to discuss? Drop me a line
          below!
        </p>

        {/* Form Element */}
        <form className="mt-12 text-left space-y-6 bg-white p-8 sm:p-10 rounded-3xl border border-slate-100 shadow-sm">
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="name"
                className="font-semibold text-slate-700 text-sm"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                required
                placeholder="John Doe"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition-all text-base"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="font-semibold text-slate-700 text-sm"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                required
                placeholder="john@example.com"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition-all text-base"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="message"
              className="font-semibold text-slate-700 text-sm"
            >
              Message
            </label>
            <textarea
              id="message"
              required
              rows="5"
              placeholder="Hi Kamrul, I'd love to chat about a project..."
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition-all text-base resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full sm:w-auto bg-blue-600 text-white font-semibold px-8 py-3.5 rounded-xl shadow-md shadow-blue-500/10 hover:bg-blue-700 active:scale-[0.99] transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
