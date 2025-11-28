import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 border-t-2 border-ink dark:border-white bg-white dark:bg-stone-900 transition-colors">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-block p-4 bg-ink dark:bg-white text-white dark:text-ink mb-6 transform -rotate-3 neo-shadow">
            <Mail size={32} />
          </div>
          <h2 className="text-5xl md:text-6xl font-display font-black text-ink dark:text-white mb-6">Let's work together</h2>
          <p className="text-xl text-stone-600 dark:text-stone-400 max-w-lg mx-auto font-medium">
            Got a crazy idea? I'm currently available for freelance projects and full-time roles.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div className="md:col-span-1 space-y-6">
            <div className="p-6 bg-orange-50 dark:bg-stone-800 border-2 border-ink dark:border-white neo-shadow text-center md:text-left transform hover:rotate-2 transition-transform">
              <div className="font-bold font-display text-xl text-ink dark:text-white mb-2">EMAIL ME</div>
              <a href="mailto:theavidwivedi@gmail.com" className="text-ink dark:text-stone-300 hover:text-orange-600 dark:hover:text-orange-400 font-medium underline decoration-2">theavidwivedi@gmail.com</a>
            </div>
            <div className="p-6 bg-white dark:bg-stone-800 border-2 border-ink dark:border-white neo-shadow text-center md:text-left transform hover:-rotate-2 transition-transform">
              <div className="font-bold font-display text-xl text-ink dark:text-white mb-2">LOCATION</div>
              <div className="text-ink dark:text-stone-300 font-medium flex items-center justify-center md:justify-start gap-2">
                <MapPin size={18} /> Remote, Internet
              </div>
            </div>
          </div>

          <form
            className="md:col-span-2 bg-paper dark:bg-dark-paper p-8 border-2 border-ink dark:border-white neo-shadow relative"
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              const name = formData.get('name');
              const email = formData.get('email');
              const message = formData.get('message');
              window.location.href = `mailto:theavidwivedi@gmail.com?subject=Portfolio Contact from ${name}&body=Name: ${name}%0AEmail: ${email}%0A%0AMessage:%0A${message}`;
            }}
          >
            {/* Paper decorative clip */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-8 bg-stone-200 dark:bg-stone-700 border-2 border-ink dark:border-white opacity-50"></div>

            <div className="grid grid-cols-2 gap-6 mb-6">
              <div className="space-y-2">
                <label className="text-sm font-black text-ink dark:text-white uppercase tracking-wider">Name</label>
                <input name="name" type="text" required className="w-full bg-white dark:bg-stone-800 p-3 neo-input font-medium text-ink dark:text-white dark:border-stone-500" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-black text-ink dark:text-white uppercase tracking-wider">Email</label>
                <input name="email" type="email" required className="w-full bg-white dark:bg-stone-800 p-3 neo-input font-medium text-ink dark:text-white dark:border-stone-500" placeholder="john@company.com" />
              </div>
            </div>
            <div className="space-y-2 mb-8">
              <label className="text-sm font-black text-ink dark:text-white uppercase tracking-wider">Message</label>
              <textarea name="message" required rows={4} className="w-full bg-white dark:bg-stone-800 p-3 neo-input font-medium text-ink dark:text-white resize-none dark:border-stone-500" placeholder="Tell me about your project..."></textarea>
            </div>
            <button type="submit" className="w-full py-4 bg-orange-500 text-white font-black text-lg border-2 border-ink dark:border-white neo-shadow hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all flex items-center justify-center gap-2">
              SEND IT <Send size={20} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;