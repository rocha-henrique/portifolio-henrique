import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticlesBackground = () => {
    const handleParticlesInit = useCallback(async (engine: Engine) => {
        await loadSlim(engine);
    }, []);

    const handleParticlesLoaded = useCallback(async (container: Container | undefined) => {
        console.log(container); // Remova este log em produção.
    }, []);

    const isMobile = window.innerWidth < 768;

    const particleOptions = {
        autoPlay: true,
        background: {
          color: {
            value: "#000000"
          },
          image: "",
          position: "",
          repeat: "",
          size: "",
          opacity: 1
        },
        backgroundMask: {
          composite: "destination-out",
          cover: {
            opacity: 1,
            color: {
              value: "#ffffff"
            }
          },
          enable: false
        },
        clear: true,
        defaultThemes: {},
        delay: 0,
        fullScreen: {
          enable: false,
          zIndex: -2
        },
        detectRetina: false, // Desabilitado para melhorar a performance em mobile
        duration: 0,
        fpsLimit: isMobile ? 30 : 120,
        interactivity: {
          detectsOn: "window",
          events: {
            onClick: {
              enable: false,
              mode: []
            },
            onDiv: {
              selectors: [],
              enable: false,
              mode: [],
              type: "circle"
            },
            onHover: {
              enable: false,
              mode: [],
              parallax: {
                enable: false,
                force: 2,
                smooth: 10
              }
            },
            resize: {
              delay: 0.5,
              enable: true
            }
          },
          modes: {
            // Configurações dos modos de interação (mantidas conforme necessidade)
          }
        },
        manualParticles: [],
        particles: {
          bounce: {
            horizontal: {
              value: 1
            },
            vertical: {
              value: 1
            }
          },
          collisions: {
            absorb: {
              speed: 2
            },
            bounce: {
              horizontal: {
                value: 1
              },
              vertical: {
                value: 1
              }
            },
            enable: false,
            maxSpeed: 50,
            mode: "bounce",
            overlap: {
              enable: true,
              retries: 0
            }
          },
          color: {
            value: "#fff",
            animation: {
              h: { enable: false },
              s: { enable: false },
              l: { enable: false }
            }
          },
          effect: {
            close: true,
            fill: true,
            options: {},
            type: []
          },
          groups: {
            z5000: {
              number: {
                value: 70
              },
              zIndex: {
                value: 50
              }
            },
            z7500: {
              number: {
                value: 30
              },
              zIndex: {
                value: 75
              }
            },
            z2500: {
              number: {
                value: 50
              },
              zIndex: {
                value: 25
              }
            },
            z1000: {
              number: {
                value: 40
              },
              zIndex: {
                value: 10
              }
            }
          },
          move: {
            angle: {
              offset: 0,
              value: 10
            },
            attract: {
              distance: 200,
              enable: false,
              rotate: {
                x: 3000,
                y: 3000
              }
            },
            center: {
              x: 50,
              y: 50,
              mode: "percent",
              radius: 0
            },
            decay: 0,
            distance: {},
            direction: "right",
            drift: 0,
            enable: true,
            gravity: {
              acceleration: 9.81,
              enable: false,
              inverse: false,
              maxSpeed: 50
            },
            path: {
              clamp: true,
              delay: { value: 0 },
              enable: false,
              options: {}
            },
            outModes: {
              default: "out",
              bottom: "out",
              left: "out",
              right: "out",
              top: "out"
            },
            random: false,
            size: false,
            speed: isMobile ? 2 : 5,
            spin: { enable: false },
            straight: false,
            trail: {
              enable: false,
              length: 10,
              fill: {}
            },
            vibrate: false,
            warp: false
          },
          number: {
            density: {
              enable: false,
              width: 1920,
              height: 1080
            },
            limit: {
              mode: "delete",
              value: 0
            },
            value: isMobile ? 50 : 200
          },
          opacity: {
            value: isMobile ? 0.5 : 1,
            animation: {
              enable: false,
              speed: 2,
              decay: 0,
              delay: 0,
              sync: false,
              mode: "auto",
              startValue: "random",
              destroy: "none"
            }
          },
          reduceDuplicates: false,
          shadow: {
            blur: 0,
            color: { value: "#000" },
            enable: false,
            offset: { x: 0, y: 0 }
          },
          shape: {
            close: true,
            fill: true,
            options: {},
            type: "circle"
          },
          size: {
            value: isMobile ? 1 : 3,
            animation: {
              enable: false,
              speed: 5,
              decay: 0,
              delay: 0,
              sync: false,
              mode: "auto",
              startValue: "random",
              destroy: "none"
            }
          },
          stroke: { width: 0 },
          zIndex: {
            value: 5,
            opacityRate: 0.5,
            sizeRate: 1,
            velocityRate: 1
          },
          // Outras configurações de partículas (mantidas conforme necessidade)
        },
        pauseOnBlur: true,
        pauseOnOutsideViewport: true,
        responsive: [],
        smooth: false,
        style: {},
        themes: [],
        zLayers: 100,
        emitters: {
          autoPlay: true,
          fill: true,
          life: { wait: false },
          rate: {
            quantity: 1,
            delay: 7
          },
          shape: {
            options: {},
            replace: {
              color: false,
              opacity: false
            },
            type: "square"
          },
          startCount: 0,
          size: {
            mode: "percent",
            height: 0,
            width: 0
          },
          particles: {
            shape: {
              type: "images",
              options: {
                images: {
                  src: "https://particles.js.org/images/cyan_amongus.png",
                  width: 500,
                  height: 400
                }
              }
            },
            size: { value: 40 },
            move: {
              speed: 10,
              outModes: {
                default: "none",
                right: "destroy"
              },
              straight: true
            },
            zIndex: { value: 0 },
            rotate: {
              value: { min: 0, max: 360 },
              animation: {
                enable: true,
                speed: 10,
                sync: true
              }
            }
          },
          position: { x: -5, y: 55 }
        },
        motion: {
          disable: false,
          reduce: {
            factor: 4,
            value: true
          }
        }
    };

    return (
        <Particles
            className="particles-canvas"
            id="tsparticles"
            init={handleParticlesInit}
            loaded={handleParticlesLoaded}
            options={particleOptions}
        />
    );
};

export default ParticlesBackground;
