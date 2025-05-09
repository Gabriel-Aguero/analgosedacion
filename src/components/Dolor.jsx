import React, { useState } from "react";
import Resultados from "./Resultados";
import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";

const Dolor = () => {
  const [scores, setScores] = useState({
    facial: 0,
    piernas: 0,
    movimiento: 0,
    llanto: 0,
    consolabilidad: 0,
  });

  const handleScoreChange = (category, value) => {
    setScores((prev) => ({
      ...prev,
      [category]: value,
    }));
  };

  const totalScore =
    scores.facial +
    scores.piernas +
    scores.movimiento +
    scores.llanto +
    scores.consolabilidad;

  const resetScores = () => {
    setScores({
      facial: 0,
      piernas: 0,
      movimiento: 0,
      llanto: 0,
      consolabilidad: 0,
    });
  };

  const getInterpretation = () => {
    if (totalScore === 0)
      return "Estado Estable - Paciente estable. Monitorización rutinaria.";
    if (totalScore <= 2)
      return "Dolor leve - Considerar intervención no farmacológica.";
    if (totalScore <= 4) return "Dolor moderado - Considerar analgesia.";
    return "Dolor severo - Requiere intervención inmediata.";
  };

  const sections = [
    {
      name: "Expresión Facial",
      key: "facial",
      options: [
        { value: 0, label: "Relajada, expresión neutra, no sonríe. (0)" },
        { value: 1, label: "Ocasionalmente ceño fruncido, mueca. (1)" },
        {
          value: 2,
          label:
            "Frunce el ceño con frecuencia, aprieta los dientes contante o frecuentemente, le tiembla el mentón. (2)",
        },
      ],
    },
    {
      name: "Piernas",
      key: "piernas",
      options: [
        { value: 0, label: "Posición normal, relajado. (0)" },
        { value: 1, label: "Tenso, inquieto, molesto. (1)" },
        { value: 2, label: "Patéa o levanta las piernas. (2)" },
      ],
    },
    {
      name: "Movimiento Corporal",
      key: "movimiento",
      options: [
        {
          value: 0,
          label:
            "Acostado en silencio, posición normal, se mueve con facilidad (0)",
        },
        { value: 1, label: "Se retuerce, da muchas vueltas, Tenso. (1)" },
        { value: 2, label: "Se arquéa, se pone rígido o se sacudse. (2)" },
      ],
    },
    {
      name: "Llanto",
      key: "llanto",
      options: [
        { value: 0, label: "No llora (despierto o dormido). (0)" },
        { value: 1, label: "Gime y se queja ded vez en cuando. (1)" },
        {
          value: 2,
          label:
            "Llora sin parar, grita o solloza y se queja constantemente. (2)",
        },
      ],
    },
    {
      name: "Consolabilidad",
      key: "consolabilidad",
      options: [
        { value: 0, label: "Tranquilo, relajado. (0)" },
        {
          value: 1,
          label:
            "Se tranquiliza cuando le tocan, abrazan o le hablan, se le puede distraer. (1)",
        },
        { value: 2, label: "Difícil de consolar o tranquilizar. (2)" },
      ],
    },
  ];

  return (
    <>
      <section className="col-span-6 w-full mx-auto bg-slate-100 border-2 border-blue-400 rounded-lg shadow-md">
        <div className="bg-blue-300 p-4 rounded-t-lg">
          <h1 className="text-2xl font-bold text-center text-gray-800">
            Escala del Dolor Flacc
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
                            checked={scores[section.key] === option.value}
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
                      Puntuación: {scores[section.key]}/2
                    </div>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          ))}
        </article>
      </section>

      {/* Resultados */}
      <Resultados
        totalScore={totalScore}
        scores={scores}
        getInterpretation={getInterpretation}
        resetScores={resetScores}
      />
    </>
  );
};

export default Dolor;
