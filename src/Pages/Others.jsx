import React from "react";
import {
  FaClipboardList,
  FaBed,
  FaMosque,
  FaUtensils,
  FaShieldAlt,
} from "react-icons/fa";
import { MdHealthAndSafety } from "react-icons/md";
import toast from "react-hot-toast";

const facilities = [
  {
    id: 1,
    name: "Registers Office",
    desc: "Central administrative hub managing student records, certificates, transcripts, and official documentation services with efficient and friendly support.",
    icon: <FaClipboardList className="text-4xl text-primary" />,
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop", // Office workspace
  },
  {
    id: 2,
    name: "Student Hostel",
    desc: "Comfortable residential facilities providing safe accommodation, dining, and community living spaces for students with 24/7 security and support.",
    icon: <FaBed className="text-4xl text-secondary" />,
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&h=600&fit=crop", // Building exterior
  },
  {
    id: 3,
    name: "Rover & Red Crescent",
    desc: "Dedicated to health awareness, emergency response, blood donation drives, and community service initiatives that make a real difference.",
    icon: <MdHealthAndSafety className="text-4xl text-error" />,
    image: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=800&h=600&fit=crop", // Healthcare/volunteers
  },
  {
    id: 4,
    name: "Institute Mosque",
    desc: "Peaceful prayer facility offering daily prayers, Friday congregations, and spiritual guidance for the campus community in a serene environment.",
    icon: <FaMosque className="text-4xl text-success" />,
    image: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=800&h=600&fit=crop", // Mosque
  },
  {
    id: 5,
    name: "Campus Canteen",
    desc: "Hygienic dining facility serving nutritious meals, snacks, and beverages at affordable prices throughout the day with a variety of options.",
    icon: <FaUtensils className="text-4xl text-warning" />,
    image: "https://images.unsplash.com/photo-1567521464027-f127ff144326?w=800&h=600&fit=crop", // Cafeteria
  },
  {
    id: 6,
    name: "Control Room",
    desc: "24/7 security monitoring center ensuring campus safety, emergency response coordination, and visitor management for a secure learning environment.",
    icon: <FaShieldAlt className="text-4xl text-info" />,
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop", // Control room/monitors
  },
];

const Others = () => {
  return (
    <section className="py-16 bg-base-200">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading + Long Description */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">
            📍 Campus Facilities & Services
          </h2>
          <p className="text-base-content/80 leading-relaxed text-lg">
            Beyond academics, our campus offers essential facilities designed to
            support student life, health, safety, and spiritual well-being.
          </p>

          {/* Motto */}
          <p className="mt-4 text-secondary font-semibold">
            "Service • Safety • Community"
          </p>

          {/* Quick Stats */}
          <div className="flex justify-center gap-4 mt-6 flex-wrap">
            <span className="badge badge-primary badge-lg">6 Facilities</span>
            <span className="badge badge-secondary badge-lg">
              24/7 Support
            </span>
            <span className="badge badge-accent badge-lg">Student First</span>
          </div>

          {/* Divider */}
          <div className="w-24 h-1 bg-linear-to-r from-primary to-secondary mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Facility List */}
        <div className="space-y-20">
          {facilities.map((facility, index) => (
            <div
              key={facility.id}
              className={`flex flex-col md:flex-row items-center gap-10 ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              data-aos-duration="1000"
            >
              {/* Image */}
              <div className="md:w-1/2">
                <img
                  src={facility.image}
                  alt={facility.name}
                  className="rounded-2xl shadow-xl w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="md:w-1/2 space-y-4">
                <div className="flex items-center gap-3">
                  {facility.icon}
                  <h3 className="text-2xl font-semibold">{facility.name}</h3>
                </div>
                <p className="text-base-content/80 leading-relaxed">
                  {facility.desc}
                </p>
                <button
                  onClick={() => toast("This feature is coming soon")}
                  className="btn btn-outline btn-primary btn-sm mt-3"
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Others;

