import React, { useState, useEffect } from 'react';
import Header from '../components/Header';

const ParticleEffect = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const initialParticles = Array.from({ length: 100 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2,
      size: Math.random() * 3 + 1,
    }));
    setParticles(initialParticles);

    let animationFrameId;
    const animate = () => {
      setParticles(prevParticles => 
        prevParticles.map(particle => ({
          ...particle,
          x: (particle.x + particle.vx + window.innerWidth) % window.innerWidth,
          y: (particle.y + particle.vy + window.innerHeight) % window.innerHeight,
        }))
      );
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <svg 
      className="absolute inset-0 z-10 pointer-events-none" 
      style={{ filter: 'blur(0.5px)', width: '100%', height: '100%' }}
    >
      {particles.map((particle, index) => (
        <circle
          key={index}
          cx={particle.x}
          cy={particle.y}
          r={particle.size}
          fill="pink"
          opacity="1"
        />
      ))}
    </svg>
  );
};

const LandingPage = () => {

  
  return (




    <div className="bg-[#000000f4] min-h-screen w-full overflow-hidden relative">

        <div className="spinner absolute top-20 left-20 ">
            <div className=" spinner1"></div>
        </div>

        

      <ParticleEffect />
      <div className="absolute -bottom-40 -left-40 h-80 w-80 md:w-[450px] md:h-[450px] rounded-full bg-[#3e31b8] opacity-50 blur-xl z-0" />
        <Header />
      <div className="relative z-20 mt-20">
        <h1 className="text-xl md:text-4xl relative lg:text-5xl xl:text-6xl flex justify-center font-bold text-white md:mr-32 lg:mr-44 xl:mr-80 mb-6 ">
          Unleash Your Brand's Potential

          <div className="spinner2 absolute -z-10 right-20 top-6 ">
            <div className="spinner12"></div>
        </div>
        </h1>
        <h1 className="text-xl md:text-4xl flex justify-center xl:text-6xl items-center lg:text-5xl font-bold md:ml-32 lg:ml-20 xl:ml-16 text-white  ">
          With <span className="text-2xl md:text-[40px] lg:text-6xl xl:text-7xl mx-2 text-[#2BDEAC]">Creatix's</span> Innovative Solutions.
        </h1>
      </div>
      <div className='absolute right-20 bottom-20'>
        <div className="pyramid-loader">
          <div className="wrapper">
            <span className="side side1"></span>
            <span className="side side2"></span>
            <span className="side side3"></span>
            <span className="side side4"></span>
            <span className="shadow"></span>
          </div>  
        </div>
      </div>


          <div className='absolute top-1/2 left-1/3'>     
            <div className="loader">
            
            <div className="cube">
                <div className="face middle front">
                <div className="cube cube-front">
                    <div className="face front"></div>
                    <div className="face back"></div>
                    <div className="face left"></div>
                    <div className="face right"></div>
                    <div className="face top"></div>
                    <div className="face bottom"></div>
                </div>
                </div>
                <div className="face middle back">
                <div className="cube cube-back">
                    <div className="face front"></div>
                    <div className="face back"></div>
                    <div className="face left"></div>
                    <div className="face right"></div>
                    <div className="face top"></div>
                    <div className="face bottom"></div>
                </div>
                </div>
                <div className="face middle left">
                <div className="cube cube-left">
                    <div className="face front"></div>
                    <div className="face back"></div>
                    <div className="face left"></div>
                    <div className="face right"></div>
                    <div className="face top"></div>
                    <div className="face bottom"></div>
                </div>
                </div>
                <div className="face middle right">
                <div className="cube cube-right">
                    <div className="face front"></div>
                    <div className="face back"></div>
                    <div className="face left"></div>
                    <div className="face right"></div>
                    <div className="face top"></div>
                    <div className="face bottom"></div>
                </div>
                </div>
                <div className="face middle top">
                <div className="cube cube-top">
                    <div className="face front"></div>
                    <div className="face back"></div>
                    <div className="face left"></div>
                    <div className="face right"></div>
                    <div className="face top"></div>
                    <div className="face bottom"></div>
                </div>
                </div>
                <div className="face middle bottom">
                <div className="cube cube-bottom">
                    <div className="face front"></div>
                    <div className="face back"></div>
                    <div className="face left"></div>
                    <div className="face right"></div>
                    <div className="face top"></div>
                    <div className="face bottom"></div>
                </div>
                </div>
            </div>
            </div>

          </div>

    </div>
  );
};

export default LandingPage;