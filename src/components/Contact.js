import React from "react";

const Contact = () => {
  const handleForm = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const obj = Object.fromEntries(formData.entries());
    console.log(obj);
  };

  return (
    <div className="container mx-auto p-4 md:px-8 lg:px-16">
      <h1 className="text-3xl font-bold text-center mb-6">Contact Us</h1>
      <form
        className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg"
        onSubmit={handleForm}
      >
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter Your Name"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter Email"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="comment"
            className="block text-gray-700 font-bold mb-2"
          >
            Comment
          </label>
          <textarea
            id="comment"
            placeholder="Enter Your Comment"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          ></textarea>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
