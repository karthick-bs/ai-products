import React from "react";
import { motion as Motion } from "framer-motion";
import {
  FaBrain,
  FaChartLine,
  FaBolt,
  FaLock,
  FaSyncAlt,
  FaGlobe,
  FaRocket,
} from "react-icons/fa";
import { IoIosAnalytics } from "react-icons/io";
import { BsCpuFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();
  // Hexagon grid background component
  const HexagonGrid = () => (
    <div className="absolute inset-0 overflow-hidden opacity-5">
      <div className="hex-grid">
        {[...Array(150)].map((_, i) => (
          <Motion.div
            key={i}
            className="hexagon"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 0.3, 0],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-950 text-white overflow-hidden relative">
      <HexagonGrid />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <Motion.div
            key={i}
            className="absolute rounded-full bg-blue-500/20"
            style={{
              width: `${Math.random() * 10 + 2}px`,
              height: `${Math.random() * 10 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, (Math.random() - 0.5) * 50],
              y: [0, (Math.random() - 0.5) * 50],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: Math.random() * 15 + 15,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <Motion.div
        className="relative z-10 container mx-auto px-6 py-24 flex flex-col items-center justify-center min-h-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* AI Core Visualization */}
        <Motion.div
          className="relative mb-16 w-52 h-52 md:w-72 md:h-72"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div className="absolute inset-0 rounded-full border-2 border-blue-400/30"></div>
          <div className="absolute inset-6 rounded-full border-2 border-purple-400/30"></div>
          <div className="absolute inset-12 rounded-full border-2 border-pink-400/30"></div>

          <Motion.div
            className="absolute top-1/2 left-1/2 w-20 h-20 -mt-10 -ml-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg shadow-blue-500/50 flex items-center justify-center"
            animate={{
              scale: [1, 1.1, 1],
              boxShadow: [
                "0 0 20px 5px rgba(59, 130, 246, 0.5)",
                "0 0 30px 10px rgba(139, 92, 246, 0.6)",
                "0 0 20px 5px rgba(59, 130, 246, 0.5)",
              ],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
          >
            <BsCpuFill className="text-3xl text-white" />
          </Motion.div>

          {[...Array(6)].map((_, i) => (
            <Motion.div
              key={i}
              className="absolute top-1/2 left-1/2 w-3 h-3 -mt-1.5 -ml-1.5 rounded-full bg-white"
              style={{
                x: `${Math.sin(i * 60 * (Math.PI / 180)) * 80}px`,
                y: `${Math.cos(i * 60 * (Math.PI / 180)) * 80}px`,
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            />
          ))}
        </Motion.div>

        {/* Headline */}
        <div className="text-center mb-12 overflow-hidden">
          <Motion.h1
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              Intelligent Systems
            </span>
            <span className="block mt-2 text-white">Powered by AI</span>
          </Motion.h1>

          <Motion.p
            className="text-lg text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Transform your business with our cutting-edge artificial
            intelligence platform.
          </Motion.p>
        </div>

        {/* Interactive CTA */}
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Motion.button
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-medium text-lg relative overflow-hidden group flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center">
              <Motion.span
                className="mr-2"
                animate={{ rotate: [0, 20, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <FaRocket />
              </Motion.span>
              <div onClick={() => navigate("/dashboard")}>
                Launch Your AI Journey
              </div>
            </span>
            <Motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={{ x: "-100%" }}
              whileHover={{ x: "0%" }}
              transition={{ duration: 0.6 }}
            />
          </Motion.button>
        </Motion.div>

        {/* Feature cards */}
        <div className="mt-20 w-full max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                icon: <FaBrain className="text-3xl" />,
                title: "Neural Networks",
                desc: "Advanced learning algorithms",
              },
              {
                icon: <IoIosAnalytics className="text-3xl" />,
                title: "Data Insights",
                desc: "Actionable analytics",
              },
              {
                icon: <FaBolt className="text-3xl" />,
                title: "Real-Time",
                desc: "Instant processing",
              },
              {
                icon: <FaLock className="text-3xl" />,
                title: "Secure",
                desc: "Enterprise-grade security",
              },
              {
                icon: <FaSyncAlt className="text-3xl" />,
                title: "Adaptive",
                desc: "Continuous improvement",
              },
              {
                icon: <FaGlobe className="text-3xl" />,
                title: "Global",
                desc: "Multi-language support",
              },
            ].map((feature, i) => (
              <Motion.div
                key={i}
                className="p-6 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-blue-400/50 transition-all"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="text-blue-400 mb-3">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-1">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </Motion.div>
            ))}
          </div>
        </div>
      </Motion.div>

      {/* Bottom floating indicators */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-6">
        {[...Array(5)].map((_, i) => (
          <Motion.div
            key={i}
            className="w-2 h-2 rounded-full bg-blue-400"
            animate={{
              y: [0, -10, 0],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Landing;

// Add this CSS to your stylesheet
const styles = `
  .hex-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(60px, 1fr));
    grid-auto-rows: 52px;
    gap: 2px;
    width: 100%;
    height: 100%;
  }
  
  .hexagon {
    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
    background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1));
  }
`;

// Inject styles
const styleSheet = document.createElement("style");
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);
