import React from 'react';

const MyProfile = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8">
      {/* Header Section */}
      <header className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 mb-4">
          Karthick
        </h1>
        <p className="text-xl text-gray-300">
          MERN Stack Developer | Building Scalable Web Applications
        </p>
      </header>

      {/* Skills Section */}
      <section className="max-w-4xl mx-auto bg-gray-800 rounded-xl p-6 shadow-lg mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-400 border-b border-gray-700 pb-2">
          Technical Skills
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['MongoDB', 'Express.js', 'React', 'Node.js', 'Tailwind CSS', 'Redux', 'Firebase', 'AWS'].map((skill) => (
            <div key={skill} className="bg-gray-700 rounded-lg p-3 text-center hover:bg-gray-600 transition-colors">
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-4xl mx-auto bg-gray-800 rounded-xl p-6 shadow-lg">
        <h2 className="text-2xl font-semibold mb-4 text-blue-400 border-b border-gray-700 pb-2">
          About Me
        </h2>
        <p className="text-gray-300 leading-relaxed">
          Passionate MERN stack developer with expertise in building full-stack web applications. 
          Specialized in creating responsive UIs with React and Tailwind CSS, 
          robust backend APIs with Node.js/Express, and efficient database solutions with MongoDB.
        </p>
        
        <div className="mt-6 flex flex-wrap gap-4">
          <a href="#" className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg transition-colors">
            Contact Me
          </a>
          <a href="#" className="border border-blue-400 text-blue-400 hover:bg-blue-900/30 px-6 py-2 rounded-lg transition-colors">
            View Projects
          </a>
        </div>
      </section>
    </div>
  );
};

export default MyProfile;