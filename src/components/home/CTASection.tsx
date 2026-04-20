import { motion } from 'motion/react';
import { Calendar, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CTASection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="bg-brand-dark rounded-[3rem] p-8 lg:p-20 relative overflow-hidden text-center premium-shadow">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-sky-900/20 blur-3xl -z-0" />
        
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-4xl lg:text-6xl font-display font-bold text-white mb-8 leading-tight">
            Ready for a <span className="text-brand-blue">Total Smile</span> Transformation?
          </h2>
          <p className="text-slate-400 text-lg lg:text-xl mb-12">
            Join thousands of happy patients who trust SmileCraft for their dental health. Book your consultation today and take the first step towards a confident smile.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link
              to="/book"
              className="w-full sm:w-auto bg-brand-blue text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-sky-600 transition-all premium-shadow flex items-center justify-center space-x-3"
            >
              <Calendar className="w-5 h-5" />
              <span>Book Appointment Now</span>
            </Link>
            <a
              href="tel:+919876543210"
              className="w-full sm:w-auto bg-white/10 text-white border border-white/20 backdrop-blur-md px-10 py-5 rounded-full font-bold text-lg hover:bg-white/20 transition-all flex items-center justify-center space-x-3"
            >
              <Phone className="w-5 h-5" />
              <span>Call +91 9876543210</span>
            </a>
          </div>
          
          <div className="mt-12 flex items-center justify-center space-x-4 text-slate-500 text-sm font-medium">
            <span className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-green-500 rounded-full" />
              <span>Next available today at 4:30 PM</span>
            </span>
            <span className="w-1 h-1 bg-slate-700 rounded-full" />
            <span>Open Mon—Sat, 9AM—7PM</span>
          </div>
        </div>
      </div>
    </section>
  );
}
