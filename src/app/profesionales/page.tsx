import CartillaMedica from "@/components/CartillaMedica"
import Hero from "@/components/Hero"

const Profesionales = () => {
    return (
        <div>
            <Hero imgSrc="/medicos.jpg">
                <div className="relative px-8 sm:px-16 md:px-24 xl:px-[250px] 2xl:px-[350px]">
                    <h1 className="text-green-600 text-4xl lg:text-[58px] my-4">Profesionales</h1>
                    <div
                        className="bg-black text-black bg-opacity-20  
                            w-full md:w-1/2 px-4 py-5 text-xl rounded-md">
                        <h1>
                            La institución cuenta con los siguientes profesionales de la salud
                        </h1>
                    </div>
                </div>
            </Hero>
            <section className="bg-white px-8 sm:px-16 md:px-24 xl:px-[250px] 2xl:px-[350px] py-8">
                <CartillaMedica/>
            </section>
        </div>
    )
}

export default Profesionales