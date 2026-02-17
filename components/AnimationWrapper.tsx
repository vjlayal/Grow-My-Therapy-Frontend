'use client';

import { motion, HTMLMotionProps } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimationWrapperProps extends HTMLMotionProps<'div'> {
    children: ReactNode;
    duration?: number;
    delay?: number;
    yOffset?: number;
    xOffset?: number;
    scale?: number;
    direction?: 'up' | 'down' | 'left' | 'right' | 'none';
    triggerOnce?: boolean;
}

export default function AnimationWrapper({
    children,
    duration = 0.8,
    delay = 0,
    yOffset = 20,
    xOffset = 0,
    scale = 1,
    direction = 'up',
    triggerOnce = true,
    className,
    ...props
}: AnimationWrapperProps) {
    const getInitial = () => {
        switch (direction) {
            case 'up': return { opacity: 0, y: yOffset, x: xOffset, scale };
            case 'down': return { opacity: 0, y: -yOffset, x: xOffset, scale };
            case 'left': return { opacity: 0, x: yOffset, y: xOffset, scale };
            case 'right': return { opacity: 0, x: -yOffset, y: xOffset, scale };
            case 'none': return { opacity: 0, scale };
            default: return { opacity: 0, y: yOffset, scale };
        }
    };

    return (
        <motion.div
            initial={getInitial()}
            whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
            viewport={{ once: triggerOnce, amount: "some", margin: "200px 0px 200px 0px" }}
            transition={{
                duration,
                delay,
                ease: [0.21, 0.47, 0.32, 0.98] // Custom ease-out
            }}
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    );
}
