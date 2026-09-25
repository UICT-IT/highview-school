import React, { useState, useEffect } from "react";
import {
  Sparkles,
  Heart,
  ShieldCheck,
  BookOpen,
  Calendar,
  Clock,
  MapPin,
  Phone,
  Mail,
  ChevronRight,
  Star,
  CheckCircle2,
  Users,
  Award,
  Smile,
  X,
  Menu as MenuIcon,
  MessageCircle,
  Apple,
  Camera,
  ExternalLink,
  Send,
  Check,
} from "lucide-react";

const PROGRAMS = [
  {
    id: "toddlers",
    title: "Baby Class",
    age: "2 - 3 Years",
    badge: "Early Explorers",
    color: "bg-amber-100 text-amber-800 border-amber-200",
    accentColor: "from-amber-400 to-orange-400",
    description:
      "Our youngest children learn through paly, movement and hands-on discovery, with time to rest as part of their day.",
    features: [
      "Sensory Play & Art",
      "Basic Social Communication",
      "Fine & Gross Motor Skills",
      "Potty Training Support",
    ],
    schedule: [
      { time: "07:00 AM - 09:00 AM", activity: "Arrival &  Free Play" },
      {
        time: "09:00 AM",
        activity:
          "Breakfast, Morning Circle Time, Sensory Activities & Outdoor Play",
      },
      {
        time: "12:00 PM",
        activity:
          "Lunch, Afternoon Story Time, Nap & Quiet Time, Afternoon Snack and Calm Play",
      },
      { time: "04:30 PM - 05:30 PM", activity: "Departure" },
    ],
  },
  {
    id: "preschool",
    title: "Kindergarden",
    age: "3 - 4 Years",
    badge: "Curious Littles",
    color: "bg-sky-100 text-sky-800 border-sky-200",
    accentColor: "from-sky-400 to-blue-500",
    description:
      "Children build language, confidence and independence through a balance of guided learning and play.",
    features: [
      "Phonics & Storytelling",
      "Math Foundations",
      "STEM Science Corner",
      "Music & Movement",
    ],
    schedule: [
      { time: "07:00 AM - 09:00 AM", activity: "Arrival &  Free Play" },
      {
        time: "09:00 AM",
        activity:
          "Breakfast, Morning Language & Literacy, Outdoor Paly and Guided Activities",
      },
      {
        time: "12:00 PM",
        activity:
          "Lunch, Afternoon Story Time, Afternoon Snack and Creative Arts",
      },
      { time: "04:30 PM - 05:30 PM", activity: "Departure" },
    ],
  },
  {
    id: "kindergarten",
    title: "Reception",
    age: "4 - 5 Years",
    badge: "Future Leaders",
    color: "bg-emerald-100 text-emerald-800 border-emerald-200",
    accentColor: "from-emerald-400 to-teal-500",
    description:
      "Our Reception children explore new ideas through a mix of classroom learning, hands-on activities and outdoor play.",
    features: [
      "Advanced Literacy & Reading",
      "Logic & Primary Math",
      "Bilingual English Immersion",
      "Project-Based Learning",
    ],
    schedule: [
      { time: "07:00 AM - 08:30 AM", activity: "Arrival &  Free Play" },
      {
        time: "08:30 AM - 09:00 AM",
        activity: "Circle Time & Morning Assembly",
      },
      { time: "09:00 AM - 09:30 AM", activity: "Breakfast" },
      {
        time: "09:30 AM - 12:00 PM",
        activity:
          "Mathematics & Logic, English Literacy, Science and Outdoor Activities",
      },
      {
        time: "12:00 PM - 12:30 PM",
        activity:
          "Lunch Afternoon, Rest Time, Afternoon Snack, Creative & Practical Activities",
      },
      { time: "04:30 PM - 05:00 PM", activity: "Departure" },
    ],
  },
];

const GALLERY_ITEMS = [
  {
    id: 1,
    category: "Classrooms",
    title: "Bright Interactive Learning Room",
    image: "../images/classroom1.jpeg",
  },
  {
    id: 2,
    category: "Classrooms",
    title: "Safe Outdoor Playground & Turf",
    image: "../images/classroom2.jpeg",
  },
  {
    id: 3,
    category: "Classrooms",
    title: "Creative Painting & Expression",
    image: "../images/classroom3.jpeg",
  },
  {
    id: 4,
    category: "Classrooms",
    title: "Organic Meal Time & Etiquette",
    image: "../images/classroom4.jpeg",
  },
  {
    id: 5,
    category: "Classrooms",
    title: "Montessori Reading Nook",
    image: "../images/classroom5.jpeg",
  },
  {
    id: 6,
    category: "School",
    title: "Little Scientists Experimenting",
    image: "../images/outside.jpeg",
  },
  {
    id: 7,
    category: "Play Area",
    title: "Little Scientists Experimenting",
    image: "../images/play_area.jpeg",
  },
];

const WEEKLY_MENU = [
  {
    day: "Monday",
    lunch: "Grilled Chicken Breast, Quinoa, Steamed Broccoli",
    snack: "Apple Slices with Homemade Oat Cookie",
  },
  {
    day: "Tuesday",
    lunch: "Baked Salmon, Carrot & Sweet Potato Puree",
    snack: "Greek Yogurt with Fresh Strawberries",
  },
  {
    day: "Wednesday",
    lunch: "Whole Wheat Pasta with Fresh Tomato & Veggie Sauce",
    snack: "Banana & Peanut Butter Bites",
  },
  {
    day: "Thursday",
    lunch: "Turkey Meatballs with Basmati Rice & Peas",
    snack: "Cucumber Sticks & Hummus Dip",
  },
  {
    day: "Friday",
    lunch: "Homemade Spinach & Cheese Pie with Salad",
    snack: "Fresh Watermelon & Cheddar Cubes",
  },
];

const UPCOMING_EVENTS = [
  {
    date: "OCT 12",
    title: "Annual Pumpkin & Autumn Harvest Fest",
    time: "10:00 AM - 01:00 PM",
    desc: "Family games, costume parade, and pumpkin decorating.",
  },
  {
    date: "OCT 24",
    title: "Parent-Teacher Collaborative Workshop",
    time: "04:30 PM - 06:00 PM",
    desc: "Understanding early childhood emotional milestone development.",
  },
  {
    date: "NOV 05",
    title: "Little Scientists Science Fair Day",
    time: "09:30 AM - 12:00 PM",
    desc: "Hands-on simple physics and chemistry experiments by students.",
  },
];

const TESTIMONIALS = [
  {
    name: "Sarah Jenkins",
    role: "Mother of Liam (Age 4)",
    text: "Highview Preschool has been a blessing! Liam transformed from shy to confident and expressive within just three months. The teachers genuinely care.",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "David & Elena Rostova",
    role: "Parents of Maya (Age 3)",
    text: "The daily updates, clean facility, and focus on play-based learning give us complete peace of mind while we are at work. Highly recommended!",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
  },
];

export default function App() {
  const [selectedProgram, setSelectedProgram] = useState("toddlers");
  const [selectedGalleryCategory, setSelectedGalleryCategory] = useState("All");
  const [lightboxImage, setLightboxImage] = useState(null);
  const [activeMenuDay, setActiveMenuDay] = useState("Monday");
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isTourModalOpen, setIsTourModalOpen] = useState(false);

  // Registration Form State
  const [formState, setFormState] = useState({
    parentName: "",
    childName: "",
    childAge: "3",
    email: "",
    phone: "",
    program: "preschool",
    notes: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API delay
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccessModal(true);
      setFormState({
        parentName: "",
        childName: "",
        childAge: "3",
        email: "",
        phone: "",
        program: "preschool",
        notes: "",
      });
    }, 1000);
  };

  const filteredGallery =
    selectedGalleryCategory === "All"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter(
          (item) => item.category === selectedGalleryCategory,
        );

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-pink-200 selection:text-pink-900">
      {}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <img
              src="./images/highview.png"
              alt="Highview Preschool Botswana Logo"
              className="h-14 w-auto object-contain transform group-hover:scale-105 transition-transform"
            />

            <div>
              <span className="text-2xl font-black tracking-tight text-slate-800 block leading-none">
                Highview <span className="text-rose-500">Preschool</span>
              </span>
              <span className="text-xs font-semibold tracking-wider text-slate-400 uppercase block mt-1">
                Gaborone
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
            <a href="#about" className="hover:text-rose-500 transition-colors">
              About Us
            </a>
            <a
              href="#programs"
              className="hover:text-rose-500 transition-colors"
            >
              Programs
            </a>
            <a
              href="#gallery"
              className="hover:text-rose-500 transition-colors"
            >
              Gallery
            </a>
            <a href="#life" className="hover:text-rose-500 transition-colors">
              School Life
            </a>
            <a
              href="#register"
              className="hover:text-rose-500 transition-colors"
            >
              Admissions
            </a>
          </nav>

          {/* Call To Action Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+1234567890"
              className="flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-rose-500 transition-colors px-3 py-2"
            >
              <Phone className="w-4 h-4 text-emerald-500" />
              74 198 558
            </a>
            <button
              onClick={() => setIsTourModalOpen(true)}
              className="px-5 py-2.5 rounded-full bg-rose-500 hover:bg-rose-600 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              Book a Tour
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsNavOpen(!isNavOpen)}
            className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 cursor-pointer"
          >
            {isNavOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <MenuIcon className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isNavOpen && (
          <div className="md:hidden bg-white border-b border-slate-100 px-4 pt-2 pb-6 space-y-3">
            <a
              href="#about"
              onClick={() => setIsNavOpen(false)}
              className="block px-3 py-2 rounded-md font-medium text-slate-700 hover:bg-rose-50 hover:text-rose-600"
            >
              About Us
            </a>
            <a
              href="#programs"
              onClick={() => setIsNavOpen(false)}
              className="block px-3 py-2 rounded-md font-medium text-slate-700 hover:bg-rose-50 hover:text-rose-600"
            >
              Programs
            </a>
            <a
              href="#gallery"
              onClick={() => setIsNavOpen(false)}
              className="block px-3 py-2 rounded-md font-medium text-slate-700 hover:bg-rose-50 hover:text-rose-600"
            >
              Gallery
            </a>
            <a
              href="#life"
              onClick={() => setIsNavOpen(false)}
              className="block px-3 py-2 rounded-md font-medium text-slate-700 hover:bg-rose-50 hover:text-rose-600"
            >
              School Life
            </a>
            <a
              href="#register"
              onClick={() => setIsNavOpen(false)}
              className="block px-3 py-2 rounded-md font-medium text-slate-700 hover:bg-rose-50 hover:text-rose-600"
            >
              Admissions
            </a>
            <button
              onClick={() => {
                setIsNavOpen(false);
                setIsTourModalOpen(true);
              }}
              className="w-full mt-2 py-3 rounded-xl bg-rose-500 text-white font-bold text-center cursor-pointer"
            >
              Book a Tour
            </button>
          </div>
        )}
      </header>

      {}
      <section className="relative overflow-hidden bg-gradient-to-b from-amber-50/60 via-sky-50/40 to-slate-50 pt-12 pb-20 lg:pt-20 lg:pb-32">
        {/* Background decorative circles */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-amber-200/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-sky-200/30 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Column - Hero Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-100 text-rose-700 font-bold text-xs tracking-wide uppercase shadow-sm">
                <Star className="w-4 h-4 fill-rose-500 text-rose-500" />
                #1 Voted Kindergarten in Town
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight">
                Where Every Small Step leads to{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-purple-500 to-sky-500">
                  Big Dreams
                </span>
              </h1>

              <p className="text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 font-medium">
                At <strong>Highview Preschool</strong>, we blend play-based
                discovery with structured learning to nurture happy, resilient,
                and curious young minds aged 2 to 5.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                <a
                  href="#register"
                  className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-rose-500 hover:bg-rose-600 text-white font-extrabold text-base shadow-lg hover:shadow-rose-500/30 transition-all text-center"
                >
                  Apply For Admission
                </a>
                <a
                  href="#programs"
                  className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white hover:bg-slate-100 text-slate-700 font-bold text-base border border-slate-200 shadow-sm transition-all text-center flex items-center justify-center gap-2"
                >
                  Explore Programs
                  <ChevronRight className="w-5 h-5" />
                </a>
              </div>

              {/* Trust Badges */}
              <div className="pt-8 border-t border-slate-200/60 grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0">
                <div>
                  <p className="text-2xl font-black text-slate-800">100%</p>
                  <p className="text-xs text-slate-500 font-medium">
                    Certified Teachers
                  </p>
                </div>
                <div>
                  <p className="text-2xl font-black text-slate-800">1:6</p>
                  <p className="text-xs text-slate-500 font-medium">
                    Teacher-Child Ratio
                  </p>
                </div>
                <div>
                  <p className="text-2xl font-black text-slate-800">15+</p>
                  <p className="text-xs text-slate-500 font-medium">
                    Years Experience
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Hero Visual Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Decorative background border frame */}
                <div className="absolute -inset-4 bg-gradient-to-r from-amber-300 via-rose-300 to-sky-300 rounded-3xl transform rotate-2 blur-sm" />

                <div className="relative bg-white p-3 rounded-3xl shadow-xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=800&q=80"
                    alt="Children playing together at Haci Preschool"
                    className="w-full h-96 object-cover rounded-2xl"
                  />

                  {/* Floating badge top-right */}
                  <div className="absolute top-6 right-6 bg-white/95 backdrop-blur px-4 py-2.5 rounded-2xl shadow-lg border border-slate-100 flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-800">
                        Safe & Secure
                      </p>
                      <p className="text-[10px] text-slate-500">
                        24/7 CCTV & Gated
                      </p>
                    </div>
                  </div>

                  {/* Floating badge bottom-left */}
                  <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur px-4 py-2.5 rounded-2xl shadow-lg border border-slate-100 flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-amber-100 flex items-center justify-center text-amber-600">
                      <Smile className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-800">
                        Happy Kids
                      </p>
                      <p className="text-[10px] text-slate-500">
                        500+ Graduates
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-rose-500 uppercase tracking-widest bg-rose-50 px-3 py-1 rounded-full">
              Our Core Philosophy
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3">
              Why Parents Trust Highview Preschool
            </h2>
            <p className="text-slate-600 mt-3">
              We provide an enriching environment where children feel secure,
              valued, and excited to explore the world every single day.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-8 rounded-3xl bg-amber-50/50 border border-amber-100/80 hover:shadow-lg transition-all group">
              <div className="w-14 h-14 rounded-2xl bg-amber-400 text-white flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform">
                <Heart className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">
                Loving Environment
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Warm, caring educators who give individualized emotional support
                to every single child.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-sky-50/50 border border-sky-100/80 hover:shadow-lg transition-all group">
              <div className="w-14 h-14 rounded-2xl bg-sky-400 text-white flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform">
                <BookOpen className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">
                Play-Based Curriculum
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Combining STEAM activities, music, and storytelling to foster
                natural cognitive growth.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-emerald-50/50 border border-emerald-100/80 hover:shadow-lg transition-all group">
              <div className="w-14 h-14 rounded-2xl bg-emerald-400 text-white flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform">
                <Apple className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">
                Organic Meal Plans
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Chef-prepared organic meals and daily snacks tailored for
                growing young bodies.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-rose-50/50 border border-rose-100/80 hover:shadow-lg transition-all group">
              <div className="w-14 h-14 rounded-2xl bg-rose-400 text-white flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">
                Certified Safety
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Biometric security entries, sanitized classrooms, and
                CPR-certified staff members on site.
              </p>
            </div>
          </div>
        </div>
      </section>

      {}
      <section id="programs" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold text-sky-500 uppercase tracking-widest bg-sky-50 px-3 py-1 rounded-full">
              Tailored Learning Paths
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3">
              Age-Appropriate Programs
            </h2>
            <p className="text-slate-600 mt-3">
              Select an age group below to preview our daily schedule and key
              curriculum highlights.
            </p>
          </div>

          {/* Program Selector Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {PROGRAMS.map((prog) => (
              <button
                key={prog.id}
                onClick={() => setSelectedProgram(prog.id)}
                className={`px-6 py-3 rounded-full font-bold text-sm transition-all flex items-center gap-2 ${
                  selectedProgram === prog.id
                    ? "bg-slate-900 text-white shadow-lg scale-105"
                    : "bg-white text-slate-600 hover:bg-slate-200 border border-slate-200"
                }`}
              >
                <span>{prog.title}</span>
                <span
                  className={`text-xs px-2 py-0.5 rounded-full ${prog.color}`}
                >
                  {prog.age}
                </span>
              </button>
            ))}
          </div>

          {/* Active Program Showcase Box */}
          {PROGRAMS.filter((p) => p.id === selectedProgram).map((prog) => (
            <div
              key={prog.id}
              className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden grid lg:grid-cols-12"
            >
              {/* Left Column: Details */}
              <div className="lg:col-span-7 p-8 sm:p-12 space-y-6">
                <div className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-700">
                  {prog.badge}
                </div>
                <h3 className="text-3xl font-extrabold text-slate-900">
                  {prog.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-base">
                  {prog.description}
                </p>

                <div>
                  <h4 className="font-bold text-slate-800 text-sm uppercase tracking-wider mb-4">
                    Curriculum Highlights
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {prog.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2.5">
                        <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                        <span className="text-sm font-semibold text-slate-700">
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  <a
                    href="#register"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-rose-500 hover:bg-rose-600 text-white font-bold text-sm transition-colors shadow-md"
                  >
                    Enroll in {prog.title}
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Right Column: Daily Schedule */}
              <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-slate-800 text-white p-8 sm:p-12 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between border-b border-slate-700 pb-4 mb-6">
                    <h4 className="font-bold text-lg flex items-center gap-2">
                      <Clock className="w-5 h-5 text-amber-400" />
                      Daily Schedule Preview
                    </h4>
                    <span className="text-xs text-slate-400">
                      Sample Routine
                    </span>
                  </div>

                  <div className="space-y-4">
                    {prog.schedule.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-4">
                        <span className="text-xs font-mono font-bold text-amber-400 bg-slate-800 px-2 py-1 rounded border border-slate-700">
                          {item.time}
                        </span>
                        <span className="text-sm text-slate-200 font-medium">
                          {item.activity}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <p className="text-xs text-slate-400 mt-8 pt-4 border-t border-slate-700/60">
                  * Daily schedule adapts naturally based on weather and child
                  engagement levels.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {}
      <section id="gallery" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold text-emerald-500 uppercase tracking-widest bg-emerald-50 px-3 py-1 rounded-full">
              Explore Our Campus
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3">
              Photo Gallery
            </h2>
            <p className="text-slate-600 mt-3">
              Take a peek inside our vibrant classrooms, outdoor playgrounds,
              and dining facilities.
            </p>
          </div>

          {/* Gallery Category Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {["All", "Classrooms", "Play Area", "School"].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedGalleryCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  selectedGalleryCategory === cat
                    ? "bg-rose-500 text-white shadow-md"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Gallery Image Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGallery.map((item) => (
              <div
                key={item.id}
                onClick={() => setLightboxImage(item)}
                className="group relative rounded-3xl overflow-hidden shadow-md cursor-pointer aspect-video sm:aspect-square bg-slate-100 border border-slate-100"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-6 flex flex-col justify-end text-white">
                  <span className="text-xs font-bold text-amber-300 uppercase tracking-wider">
                    {item.category}
                  </span>
                  <h3 className="text-base font-bold mt-1">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div className="fixed inset-0 z-50 bg-slate-900/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl">
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-slate-900/60 hover:bg-slate-900 text-white rounded-full flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={lightboxImage.image}
              alt={lightboxImage.title}
              className="w-full max-h-[70vh] object-cover"
            />
            <div className="p-6 bg-white">
              <span className="text-xs font-bold text-rose-500 uppercase tracking-wider">
                {lightboxImage.category}
              </span>
              <h3 className="text-xl font-extrabold text-slate-800 mt-1">
                {lightboxImage.title}
              </h3>
            </div>
          </div>
        </div>
      )}

      {}

      {}

      {}
      <section
        id="register"
        className="py-20 bg-gradient-to-br from-rose-500 via-purple-600 to-sky-600 text-white relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Description */}
            <div className="lg:col-span-5 space-y-6 text-center lg:text-left">
              <span className="px-3 py-1 rounded-full bg-white/20 text-white font-bold text-xs uppercase tracking-wider backdrop-blur-md">
                Limited Seats Available
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight">
                Join the Highview Preschool Family Today
              </h2>
              <p className="text-rose-100 text-base leading-relaxed">
                Applications for the upcoming term are currently open. Fill out
                the quick form to reserve a spot or schedule a personal visit.
              </p>

              <div className="space-y-3 pt-4 inline-block text-left">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                    <Check className="w-5 h-5 text-amber-300" />
                  </div>
                  <span className="font-medium text-sm">
                    Instant Online Confirmation
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                    <Check className="w-5 h-5 text-amber-300" />
                  </div>
                  <span className="font-medium text-sm">
                    Zero Obligation School Tour
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                    <Check className="w-5 h-5 text-amber-300" />
                  </div>
                  <span className="font-medium text-sm">
                    Flexible Full & Half-Day Options
                  </span>
                </div>
              </div>
            </div>

            {/* Right Registration Card */}
            <div className="lg:col-span-7">
              <div className="bg-white text-slate-800 p-8 sm:p-10 rounded-3xl shadow-2xl">
                <h3 className="text-2xl font-black text-slate-900 mb-2">
                  Online Admission Inquiry
                </h3>
                <p className="text-xs text-slate-500 mb-6">
                  Please enter your details below and our admissions coordinator
                  will reach out.
                </p>

                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                        Parent Full Name
                      </label>
                      <input
                        type="text"
                        name="parentName"
                        required
                        value={formState.parentName}
                        onChange={handleInputChange}
                        placeholder="e.g. Jessica Smith"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-rose-500 text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                        Child Name
                      </label>
                      <input
                        type="text"
                        name="childName"
                        required
                        value={formState.childName}
                        onChange={handleInputChange}
                        placeholder="e.g. Leo Smith"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-rose-500 text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formState.email}
                        onChange={handleInputChange}
                        placeholder="parent@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-rose-500 text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formState.phone}
                        onChange={handleInputChange}
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-rose-500 text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                        Child's Current Age
                      </label>
                      <select
                        name="childAge"
                        value={formState.childAge}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-rose-500 text-sm bg-white"
                      >
                        <option value="2">2 Years Old</option>
                        <option value="3">3 Years Old</option>
                        <option value="4">4 Years Old</option>
                        <option value="5">5 Years Old</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                        Preferred Program
                      </label>
                      <select
                        name="program"
                        value={formState.program}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-rose-500 text-sm bg-white"
                      >
                        <option value="toddlers">Toddler (2-3 Yrs)</option>
                        <option value="preschool">Preschool (3-4 Yrs)</option>
                        <option value="kindergarten">
                          Kindergarten (4-5 Yrs)
                        </option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Additional Notes or Questions
                    </label>
                    <textarea
                      name="notes"
                      rows="3"
                      value={formState.notes}
                      onChange={handleInputChange}
                      placeholder="Tell us about special requests or dietary requirements..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-rose-500 text-sm"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-rose-500 hover:bg-rose-600 text-white font-extrabold text-base shadow-lg transition-all flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span>Submitting...</span>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Submit Admission Application</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Confirmation Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-8 text-center space-y-4 shadow-2xl animate-fade-in">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-black text-slate-800">
              Application Received!
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Thank you for applying to <strong>Highview Preschool</strong>. Our
              admissions counselor will contact you within 24 hours.
            </p>
            <button
              onClick={() => setShowSuccessModal(false)}
              className="w-full py-3 rounded-xl bg-slate-900 text-white font-bold text-sm"
            >
              Back to Home
            </button>
          </div>
        </div>
      )}

      {/* Book a Tour Modal */}
      {isTourModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-8 relative shadow-2xl">
            <button
              onClick={() => setIsTourModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600"
            >
              <X className="w-6 h-6" />
            </button>
            <h3 className="text-xl font-black text-slate-900 mb-2">
              Schedule a Campus Tour
            </h3>
            <p className="text-xs text-slate-500 mb-6">
              Select your preferred time slot and visit us in person.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                setIsTourModalOpen(false);
                alert("Tour request sent! We look forward to meeting you.");
              }}
              className="space-y-4"
            >
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Full Name"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Preferred Date
                </label>
                <input
                  type="date"
                  required
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Time Slot
                </label>
                <select className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm bg-white">
                  <option>10:00 AM - Morning Visit</option>
                  <option>02:00 PM - Afternoon Visit</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-rose-500 hover:bg-rose-600 text-white font-bold text-sm"
              >
                Confirm Tour Booking
              </button>
            </form>
          </div>
        </div>
      )}

      {}
      <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-rose-500 flex items-center justify-center text-white">
                  <img
                    src="./images/highview.png"
                    alt="Highview Preschool Botswana Logo"
                    className="h-14 w-auto object-contain transform group-hover:scale-105 transition-transform"
                  />
                </div>
                <span className="text-2xl font-black text-white">
                  Highview Preschool
                </span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Empowering toddlers and young learners with creative play,
                cognitive growth, and a warm family environment.
              </p>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
                Contact Us
              </h4>
              <ul className="space-y-3 text-xs">
                <li className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-rose-500 shrink-0" />
                  <span>Plot 5207 Village Gaborone</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>74 198 558</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-sky-500 shrink-0" />
                  <span>info@hacipreschool.edu</span>
                </li>
              </ul>
            </div>

            {/* Opening Hours */}
            <div>
              <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
                Operating Hours
              </h4>
              <div className="space-y-2 text-xs text-slate-400">
                <div className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span className="text-white font-semibold">
                    08:00 AM - 05:30 PM
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
            <p>
              © {new Date().getFullYear()} Highview Preschool & Kindergarten.
              All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {}
      <a
        href="https://wa.me/26775198558"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-emerald-500 hover:bg-emerald-600 text-white p-4 rounded-full shadow-2xl flex items-center justify-center transform hover:scale-110 transition-all group"
        aria-label="Contact via WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out font-bold text-xs pl-0 group-hover:pl-2">
          Chat with Us
        </span>
      </a>
    </div>
  );
}
