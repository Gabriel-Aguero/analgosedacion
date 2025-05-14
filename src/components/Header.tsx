import { Link } from "react-router";
const Header = () => {
  return (
    <section className="max-w-4xl mx-auto mt-10 py-6 bg-sky-500">
      <Link
        to="/"
        className="text-2xl font-bold text-gray-800 hover:text-blue-600 transition-colors"
      >
        Inicio
      </Link>
      <Link
        to="/abstinencia"
        className="text-2xl font-bold text-gray-800 hover:text-blue-600 transition-colors"
      >
        Abstinencia
      </Link>
      <Link
        to="/sedoanalgesia"
        className="text-2xl font-bold text-gray-800 hover:text-blue-600 transition-colors"
      >
        Sedoanalgesia
      </Link>
      <Link
        to="/dolor"
        className="text-2xl font-bold text-gray-800 hover:text-blue-600 transition-colors"
      >
        Dolor
      </Link>
      <Link
        to="/delirium"
        className="text-2xl font-bold text-gray-800 hover:text-blue-600 transition-colors"
      >
        Delirium
      </Link>
      <Link
        to="/bibliografia"
        className="text-2xl font-bold text-gray-800 hover:text-blue-600 transition-colors"
      >
        Bibliografía
      </Link>
    </section>
  );
};

export default Header;
