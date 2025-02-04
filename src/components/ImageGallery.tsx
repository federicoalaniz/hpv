"use client";

import { useState } from "react";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Importa los estilos

const images = [
    "/Maquina1.jpeg",
    "/Lugar0.jpeg",
    "/Lugar2.jpeg",
    "/Lugar3.jpeg",
    "/Patio.jpeg",
    "/tomografo.jpeg",
];

const ImageGallery = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const openCarousel = (index: number) => {
        setCurrentIndex(index);
        setIsOpen(true);
    };

    return (
        <section className="bg-[#595959] w-full px-8 sm:px-16 md:px-24 xl:px-[250px] 2xl:px-[350px] py-8">
            <div className="grid grid-cols-1 gap-8 my-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {images.map((src, index) => (
                    <Image
                        key={index}
                        src={src}
                        width={400}
                        height={100}
                        alt={`Imagen ${index + 1}`}
                        className="rounded-md opacity-50 hover:opacity-100 duration-200 cursor-pointer hover:shadow-lg hover:shadow-gray-200"
                        onClick={() => openCarousel(index)}
                    />
                ))}
            </div>

            {/* Modal del Carrusel */}
            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-40">
                    <div className="relative w-[90%] md:w-[70%] lg:w-[50%]">
                        {/* Botón de cierre (Mejor visibilidad) */}
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-2 right-2 bg-black/70 text-white text-2xl px-4 py-2 rounded-md hover:bg-black z-50"
                        >
                            ✖
                        </button>
                        <Carousel
                            selectedItem={currentIndex}
                            showThumbs={false}
                            showStatus={false}
                            infiniteLoop
                            useKeyboardArrows
                            onChange={(index) => setCurrentIndex(index)}
                        >
                            {images.map((src, index) => (
                                <div key={index}>
                                    <Image
                                        src={src}
                                        width={800}
                                        height={500}
                                        alt={`Imagen ${index + 1}`}
                                        className="rounded-md"
                                    />
                                </div>
                            ))}
                        </Carousel>
                    </div>
                </div>
            )}
        </section>
    );
};

export default ImageGallery;
