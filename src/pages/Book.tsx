import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Clock, CheckCircle, Send, User, Phone, Mail, MessageSquare } from 'lucide-react';

export default function Book() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <div className="pt-24 pb-20 min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-5xl lg:text-7xl font-display font-bold text-brand-dark mb-6">
              Expert <span className="text-gradient">Care</span> is just a click away
            </h1>
            <p className="text-xl text-slate-600 mb-12">
              Fill out the form to request an appointment. Our clinical coordinator will get back to you within 2 business hours to confirm your slot.
            </p>

            <div className="space-y-8">
              {[
                { icon: Clock, title: "Quick Turnaround", desc: "Response within 2 hours of submission." },
                { icon: Calendar, title: "Flexible Scheduling", desc: "Choose your preferred date and time." },
                { icon: CheckCircle, title: "Expert Consultation", desc: "Direct session with Dr. Rohan Mehta." }
              ].map((item, i) => (
                <div key={i} className="flex space-x-4">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-brand-blue premium-shadow shrink-0">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-dark">{item.title}</h3>
                    <p className="text-slate-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-[3rem] p-8 lg:p-12 premium-shadow border border-slate-100"
          >
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                       <label className="text-sm font-bold text-slate-400 uppercase tracking-wider ml-1">Full Name</label>
                       <div className="relative">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300" />
                          <input
                            required
                            type="text"
                            placeholder="John Doe"
                            className="w-full bg-slate-50 border-none rounded-2xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-brand-blue transition-all"
                          />
                       </div>
                    </div>
                    <div className="space-y-2">
                       <label className="text-sm font-bold text-slate-400 uppercase tracking-wider ml-1">Phone Number</label>
                       <div className="relative">
                          <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300" />
                          <input
                            required
                            type="tel"
                            placeholder="+91 98765..."
                            className="w-full bg-slate-50 border-none rounded-2xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-brand-blue transition-all"
                          />
                       </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                     <label className="text-sm font-bold text-slate-400 uppercase tracking-wider ml-1">Email Address</label>
                     <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300" />
                        <input
                          required
                          type="email"
                          placeholder="john@example.com"
                          className="w-full bg-slate-50 border-none rounded-2xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-brand-blue transition-all"
                        />
                     </div>
                  </div>

                  <div className="space-y-2">
                     <label className="text-sm font-bold text-slate-400 uppercase tracking-wider ml-1">Preferred Date</label>
                     <div className="relative">
                        <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300" />
                        <input
                          required
                          type="date"
                          className="w-full bg-slate-50 border-none rounded-2xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-brand-blue transition-all"
                        />
                     </div>
                  </div>

                  <div className="space-y-2">
                     <label className="text-sm font-bold text-slate-400 uppercase tracking-wider ml-1">Your Message (Optional)</label>
                     <div className="relative">
                        <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-slate-300" />
                        <textarea
                          rows={4}
                          placeholder="Tell us about your dental concerns..."
                          className="w-full bg-slate-50 border-none rounded-2xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-brand-blue transition-all resize-none"
                        ></textarea>
                     </div>
                  </div>

                  <button
                    disabled={isLoading}
                    type="submit"
                    className={`w-full bg-brand-blue text-white py-5 rounded-2xl font-bold text-lg hover:bg-sky-600 transition-all flex items-center justify-center space-x-3 premium-shadow ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {isLoading ? (
                      <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Confirm Appointment Request</span>
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center text-green-600 mx-auto mb-8">
                     <CheckCircle className="w-12 h-12" />
                  </div>
                  <h3 className="text-3xl font-display font-bold text-brand-dark mb-4">Request Received!</h3>
                  <p className="text-slate-600 text-lg mb-10">
                    Thank you for choosing SmileCraft. Our team will contact you shortly to finalize your appointment details.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-brand-blue font-bold hover:underline"
                  >
                    Request another appointment
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
