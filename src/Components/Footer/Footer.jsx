import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-slate-300 py-12 px-4">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-8">
        {/* Brand & Tagline */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white tracking-tight">
            IL<span className="text-[#10b981]">MS</span>
          </h2>
          <p className="text-sm text-slate-400 mt-2 max-w-xs">
            Simplifying campus navigation and management for the next generation of students.
          </p>
        </div>

        {/* Minimal Navigation */}
        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4">
          {[
            { name: "Home", href: "/" },
            { name: "Departments", href: "/departments" },
            { name: "Map", href: "/map" },
            { name: "Gallery", href: "/gallery" },
            { name: "Others", href: "/others" },
          ].map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium hover:text-[#10b981] transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Bottom Section */}
        <div className="w-full border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} ILMS - Bogura Polytechnic Institute. All rights reserved.
          </p>
          <div className="flex gap-6">
            <span className="hover:text-slate-300 cursor-default transition-colors">Privacy Policy</span>
            <span className="hover:text-slate-300 cursor-default transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
