import { Link } from "react-scroll";
import { useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false); // للتحكم في قائمة الموبايل

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "courses", label: "Courses" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-black/70 backdrop-blur-md z-50 border-b border-white/10">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <h1 className="text-xl font-bold text-white tracking-wide cursor-pointer">
          Shadow <span className="text-cyan-400">Dev</span>
        </h1>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} className="text-white focus:outline-none">
            {open ? "✖" : "☰"}
          </button>
        </div>

        {/* Navigation Links */}
        <div className={`md:flex gap-6 ${open ? "flex flex-col absolute top-full left-0 w-full bg-black/90 p-4" : "hidden md:flex"}`}>
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.id}
              smooth={true}
              spy={true}
              offset={-60}
              duration={500}
              onSetActive={() => setActive(item.id)}
              onClick={() => setOpen(false)} // يغلق القائمة بعد الاختيار
              className={`cursor-pointer px-3 py-2 rounded-md transition-colors duration-300 ${
                active === item.id
                  ? "text-cyan-400 font-bold"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
