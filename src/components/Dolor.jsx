import React, { useState } from 'react';
import Resultados from './Resultados';

const Dolor = () => {

  const [scores, setScores] = useState({
    facial: 0,
    movimiento: 0,
    consolabilidad: 0
  });

  const handleScoreChange = (category, value) => {
    setScores(prev => ({
      ...prev,
      [category]: value
    }));
  };

  const totalScore = scores.facial + scores.movimiento + scores.consolabilidad;

  const resetScores = () => {
    setScores({
      facial: 0,
      movimiento: 0,
      consolabilidad: 0
    });
  };

  const getInterpretation = () => {
    if (totalScore === 0) return "Estado Estable - Paciente estable. Monitorización rutinaria.";
    if (totalScore <= 2) return "Dolor leve - Considerar intervención no farmacológica.";
    if (totalScore <= 4) return "Dolor moderado - Considerar analgesia.";
    return "Dolor severo - Requiere intervención inmediata.";
  };

  return (
    <>
    <section className="col-span-1 md:col-span-6 max-w-4xl mx-auto bg-slate-100 border-2 border-blue-400 rounded-lg shadow-md">
        <div className='bg-blue-300 p-4'>
            <h1 className="text-2xl font-bold text-center text-gray-800">Escala del Dolor</h1>
        </div>      
        
        <article className='p-4'>
        {/* Expresión Facial */}
        <div className="mb-8 pb-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Expresión Facial</h2>
            <div className="space-y-3">
            {[
                { value: 0, label: "Relajada, expresión neutra (0)" },
                { value: 1, label: "Ocasionalmente ceño fruncido, mueca (1)" },
                { value: 2, label: "Frecuentemente ceño fruncido, mandíbula tensa (2)" }
            ].map((item) => (
                <div key={`facial-${item.value}`} className="flex items-center">
                <input
                    type="radio"
                    id={`facial-${item.value}`}
                    name="facial"
                    checked={scores.facial === item.value}
                    onChange={() => handleScoreChange('facial', item.value)}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                />
                <label htmlFor={`facial-${item.value}`} className="ml-3 text-gray-700">
                    {item.label}
                </label>
                </div>
            ))}
            </div>
        </div>
        
        {/* Movimiento Corporal */}
        <div className="mb-8 pb-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Movimiento Corporal</h2>
            <div className="space-y-3">
            {[
                { value: 0, label: "Posición normal, relajado (0)" },
                { value: 1, label: "Tenso, inquieto, agitado (1)" },
                { value: 2, label: "Rígido, arqueado, movimientos bruscos (2)" }
            ].map((item) => (
                <div key={`movimiento-${item.value}`} className="flex items-center">
                <input
                    type="radio"
                    id={`movimiento-${item.value}`}
                    name="movimiento"
                    checked={scores.movimiento === item.value}
                    onChange={() => handleScoreChange('movimiento', item.value)}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                />
                <label htmlFor={`movimiento-${item.value}`} className="ml-3 text-gray-700">
                    {item.label}
                </label>
                </div>
            ))}
            </div>
        </div>
        
        {/* Consolabilidad */}
        <div className="mb-8 pb-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Consolabilidad</h2>
            <div className="space-y-3">
            {[
                { value: 0, label: "Contento, relajado (0)" },
                { value: 1, label: "Tranquilizable con tacto o voz (1)" },
                { value: 2, label: "Difícil de consolar o inconsolable (2)" }
            ].map((item) => (
                <div key={`consolabilidad-${item.value}`} className="flex items-center">
                <input
                    type="radio"
                    id={`consolabilidad-${item.value}`}
                    name="consolabilidad"
                    checked={scores.consolabilidad === item.value}
                    onChange={() => handleScoreChange('consolabilidad', item.value)}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                />
                <label htmlFor={`consolabilidad-${item.value}`} className="ml-3 text-gray-700">
                    {item.label}
                </label>
                </div>
            ))}
            </div>
        </div>   
        </article>         
    </section>
      {/* Resultados */}      
        <Resultados totalScore={totalScore} scores={scores} getInterpretation={getInterpretation} resetScores={resetScores} />      
    </>
  );
};

export default Dolor;