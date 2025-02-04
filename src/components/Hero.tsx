import Image from "next/image"

const Hero = ({ imgSrc, children }: { imgSrc: string, children: React.ReactNode }) => {
    return (
        <div className="relative w-screen -mt-24 h-[400px]">
            {/* Imagen de fondo */}
            <Image
                src={imgSrc}
                alt=""
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
                className=" w-full max-w-full h-full"
            />

<div className="absolute inset-0 bg-black bg-opacity-5"></div>

            {/* Contenido superpuesto */}
            <div 
                className="absolute inset-0 flex flex-col justify-center text-white items-center z-10"
            >
                <div className="w-full h-[100px]"></div>
                <div className="w-full">
                    {children}
                </div>
            </div>
        </div>


    )
}

export default Hero