const spanEffect =
  "transition transform motion-reduce:transition-none motion-reduce:hover:transform-none duration-400 border-b-8 border-transparent hover:border-purple-500";

export default function NavBar() {
  return (
    <div className="container bg-purple-900 min-w-full flex flex-row p-3.5 text-white sticky top-0 z-50">
      <button type="button" className="ml-10 text-2xl mt-1">
        BOM DIA BRASIL
      </button>
      <div className="flex flex-nowrap space-x-64 ml-96 justify-end p-0 mt-2">
        <button type="button" className={spanEffect}>CACILDIS</button>
        <button type="button" className={spanEffect}>VIDIS</button>
        <button type="button" className={spanEffect}>LITRO</button>
        <button type="button" className={spanEffect}>ABERTIS</button>
      </div>
    </div>
  );
}