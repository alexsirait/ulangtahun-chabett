import { useState, useEffect } from 'react';

export default function BirthdayCake() {
  const [candles, setCandles] = useState([]);
  const [isBlowing, setIsBlowing] = useState(false);

  useEffect(() => {
    // Create 22 candles (for age 22 in 2024)
    const newCandles = Array.from({ length: 23 }, (_, i) => ({
      id: i,
      lit: true,
      flicker: Math.random() * 0.5
    }));
    setCandles(newCandles);
  }, []);

  const blowOutCandles = () => {
    setIsBlowing(true);
    setTimeout(() => {
      setCandles(prev => prev.map(candle => ({ ...candle, lit: false })));
      setIsBlowing(false);
    }, 1000);
  };

  const relightCandles = () => {
    setCandles(prev => prev.map(candle => ({ ...candle, lit: true })));
  };

  return (
    <div className="text-center px-4">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 md:mb-8">
        🎂 Make a Wish, Istriikuwwww! 🎂
      </h2>

      <div className="max-w-2xl mx-auto">
        {/* Cake Container */}
        <div className="relative">
          {/* Cake Base */}
          <div className="bg-gradient-to-br from-pink-400 to-pink-600 rounded-t-2xl md:rounded-t-3xl h-24 md:h-32 lg:h-40 shadow-2xl border-2 md:border-4 border-pink-300">
            {/* Cake Layers */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full">
              {/* Bottom Layer */}
              <div className="bg-gradient-to-br from-pink-300 to-pink-500 h-12 md:h-16 lg:h-20 rounded-t-2xl md:rounded-t-3xl border border-pink-200"></div>
              {/* Middle Layer */}
              <div className="bg-gradient-to-br from-pink-400 to-pink-600 h-8 md:h-12 lg:h-16 rounded-t-xl md:rounded-t-2xl border border-pink-300 mx-2 md:mx-4"></div>
              {/* Top Layer */}
              <div className="bg-gradient-to-br from-pink-500 to-pink-700 h-6 md:h-8 lg:h-12 rounded-t-lg md:rounded-t-xl border border-pink-400 mx-4 md:mx-8"></div>
            </div>

            {/* Candles */}
            <div className="absolute top-1 md:top-2 left-1/2 transform -translate-x-1/2 flex flex-wrap justify-center gap-0.5 md:gap-1 lg:gap-2 max-w-xs">
              {candles.map((candle) => (
                <div key={candle.id} className="relative">
                  {/* Candle */}
                  <div className="w-0.5 md:w-1 lg:w-2 h-6 md:h-8 lg:h-12 bg-gradient-to-b from-yellow-300 to-yellow-500 rounded-full mx-0.5"></div>
                  
                  {/* Flame */}
                  {candle.lit && (
                    <div 
                      className={`absolute -top-1 md:-top-2 left-1/2 transform -translate-x-1/2 w-1.5 md:w-2 h-2 md:h-3 bg-gradient-to-b from-yellow-300 via-orange-400 to-red-500 rounded-full animate-pulse ${
                        isBlowing ? 'animate-bounce' : ''
                      }`}
                      style={{
                        animationDelay: `${candle.flicker}s`,
                        animationDuration: `${1 + Math.random()}s`
                      }}
                    >
                      <div className="absolute -top-0.5 md:-top-1 left-1/2 transform -translate-x-1/2 w-0.5 md:w-1 h-1 md:h-2 bg-yellow-200 rounded-full"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Cake Decorations */}
            <div className="absolute top-2 md:top-4 left-2 md:left-4 text-lg md:text-2xl">🎀</div>
            <div className="absolute top-2 md:top-4 right-2 md:right-4 text-lg md:text-2xl" style={{ animationDelay: '0.5s' }}>🎀</div>
            <div className="absolute bottom-2 md:bottom-4 left-4 md:left-8 text-base md:text-xl">✨</div>
            <div className="absolute bottom-2 md:bottom-4 right-4 md:right-8 text-base md:text-xl" style={{ animationDelay: '1s' }}>✨</div>
          </div>

          {/* Cake Plate */}
          <div className="bg-gradient-to-br from-blue-400 to-blue-600 h-2 md:h-4 rounded-full shadow-lg border border-blue-300"></div>
        </div>

        {/* Interactive Buttons */}
        <div className="mt-6 md:mt-8 space-y-3 md:space-y-4">
          <button
            onClick={blowOutCandles}
            disabled={isBlowing || !candles.some(c => c.lit)}
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 md:px-8 py-2 md:py-3 rounded-full font-semibold shadow-lg transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-sm md:text-base"
          >
            {isBlowing ? '💨 fuuuuuuu...' : '💨 tiuppp aqqqqq'}
          </button>
        </div>

        {/* Birthday Message */}
        <div className="mt-6 md:mt-8 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl md:rounded-2xl p-4 md:p-6 border border-blue-400/30">
          <p className="text-lg md:text-xl text-white font-semibold mb-2">
            celamattt ulang tahunn yangg kee 23, Istriikuwwwwww! 🎉
          </p>
          <p className="text-blue-200 text-sm md:text-base">
            kiww kiwww tuaaa kamyuuu, camaa camaaa tuaa kitaaaa
          </p>
        </div>

        {/* Cake Facts */}
        <div className="mt-4 md:mt-6 grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
          <div className="bg-blue-600/30 rounded-xl p-3 md:p-4 border border-blue-400/50">
            <div className="text-lg md:text-2xl mb-1 md:mb-2">🎂</div>
            <p className="text-blue-100 text-xs md:text-sm">23 lilinn, 23 tahunn kammyuuu</p>
          </div>
          <div className="bg-purple-600/30 rounded-xl p-3 md:p-4 border border-purple-400/50">
            <div className="text-lg md:text-2xl mb-1 md:mb-2">💝</div>
            <p className="text-purple-100 text-xs md:text-sm">ayekk buatt dengan cintaaaa</p>
          </div>
          <div className="bg-pink-600/30 rounded-xl p-3 md:p-4 border border-pink-400/50">
            <div className="text-lg md:text-2xl mb-1 md:mb-2">✨</div>
            <p className="text-pink-100 text-xs md:text-sm">untukk istriikuww inyyiiii</p>
          </div>
        </div>
      </div>
    </div>
  );
} 