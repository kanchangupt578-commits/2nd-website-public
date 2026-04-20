import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="h-14 px-8 flex items-center justify-between bg-slate-900 text-white text-[10px]">
      <div className="flex gap-6">
        <span className="flex items-center gap-1 opacity-70">
          <MapPin className="w-3 h-3" />
          123 Health Street, New Delhi
        </span>
        <span className="flex items-center gap-1 opacity-70">
          <Phone className="w-3 h-3" />
          +91 9876543210
        </span>
      </div>
      
      <div className="opacity-50 tracking-widest uppercase">
        © {new Date().getFullYear()} SmileCraft Dental Clinic
      </div>
      
      <div className="flex items-center gap-4">
        <span className="px-2 py-1 bg-emerald-500 rounded text-[9px] font-bold uppercase tracking-wider">
          MON–SAT: 9AM – 7PM
        </span>
        <div className="w-6 h-6 bg-emerald-400 rounded-full flex items-center justify-center animate-bounce shadow-sm">
           <Phone className="w-3.5 h-3.5 text-white" />
        </div>
      </div>
    </footer>
  );
}

