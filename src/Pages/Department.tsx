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
import cstSm2 from "../assets/cstSm2.jpeg";
import civilSm from "../assets/civilSm.jpeg";
import mechanicalSm from "../assets/mechanicalSm.jpeg";
import powerSm from "../assets/powerSm.jpeg";
import racSm from "../assets/rac.jpeg";
import electronicsSm from "../assets/electronicsSm.jpeg";
import elecSm from "../assets/elecSm.jpeg";
import toast from "react-hot-toast";

const departments = [
  {
    id: 1,
    name: "Computer Science & Technology (CST)",
    desc: "Focuses on software development, web and mobile technologies, databases, networking, and modern computing systems that power today’s digital world.",
    icon: <FaLaptopCode className="text-4xl text-primary" />,
    image: cstSm2,
    location:
      "2nd floor, New Building — CI-1 on the west side, CI-2 on the east side",
  },
  {
    id: 2,
    name: "Civil Engineering",
    desc: "Deals with planning, design, and construction of infrastructure such as buildings, roads, bridges, and water systems with an emphasis on safety and sustainability.",
    icon: <FaDraftingCompass className="text-4xl text-secondary" />,
    image: civilSm,
    location:
      "2nd floor, Academic Building — east of the seminar room (CI-1 & CI-2)",
  },
  {
    id: 3,
    name: "Mechanical Engineering",
    desc: "Covers mechanics, manufacturing, thermal engineering, and machine design that support industrial production and mechanical systems.",
    icon: <FaCogs className="text-4xl text-accent" />,
    image: mechanicalSm,
    location:
      "2nd floor, Academic Building — in front of the Civil Engineering department (CI-1 & CI-2)",
  },
  {
    id: 4,
    name: "Electrical Engineering",
    desc: "Concentrates on electrical circuits, machines, power control, and automation systems essential for modern electrical infrastructure.",
    icon: <FaBolt className="text-4xl text-warning" />,
    image: elecSm,
    location:
      "2nd floor, Academic Building (East side) — CI-1 east of room 0206, CI-2 west of room 0206",
  },
  {
    id: 5,
    name: "Power Engineering",
    desc: "Specializes in power generation, transmission, distribution, and renewable energy systems to meet growing energy demands efficiently.",
    icon: <FaSolarPanel className="text-4xl text-success" />,
    image: powerSm,
    location:
      "2nd floor, Academic Building (East side) — west of room 0206 (CI-1 & CI-2)",
  },
  {
    id: 6,
    name: "Refrigeration & Air Conditioning (RAC)",
    desc: "Focuses on HVAC systems, refrigeration technology, cooling methods, and climate control for residential and industrial applications.",
    icon: <FaSnowflake className="text-4xl text-info" />,
    image: racSm,
    location:
      "New Building, 3rd floor — CI-1 on the east side, CI-2 on the west side",
  },
  {
    id: 7,
    name: "Electronics Engineering",
    desc: "Emphasizes electronic circuits, embedded systems, microcontrollers, and communication technologies used in modern devices.",
    icon: <FaMicrochip className="text-4xl text-error" />,
    image: electronicsSm,
    location:
      "Academic Building — CI-1 on the 2nd floor (west side), CI-2 on the 3rd floor (west side)",
  },
];

const Department = () => {
  return (
    <section className="py-16">
      {/* Heading + Long Description */}
      <div className="text-center max-w-3xl mx-auto mb-16 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
          ⚙️ Explore Our Departments
        </h2>
        <p className="text-base-content/80 leading-relaxed text-lg">
          From circuits to structures, cooling systems to code — our departments
          open doors to innovation and real-world solutions.
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
            className={`flex flex-col md:flex-row items-center gap-6 md:gap-10 px-4 ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            data-aos-duration="1000"
          >
            {/* Image */}
            <div className="w-full md:w-1/2">
              <img
                src={dept.image}
                alt={dept.name}
                className="rounded-2xl shadow-xl w-full h-64 md:h-80 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Content */}
            <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3">
                {dept.icon}
                <h3 className="text-xl md:text-2xl font-semibold">{dept.name}</h3>
              </div>
              <p className="text-base-content/80 leading-relaxed">
                {dept.desc}
              </p>
              <p className="text-base-content/80 leading-relaxed">
                Location: {dept.location}
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
    </section>
  );
};

export default Department;
