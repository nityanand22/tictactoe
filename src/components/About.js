import React from "react";
import man1 from "../images/man1.jpg";
import man2 from "../images/man2.jpg";
import man3 from "../images/man3.jpg";

const About = () => {
  return (
    <div className="container mx-auto p-4 md:px-8 lg:px-16">
      <h1 className="text-3xl font-bold text-center mb-6">About Us</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Our Story</h2>
        <p className="text-gray-700 mb-4">
          Welcome to SHOP.CO, your number one source for all things fashion.
          We're dedicated to giving you the very best of clothing, with a focus
          on quality, customer service, and uniqueness.
        </p>
        <p className="text-gray-700 mb-4">
          Founded in 2025 by Nityanand, SHOP.CO has come a long way from its
          beginnings in a home office. When Nityanand first started out, his
          passion for eco-friendly fashion drove him to do tons of research so
          that SHOP.CO can offer you the world's most advanced clothing. We now
          serve customers all over the world and are thrilled that we're able to
          turn our passion into our own website.
        </p>
        <p className="text-gray-700 mb-4">
          We hope you enjoy our products as much as we enjoy offering them to
          you. If you have any questions or comments, please don't hesitate to
          contact us.
        </p>
        <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
        <p className="text-gray-700 mb-4">
          Our mission is to provide high-quality, eco-friendly fashion that
          makes our customers feel confident and stylish. We believe in
          sustainability and strive to make a positive impact on the environment
          through our products.
        </p>
        <h2 className="text-2xl font-bold mb-4">Meet the Team</h2>
        <p className="text-gray-700 mb-4">
          Our team is made up of passionate individuals who are dedicated to
          providing the best shopping experience for our customers. From our
          designers to our customer service representatives, everyone at SHOP.CO
          is committed to excellence.
        </p>
        <div className="flex flex-wrap justify-around mt-6">
          <div className="w-full md:w-1/3 lg:w-1/4 p-4">
            <div className="w-32 h-32 mx-auto">
              <img
                src={man1}
                alt="Team Member 1"
                className="w-full h-full object-cover rounded-full mb-4 shadow-lg"
              />
            </div>
            <h3 className="text-xl font-bold text-center">Nityanand</h3>
            <p className="text-gray-700 text-center">Founder & CEO</p>
          </div>
          <div className="w-full md:w-1/3 lg:w-1/4 p-4">
            <div className="w-32 h-32 mx-auto">
              <img
                src={man2}
                alt="Team Member 2"
                className="w-full h-full object-cover rounded-full mb-4 shadow-lg"
              />
            </div>
            <h3 className="text-xl font-bold text-center">Jane Doe</h3>
            <p className="text-gray-700 text-center">Chief Designer</p>
          </div>
          <div className="w-full md:w-1/3 lg:w-1/4 p-4">
            <div className="w-32 h-32 mx-auto">
              <img
                src={man3}
                alt="Team Member 3"
                className="w-full h-full object-cover rounded-full mb-4 shadow-lg"
              />
            </div>
            <h3 className="text-xl font-bold text-center">John Smith</h3>
            <p className="text-gray-700 text-center">
              Customer Service Manager
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
