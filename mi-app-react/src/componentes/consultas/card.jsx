export default function Card({ icon: Icon, title, text }) {
  return (
    <div className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer">
      
      <div className="w-12 h-12 rounded-xl bg-red-100 text-red-600 flex items-center justify-center mb-4 group-hover:bg-red-600 group-hover:text-white transition">
        <Icon size={22} />
      </div>

      <h3 className="text-lg font-semibold text-gray-900 mb-2">
        {title}
      </h3>

      <p className="text-gray-500 leading-relaxed">
        {text}
      </p>

      <div className="mt-4 text-red-600 font-medium opacity-0 group-hover:opacity-100 transition">
        Ver más →
      </div>

    </div>
  );
}