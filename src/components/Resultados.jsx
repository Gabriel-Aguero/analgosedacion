import React from "react";

const Resultados = ({ totalScore, scores, getInterpretation, resetScores }) => {
  return (
    <section className="col-span-4">
      <div className="p-4 bg-gray-100 border-2 border-blue-400 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold text-gray-800">
            Score de Dolor: {totalScore}/10
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
          <div className="bg-white p-3 rounded shadow-sm">
            <p className="font-medium text-gray-600">Expresión Facial</p>
            <p className="text-xl font-bold">{scores.facial}/2</p>
          </div>
          <div className="bg-white p-3 rounded shadow-sm">
            <p className="font-medium text-gray-600">Piernas</p>
            <p className="text-xl font-bold">{scores.piernas}/2</p>
          </div>
          <div className="bg-white p-3 rounded shadow-sm">
            <p className="font-medium text-gray-600">Movimiento Corporal</p>
            <p className="text-xl font-bold">{scores.movimiento}/2</p>
          </div>
          <div className="bg-white p-3 rounded shadow-sm">
            <p className="font-medium text-gray-600">Llanto</p>
            <p className="text-xl font-bold">{scores.llanto}/2</p>
          </div>
          <div className="bg-white p-3 rounded shadow-sm">
            <p className="font-medium text-gray-600">Consolabilidad</p>
            <p className="text-xl font-bold">{scores.consolabilidad}/2</p>
          </div>
          <div className="bg-gray-300 p-3 border-2 border-blue-500 rounded shadow-sm">
            <p className="font-medium text-gray-600">Total</p>
            <p className="text-xl font-bold">{totalScore}/10</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resultados;
