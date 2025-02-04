import Hero from "@/components/Hero"

const Nosotros = () => {
    return (
        <div>
            <Hero imgSrc="/HPV_Hero_wide.jpg">
                <div className="relative px-8 sm:px-16 md:px-24 xl:px-[250px] 2xl:px-[350px]">

                    <div
                        className="bg-white text-green-600 bg-opacity-60  
                            text-4xl sm:text-3xl md:text-5xl lg:text-7xl  
                            px-6 sm:px-8 md:px-12 py-12 sm:py  
                            rounded-lg max-w-4xl text-center ml-0">
                        <h1>
                            Bienvenido a <br /> <span className="font-semibold">Hospital Privado de la Villa</span>
                        </h1>
                    </div>
                </div>
            </Hero>
            <section className="px-8 sm:px-16 md:px-24 xl:px-[250px] 2xl:px-[350px] py-8">
                <h1 className="text-green-600 text-[50px]">¿Quiénes somos?</h1>
                <p className="text-[18px] text-justify mb-3">
                    Somos <strong>Hospital Privado de la Villa</strong>, con más de 20 años de trayectoria dedicados al cuidado de la salud de los ciudadanos de Villa Mercedes. A lo largo de este tiempo, hemos trabajado para convertirnos en un referente en atención médica, ofreciendo servicios de calidad basados en la innovación, el profesionalismo y la calidez humana.
                </p>
                <p className="text-[18px] text-justify mb-3">
                    Contamos con un equipo comprometido de médicos, especialistas y personal administrativo, enfocados en brindar un servicio de excelencia que garantice confianza y tranquilidad a nuestros pacientes y sus familias.
                </p>
                <p className="text-[18px] text-justify mb-3">
                    Nos esforzamos por mejorar continuamente, incorporando tecnología de vanguardia, ampliando nuestras instalaciones y fortaleciendo la capacitación de nuestro personal, siempre con el objetivo de ofrecer diagnósticos precisos, tratamientos avanzados y atención personalizada.
                </p>
                <p className="text-[18px] text-justify mb-3">
                    En el Hospital Privado de la Villa, nuestro compromiso es seguir sirviendo a la comunidad con empatía y dedicación, cuidando lo más valioso: su salud y bienestar.
                </p>

            </section>

            {/* <section
                className="relative bg-gray-400 px-8 sm:px-16 md:px-24 xl:px-[250px] 2xl:px-[350px] py-8
                bg-[url('/tomografo.jpeg')] bg-cover bg-center"
            >
                <div className="text-white flex flex-col items-center">
                    <div className="grid grid-cols-2 gap-6">
                        <div>
                            <h2 className="text-green-700 text-3xl font-semibold">Misión</h2>
                            <p className="text-white text-[18px] text-justify bg-black bg-opacity-30 p-4 rounded-md">
                                Brindar atención médica y humana de calidad, pensada y orientada al paciente, a través de un equipo de profesionales y colaboradores que trabajan en conjunto para que el resultado sea un servicio que esté a la altura de las necesidades del paciente.
                            </p>
                        </div>
                        <div>
                            <h2 className="text-green-700 text-3xl font-semibold">Visión</h2>
                            <p className="text-white text-[18px] text-justify bg-black bg-opacity-30 p-4 rounded-md">
                                Incrementar nuestra capacidad de atención actual en un 30% para los próximos 2 años, buscando mejorar la calidad de la atención brindada en todos sus aspectos; médico, humano y confort.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center mt-6 w-full">
                        <h2 className="text-green-700 text-3xl font-semibold text-center">Autoridades</h2>

                        <div className="grid md:grid-cols-2 gap-4 text-white text-[18px] bg-black bg-opacity-30 p-4 rounded-md ">
                            <div className="text-left ">
                                <h3 className="font-bold">Gerencia:</h3>
                                <ul className="list-disc list-inside">
                                    <li>Dr. Gariglio Jorge</li>
                                    <li>Dr. Edelstein Pablo</li>
                                    <li>Dr. Aban Marcelo Jorge</li>
                                    <li>Dr. Gandino Santiago</li>
                                </ul>
                            </div>
                            <div className="text-left ">
                                <h3 className="font-bold">Dirección Médica:</h3>
                                <ul className="list-disc list-inside">
                                    <li>Dr. García Andrés</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </section> */}
            <section
                className="relative bg-gray-400 px-6 sm:px-12 md:px-20 xl:px-[150px] 2xl:px-[250px] py-12
                bg-[url('/tomografo.jpeg')] bg-cover bg-center"
            >

                {/* Contenido sobre la imagen */}
                <div className="relative z-10 text-white flex flex-col items-center max-w-5xl w-full mx-auto">

                    {/* Sección Misión y Visión */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                        <div>
                            <h2 className="text-green-700 text-3xl font-semibold text-center md:text-left">Misión</h2>
                            <p className="text-white text-[18px] text-justify bg-black bg-opacity-40 p-4 rounded-md">
                                Brindar atención médica y humana de calidad, pensada y orientada al paciente, a través de un equipo de profesionales y colaboradores que trabajan en conjunto para que el resultado sea un servicio que esté a la altura de las necesidades del paciente.
                            </p>
                        </div>
                        <div>
                            <h2 className="text-green-700 text-3xl font-semibold text-center md:text-left">Visión</h2>
                            <p className="text-white text-[18px] text-justify bg-black bg-opacity-40 p-4 rounded-md">
                                Incrementar nuestra capacidad de atención actual en un 30% para los próximos 2 años, buscando mejorar la calidad de la atención brindada en todos sus aspectos; médico, humano y confort.
                            </p>
                        </div>
                    </div>

                    {/* Sección Autoridades */}
                    <div className="flex flex-col items-center mt-8 w-full">
                        <h2 className="text-green-700 text-3xl font-semibold text-center">Autoridades</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-white text-[18px] bg-black bg-opacity-40 p-6 rounded-md max-w-[700px] w-full mx-auto md:w-auto">
                            <div className="text-left">
                                <h3 className="font-bold">Gerencia:</h3>
                                <ul className="list-disc list-inside">
                                    <li>Dr. Gariglio Jorge</li>
                                    <li>Dr. Edelstein Pablo</li>
                                    <li>Dr. Aban Marcelo Jorge</li>
                                    <li>Dr. Gandino Santiago</li>
                                </ul>
                            </div>
                            <div className="text-left">
                                <h3 className="font-bold">Dirección Médica:</h3>
                                <ul className="list-disc list-inside">
                                    <li>Dr. García Andrés</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

        </div>
    )
}

export default Nosotros