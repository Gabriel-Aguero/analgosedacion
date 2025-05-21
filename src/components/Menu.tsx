import { Link } from "react-router";

const Menu = () => {
  const menuItems = [
    {
      title: "Escala de Dolor",
      description:
        "Evaluación de expresión facial, movimiento corporal y consolabilidad",
      path: "/dolor",
    },  
    {
      title: "Escala de SOPHIA (Sophia Observations withdrawal Symptoms-scale - SOS)",
      description:
        "Evaluación de temblores, sudoración, ansiedad, agitación y síntomas gastrointestinales",
      path: "/abstinencia",
    },
    {
      title: "Escala de SBS (State Behavioural Scale)",
      description:
        "Está validada para monitorizar la sedación en niños de 6 semanas a 6 años, en ventilación mecánica.",
      path: "/sedacion",
    },
    {
      title: "Escala de CAPD (Cornell Assessment of Pediatric Delirium)",
      description:
        "Cornell Assessment of Pediatric Delirium.",
      path: "/delirium",
    },   
    {
      title: "Bibliografía",
      description:
        "Referencias y literatura científica sobre las escalas utilizadas",
      path: "/bibliografia",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Calculadora de Score de Analgosedación
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Instrumento para la evaluación y cálculo de scores en
            pacientes que requieren analgosedación
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="group bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 hover:border-blue-300"
            >
              <div className="flex flex-col h-full">
                <h2 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h2>
                <p className="text-gray-600 mb-4 flex-grow">
                  {item.description}
                </p>
                <div className="mt-auto">
                  <span className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 group-hover:bg-blue-700 transition-colors">
                    Acceder
                    <svg
                      className="ml-2 -mr-1 w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
