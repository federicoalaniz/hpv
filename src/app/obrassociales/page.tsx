import Hero from "@/components/Hero"
import Prepagas from "@/components/Prepagas"
import Image from "next/image"

const ObrasSociales = () => {
    const imgSize = 120
    return (
        <div>
            <Hero imgSrc="/obrassociales.jpg">
                <div className="relative px-8 sm:px-16 md:px-24 xl:px-[250px] 2xl:px-[350px]">
                    <h1 className="text-green-600 text-4xl lg:text-[58px] my-4">Obras Sociales</h1>
                    <div
                        className="bg-black text-black bg-opacity-20  
                            w-full md:w-1/2 px-4 py-5 text-xl rounded-md">
                        <p>
                        Hospital Privado de la Villa cuenta con la confianza de las siguientes Obras Sociales, Prepagas y ART
                        </p>
                    </div>
                </div>
            </Hero>
            <section className="bg-[#545454] px-8 sm:px-16 md:px-24 xl:px-[250px] 2xl:px-[350px] py-2 flex justify-between">
                <Image src={"/os/dosep.svg"} alt="" height={100} width={90}/>
                <Image src={"/os/galeno.svg"} alt="" height={100} width={imgSize}/>
                <Image src={"/os/sancor.svg"} alt="" height={100} width={imgSize}/>
                <Image src={"/os/osde.svg"} alt="" height={100} width={imgSize}/>
                <Image src={"/os/nobis.svg"} alt="" height={100} width={imgSize}/>
                <Image src={"/os/iosfa.svg"} alt="" height={100} width={imgSize}/>
                <Image src={"/os/swiss_medical2.svg"} alt="" height={100} width={150}/>
                <Image src={"/os/osmata.svg"} alt="" height={100} width={imgSize}/>
                <Image src={"/os/osiad.svg"} alt="" height={100} width={imgSize}/>
            </section>
            <section className="bg-white px-8 sm:px-16 md:px-24 xl:px-[250px] 2xl:px-[350px] py-2">
                <h2 className="text-center text-3xl my-3">Listado completo de Obras Sociales, Prepagas y ART</h2>
                <Prepagas />
            </section>
        </div>
    )
}

export default ObrasSociales