'use client'
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"

const Footer = () => {
    const router = useRouter();
    return (
        <footer className="bg-black text-white pt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 sm:px-12 md:px-20 xl:px-[250px] 2xl:px-[350px]">
                {/* Secciones */}
                <div className="flex flex-col">
                    <h2 className="font-semibold text-xl mb-3">Secciones</h2>
                    <Link href={"/"} className="hover:text-green-300 duration-200">Home</Link>
                    <Link href={"/nosotros"} className="hover:text-green-300 duration-200">Nosotros</Link>
                    <Link href={"/profesionales"} className="hover:text-green-300 duration-200">Profesionales</Link>
                    <Link href={"/"} className="hover:text-green-300 duration-200">Trabaja con nosotros</Link>
                    <Link href={"/especialidades"} className="hover:text-green-300 duration-200">Especialidades</Link>
                </div>

                {/* Contacto */}
                <div>
                    <h2 className="font-semibold text-xl mb-3">Contacto</h2>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Image src={'/icons/phone-solid.svg'} alt="Teléfono" width={16} height={16} />
                            <span>2657 - 425690 <span className="text-yellow-400 font-bold mx-1">|</span> 2657 - 427272 <span className="text-yellow-400 font-bold mx-1">|</span> 2657 - 427200</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Image src={'/icons/location-dot-solid.svg'} alt="Ubicación" width={16} height={16} />
                            <span>Balcarce 1040 - Villa Mercedes, San Luis</span>
                        </div>
                        <div className="flex items-center gap-2 cursor-pointer" onClick={() => router.push('https://www.instagram.com/hospitalprivadodela/')}>
                            <Image src={'/icons/instagram-brands-solid.svg'} alt="Instagram" width={16} height={16} />
                            <span className="">Visitá nuestro Instagram</span>
                        </div>
                    </div>
                </div>

                {/* Mapa */}
                <div className="flex justify-center lg:justify-end">
                    <Link href={"https://maps.app.goo.gl/x9aXmL2WF9gD1wyX8"} target="_blank">
                        <Image src={"/map.png"} width={200} height={200} alt="Ubicación en Google Maps" className="hover:ring hover:ring-green-300 hover:opacity-90 rounded-md hover:cursor-pointer duration-300" />
                    </Link>
                </div>
            </div>

            {/* Footer inferior */}
            <div className="py-4 border-t-2 border-t-green-600 mt-6">
                <div className="px-6 sm:px-12 md:px-20 xl:px-[250px] 2xl:px-[350px] flex flex-col sm:flex-row sm:justify-between items-center text-center sm:text-left">
                    <div>© 2025 - Hospital Privado de la Villa</div>
                    <div className="text-yellow-500">Desarrollado por: Federico Alaniz - 2657660312</div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
