export type PresetConfig = {
    duration: number;
    stagger: number;
    yOffset: number;
    xOffset: number;
    scale: number;
    blur: boolean;
};

export const PRESETS: Record<string, PresetConfig> = {
    "Typewriter": {
        duration: 0.3,
        stagger: 0.05,
        yOffset: 0,
        xOffset: 0,
        scale: 1,
        blur: false
    },
    "Fade In": {
        duration: 0.5,
        stagger: 0.02,
        yOffset: 20,
        xOffset: 0,
        scale: 1,
        blur: true
    },
    "Modern Fade": {
        duration: 0.5,
        stagger: 0.02,
        yOffset: 20,
        xOffset: 0,
        scale: 1,
        blur: true
    },
    "Glitch": {
        duration: 0.2,
        stagger: 0.01,
        yOffset: 0,
        xOffset: 10,
        scale: 1,
        blur: false
    },
    "System Glitch": {
        duration: 0.2,
        stagger: 0.01,
        yOffset: 0,
        xOffset: 10,
        scale: 1,
        blur: false
    },
    "Stagger": {
        duration: 0.8,
        stagger: 0.1,
        yOffset: 40,
        xOffset: 0,
        scale: 1,
        blur: true
    },
    "Editorial": {
        duration: 0.8,
        stagger: 0.1,
        yOffset: 40,
        xOffset: 0,
        scale: 1,
        blur: true
    },
    "Terminal": {
        duration: 0.3,
        stagger: 0.05,
        yOffset: 0,
        xOffset: 0,
        scale: 1,
        blur: false
    },
    "Pop In": {
        duration: 0.4,
        stagger: 0.03,
        yOffset: 40,
        xOffset: 0,
        scale: 0.5,
        blur: false
    },
    "Cinematic": {
        duration: 2.5,
        stagger: 0.2,
        yOffset: 0,
        xOffset: 0,
        scale: 1.1,
        blur: true
    },
    "Elastic": {
        duration: 0.8,
        stagger: 0.06,
        yOffset: -60,
        xOffset: 0,
        scale: 1,
        blur: false
    }
};
