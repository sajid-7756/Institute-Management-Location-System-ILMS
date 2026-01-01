import React from "react";
import {
  FaClipboardList,
  FaBed,
  FaMosque,
  FaUtensils,
  FaShieldAlt,
  FaBriefcase,
  FaHospital,
} from "react-icons/fa";
import { MdHealthAndSafety } from "react-icons/md";
import toast from "react-hot-toast";

const facilities = [
  {
    id: 1,
    name: "Registrar’s Office",
    desc: "The central administrative office responsible for managing student records, academic certificates, transcripts, registrations, and official documentation, ensuring smooth academic administration and student support.",
    icon: <FaClipboardList className="text-4xl text-primary" />,
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
    location:
      "2nd floor, Academic Building — west of room number 211",
  },
  {
    id: 2,
    name: "Student Hostel",
    desc: "On-campus residential facilities providing safe and comfortable accommodation for students, with essential amenities, dining services, and a supportive community environment.",
    icon: <FaBed className="text-4xl text-secondary" />,
    image:
      "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&h=600&fit=crop",
    location:
      "North Hostel: west of the Academic Building; South Hostel: west of the field",
  },
  {
    id: 3,
    name: "Rover & Red Crescent",
    desc: "Student-led volunteer organizations focused on health awareness, first aid training, emergency response, blood donation campaigns, and humanitarian service within and beyond the campus.",
    icon: <MdHealthAndSafety className="text-4xl text-error" />,
    image:
      "https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=800&h=600&fit=crop",
    location:
      "East–south corner of the Academic Building",
  },
  {
    id: 4,
    name: "Institute Mosque",
    desc: "A peaceful and spiritual prayer facility for students, teachers, and staff, accommodating daily prayers, Jumu’ah congregations, and religious gatherings in a calm environment.",
    icon: <FaMosque className="text-4xl text-success" />,
    image:
      "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=800&h=600&fit=crop",
    location:
      "West of the New Building",
  },
  {
    id: 5,
    name: "Campus Canteen",
    desc: "A hygienic dining facility offering affordable meals, snacks, and beverages for students and staff, ensuring quality food and a comfortable eating space throughout the day.",
    icon: <FaUtensils className="text-4xl text-warning" />,
    image:
      "https://images.unsplash.com/photo-1567521464027-f127ff144326?w=800&h=600&fit=crop",
    location:
      "Beside the student hostel area",
  },
  {
    id: 6,
    name: "Control Room",
    desc: "A dedicated security and monitoring center operating 24/7 to ensure campus safety, manage emergencies, monitor surveillance systems, and coordinate rapid response when needed.",
    icon: <FaShieldAlt className="text-4xl text-info" />,
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
    location:
      "Room number 215, 2nd floor of the Academic Building",
  },
  {
    id: 7,
    name: "Placement Cell",
    desc: "A career development and placement support unit that assists students with job opportunities, internships, career guidance, employer connections, and skill development programs.",
    icon: <FaBriefcase className="text-4xl text-accent" />,
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop",
    location:
      "2nd floor of the Academic Building — east of the Principal’s room",
  },
  {
  id: 8,
  name: "Medical Center",
  desc: "An on-campus healthcare facility providing basic medical treatment, first aid, health checkups, and emergency support for students, teachers, and staff, ensuring quick access to medical assistance when needed.",
  icon: <FaHospital className="text-4xl text-rose-500" />,
  image:
    "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&h=600&fit=crop",
  location:
    "2nd floor of the Academic Building — east side, immediately to the right after finishing the stairs",
}

];


const Others = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading + Long Description */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
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
              Excellent Support
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
              className={`flex flex-col md:flex-row items-center gap-6 md:gap-10 ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              data-aos-duration="1000"
            >
              {/* Image */}
              <div className="w-full md:w-1/2">
                <img
                  src={facility.image}
                  alt={facility.name}
                  className="rounded-2xl shadow-xl w-full h-64 md:h-80 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-3">
                  {facility.icon}
                  <h3 className="text-xl md:text-2xl font-semibold">{facility.name}</h3>
                </div>
                <p className="text-base-content/80 leading-relaxed">
                  {facility.desc}
                </p>
                <p className="text-base-content/80 leading-relaxed">
                  Location: {facility.location}
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

