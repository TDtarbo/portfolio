import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const AnimatedText = ({ text, className, duration = 0.5, delayIncrement = 0.05 }) => {
  const words = text.split(' ');

  return (
    <div className={className}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }} // Initial state
          whileInView={{ opacity: 1, y: 0 }} // Animation state
          transition={{ duration, delay: index * delayIncrement }} // Delay based on index
          viewport={{
            once: true,
          }}
          
        >
          {word}{' '}
        </motion.span>
      ))}
    </div>
  );
};

// Prop validation
AnimatedText.propTypes = {
  text: PropTypes.string.isRequired, // Text prop is required
  className: PropTypes.string, // Custom CSS class
  duration: PropTypes.number, // Animation duration
  delayIncrement: PropTypes.number // Delay increment for each word
};

export  { AnimatedText };
