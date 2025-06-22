import { useState, useEffect } from 'react';
import * as ReactDOM from 'react-dom';

export default function BirthdayCard() {
  const [isCardOpen, setIsCardOpen] = useState(false);
  const [isPromptOpen, setIsPromptOpen] = useState(false);
  const [isPasswordPrompt, setIsPasswordPrompt] = useState(false);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(-1);

  const messages = [
    'yeayyyy, istliiikuwwww!!!',
    'yeayyyy, benarr benarrr istriikuwwwww!!!',
    'kamyuu cudahh tiupp yiyinnn beyumm yang aqq buatt di web innyii.. cama make wish',
    'tiupp duyuu istriikuwwww camaa yiatt potooww potooww',
    'bayuuu kecinnnyiii boyee lanjutttt...',
    'cuamiimuww innyii kangennnnnn!!!!!!!!',
    'innyiii aliii kammyuuu yoooowwww istriikuwwwww!!!',
    'kammyuuu uyangg tahunnnnnn!!!',
    'belaltiii bentall yagii kitaaa apaaaa??',
    'kitaaa nyiikaaa ....',
    'HEEHHEHEHEEE',
    'akkkk aqqq cenannkkkkk!!!',
    'tidakkk caballl yooooo',
    'tapiii yiiatt duyuu inniii aqq buatttt hehehhhee aqq buatt webbb istriikuwww',
    'tapii bukann cekkcvv inyii websitee untukk istriikuww tercayanggkuwww',
    'innnyiii aqq buattt pakaii atii aqq yooooo....',
    'atiii aqq yangg palingg dalammm sekayii kayii kayii untukk kammyuuuu',
    'ayuss kammyuuu yiiatt campaii bawahhh yaa istriikuwww',
    'aqqq cayangg sekayiii camaa kammyuuuuu',
    'kayii kayii kayiii',
    'kayii kayii kayiii',
    'aqq jadii mauwww celitaa dicinnyiii',
    'celuu diciniii celitaaa celitaaa',
    'camaa kayakk tahunn yayuuww aqq celitaa dii alert javascriptt innyiii',
    'jadii celuuuuuwww',
    'inyii jadii tempat ayekkk belcelitaaaa....',
    'HOLEEEEEEEEEEEEEEEEEEEEEEE!!!!!!!!!',
    'INNYIII ALIII KAMMYUUUUU ISTRIIKUWWWWWWWW TERCOMELLLKUWWWWWWWWWWWWWWWWWW',
    'cudahhh 23 tahunnnnn akkkkkkkkkkkkkkkk',
    'aqqq mauwww beldoaaaaaaa',
    'cupayaaa diumull kammyuu yangg bayuu innyiii',
    'kammyuu celaluuu diberkatiii dann dilindungiii olehh Tuhann Yesuss seyayuuuwwwww',
    'ituuwww doaa untukk kammyuuuuu istriikuuwwww',
    'untukk kitaaaaa',
    'aqq mauwww doaaaaa diumull kammyuu yangg cemakinnn tuaa innyiii',
    'heeheeee kiww kiwww tuaaaaa',
    'becandaaa mahh ayekkk istriikuwww',
    'ayekk mauww beldoaaa cupayaaa kitaaa selaluuu bercamaa camaaaaa seyayuuwww',
    'cupayaaa kitaa cemakinnn tuaa cemakinnn lomantiiissss dengann calaa kitaaaa cendiliii',
    'cepeltii yanggg ceyayuuwww ayekkk biyangggg seyauuuwwwww',
    'apaa ituuwwww?',
    'ayekk mauww kitaaaa saurr matuaaaaaa belcamaa caamaaa istriikuwwww',
    'seyayuuuwww selamaa lamaanyaaaa',
    'ayekk mauwww yiattttt kitaaa ituwwww camaaa camaa meelawaatt dedeee dedeeee laittt yangg yucuwwwww',
    'kalenaa mamanyaa cangatt amatttt yucuuwww cekayiiiiiiii',
    'akkkkkk cenannnkkk',
    'ayekk jugaa mauww liattt kammyuu ituuwww menuaaaa heheehee',
    'kammyuu passtiii makin tuaa makinnn comellll',
    'ituuwww ciii',
    'intinyaa mauww liaatt kammyuu celama lamaanyaa belcamaa ayekkkmuwww innyiiii',
    'mauww yiiiatt kammyuuu campaii belubannnn',
    'nantii aqq yangg cabutt ubann kammyuuuu kitaa catt samaa samaaa biall itammm heheheee',
    'aqq catt kammyuuu',
    'kammyuuu catt aqqqq',
    'kitaaa tuaaa belcamaaa camaaa',
    'cenangggg dann cucahhh belcamaa camaaaa',
    'hee tapii camaa kammyuu ceyayuuwww cenanggg mahhh',
    'kalnaa kitaa celaluuww belcamaa camaa dannn dibelkatiii Tuhannnn',
    'ayekk mauwwwww',
    'kitaaa jalann jalannnnn cannaa cinnnyyii campaii bunggkukk bungkukkk',
    'campaiii uhukkk uhukkkk',
    'ALUSSS SELALUUUWWW BERCAMAAAAAAAA',
    'ITUUWWW ALUSSSSSSS',
    'APAAA ISTRIIKUWWWW???',
    'AMINNN YAA TUHANNN YESUSSSS',
    'HUHUHUUU AYEKKK NGETIKK INNYII CAMBILL BERKACAA ISTRIIKUWWWW',
    'TEYUSS BELCAMAA AYEKKMUWW INNYII YAA ISTRIIKUWWW',
    'AQQ CAYANGG SEKAYIII CAMAAA KAMMYUUUUUUUU',
    'HUAAAAAAA',
    'LOVEEEEE UUUUU ISTRIIIKUWWWWWWWWWWWWWWW',
    'HUAAA CUDAHH TULUNN AILL MATAA AYEKKKK HUHUHUUUU',
    'HUHUHUHUUUU',
    'ISTRIIKUWWWWWWWW LOVEEEE UUUUUUUUUUUU',
    'DANNNNN',
    'CELAMATTT UYANGG TAHUNNNN ISTRIIIKUWWWWWWWWWW',
    'MAAPP YAA ISTRIIKUWW KAYOOOWWW AYEKK CERINGG BUATTT ISTRIIKUWW INNYIII KECALLLLLLL',
    'SELINGG SEKAYIII BUATT ISTRIIKUWW INNYII BADMODDD',
    'AYEKK CERINGG ANNYEHHH ANNYYEHHHHH',
    'HUHUHUUU MAAPPP ISTRIIKUWWWWWW',
    'TAPIII CAUMIIMUWWW INNYII CANGATT CAYANGG SEKAYIII KAYIII KAYIII ISTRIIKUWWWWWWW',
    'HUHUHUUUUUUUU',
    'YAGIII, CELAMATTT UYANGG TAHUNNNN ISTRIIIKUWWWWWWWWWW',
    'MWAHHHHHHHHHHHH ......',
    'YIIIATT KALLYAA CUAMIIMUWW INNYIIIIII',
    'HEHEHEHEHEEEE',
    'TAPII KAMMYUUU PASTIII CUKAAA',
    'KALNAA AQQ BUATTTNYAA PAKAIII ATIII AQQQ YANGG PALINGG DALAMMMMM',
    'KANN ATII KITAA CAMAAAA',
    'KAYOOO AQQ CUKAAA',
    'KAMMYUUU CUKAAAA',
    'YEAYYYYY',
    'AQQ BUATTNYAAAA INNYII MANUALL YOOO ISTRIIKUWWWW',
    'HEHEHEEE ...',
    '....',
    'cekayiii yagiii istriikuww cuamiimuww mauww ucapinnnnnnn',
    'celamatt uyangg tahunnn manusiaa yangg palingg ayekkk cayanginnnnn di seluruhh ayammm cemestaaa innyiiii kayii kayii kayii kayii kayii',
    'tiimaciii istriikuwww tercaangggkuwwww',
    'loveee uuuu kayii kayii kayii kayii kayii kayii kayii kayii kayii kayii kayii kayii kayii kayii kayii kayii',
    '.....',
    '.....',
    '.....',
    '.....',
    '.....',
    '.....',
    '.....',
    '.....',
    '.....',
    '.....',
    '.....',
    '(bobii: celamatt uyangg tahunnn akakkkkkk)',
    '.....',
    '.....',
    '.....',
    '.....',
    'maappp istriikuwwww aqq di gangguuu bobiiii',
    'malahinn diaaa istriikuwwwwww',
    'lovee uuu',
    'kayoo kamyuu cudahh campaii cinnyi, kayoo ayekk bilang apa password nya: kammyuu ayus bilanggg: aqq_cayangg_kammyuu',
    'ituww buktii kamyuu cudahh campaii cinnyiii',
  ];

  useEffect(() => {
    if (isPromptOpen || isPasswordPrompt || currentMessageIndex >= 0) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isPromptOpen, isPasswordPrompt, currentMessageIndex]);

  useEffect(() => {
    if (isCardOpen) {
      setIsPromptOpen(true);
      const userAccepted = window.confirm('ayooowwwwww istriikuwwww tercomellll');
      setIsPromptOpen(false);
      if (userAccepted) {
        setIsPasswordPrompt(true);
      } else {
        setIsCardOpen(false);
      }
    }
  }, [isCardOpen]);

  useEffect(() => {
    if (isPasswordPrompt) {
      const password = window.prompt('benelannn istriikuwww kannn??\nkayoo benalll apaa passnyaaa');
      setIsPasswordPrompt(false);
      if (password === 'cabett_ayekk') {
        setCurrentMessageIndex(0);
      } else {
        alert('salaaa');
        setIsCardOpen(false);
      }
    }
  }, [isPasswordPrompt]);

  useEffect(() => {
    if (currentMessageIndex >= 0 && currentMessageIndex < messages.length) {
      const continueMessages = window.confirm(messages[currentMessageIndex] + '\n\n\nkyikk yagiii');
      if (continueMessages) {
        setCurrentMessageIndex(currentMessageIndex + 1);
      } else {
        setCurrentMessageIndex(-1);
        setIsCardOpen(false);
      }
    } else if (currentMessageIndex >= messages.length) {
      setCurrentMessageIndex(-1);
      setIsCardOpen(false);
    }
  }, [currentMessageIndex]);

  return (
    <div className="max-w-4xl mx-auto px-4">
      <div className="relative">
        {/* Card Container */}
        <div
          className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 border border-blue-400/30 shadow-2xl transform hover:scale-105 transition-all duration-300 cursor-pointer"
          onClick={() => setIsCardOpen(true)}
        >
          <div className="text-center">
            {/* Decorative Border */}
            <div className="border-2 md:border-4 border-blue-400/50 rounded-xl md:rounded-2xl p-4 md:p-8 bg-gradient-to-br from-blue-900/30 to-purple-900/30">
              {/* Header */}
              <div className="mb-4 md:mb-6">
                <div className="text-4xl md:text-6xl lg:text-8xl mb-3 md:mb-4">🎂</div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 md:mb-2">
                  celamattt ulangg tahunnnnnn istriikuwwww
                </h1>
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-blue-200">
                  cantikkkuwww, comellkuwww, duniaakuwwww, indahhkuwwww, bungaakuwww, cegalanyaakuwww, comellkuwwww, hiduppkuwwwww, cintaakuwwwwwww, cemuaa cemuaaanyaakuwww
                </h2>
                <p className="text-sm md:text-lg text-blue-300 mt-1 md:mt-2">
                  June 23, 2002
                </p>
              </div>

              {/* Decorative Elements */}
              <div className="flex justify-center space-x-2 md:space-x-4 mb-4 md:mb-6">
                <div className="text-lg md:text-2xl" style={{ animationDelay: '0.5s' }}>
                  🥰😍💕🔥😻😘💌💐💘💓❤️‍🔥💜💙💛❤️💚🌹🥰😍💕🔥😻😘💌💐💘💓❤️‍🔥💜💙💛❤️💚🌹🥰😍💕🔥😻😘💌💐💘🥰😍💕🔥😻😘💌💐💘💓❤️‍🔥💜💙💛❤️💚🌹🥰😍💕🔥😻😘💌💐💘💓❤️‍🔥💜💙💛❤️💚🌹🥰😍💕🔥😻😘💌💐💘🥰😍💕🔥😻😘💌💐💘💓❤️‍🔥
                </div>
              </div>

              {/* Click to Open Message */}
              <div className="bg-gradient-to-r from-pink-400/20 to-purple-400/20 rounded-lg md:rounded-xl p-3 md:p-4 border border-pink-400/30">
                <p className="text-white font-semibold text-base md:text-lg">
                  klickkk aqqqqqqqqqqq
                </p>
                <p className="text-blue-200 text-xs md:text-sm mt-1">
                  innyiii aqq buatt pakaii atiii aqqqqq
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}