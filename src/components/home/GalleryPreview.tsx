import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const comparisons = [
  {
    title: "Smile Makeover",
    image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=600",
    description: "Full zirconia crowns and cosmetic whitening."
  },
  {
    title: "Orthodontics",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=600",
    description: "Aligning smiles with invisible clear aligners."
  },
  {
    title: "Dental Implants",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=600",
    description: "Restoring function and aesthetics naturally."
  }
];

export default function GalleryPreview() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div>
            <h2 className="text-sm font-bold text-brand-blue uppercase tracking-widest mb-4">Transformation</h2>
            <h3 className="text-4xl lg:text-5xl font-display font-bold text-brand-dark">
              See the <span className="text-gradient">Magic</span> in Every Smile
            </h3>
          </div>
          <Link
            to="/gallery"
            className="group flex items-center space-x-2 text-brand-blue font-bold text-lg hover:translate-x-2 transition-transform"
          >
            <span>View Full Gallery</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {comparisons.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="relative rounded-[2rem] overflow-hidden mb-6 aspect-[4/5] premium-shadow">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                   <p className="text-white text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
              <h4 className="text-2xl font-bold text-brand-dark mb-2 text-center">{item.title}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
