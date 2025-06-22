import { useEffect, useState } from 'react';

export default function FloatingHearts() {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    // Create initial hearts
    const initialHearts = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 20 + 10,
      speed: Math.random() * 2 + 1,
      delay: Math.random() * 5,
      emoji: ['💙', '💝', '💕', '💖', '💗', '💓', '💞', '💟'][Math.floor(Math.random() * 8)]
    }));
    setHearts(initialHearts);

    // Animate hearts
    const interval = setInterval(() => {
      setHearts(prev => prev.map(heart => ({
        ...heart,
        y: heart.y - heart.speed,
        x: heart.x + (Math.sin(Date.now() * 0.001 + heart.id) * 0.5)
      })));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  // Reset hearts that go off screen
  useEffect(() => {
    const resetInterval = setInterval(() => {
      setHearts(prev => prev.map(heart => 
        heart.y < -10 ? { ...heart, y: 110, x: Math.random() * 100 } : heart
      ));
    }, 1000);

    return () => clearInterval(resetInterval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute animate-pulse"
          style={{
            left: `${heart.x}%`,
            top: `${heart.y}%`,
            fontSize: `${heart.size}px`,
            animationDelay: `${heart.delay}s`,
            animationDuration: `${2 + Math.random() * 2}s`,
            transform: `rotate(${Math.sin(Date.now() * 0.001 + heart.id) * 10}deg)`
          }}
        >
          {heart.emoji}
        </div>
      ))} */}
    </div>
  );
} 