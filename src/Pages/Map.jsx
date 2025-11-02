import React from "react";

const Map = () => {
  return (
    <section className="my-8 text-center container mx-auto mb-20">
      {/* Heading */}
      <h2 className="text-4xl font-bold mb-2">📍 Location Map</h2>

      {/* Description */}
      <p className="text-gray-600 mb-4">
        Explore the exact location of <strong className="text-primary">Bogura Polytechnic Institute </strong> 
        on the interactive Google Map below.
      </p>

      {/* Responsive Map */}
      <div className="relative w-full h-0 pb-[55%] overflow-hidden rounded-lg shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.1901184546373!2d89.37495447598118!3d24.823171146747562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fc54968d3b5cdd%3A0xd5c89978703585d6!2sBogura%20Polytechnic%20Institute!5e0!3m2!1sen!2sbd!4v1762104924550!5m2!1sen!2sbd"
          className="absolute top-0 left-0 w-full h-full"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
};

export default Map;
