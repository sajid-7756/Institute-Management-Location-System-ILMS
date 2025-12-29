import React from "react";

const Map = () => {
  return (
    <section className="py-16">
      <div className="w-7xl mx-auto">
        {/* Heading Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">
            📍 Location Map
          </h2>
          <p className="text-base-content/80 leading-relaxed text-lg">
            Explore the exact location of{" "}
            <strong className="text-primary">
              Bogura Polytechnic Institute
            </strong>{" "}
            on the interactive Google Map below.
          </p>

          {/* Divider */}
          <div className="w-24 h-1 bg-linear-to-r from-primary to-secondary mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Map Container */}
        <div className="w-full">
          <div className="relative w-full rounded-2xl shadow-xl overflow-hidden" style={{ height: "600px" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.1901184546373!2d89.37495447598118!3d24.823171146747562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fc54968d3b5cdd%3A0xd5c89978703585d6!2sBogura%20Polytechnic%20Institute!5e0!3m2!1sen!2sbd!4v1762104924550!5m2!1sen!2sbd"
              className="absolute top-0 left-0 w-full h-full"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-base-100 rounded-xl p-6 shadow-lg text-center">
            <div className="text-3xl mb-2">📍</div>
            <h3 className="font-semibold text-lg mb-2">Address</h3>
            <p className="text-base-content/70 text-sm">
              Bogura Polytechnic Institute, Bogura, Bangladesh
            </p>
          </div>
          <div className="bg-base-100 rounded-xl p-6 shadow-lg text-center">
            <div className="text-3xl mb-2">🕒</div>
            <h3 className="font-semibold text-lg mb-2">Office Hours</h3>
            <p className="text-base-content/70 text-sm">
              Saturday - Thursday: 8:00 AM - 6:45 PM
            </p>
          </div>
          <div className="bg-base-100 rounded-xl p-6 shadow-lg text-center">
            <div className="text-3xl mb-2">📞</div>
            <h3 className="font-semibold text-lg mb-2">Contact</h3>
            <p className="text-base-content/70 text-sm">
              Phone: 05166152
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;

