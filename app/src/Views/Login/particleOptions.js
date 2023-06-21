let particleOptions = {
    fpsLimit: 120,
    interactivity: {
        events: {
            onClick: {
                enable: false,
                mode: "push",
            },
            onHover: {
                enable: true,
                mode: "grab",
            },
            resize: true,
        },
        modes: {
            push: {
                quantity: 4,
            },
            repulse: {
                distance: 200,
                duration: 0.4,
            },
        },
    },
    particles: {
        links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
        },
        color: {
            value: "#ffff",
        },
        collisions: {
            enable: false,
        },
        move: {
            direction: "top",
            enable: true,
            outModes: {
                default: "bounce",
            },
            random: true,
            speed: 0.5,
            straight: false,
        },
        number: {
            density: {
                enable: true,
                area: 250,
            },
            value: 10,
        },
        opacity: {
            value: 0.5,
        },
        shape: {
            type: "circle",
        },
        size: {
            value: { min: 1, max: 2 },
        },
    },
    detectRetina: true,
};
export default particleOptions;