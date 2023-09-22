// BottomSheet.js
import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";

const BottomSheet = ({ isOpen, onClose, children }) => {
  const [isVisible, setIsVisible] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else {
      setTimeout(() => {
        setIsVisible(false);
      }, 300); // Adjust the duration to match your animation
    }
  }, [isOpen]);

  const animation = useSpring({
    transform: isOpen ? "translateY(0%)" : "translateY(100%)",
  });

  return (
    isVisible && (
      <animated.div
        className="bottom-sheet"
        style={{
          ...animation,
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          background: "white",
          boxShadow: "0px -2px 10px rgba(0, 0, 0, 0.2)",
          padding: "16px",
          borderRadius: "8px 8px 0 0",
        }}
      >
        <button onClick={onClose} className="css-button-sliding-to-top--red">
          Close
        </button>
        {children}
      </animated.div>
    )
  );
};

export default BottomSheet;
