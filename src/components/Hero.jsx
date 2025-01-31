import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, Stage, PresentationControls } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useSpring, animated } from '@react-spring/three';

function Model({ mouseX, ...props }) {
  const { scene } = useGLTF("/chevy.glb");
  const modelRef = useRef();

  // Preserve original materials and colors
  React.useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
        // Preserve original materials
        if (child.material) {
          child.material.toneMapped = false;
          child.material.needsUpdate = true;
        }
      }
    });
  }, [scene]);

  // Add subtle continuous movement
  useFrame((state) => {
    if (modelRef.current) {
      // Smaller rotation range centered on front view
      modelRef.current.rotation.y = Math.PI + Math.sin(state.clock.elapsedTime * 0.5) * 0.05;
    }
  });

  // Create spring animation for mouse movement
  const { rotation } = useSpring({
    rotation: Math.PI + (mouseX * 0.05), // Centered on front view with smaller range
    config: { mass: 1, tension: 170, friction: 26 }
  });

  return (
    <animated.primitive 
      ref={modelRef}
      object={scene} 
      rotation-y={rotation}
      {...props} 
    />
  );
}

const Hero = () => {
  const [mouseX, setMouseX] = React.useState(0);

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width * 2 - 1;
    setMouseX(x);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between py-20 lg:py-32">
          {/* Left Section */}
          <section className="flex-1 text-center lg:text-left mb-12 lg:mb-0 z-10">
            <h1 className="text-4xl lg:text-6xl font-bold text-black mb-6">
              Learn to Drive
              <span className="text-yellow-500"> Easily</span>
            </h1>
            <p className="text-gray-700 text-lg lg:text-xl mb-8 max-w-xl">
              Book your driving lessons with certified instructors in just a few clicks. 
              Start your journey to becoming a confident driver today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-yellow-500 text-black px-8 py-3 rounded-full font-semibold text-lg hover:bg-yellow-600 transition-colors">
                Book a Lesson
              </button>
              <button className="border-2 border-black text-black px-8 py-3 rounded-full font-semibold text-lg hover:bg-black hover:text-white transition-colors">
                Download App
              </button>
            </div>
          </section>

          {/* Right Section */}
          <section 
            className="flex-1 w-full h-[500px] lg:h-[600px] relative"
            onMouseMove={handleMouseMove}
          >
            <Canvas
              dpr={[1, 2]}
              shadows
              camera={{ fov: 45, position: [0, 0, 5] }}
              className="w-full h-full"
            >
              <color attach="background" args={["#ffffff"]} />
              
              {/* Custom lighting setup to preserve colors */}
              <ambientLight intensity={2.5} />
              <directionalLight 
                position={[5, 5, 5]} 
                intensity={2.8} 
                castShadow
              />
              
              <PresentationControls
                speed={1.5}
                global
                zoom={0.7}
                polar={[-0.1, Math.PI / 4]}
                config={{ mass: 2, tension: 200 }}
              >
                <Stage
                  environment={null}  // Remove environment lighting
                  intensity={0}       // Remove additional stage lighting
                >
                  <Model 
                    scale={0.01}
                    mouseX={mouseX}
                    rotation-y={Math.PI} // Start with front view
                  />
                </Stage>
              </PresentationControls>
            </Canvas>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Hero;