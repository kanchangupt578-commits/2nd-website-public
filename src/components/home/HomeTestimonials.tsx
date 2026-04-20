import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: "Anjali Sharma",
    role: "Marketing Manager",
    content: "I had a fear of dentists, but Dr. Mehta changed that. The root canal treatment was completely painless and the staff was so supportive. My smile looks amazing now!",
    image: "https://i.pravatar.cc/150?u=anjali"
  },
  {
    name: "Vikram Goel",
    role: "Software Architect",
    content: "Excellent service and high-tech equipment. I got dental implants here, and the precision was incredible. They truly are the best dental clinic in New Delhi.",
    image: "https://i.pravatar.cc/150?u=vikram"
  },
  {
    name: "Priya Das",
    role: "Teacher",
    content: "The pediatric care at SmileCraft is outstanding. My son loves coming here! They make the experience fun and educational for kids.",
    image: "https://i.pravatar.cc/150?u=priya"
  }
];

export default function HomeTestimonials() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-sm font-bold text-brand-blue uppercase tracking-widest mb-4">Patient Stories</h2>
        <h3 className="text-4xl lg:text-5xl font-display font-bold text-brand-dark mb-16">
          Loved by <span className="text-gradient">Thousands</span> of Patients
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-3xl premium-shadow relative"
            >
              <Quote className="absolute top-6 right-8 w-12 h-12 text-slate-100 -z-0" />
              <div className="relative z-10">
                <div className="flex justify-center mb-4 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-slate-600 mb-8 italic leading-relaxed text-lg">
                  "{t.content}"
                </p>
                <div className="flex items-center justify-center space-x-4">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-12 h-12 rounded-full border-2 border-brand-accent object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="text-left">
                    <div className="font-bold text-brand-dark">{t.name}</div>
                    <div className="text-xs text-slate-400">{t.role}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
