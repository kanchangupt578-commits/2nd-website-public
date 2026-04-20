import { motion } from 'motion/react';
import { Sparkles, Activity, Shield, Smile, Brush, Link as LinkIcon, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: Brush,
    title: "Teeth Cleaning",
    description: "Professional scaling and polishing to remove plaque, tartar, and stains, ensuring optimal gum health.",
    benefits: ["Prevents gum disease", "Fresher breath", "Early detection of issues"],
    price: "₹1,500 - ₹3,000",
    color: "bg-blue-50 text-blue-600",
    image: "https://images.unsplash.com/photo-1593059080506-34583264c148?auto=format&fit=crop&q=80&w=600"
  },
  {
    icon: Activity,
    title: "Root Canal Treatment",
    description: "Save your natural tooth with our advanced, pain-free endodontic therapy using microscopic precision.",
    benefits: ["Relieves dental pain", "Prevents infection spread", "Fast recovery time"],
    price: "₹5,000 - ₹12,000",
    color: "bg-amber-50 text-amber-600",
    image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=80&w=600"
  },
  {
    icon: Shield,
    title: "Dental Implants",
    description: "The most permanent solution for missing teeth. We use Top-tier titanium implants for a natural look and feel.",
    benefits: ["Restores chewing function", "Maintains jawbone structure", "Looks like natural teeth"],
    price: "₹25,000 - ₹50,000",
    color: "bg-emerald-50 text-emerald-600",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=600"
  },
  {
    icon: Sparkles,
    title: "Teeth Whitening",
    description: "Get a brighter, whiter smile in just one hour with our professional laser whitening treatment.",
    benefits: ["Instant results", "Removes deep stains", "Long-lasting brightness"],
    price: "₹8,000 - ₹15,000",
    color: "bg-sky-50 text-sky-600",
    image: "https://images.unsplash.com/photo-1598256989490-ef558ec39a5c?auto=format&fit=crop&q=80&w=600"
  },
  {
    icon: LinkIcon,
    title: "Braces & Aligners",
    description: "Straighten your teeth discreetly with Invisalign or traditional ceramic braces for a perfect bite.",
    benefits: ["Improves facial aesthetics", "Easier cleaning", "Corrects bite issues"],
    price: "₹35,000 - ₹1,50,000",
    color: "bg-purple-50 text-purple-600",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=600"
  },
  {
    icon: Smile,
    title: "Smile Makeover",
    description: "A comprehensive cosmetic plan involving veneers, crowns, and contouring for your dream smile.",
    benefits: ["Boosts confidence", "Customized design", "Total transformation"],
    price: "Custom Pricing",
    color: "bg-pink-50 text-pink-600",
    image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=600"
  }
];

export default function Services() {
  return (
    <div className="pt-24 pb-20">
      {/* Page Header */}
      <section className="bg-brand-accent py-24 px-4 sm:px-6 lg:px-8 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-sky-200 rounded-full blur-3xl opacity-20 translate-x-1/2 -translate-y-1/2" />
        <div className="max-w-7xl mx-auto relative z-10">
          <h1 className="text-5xl lg:text-7xl font-display font-bold text-brand-dark mb-6">
            Comprehensive <span className="text-gradient">Oral Care</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl leading-relaxed">
            From routine checkups to complex cosmetic surgeries, our specialists offer a full spectrum of dental treatments under one roof.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((s, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[2.5rem] border border-slate-100 overflow-hidden hover:shadow-2xl hover:shadow-sky-500/5 transition-all group flex flex-col h-full"
            >
              <div className="relative h-64">
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className={`absolute top-6 right-6 w-14 h-14 rounded-2xl ${s.color} flex items-center justify-center premium-shadow`}>
                  <s.icon className="w-8 h-8" />
                </div>
              </div>
              
              <div className="p-8 flex-grow space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-brand-dark mb-3">{s.title}</h3>
                  <p className="text-slate-600 leading-relaxed">
                    {s.description}
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Key Benefits</h4>
                  <ul className="space-y-3">
                    {s.benefits.map((b, i) => (
                      <li key={i} className="flex items-center space-x-2 text-slate-700">
                        <Smile className="w-4 h-4 text-brand-blue" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="p-8 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                <div>
                   <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">Est. Price</div>
                   <div className="text-lg font-bold text-brand-dark">{s.price}</div>
                </div>
                <Link
                  to="/book"
                  className="bg-brand-blue text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-sky-600 transition-colors"
                >
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Trust Badge Section */}
      <section className="bg-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl lg:text-5xl font-display font-bold text-brand-blue mb-2">100%</div>
                <div className="text-slate-400 text-sm uppercase tracking-widest font-semibold">Sterilization</div>
              </div>
              <div>
                <div className="text-4xl lg:text-5xl font-display font-bold text-brand-blue mb-2">ISO</div>
                <div className="text-slate-400 text-sm uppercase tracking-widest font-semibold">Certified Clinic</div>
              </div>
              <div>
                <div className="text-4xl lg:text-5xl font-display font-bold text-brand-blue mb-2">3D</div>
                <div className="text-slate-400 text-sm uppercase tracking-widest font-semibold">Scanners Used</div>
              </div>
              <div>
                <div className="text-4xl lg:text-5xl font-display font-bold text-brand-blue mb-2">4.9/5</div>
                <div className="text-slate-400 text-sm uppercase tracking-widest font-semibold">Google Reviews</div>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
}
