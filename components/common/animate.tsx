'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export enum TransitionType {
    SPRING = 'spring',
    LINEAR = 'linear'
}

interface AnimateProps {
  delay?: number;
  children: React.ReactNode;
  viewThres?: number;
  once?: boolean;
  duration?: number;
  onAnimationComplete?: () => void;
  transition?: TransitionType;
  fullWidth?: boolean;
  animateOnMobile?: boolean;
  animateOnView?: boolean;
}

interface AnimateTextProps {
  text: string;
  delay?: number;
  styles?: string;
}

const defaultAnimations = {
  hidden: {
    opacity: 0,
    y: 0
  },
  visible: {
    opacity: 1,
    y: 0,
    x: 0
  },
  hidden_top: {
    opacity: 0,
    y: -100
  },
  hidden_bottom: {
    opacity: 0,
    y: 100
  },
  hidden_right: {
    opacity: 0,
    x: 100
  },
  hidden_left: {
    opacity: 0,
    x: -100
  },
  hidden_slider: {
    opacity: 0,
    x: '100vw'
  },
  visible_slider: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0 }
  }
};

export const slideUp = {
  initial: {
    y: '0'
  },
  exit: {
    y: '-100vh',
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0 }
  }
};

export const opacity = {
  initial: {
    opacity: 0
  },
  enter: {
    opacity: 1,
    transition: { duration: 0.2, delay: 0 }
  }
};

export const AnimateLeft: React.FC<AnimateProps> = ({
  children,
  delay = 0.0,
  viewThres = 0.3,
  once = true,
  duration = 0.3,
  transition = TransitionType.SPRING
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: viewThres, once });

  return (
    <motion.div
      ref={ref}
      variants={defaultAnimations}
      initial='hidden_left'
      animate={isInView ? 'visible' : 'hidden_left'}
      transition={
        transition === TransitionType.SPRING ? { type: 'spring', stiffness: 260, damping: 20, delay, duration } : { ease: 'linear', delay, duration }
      }
    >
      {children}
    </motion.div>
  );
};

export const AnimateRight: React.FC<AnimateProps> = ({
  children,
  delay = 0.0,
  viewThres = 0.3,
  once = true,
  duration = 0.3,
  transition = TransitionType.SPRING,
  animateOnView = true
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: viewThres, once });
 

  return (
    <motion.div
      ref={ref}
      variants={defaultAnimations}
      initial='hidden_right'
      animate={animateOnView ? (isInView ? 'visible' : 'hidden_right') : 'visible'}
      transition={
        transition === TransitionType.SPRING ? { type: 'spring', stiffness: 260, damping: 20, delay, duration } : { ease: 'linear', delay, duration }
      }
    >
      {children}
    </motion.div>
  );
};

export const AnimateTop: React.FC<AnimateProps> = ({ children, delay = 1, viewThres = 0.5, once = true, duration = 1 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: viewThres, once });
 
  return (
    <motion.div
      ref={ref}
      variants={defaultAnimations}
      initial='hidden_top'
      animate={isInView ? 'visible' : 'hidden_top'}
      transition={{ type: 'spring', stiffness: 260, damping: 20, delay, duration }}
    >
      {children}
    </motion.div>
  );
};

export const AnimateBottom: React.FC<AnimateProps> = ({
  children,
  delay = 1,
  viewThres = 0.5,
  once = true,
  duration = 1,
  transition = TransitionType.SPRING,
  fullWidth = true
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: viewThres, once });
  
  return (
    <motion.div
      ref={ref}
      variants={defaultAnimations}
      initial='hidden_bottom'
      animate={isInView ? 'visible' : 'hidden_bottom'}
      transition={
        transition === TransitionType.SPRING ? { type: 'spring', stiffness: 260, damping: 20, delay, duration } : { ease: 'linear', delay, duration }
      }
      className={`${fullWidth ? 'h-full' : ''}`}
    >
      {children}
    </motion.div>
  );
};

export const AnimateText: React.FC<AnimateTextProps> = ({ text, delay = 1, styles = '' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once: true });

  return (
    <div ref={ref}>
      <span className='sr-only'>{text}</span>
      <motion.span
        initial='hidden'
        animate={isInView ? 'visible' : 'hidden'}
        transition={{ staggerChildren: 0.1, delayChildren: delay, ease: 'easeIn' }}
      >
        {text.split(' ').map((char, i) => (
          <motion.span className={`inline-block ${styles}`} variants={defaultAnimations} key={i}>
            {char}
            <span className='inline-block'>&nbsp;</span>
          </motion.span>
        ))}
      </motion.span>
    </div>
  );
};



