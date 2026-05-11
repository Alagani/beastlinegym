import { motion, AnimatePresence } from 'motion/react';
import { 
  Dumbbell, 
  Phone, 
  MessageCircle, 
  Zap, 
  MapPin, 
  Clock, 
  ChevronDown, 
  Quote, 
  TrendingUp,
  Award,
  Users
} from 'lucide-react';
import { useState } from 'react';

// --- Components ---

const Navbar = () => (
  <header className="fixed top-0 w-full z-50 bg-brand-surface/80 backdrop-blur-md border-b border-brand-outline/30 flex justify-between items-center px-6 md:px-12 h-20">
    <div className="flex items-center gap-2">
      <Dumbbell className="text-brand-red w-8 h-8" />
      <span className="font-headline text-xl md:text-2xl font-extrabold text-white tracking-tighter">BEASTLINE</span>
    </div>
    <button className="bg-brand-red text-white font-bold text-sm px-6 py-2.5 rounded-full hover:brightness-110 transition-all active:scale-95">
      CALL NOW
    </button>
  </header>
);

const Hero = () => (
  <section className="relative min-h-[90vh] flex flex-col justify-end px-6 md:px-12 pb-16 overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img 
        alt="Hero background" 
        className="w-full h-full object-cover opacity-40 mix-blend-overlay" 
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDA8vkBLF1zbzQ_gtxlEdWEtDBThIkBv3gNmsBqxbG4WTHEy-XmpPY7754vUHIG3wYG-D2QCiuJd29lyVTMIg3B7Z70txG-n8r11Vt_JCzXrPYQAlrPLK0iUS9nu8A5fdvnr7594GPcdMiULy9UabT-FxRbHPnvzQf2suRgF0PojfzJjoHHQzPkHPmVfvglR837xI9l-qQyJ2dbglRGaW3PIruTS8U2HxNHJLrtky8sd_w83A5p_HU1VTPV7hb2pynakjZl3p7XEyMw" 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-surface via-transparent to-transparent" />
    </div>
    
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative z-10 flex flex-col gap-6 max-w-4xl"
    >
      <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.9] uppercase">
        BEASTLINE
      </h1>
      <p className="text-lg md:text-xl text-brand-on-surface-variant max-w-xl font-medium">
        Affordable Gym in Springfield. No excuses. Just results. Join the community that builds champions.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 pt-4">
        <button className="bg-brand-red text-white font-bold px-8 py-4 rounded-full flex justify-center items-center gap-2 hover:brightness-110 transition-all active:scale-95 shadow-xl shadow-brand-red/10">
          <Phone className="w-5 h-5" />
          Call Now
        </button>
        <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold px-8 py-4 rounded-full flex justify-center items-center gap-2 hover:bg-white/20 transition-all active:scale-95">
          <MessageCircle className="w-5 h-5 text-[#25D366]" />
          WhatsApp
        </button>
      </div>
    </motion.div>
  </section>
);

const About = () => (
  <section className="px-6 md:px-12 py-24 flex flex-col gap-8 text-center max-w-4xl mx-auto">
    <motion.h2 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="text-4xl md:text-5xl font-black text-white"
    >
      About Us
    </motion.h2>
    <motion.p 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      viewport={{ once: true }}
      className="text-lg md:text-xl text-brand-on-surface-variant leading-relaxed font-medium"
    >
      Welcome to BEASTLINE, Springfield's premier affordable fitness destination. We believe that top-tier equipment and a supportive community shouldn't break the bank. Whether you're a seasoned athlete or just starting your fitness journey, you'll find a welcoming environment dedicated to helping you achieve your goals. No gimmicks, just a pure passion for fitness.
    </motion.p>
  </section>
);

const Pricing = () => {
  const plans = [
    { name: "Monthly", price: "₹2000", period: "/mo", tag: "POPULAR" },
    { name: "6-Month", price: "₹7000", period: "", sub: "Total for 6 months", tag: "BEST VALUE", highlighted: true },
    { name: "Annual", price: "₹10000", period: "", sub: "SAVE ₹14,000/YR", tag: null },
  ];

  return (
    <section className="px-6 md:px-12 py-24 flex flex-col gap-12 max-w-6xl mx-auto w-full">
      <h2 className="text-4xl md:text-5xl font-black text-white text-center">Membership Plans</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, i) => (
          <motion.div 
            key={plan.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className={`
              relative bg-brand-charcoal border rounded-2xl p-10 flex flex-col gap-4 text-center overflow-hidden
              ${plan.highlighted ? 'border-brand-red shadow-2xl shadow-brand-red/5 scale-105 z-10' : 'border-brand-outline/20'}
            `}
          >
            {plan.tag && (
              <div className={`
                absolute top-0 inset-x-0 py-1.5 text-[10px] font-black uppercase tracking-[0.2em]
                ${plan.highlighted ? 'bg-brand-red text-white' : 'bg-white/10 text-brand-on-surface-variant'}
              `}>
                {plan.tag}
              </div>
            )}
            <h3 className="text-2xl font-bold text-white mt-4">{plan.name}</h3>
            <div className="flex flex-col items-center">
              <div className="text-5xl font-black text-brand-red flex items-baseline">
                {plan.price}
                <span className="text-lg text-brand-on-surface-variant font-medium ml-1">{plan.period}</span>
              </div>
              {plan.sub && (
                <motion.div 
                  initial={plan.sub.includes('SAVE') ? { scale: 0.95, opacity: 0.8 } : {}}
                  animate={plan.sub.includes('SAVE') ? { 
                    scale: [0.95, 1.05, 0.95],
                    opacity: [0.8, 1, 0.8],
                  } : {}}
                  transition={plan.sub.includes('SAVE') ? {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  } : {}}
                  className={`mt-2 text-sm font-bold ${plan.highlighted ? 'text-brand-on-surface' : 'text-brand-on-surface-variant'}`}
                >
                  {plan.sub}
                </motion.div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Facilities = () => {
  const items = [
    { title: "Cardio Zone", desc: "State-of-the-art treadmills, ellipticals, and bikes to get your heart pumping.", icon: TrendingUp },
    { title: "Free Weights", desc: "Extensive selection of dumbbells, barbells, and racks for serious strength training.", icon: Dumbbell },
    { title: "Expert Trainers", icon: Award, desc: "Certified professionals ready to guide your form and build custom programs." },
  ];

  return (
    <section className="px-6 md:px-12 py-24 bg-brand-charcoal/30 flex flex-col gap-16 items-center">
      <h2 className="text-4xl md:text-5xl font-black text-white text-center">Facilities</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl w-full">
        {items.map((item, i) => (
          <motion.div 
            key={item.title}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center gap-6"
          >
            <div className="w-24 h-24 bg-brand-charcoal rounded-full flex items-center justify-center text-brand-red border border-brand-outline/20">
              <item.icon className="w-10 h-10" />
            </div>
            <div className="space-y-3">
              <h3 className="text-2xl font-bold text-white">{item.title}</h3>
              <p className="text-brand-on-surface-variant font-medium max-w-xs">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Gallery = () => {
  const images = [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBS67RTbgVFG7iDsdKzFZsYp_5Y2wYkfIb3_GyLme1Uw_p7oxNSNPF5QVL7tIQ2iqWrMmiKumGmgIvzSKMpv8psgvCUNz2sztOvoBFeDb9m5QBSbRnTITU1DGd98oR6d8q4bCBpxpVY56VMmEPEUpaR3hUEWAfo7bQYcq1HEheLNWFo6OTAdPc0hzd8BEavKZH7o6iWGECWsYer9hcOVI57LNUHcMuQc3SJOp4mdOICuExdB1t4U__nyFIjGpaL25UXTJI4wJO5PSmX",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBFocd3pEHF4vGaIUbbCPXkAPHRkLSvPc6gDqI5G7Yu513jb5w_h--XNnuDzdoUa1e7PZJlxS9l_CpftFuiYVC7-ydSLIEMGd5cpTKBUVjbzipCsbfmpDiJD_TzBaJ54L2UA5JCht5ZNm-b9IA21mqeX2M812jSZyt-ixDuB-U0H996n20x9hhI2V5cIHhLcy0qvYUrXzV2n6YFPUNY1clKcR5J9fgVhPOQwzf1zLAvE23ynphLCnoLF-xuU935vg0JsPbR-hdleRXb",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuD3H4EBXT7Cl8u65EJ5ln3HJLSmb3cBo6Yh4jkOzy-9Y53v4dP2S33Wm2WoYqOJQW831ISd18BY7jxA1nl9aCjB1FTqYnYcOvaWbZsk6jTlPrvOK8MfPUd0Z-kqzXladLB3eCek824s7F4X5Ohv6eTUR4lcBIKl3_sZM41EgoNcLEKN2x0aoMFZV8AmDgsFPcjTp52OaSMUwmPLhTnqMLL6UHSxiCuLpXtzaMqjzYuyl4TauXgISqZvSS_hMZo3ljFre1JpfvFgz1ZI",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuC8KJ6H4KNnIBSi3ioo1RHFIalXojKO1vTDbeTC0GAule1ACQcQNhPhaj0r15yR_znSTN3ACIbAreO7ow-LGkibWscltFUAoVAt8GyrlDcvmSnrSlqeKyBeaj1dYMwwus6zVAUGzhzvOHDQ5yuyO5T9pVCq6QZfJWB3fU9YZFmAKooKWZ_O831106KM90AtuT9S0j2k33HiUL-0-y0Mj9Ajc0ViTFv0xxLxYlNnOELk1GwtqNKTDjBOSOt3QBrc9lgMMcFtaWLSaDgz",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuA_ZTgvztzkfk8M0_1AClNgg7gwJ7KHDk2t0FNIIZnDpgHayClynJalolFtPW0yFXF-JPfX4Zi6s9Eo_Neyugw_6Umm2xLwx5tYHYBSBBSWCNZik0mqpUQjH2GRmL7AMpSPICRCbmjrdo30sL64MKGDbc62Dz-yej2ybSaLzxnNgLzYbaahE4lVrlcwDA1P8WXzY1EDmkZbAQAGZ8gwS-e3W0_N_PfbQJH2zzaQRW-RZ5oDD_VfklJnK92SblVHhUlnlumZvnDBpu3x",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDvdtDBSWNRtXjUVr7dnj0vz1AnbmkgbOPiJkkhmMkxEVclP4E1bFiu5kCQ1Vyik8SUQrGGCB301xP8cZe8T-O1wcrtJHr6ekorunyCxAMEr9mtq9j0AlPnLT4szWH9rShSVd-wNh4cGR7zaRAEUBdwgYZqoVVZM49r3LHEhshgPTuI7-oSHnR-lXSPb27SOakXG_TNQlTXJWJFdk6MkFHzk2M68nfvzDe6sEJnKgHnEThCQJP76LNMNXoWi6YPPQg3Dzgt4z1Ohk0z"
  ];

  return (
    <section className="px-6 md:px-12 py-24 flex flex-col gap-12 max-w-6xl mx-auto w-full">
      <h2 className="text-4xl md:text-5xl font-black text-white text-center uppercase tracking-tighter">Gallery</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((src, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.05 }}
            viewport={{ once: true }}
            className="aspect-square bg-brand-charcoal rounded-xl overflow-hidden relative group cursor-pointer border border-brand-outline/10"
          >
            <img 
              alt={`Gym ${i}`} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100" 
              src={src} 
            />
            <div className="absolute inset-0 bg-brand-red/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Testimonials = () => {
  const stories = [
    { name: "Sarah M.", quote: "Best local gym by far. The equipment is always clean and the staff is super friendly. Highly recommend!" },
    { name: "David R.", quote: "Finally found a place where I feel comfortable. The community here is incredibly supportive and motivating." },
    { name: "Elena T.", quote: "The personal trainers are top-notch. I've seen more progress in 3 months here than a year at my old gym." },
  ];

  return (
    <section className="px-6 md:px-12 py-24 bg-brand-charcoal/30 flex flex-col gap-12 max-w-6xl mx-auto w-full">
      <h2 className="text-4xl md:text-5xl font-black text-white text-center">Member Stories</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {stories.map((story, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="bg-brand-charcoal rounded-2xl p-8 flex flex-col gap-6 relative border border-brand-outline/10"
          >
            <Quote className="text-brand-red w-12 h-12 opacity-20 absolute top-6 left-6" />
            <p className="text-lg text-brand-on-surface-variant italic font-medium relative z-10 leading-relaxed">
              "{story.quote}"
            </p>
            <div className="mt-auto pt-6 border-t border-brand-outline/20 font-bold text-white flex items-center gap-2">
              <Users className="w-4 h-4 text-brand-red" />
              - {story.name}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="bg-brand-charcoal border border-brand-outline/20 rounded-xl overflow-hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left p-6 flex justify-between items-center bg-transparent transition-colors hover:bg-white/5"
      >
        <span className="font-bold text-white text-lg">{question}</span>
        <ChevronDown className={`text-brand-red transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="px-6 pb-6 text-brand-on-surface-variant font-medium leading-relaxed overflow-hidden"
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => (
  <section className="px-6 md:px-12 py-24 flex flex-col gap-12 max-w-3xl mx-auto w-full">
    <h2 className="text-4xl md:text-5xl font-black text-white text-center">FAQ</h2>
    <div className="flex flex-col gap-4">
      <FAQItem 
        question="What are your operating hours?" 
        answer="We are open Monday through Friday from 5:00 AM to 11:00 PM, and on weekends from 7:00 AM to 8:00 PM." 
      />
      <FAQItem 
        question="Do you offer personal training?" 
        answer="Yes! We have a team of certified personal trainers ready to help you reach your goals. You can book a free consultation at the front desk." 
      />
      <FAQItem 
        question="Is there a joining fee?" 
        answer="We believe in transparency. Our joining fees are minimal and often waived during special promotion periods. Check our current offers!" 
      />
      <FAQItem 
        question="Are lockers and showers available?" 
        answer="Yes, we provide clean, fully equipped locker rooms with secure lockers and private showers for all members." 
      />
      <FAQItem 
        question="Can I freeze my membership if I travel?" 
        answer="Absolutely. You can freeze your membership for up to 3 months per year for travel or medical reasons." 
      />
    </div>
  </section>
);

const Contact = () => (
  <section className="px-6 md:px-12 py-24 flex flex-col md:flex-row gap-16 max-w-6xl mx-auto w-full items-start">
    <div className="flex-1 flex flex-col gap-10">
      <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter">Visit Us</h2>
      <div className="space-y-8">
        <div className="flex items-start gap-4 text-brand-on-surface-variant">
          <div className="bg-brand-red/10 p-3 rounded-xl border border-brand-red/20">
            <MapPin className="text-brand-red w-6 h-6" />
          </div>
          <div>
            <p className="font-bold text-white text-lg">Address</p>
            <p className="font-medium mt-1">123 Muscle Ave<br />Springfield, SP 12345</p>
          </div>
        </div>
        
        <div className="flex items-start gap-4 text-brand-on-surface-variant">
          <div className="bg-brand-red/10 p-3 rounded-xl border border-brand-red/20">
            <Phone className="text-brand-red w-6 h-6" />
          </div>
          <div>
            <p className="font-bold text-white text-lg">Phone</p>
            <p className="font-medium mt-1">(555) 123-4567</p>
          </div>
        </div>
        
        <div className="flex items-start gap-4 text-brand-on-surface-variant">
          <div className="bg-brand-red/10 p-3 rounded-xl border border-brand-red/20">
            <Clock className="text-brand-red w-6 h-6" />
          </div>
          <div>
            <p className="font-bold text-white text-lg mb-2">Hours</p>
            <div className="grid grid-cols-2 gap-x-8 gap-y-1 font-medium">
              <span>Mon-Fri:</span>
              <span className="text-white">5 AM - 11 PM</span>
              <span>Sat-Sun:</span>
              <span className="text-white">7 AM - 8 PM</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div className="flex-1 w-full h-[450px] bg-brand-charcoal border border-brand-outline/20 rounded-3xl relative overflow-hidden group">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102948.33089069755!2d-93.36442658!3d37.19323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87cf62f745c8983f%3A0x6ec0d267860477!2sSpringfield%2C%20MO!5e0!3m2!1sen!2sus!4v1714995000000!5m2!1sen!2sus" 
        width="100%" 
        height="100%" 
        style={{ border: 0, filter: 'grayscale(1) invert(0.9) contrast(1.2)' }} 
        allowFullScreen 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
      />
      <div className="absolute inset-0 pointer-events-none border border-brand-red/10 rounded-3xl" />
    </div>
  </section>
);

const Footer = () => (
  <footer className="w-full py-20 bg-brand-charcoal/50 border-t border-brand-outline/20 flex flex-col items-center text-center px-6 gap-10">
    <div className="flex items-center gap-2">
      <Dumbbell className="text-brand-red w-8 h-8" />
      <span className="font-headline text-3xl font-extrabold text-white tracking-tighter">BEASTLINE</span>
    </div>
    
    <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 font-bold text-brand-on-surface-variant">
      <a className="hover:text-brand-red transition-colors" href="#privacy">Privacy Policy</a>
      <a className="hover:text-brand-red transition-colors" href="#terms">Terms of Service</a>
      <a className="hover:text-brand-red transition-colors" href="#location">Location</a>
      <a className="hover:text-brand-red transition-colors" href="#schedule">Class Schedule</a>
    </div>
    
    <div className="text-brand-on-surface-variant/60 font-medium max-w-md">
      © {new Date().getFullYear()} BEASTLINE GYM.<br />
      <span className="text-brand-red font-black tracking-widest text-xs mt-4 block">DISCIPLINE IS FREEDOM</span>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen pt-20 bg-brand-surface text-brand-on-surface">
      <Navbar />
      <main className="flex flex-col">
        <Hero />
        <About />
        <Pricing />
        <Facilities />
        <Gallery />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
