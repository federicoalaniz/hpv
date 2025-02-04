'use client'
import Hero from "@/components/Hero";
import ImageGallery from "@/components/ImageGallery";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div>

      <Hero imgSrc="/HPV_Hero_wide.jpg">
        <div className="px-8 sm:px-16 md:px-24 xl:px-[250px] 2xl:px-[350px]">
          <div
            className="bg-white text-green-600 bg-opacity-60  
                      text-4xl sm:text-3xl md:text-5xl lg:text-7xl  
                      px-6 sm:px-8 md:px-12 py-12 sm:py  
                      rounded-lg max-w-4xl text-center" >
            <h1>
              Bienvenido a <br /> <span className="font-semibold">Hospital Privado de la Villa</span>
            </h1>
          </div>
        </div>
      </Hero>
      <section
        className="bg-white w-full text-black 
        px-8 sm:px-16 md:px-24 xl:px-[250px] 2xl:px-[350px] py-8"
      >
        <h1 className="text-green-600 text-2xl sm:text-3xl md:text-4xl lg:text-[50px] font-semibold mb-2">
          Reserva tu turno
        </h1>
        <p className="text-sm sm:text-base">
          Elige la fecha y el horario que mejor se adapten a tu disponibilidad. Nuestro sistema te permite acceder rápidamente a los especialistas y servicios médicos que necesitas.
        </p>
        <p className="bg-green-100 border border-green-800 rounded-md py-2 px-3 my-4 text-sm sm:text-base">
          Recuerda llegar con 15 minutos de anticipación y traer tu documento de identidad y estudios previos, si es necesario.
        </p>
        <div className="flex justify-end">
          <button className="bg-green-600 text-white w-full sm:w-1/2 md:w-1/2 lg:w-1/4 py-2 font-semibold text-lg sm:text-xl rounded-md hover:bg-opacity-90" onClick={()=> router.push('https://turnos.hospitaldelavilla.com.ar/')}>
            Reservar Turno OnLine
          </button>
        </div>
      </section>
      <ImageGallery />
    </div>
  );
}
