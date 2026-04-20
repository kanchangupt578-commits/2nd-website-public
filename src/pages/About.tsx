import { motion } from 'motion/react';
import { Award, CheckCircle2, Heart, Target } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-24 pb-20">
      {/* Page Header */}
      <section className="bg-slate-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl lg:text-7xl font-display font-bold text-brand-dark mb-6">
            About <span className="text-gradient">SmileCraft</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            A tradition of excellence, innovation, and compassion in every treatment.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold text-brand-blue uppercase tracking-widest mb-4">Our Story</h2>
            <h3 className="text-4xl font-display font-bold text-brand-dark mb-6">
              A Decade of Crafting Perfect Smiles
            </h3>
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                Founded in 2014 by Dr. Rohan Mehta, SmileCraft Dental Clinic started with a simple vision: to make high-end dental care accessible and comfortable for everyone.
              </p>
              <p>
                What began as a small boutique practice has now grown into one of New Delhi's most trusted dental clinics, equipped with international technology and a dedicated team of specialists.
              </p>
              <p>
                We believe that every smile is unique, and so should be the treatment. Our patient-centric approach ensures you are heard, informed, and cared for throughout your journey.
              </p>
            </div>
            
            <div className="mt-10 grid grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-6 h-6 text-brand-blue shrink-0" />
                <span className="font-semibold text-slate-700 underline decoration-slate-300">Modern Digital Workflow</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-6 h-6 text-brand-blue shrink-0" />
                <span className="font-semibold text-slate-700 underline decoration-slate-300">Global Sterilization Standards</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-6 h-6 text-brand-blue shrink-0" />
                <span className="font-semibold text-slate-700 underline decoration-slate-300">Award-winning Doctors</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-6 h-6 text-brand-blue shrink-0" />
                <span className="font-semibold text-slate-700 underline decoration-slate-300">Ethical Treatment Plans</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-[3rem] overflow-hidden premium-shadow aspect-square">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800"
                alt="Dental Clinic Interior"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-brand-blue text-white p-10 rounded-[2rem] premium-shadow hidden sm:block">
              <div className="text-4xl font-bold mb-1">10+</div>
              <div className="text-sm font-medium opacity-80 uppercase tracking-wider">Years of Service</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Dentist Profile */}
      <section className="py-24 bg-brand-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-brand-blue font-bold tracking-widest uppercase mb-4">Meet our Lead Specialist</h2>
            <h3 className="text-4xl lg:text-5xl font-display font-bold">The Care Behind the Clinic</h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              <div className="rounded-[4rem] overflow-hidden h-[600px] premium-shadow">
                <img
                  src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800"
                  alt="Dr. Rohan Mehta"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute top-10 left-10 p-6 glass-morphism rounded-3xl border-white/10 text-white">
                 <Award className="w-10 h-10 mb-4 text-brand-blue" />
                 <div className="font-bold text-lg">Dr. Rohan Mehta</div>
                 <div className="text-sm text-slate-300">Founder & Chief Surgeon</div>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h4 className="text-5xl font-display font-bold mb-2">Dr. Rohan Mehta</h4>
                <p className="text-brand-blue text-xl font-medium">BDS, MDS (Orthodontics)</p>
              </div>
              
              <p className="text-slate-400 text-lg leading-relaxed">
                Dr. Rohan Mehta is a renowned Orthodontist and cosmetic dentist with over 12 years of experience. He completed his Masters from AIIMS New Delhi and has been awarded "Best Dentist in Delhi" for three consecutive years.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8">
                <div className="border-l-2 border-brand-blue pl-6">
                   <div className="text-3xl font-bold mb-1">12+</div>
                   <div className="text-slate-400 text-sm uppercase font-semibold">Years Experience</div>
                </div>
                <div className="border-l-2 border-brand-blue pl-6">
                   <div className="text-3xl font-bold mb-1">15,000+</div>
                   <div className="text-slate-400 text-sm uppercase font-semibold">Smiles Designed</div>
                </div>
                <div className="border-l-2 border-brand-blue pl-6">
                   <div className="text-3xl font-bold mb-1">20+</div>
                   <div className="text-slate-400 text-sm uppercase font-semibold">Int'l Certifications</div>
                </div>
                <div className="border-l-2 border-brand-blue pl-6">
                   <div className="text-3xl font-bold mb-1">Gold</div>
                   <div className="text-slate-400 text-sm uppercase font-semibold">Medalist in MDS</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-sky-50 p-12 rounded-[3rem] space-y-6">
            <div className="w-16 h-16 bg-brand-blue rounded-2xl flex items-center justify-center text-white">
              <Target className="w-8 h-8" />
            </div>
            <h3 className="text-3xl font-display font-bold text-brand-dark">Our Mission</h3>
            <p className="text-lg text-slate-600 leading-relaxed">
              To provide empathetic, high-quality dental care that transforms lives through healthy smiles. We strive to create a pain-free, welcoming environment using ethical practices and cutting-edge technology.
            </p>
          </div>
          
          <div className="bg-emerald-50 p-12 rounded-[3rem] space-y-6">
            <div className="w-16 h-16 bg-brand-green rounded-2xl flex items-center justify-center text-white">
              <Heart className="w-8 h-8" />
            </div>
            <h3 className="text-3xl font-display font-bold text-brand-dark">Our Vision</h3>
            <p className="text-lg text-slate-600 leading-relaxed">
              To be the global benchmark for patient-centric dental care, leading the industry in digital innovation, clinical excellence, and sustainable medical practices.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
