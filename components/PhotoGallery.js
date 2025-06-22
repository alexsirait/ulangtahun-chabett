import { useState, useEffect } from 'react';

export default function PhotoGallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    // Cleanup on component unmount
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedImage]);

  // Placeholder images - ensure these paths are correct
  const photos = [
    {
      id: 1,
      src: '/chabett/1.jpeg',
      alt: 'Special Memory 1',
      caption: '',
      date: '',
    },
    {
      id: 2,
      src: '/chabett/2.jpeg',
      alt: 'Special Memory 2',
      caption: '',
      date: '',
    },
    {
      id: 3,
      src: '/chabett/3.jpeg',
      alt: 'Special Memory 3',
      caption: '',
      date: '',
    },
    {
      id: 4,
      src: '/chabett/4.jpeg',
      alt: 'Special Memory 4',
      caption: '',
      date: '',
    },
    {
      id: 5,
      src: '/chabett/5.jpeg',
      alt: 'Special Memory 5',
      caption: '',
      date: '',
    },
    {
      id: 6,
      src: '/chabett/6.jpeg',
      alt: 'Special Memory 6',
      caption: "",
      date: '',
    },
    {
      id: 7,
      src: '/chabett/7.jpeg',
      alt: 'Special Memory 7',
      caption: '',
      date: '',
    },
    {
      id: 12,
      src: '/chabett/12.jpeg',
      alt: 'Special Memory 12',
      caption: '',
      date: '',
    },
    {
      id: 9,
      src: '/chabett/9.jpeg',
      alt: 'Special Memory 9',
      caption: '',
      date: '',
    },
    {
      id: 10,
      src: '/chabett/10.jpeg',
      alt: 'Special Memory 10',
      caption: '',
      date: '',
    },
    {
      id: 11,
      src: '/chabett/11.jpeg',
      alt: 'Special Memory 11',
      caption: '',
      date: '',
    },
    {
      id: 8,
      src: '/chabett/8.jpeg',
      alt: 'Special Memory 8',
      caption: "",
      date: '',
    },
  ];

  return (
    <div className="text-center px-4">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 md:mb-8">
        📸 potooww kitaaaa 📸
      </h2>

      <div className="max-w-6xl mx-auto">
        {/* Photo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mb-6 md:mb-8">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className="group relative overflow-hidden rounded-xl md:rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300 cursor-pointer"
              // onClick={() => setSelectedImage(photo)}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover aspect-square"
                loading="lazy"
                onError={(e) => {
                  e.target.src = '/fallback-image.jpeg';
                }}
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-3 md:p-4 text-white text-left w-full">
                  <p className="font-semibold text-sm md:text-lg">{photo.caption}</p>
                  <p className="text-blue-200 text-xs md:text-sm">{photo.date}</p>
                </div>
              </div>

              {/* Click indicator */}
              {/* <div className="absolute top-1 md:top-2 right-1 md:right-2 bg-blue-600/80 text-white px-1 md:px-2 py-0.5 md:py-1 rounded-full text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Click to view
              </div> */}
            </div>
          ))}
        </div>

        {/* Special Message */}
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl md:rounded-2xl p-4 md:p-6 border border-blue-400/30 mb-6 md:mb-8">
          <p className="text-lg md:text-xl text-white font-semibold mb-2">
            canntikkkkk cekayii kamyuuu celaluwwwww istriikuwwwwww
          </p>
          <p className="text-blue-200 text-sm md:text-base">
            macii banyakkk yagiiiiii potoowwwnyaaaaaaaaaaaaaaaaaaaaaaaaaa
          </p>
        </div>
      </div>

      {/* Modal for full-size image
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-auto max-h-[80vh] object-contain rounded-xl md:rounded-2xl"
              loading="lazy"
              onError={(e) => {
                e.target.src = '/fallback-image.jpeg';
              }}
            />
            
            <div className="absolute bottom-2 md:bottom-4 left-2 md:left-4 right-2 md:right-4 bg-black/70 text-white p-3 md:p-4 rounded-lg md:rounded-xl">
              <p className="font-semibold text-base md:text-lg">{selectedImage.caption}</p>
              <p className="text-blue-200 text-xs md:text-sm">{selectedImage.date}</p>
            </div>
            
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
              className="absolute top-2 md:top-4 right-2 md:right-4 bg-white/20 text-white p-1.5 md:p-2 rounded-full hover:bg-white/30 transition-colors"
            >
              ✕
            </button>
          </div>
        </div>
      )} */}
    </div>
  );
}