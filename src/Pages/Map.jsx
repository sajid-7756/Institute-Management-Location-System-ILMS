import React from "react";

const Map = () => {
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.1901184546373!2d89.37495447598118!3d24.823171146747562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fc54968d3b5cdd%3A0xd5c89978703585d6!2sBogura%20Polytechnic%20Institute!5e0!3m2!1sen!2sbd!4v1762104924550!5m2!1sen!2sbd"
        width={600}
        height={450}
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};

export default Map;
