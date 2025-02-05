import React, { useRef, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, Stage, PresentationControls } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useSpring, animated } from '@react-spring/three';
import { Link } from 'react-router-dom';

// Custom hook to detect mobile screen size synchronously
const useIsMobile = () => {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobile;
};

// Improved Animated Suffix Component
const AnimatedSuffix = () => {
  const words = ['effortlessly!', 'like a PRO!', 'confidently!', 'with Drizzy!'];
  const [index, setIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % words.length);
        setIsAnimating(false);
      }, 500);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center lg:items-start">
      <span className="text-black block">Learn to Drive</span>
      <span 
        className={`text-yellow-500 block transition-all duration-500 ${
          isAnimating 
            ? 'opacity-0 transform -translate-y-2' 
            : 'opacity-100 transform translate-y-0'
        }`}
      >
        {words[index]}
      </span>
    </div>
  );
};

function Model({ mouseX, ...props }) {
  const { scene } = useGLTF("/chevy.glb");
  const modelRef = useRef();

  React.useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = false;
        child.receiveShadow = false;
        if (child.material) {
          child.material.toneMapped = false;
          child.material.needsUpdate = true;
        }
      }
    });
  }, [scene]);

  useFrame((state) => {
    if (modelRef.current) {
      modelRef.current.rotation.y = Math.PI * 1.5 + Math.sin(state.clock.elapsedTime * 0.6) * 0.5;
    }
  });

  const { rotation } = useSpring({
    rotation: Math.PI * 1.5 + (mouseX * 0.15),
    config: { mass: 1, tension: 170, friction: 26 }
  });

  return (
    <animated.primitive 
      ref={modelRef}
      object={scene} 
      rotation-y={rotation}
      rotation-x={0.1}
      {...props} 
    />
  );
}

const Hero = () => {
  const [mouseX, setMouseX] = React.useState(0);
  const isMobile = useIsMobile(); // Use the custom hook to detect mobile

  const handleMouseMove = (event) => {
    if (!isMobile) {
      const rect = event.currentTarget.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width * 2 - 1;
      setMouseX(x);
    }
  };

  return (
    <div className="min-h-screen bg-white pt-20 lg:pt-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between py-12 md:py-20 lg:py-32">
          {/* Left Section */}
          <section className="flex-1 text-center lg:text-left mb-12 lg:mb-0 z-10 w-full lg:w-1/2 px-4 md:px-8">
            <div className="mb-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                <AnimatedSuffix />
              </h1>
            </div>
            <p className="text-gray-700 text-lg md:text-xl lg:text-2xl mb-8 max-w-xl mx-auto lg:mx-0">
              Book your driving lessons with certified instructors in just a few clicks. 
              Start your journey to becoming a confident driver today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-yellow-500 text-black px-8 py-4 rounded-full font-semibold text-lg md:text-xl hover:bg-yellow-600 transition-colors w-full sm:w-auto">
                Book a Trainer
              </button>
              <Link to="https://play.google.com/store/apps/details?id=com.drizzy.user">
              <button className="border-2 border-black text-black px-8 py-4 rounded-full font-semibold text-lg md:text-xl hover:bg-black hover:text-white transition-colors w-full sm:w-auto">
                Download App
              </button>
              </Link>
            </div>
          </section>

          {/* Right Section */}
          <section 
            className="flex-1 w-full h-[400px] md:h-[600px] lg:h-[700px] relative"
            onMouseMove={handleMouseMove}
          >
            <Canvas
              dpr={[1, 2]}
              shadows={false}
              camera={{ fov: 45, position: [0, 0, 5] }}
              className="w-full h-full"
            >
              <color attach="background" args={["#ffffff"]} />
              <ambientLight intensity={3} />
              <directionalLight 
                position={[5, 5, 5]} 
                intensity={2}
                castShadow={false}
              />
              {!isMobile && (
                <PresentationControls
                  speed={1.5}
                  global
                  zoom={0.7}
                  polar={[-0.1, Math.PI / 4]}
                  config={{ mass: 2, tension: 200 }}
                >
                  <Stage environment={null} intensity={0}>
                    <Model 
                      scale={0.01}
                      mouseX={mouseX}
                      rotation-y={Math.PI * 1.5}
                    />
                  </Stage>
                </PresentationControls>
              )}
              {isMobile && (
                <Stage environment={null} intensity={0}>
                  <Model 
                    scale={0.015}
                    mouseX={0}
                    rotation-y={Math.PI * 1.5}
                  />
                </Stage>
              )}
            </Canvas>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Hero;