import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Contact() {
  const contactInfo = [
    { icon: Phone, title: "Call Us", content: "+91 9876543210", subtitle: "Mon-Sat, 9AM-7PM" },
    { icon: Mail, title: "Email Us", content: "contact@smilecraft.com", subtitle: "24/7 Support" },
    { icon: MapPin, title: "Visit Us", content: "123 Health Street", subtitle: "New Delhi, India, 110001" }
  ];

  return (
    <div className="pt-24 pb-20">
      <section className="bg-slate-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl lg:text-7xl font-display font-bold text-brand-dark mb-6">
            Get in <span className="text-gradient">Touch</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Have questions? We're here to help you get the best dental care.
          </p>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {contactInfo.map((info, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-10 rounded-[2.5rem] border border-slate-100 flex flex-col items-center text-center premium-shadow"
            >
              <div className="w-16 h-16 bg-brand-accent rounded-2xl flex items-center justify-center text-brand-blue mb-6">
                <info.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-2">{info.title}</h3>
              <p className="text-lg text-slate-600 font-semibold">{info.content}</p>
              <p className="text-slate-400 text-sm mt-1">{info.subtitle}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          <div className="bg-brand-dark rounded-[3rem] p-10 lg:p-16 text-white flex flex-col justify-between">
            <div>
              <h2 className="text-4xl font-display font-bold mb-8">Working Hours</h2>
              <ul className="space-y-4">
                {[
                  { day: "Monday", hours: "9:00 AM - 7:00 PM" },
                  { day: "Tuesday", hours: "9:00 AM - 7:00 PM" },
                  { day: "Wednesday", hours: "9:00 AM - 7:00 PM" },
                  { day: "Thursday", hours: "9:00 AM - 7:00 PM" },
                  { day: "Friday", hours: "9:00 AM - 7:00 PM" },
                  { day: "Saturday", hours: "9:00 AM - 7:00 PM" },
                  { day: "Sunday", hours: "Closed" }
                ].map((item, i) => (
                  <li key={i} className="flex justify-between items-center py-3 border-b border-white/10 last:border-0">
                    <span className="font-semibold text-slate-300">{item.day}</span>
                    <span className={item.hours === "Closed" ? "text-red-400 font-bold" : "text-white font-bold"}>{item.hours}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-12">
              <h3 className="font-bold mb-4 uppercase tracking-widest text-xs text-slate-500">Follow Our Updates</h3>
              <div className="flex space-x-6">
                {[Facebook, Instagram, Twitter].map((Icon, i) => (
                  <a key={i} href="#" className="text-slate-400 hover:text-brand-blue transition-colors">
                    <Icon className="w-7 h-7" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-[3rem] overflow-hidden premium-shadow min-h-[500px]">
             {/* Mock Google Map Embed */}
             <iframe
               title="Clinic Location"
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14008.114825662447!2d77.20658405!3d28.6139391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5d347eb72d%3A0x52a2b74f51ef62!2sConnaught%20Place%2C%20New%20Delhi%2C%20Delhi%20110001!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin"
               width="100%"
               height="100%"
               style={{ border: 0 }}
               allowFullScreen
               loading="lazy"
               referrerPolicy="no-referrer-when-downgrade"
             ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
