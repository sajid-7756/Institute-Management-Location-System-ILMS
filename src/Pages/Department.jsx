import React from "react";
import {
  FaLaptopCode,
  FaDraftingCompass,
  FaCogs,
  FaBolt,
  FaSolarPanel,
  FaSnowflake,
  FaMicrochip,
} from "react-icons/fa";

const departments = [
  {
    id: 1,
    name: "Computer Science & Technology (CST)",
    desc: "Explores software engineering, AI, and cutting-edge computing solutions that shape the digital future.",
    icon: <FaLaptopCode className="text-4xl text-primary" />,
    image: "https://via.placeholder.com/600x400?text=CST",
  },
  {
    id: 2,
    name: "Civil Engineering",
    desc: "Designs sustainable infrastructure including bridges, roads, and smart cities for modern living.",
    icon: <FaDraftingCompass className="text-4xl text-secondary" />,
    image: "https://via.placeholder.com/600x400?text=Civil",
  },
  {
    id: 3,
    name: "Mechanical Engineering",
    desc: "Focuses on machines, robotics, and manufacturing systems that power industries worldwide.",
    icon: <FaCogs className="text-4xl text-accent" />,
    image: "https://via.placeholder.com/600x400?text=Mechanical",
  },
  {
    id: 4,
    name: "Electrical Engineering",
    desc: "Specializes in circuits, automation, and smart power systems driving innovation in technology.",
    icon: <FaBolt className="text-4xl text-warning" />,
    image: "https://via.placeholder.com/600x400?text=Electrical",
  },
  {
    id: 5,
    name: "Power Engineering",
    desc: "Dedicated to energy generation, renewable sources, and efficient transmission networks.",
    icon: <FaSolarPanel className="text-4xl text-success" />,
    image: "https://via.placeholder.com/600x400?text=Power",
  },
  {
    id: 6,
    name: "Refrigeration & Air Conditioning (RAC)",
    desc: "Covers HVAC systems, cooling technologies, and sustainable thermal solutions.",
    icon: <FaSnowflake className="text-4xl text-info" />,
    image: "https://via.placeholder.com/600x400?text=RAC",
  },
  {
    id: 7,
    name: "Electronics Engineering",
    desc: "Deals with embedded systems, microelectronics, and communication technologies.",
    icon: <FaMicrochip className="text-4xl text-error" />,
    image: "https://via.placeholder.com/600x400?text=Electronics",
  },
];

const Department = () => {
  return (
    <section className="py-16 bg-base-200">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading + Long Description */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">
            ⚙️ Explore Our Departments
          </h2>
          <p className="text-base-content/80 leading-relaxed text-lg">
            From circuits to structures, cooling systems to code — our
            departments open doors to innovation and real-world solutions.
          </p>

          {/* Motto */}
          <p className="mt-4 text-secondary font-semibold">
            "Innovation • Sustainability • Excellence"
          </p>

          {/* Quick Stats */}
          <div className="flex justify-center gap-4 mt-6 flex-wrap">
            <span className="badge badge-primary badge-lg">7 Departments</span>
            <span className="badge badge-secondary badge-lg">
              Hands-on Learning
            </span>
            <span className="badge badge-accent badge-lg">Future Ready</span>
          </div>

          {/* Divider */}
          <div className="w-24 h-1 bg-linear-to-r from-primary to-secondary mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Department List */}
        <div className="space-y-20">
          {departments.map((dept, index) => (
            <div
              key={dept.id}
              className={`flex flex-col md:flex-row items-center gap-10 ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              data-aos-duration="1000"
            >
              {/* Image */}
              <div className="md:w-1/2">
                <img
                  src={dept.image}
                  alt={dept.name}
                  className="rounded-2xl shadow-xl w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="md:w-1/2 space-y-4">
                <div className="flex items-center gap-3">
                  {dept.icon}
                  <h3 className="text-2xl font-semibold">{dept.name}</h3>
                </div>
                <p className="text-base-content/80 leading-relaxed">
                  {dept.desc}
                </p>
                <button className="btn btn-outline btn-primary btn-sm mt-3">
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

export default Department;
