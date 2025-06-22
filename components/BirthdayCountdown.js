import { useState, useEffect } from 'react';

export default function BirthdayCountdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const birthday = new Date(now.getFullYear(), 5, 23); // June 23 (month is 0-indexed)
      
      // If birthday has passed this year, calculate for next year
      if (now > birthday) {
        birthday.setFullYear(birthday.getFullYear() + 1);
      }

      const difference = birthday - now;
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: 'hariii', value: timeLeft.days },
    { label: 'jammm', value: timeLeft.hours },
    { label: 'menitt', value: timeLeft.minutes },
    { label: 'detikk', value: timeLeft.seconds }
  ];

  return (
    <div className="text-center px-4">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 md:mb-8">
        🎉 Itungan Mundurrr menujuu ulang tahunn istriikuwwww 🎉
      </h2>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-4xl mx-auto">
        {timeUnits.map((unit, index) => (
          <div
            key={unit.label}
            className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl md:rounded-2xl p-4 md:p-6 shadow-2xl transform hover:scale-105 transition-all duration-300 border border-blue-400"
            style={{
              animationDelay: `${index * 0.1}s`
            }}
          >
            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-1 md:mb-2">
              {unit.value.toString().padStart(2, '0')}
            </div>
            <div className="text-blue-200 text-sm md:text-lg lg:text-xl font-semibold">
              {unit.label}
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 md:mt-8 text-center">
        <p className="text-lg md:text-xl text-blue-200 font-light">
          menujuuu {new Date().getFullYear() - 2002} tahunn! yeayyyyy
        </p>
        <div className="mt-3 md:mt-4">
          <div className="inline-block bg-gradient-to-r from-pink-400 to-purple-500 text-white px-4 md:px-6 py-2 md:py-3 rounded-full font-semibold shadow-lg transform hover:scale-110 transition-all duration-300 text-sm md:text-base">
            🎂 23 Junii 2002 🎂
          </div>
        </div>
      </div>
    </div>
  );
} 