'use client';

import { useState } from 'react';

const cartilla = {
    "Cardiología": ["Vassallo Jorge", "Corradi Luciano", "Edelstein Pablo", "Fessia Claudio"],
    "Traumatología": ["Gariglio Jorge", "Garcia Orive Andres", "Gariglio Federico"],
    "Gastroenterología": ["Graffigna Tristan", "Garcia Orive Diego"],
    "Pediatría": ["Kruse Juliana", "Nicola Yamila"],
    "Neurología": ["Barbeito Pablo", "San Martin Javier"],
    "Urología": ["Vega Walter", "Politi Esteban"],
    "Tocoginecología": ["Quiroga Broggi", "Rodriguez Ferro", "Mercau Sebastian", "Nigra Jorge", "Fasah Alberto", "Mana Mario"],
    "Otorrinolaringología": ["Gariglio Micaela"],
    "Cirugía General": ["Gandino Santiago", "Masramon Enrique", "Rivadera Martin"],
    "Cirugía de Cabeza y Cuello": ["Agramunt Daniel"],
    "Nutrición": ["Arteaga Teresa", "Mercau Lorena", "Moyano Javier"],
    "Diagnóstico por Imagen": ["Carranza Fernando", "Pucci Javier", "Gandino Santiago (H)", "Carrizo Walter"],
    "Infectología": ["Muñoz Oscar"],
    "Dermatología": ["Garcia Seoane Beatriz"],
    "Endocrinología": ["Bindi Andres"],
    "Odontología": ["Bergese Laura"],
    "Anatomía Patológica": ["Romero Sandra"],
    "Fisioterapia y Kinesioterapia": ["Carmintrand Natalia"],
    "Psicología": ["Villalba Belen", "Barroso Gisel"],
    "Neumonología": ["Dave Eugenia", "Nigra Natalia"]
};

export default function CartillaMedica() {
    const [openSections, setOpenSections] = useState<Record<string, boolean>>({});

    const toggleSection = (especialidad:string) => {
        setOpenSections(prev => ({ ...prev, [especialidad]: !prev[especialidad] }));
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border border-green-200 rounded-md shadow-lg pt-5 pl-5 duration-200">
            {Object.entries(cartilla).map(([especialidad, medicos]) => (
                <div key={especialidad} className="mb-4  border-gray-300 rounded-lg p-2">
                    <button
                        className="w-full text-left text-green-700 text-2xl font-bold focus:outline-none hover:text-green-400 duration-200 hover:drop-shadow-md"
                        onClick={() => toggleSection(especialidad)}
                    >
                        {especialidad}
                    </button>
                    {openSections[especialidad] && (
                        <ul className="mt-2">
                            {medicos.map(medico => (
                                <li key={medico} className="text-[18px]">{medico}</li>
                            ))}
                        </ul>
                    )}
                </div>
            ))}
        </div>
    );
}