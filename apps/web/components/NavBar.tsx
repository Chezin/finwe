export default function NavBar() {
  return (
    //TODO Start menu div right to left
    <div className="container bg-purple-900 min-w-full flex flex-row p-3.5 text-white">
      <p className="ml-10 text-2xl ">Finwe</p>
      <div className="flex flex-nowrap space-x-64 ml-96 justify-end p-0">
        <h2 className="">Cacilds</h2>
        <h2 className="">Vidis</h2>
        <h2 className="">Litro</h2>
        <h2 className="">Abertis</h2>
      </div>
    </div>
  );
}
