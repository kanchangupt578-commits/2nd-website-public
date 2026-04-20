import { motion } from 'motion/react';
import { ArrowRight, Star, Shield, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-12 gap-0 min-h-[calc(100vh-64px)]">
        {/* Left Side: Text Content */}
        <motion.div
           initial={{ opacity: 0, x: -50 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8 }}
           className="col-span-12 lg:col-span-7 premium-gradient p-8 md:p-12 lg:p-20 flex flex-col justify-center relative"
        >
          {/* Decorative background blur */}
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-sky-100/50 rounded-full blur-3xl -z-10" />
          
          <div className="inline-flex items-center gap-2 bg-white/60 px-3 py-1 rounded-full text-[10px] font-bold text-sky-700 uppercase tracking-widest mb-6 border border-sky-100 w-fit">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Premium Oral Care
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-6">
            Crafting Confident<br/>
            <span className="text-sky-600">Smiles</span> Every Day.
          </h1>
          
          <p className="text-lg text-slate-600 max-w-lg mb-8 leading-relaxed">
            Experience painless treatment with advanced dental technology and personalized care from India's leading specialists.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <Link
              to="/book"
              className="w-full sm:w-auto bg-slate-900 text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-slate-200 hover:scale-105 transition-transform flex items-center justify-center gap-2 text-center"
            >
              <span>Start Your Journey</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            
            <div className="flex items-center gap-3 pl-4 border-l border-slate-300">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white shadow-sm overflow-hidden">
                  <img src="https://i.pravatar.cc/100?u=1" alt="u1" className="w-full h-full object-cover" />
                </div>
                <div className="w-8 h-8 rounded-full bg-slate-300 border-2 border-white shadow-sm overflow-hidden">
                  <img src="https://i.pravatar.cc/100?u=2" alt="u2" className="w-full h-full object-cover" />
                </div>
                <div className="w-8 h-8 rounded-full bg-slate-400 border-2 border-white shadow-sm overflow-hidden">
                  <img src="https://i.pravatar.cc/100?u=3" alt="u3" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="text-xs font-semibold text-slate-500">
                <span className="text-slate-900 font-bold">2.5k+</span> Happy Patients
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Visual Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="col-span-12 lg:col-span-5 bg-white p-8 md:p-12 lg:p-16 flex flex-col gap-8 justify-center"
        >
          <div className="grid grid-cols-2 gap-4">
            <div className="service-card p-5 rounded-2xl bg-sky-50 border border-sky-100">
              <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center mb-3">
                <Zap className="w-5 h-5 text-sky-600" />
              </div>
              <h3 className="font-bold text-slate-800 text-sm">Teeth Whitening</h3>
              <p className="text-xs text-slate-500 mt-1">Laser-powered precision for a brighter smile.</p>
            </div>
            <div className="service-card p-5 rounded-2xl bg-emerald-50 border border-emerald-100">
              <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center mb-3">
                <Shield className="w-5 h-5 text-emerald-600" />
              </div>
              <h3 className="font-bold text-slate-800 text-sm">Dental Implants</h3>
              <p className="text-xs text-slate-500 mt-1">Durable and natural-looking tooth restoration.</p>
            </div>
          </div>

          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
            <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">Meet the Expert</h4>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-sky-200 overflow-hidden border-2 border-white shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=200"
                  alt="Dr Rohan Mehta"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-bold text-slate-800">Dr. Rohan Mehta</h3>
                <p className="text-xs text-sky-600 font-medium">BDS, MDS (Orthodontics) • 12+ Yrs</p>
              </div>
              <div className="ml-auto bg-white px-3 py-1 rounded-lg shadow-sm border border-slate-100 text-[9px] font-bold text-emerald-600">
                TOP RATED
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 mt-auto">
            <div className="flex justify-between items-end border-b border-slate-100 pb-2">
              <span className="text-sm font-semibold text-slate-800 italic">"The best dental experience I've ever had. Painless!"</span>
              <span className="text-[10px] text-slate-400">- Priya S.</span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-slate-50 p-2 rounded-lg text-center">
                <div className="text-lg font-bold text-sky-600">10+</div>
                <div className="text-[8px] text-slate-500 font-bold uppercase">Years Exp.</div>
              </div>
              <div className="bg-slate-50 p-2 rounded-lg text-center">
                <div className="text-lg font-bold text-sky-600 text-[10px] lg:text-lg">Advanced</div>
                <div className="text-[8px] text-slate-500 font-bold uppercase shrink-0">Equipment</div>
              </div>
              <div className="bg-slate-50 p-2 rounded-lg text-center">
                <div className="text-lg font-bold text-sky-600">0%</div>
                <div className="text-[8px] text-slate-500 font-bold uppercase shrink-0">Discomfort</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
