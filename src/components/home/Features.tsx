import { motion } from 'motion/react';
import { Award, Zap, Heart, ShieldCheck, Microscope, Users } from 'lucide-react';

const highlights = [
  {
    icon: Award,
    title: "12+ Years Experience",
    description: "Expert care led by Dr. Rohan Mehta, a gold medalist orthodontist with over a decade of clinical excellence.",
    color: "bg-blue-50 text-blue-600"
  },
  {
    icon: Microscope,
    title: "Advanced Equipment",
    description: "Equipped with state-of-the-art CAD/CAM machines and 3D dental scanners for high-precision diagnosis.",
    color: "bg-emerald-50 text-emerald-600"
  },
  {
    icon: Zap,
    title: "Painless Treatment",
    description: "Utilizing modern anesthesia techniques and laser dentistry for a completely comfortable experience.",
    color: "bg-amber-50 text-amber-600"
  },
  {
    icon: Heart,
    title: "Eco-Friendly Clinic",
    description: "We follow sustainable practices and digital archiving to minimize our environmental footprint.",
    color: "bg-pink-50 text-pink-500"
  },
  {
    icon: ShieldCheck,
    title: "Sterilization Protocols",
    description: "Rigorous 7-step sterilization process following global health standards for your complete safety.",
    color: "bg-purple-50 text-purple-600"
  },
  {
    icon: Users,
    title: "Family Friendly",
    description: "Specialized pediatric dental care to make your child's first dental visit fun and stress-free.",
    color: "bg-sky-50 text-sky-600"
  }
];

export default function Features() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-brand-blue uppercase tracking-widest mb-4">Why Choose Us</h2>
          <h3 className="text-4xl lg:text-5xl font-display font-bold text-brand-dark mb-6">
            The Highest Standard of <span className="text-gradient">Dental Excellence</span>
          </h3>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
            At SmileCraft, we don't just fix teeth; we transform lives. Our commitment to excellence ensures you get the best outcome for your oral health.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl border border-slate-100 bg-white service-card hover:bg-sky-50 transition-all group"
            >
              <div className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-white transition-all shadow-sm`}>
                <item.icon className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h4>
              <p className="text-slate-600 leading-relaxed text-sm">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
