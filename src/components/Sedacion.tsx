import { useState } from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router";

type ScoresType = {
  resultado: number;  
};
const Sedacion = () => {
  const [scores, setScores] = useState<ScoresType>({
    resultado: 0,    
  });

  const handleScoreChange = (category: string, value: number) => {
    setScores((prev) => ({
      ...prev,
      [category]: value,
    }));
  };

  const totalScore = scores.resultado;    

  const resetScores = () => {
    setScores({ resultado: 0 });
  };

  const getInterpretation = () => {
    switch (totalScore) {
      case -2: return "Estado Estable - Paciente estable. Monitorización rutinaria.";
      case -1: return "Estado Estable - Paciente estable. Monitorización rutinaria.";  
      case 0: return "Estado Estable - Paciente estable. Monitorización rutinaria.";
      case 1: return "Dolor leve - Considerar intervención no farmacológica.";
      case 2: return "Dolor moderado - Considerar analgesia.";
      case 3: return "Dolor severo - Requiere intervención inmediata.";
      default: return "Estado Estable - Paciente estable. Monitorización rutinaria.";
    }
  };

  const sections = [
    {
      name: "Valoración",
      key: "resultado",
      options: [
        { value: -3, label: "No Responde. (-3)" },
        { value: -2, label: "Responde a estímulos nociceptivos. (-2)" },
        { value: -1, label: "Responde al tocarlo a la voz. (-1)" },
        { value: 0, label: "Despierto o calmo. (0)" },
        { value: 1, label: "Inquieto y dificil de calmar. (1)" },
        { value: 2, label: "Agitado. (2)" },        
      ],
    },
  ];

  return (
    <>
      <section className="grid grid-cols-10 gap-4 max-w-4xl mx-auto mt-10">
        <Link
          to="/"
          className="col-span-2 py-2 flex items-center justify-center bg-blue-200 text-gray-800 border-1 border-blue-600 rounded-lg shadow-md
          hover:bg-blue-800 hover:text-white transition-colors duration-300"
        >
          Volver al inicio
        </Link>
        <article className="col-span-10 border-1 border-blue-400 rounded-lg shadow-md bg-slate-100 flex flex-col gap-2">
          <div className="bg-sky-100 p-4">
            <h2 className="text-xl font-bold ">
              🚨 Información sobre la escala de SBS
            </h2>
            <p className="text-lg text-gray-600 font-medium">
              La Escala de SBS una herramienta clínica utilizada para
              evaluar el nivel de dolor en pacientes que no pueden comunicarse
              verbalmente.
            </p>
          </div>
          <div>
            <p className="text-md text-gray-600 font-medium p-4">
              Esta escala evalúa tres paráetros principales:
              <ul className="list-disc list-inside pl-4 mt-2">
                <li>
                  Expresión facial: Evalúa los gestos y expresiones del paciente
                </li>
                <li>
                  Piernas: Observa la posición y movimiento de las piernas.
                </li>
                <li>
                  Movimiento corporal: Analiza la postura y movimientos del
                  paciente.
                </li>
                <li>
                  Llanto: Observa la presencia y tipo de llanto del paciente.
                </li>
                <li>
                  Consolabilidad: Evalúa la respuesta del paciente a los
                  intentos de consuelo.
                </li>
              </ul>
              <p className="mt-2 font-bold text-gray-900">
                Cada parámetro se puntúa de 0 a 2, donde 0 indica ausencia de
                dolor y 2 indica dolor severo. La puntuación total se utiliza
                para determinar la intervención clínica necesaria.
              </p>
            </p>
          </div>
        </article>
        <article className="col-span-6 w-full mx-auto bg-slate-100 border-2 border-blue-400 rounded-lg shadow-md">
          <div className="bg-blue-300 p-4 rounded-t-lg">
            <h1 className="text-2xl font-bold text-center text-gray-800">
              Escala de SBS
            </h1>
          </div>

          <article className="p-6 space-y-4">
            {sections.map((section) => (
              <Disclosure
                key={section.key}
                as="div"
                className="border border-gray-300 rounded-lg overflow-hidden bg-white"
              >
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex justify-between w-full px-6 py-4 text-left bg-blue-50 hover:bg-blue-100 transition-colors">
                      <span className="text-lg font-semibold text-gray-800">
                        {section.name}
                      </span>
                      {open ? (
                        <ChevronUpIcon className="w-5 h-5 text-gray-600" />
                      ) : (
                        <ChevronDownIcon className="w-5 h-5 text-gray-600" />
                      )}
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-6 py-4">
                      <div className="space-y-3">
                        {section.options.map((option) => (
                          <div
                            key={`${section.key}-${option.value}`}
                            className="flex items-center"
                          >
                            <input
                              type="radio"
                              id={`${section.key}-${option.value}`}
                              name={section.key}
                              checked={
                                scores[section.key as keyof ScoresType] ===
                                option.value
                              }
                              onChange={() =>
                                handleScoreChange(section.key, option.value)
                              }
                              className="h-5 w-5 text-blue-600 focus:ring-blue-500"
                            />
                            <label
                              htmlFor={`${section.key}-${option.value}`}
                              className="ml-3 text-gray-700"
                            >
                              {option.label}
                            </label>
                          </div>
                        ))}
                      </div>
                      <div className="mt-3 text-right text-sm font-medium text-blue-600">
                        Puntuación: {scores[section.key as keyof ScoresType]}/2
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </article>
        </article>

        {/* Resultados */}
        <section className="col-span-4">
          <div className="p-4 bg-gray-100 border-2 border-blue-400 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold text-gray-800">
                Score de Sedación: {totalScore}
              </h3>
              <button
                onClick={resetScores}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
              >
                Reiniciar
              </button>
            </div>

            <div className="p-4 bg-blue-200 text-gray-800 font-bold rounded">
              <p>{getInterpretation()}</p>
            </div>

            {/* Tabla de scores (opcional) */}
            <div className="mt-6 grid grid-cols-2 gap-4">                            
              <div className="bg-gray-300 p-3 border-2 border-blue-500 rounded shadow-sm">
                <p className="font-medium text-gray-600">Total</p>
                <p className="text-xl font-bold">{totalScore}</p>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Sedacion;
