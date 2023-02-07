import * as bundle from '../bundles/pt_BR'

export default function NavBar() {
  return (
    <div className="navbar bg-purple-900 pr-16 pl-16 h-24">
      <img alt="Inicius" src="https://admin.refugioacai.com/btti-static/btti-logo-main.png"/>
      <button type="button" className="navbar-start font-bold text-xl">
      </button>
      <div className="navbar-center">
        <button type="button" className="btn btn-ghost">CACILDIS</button>
        <button type="button" className="btn btn-ghost">VIDIS</button>
        <button type="button" className="btn btn-ghost">LITRO</button>
        </div>
        <div className="navbar-end">
        <button type="button" className="btn btn-outline btn-accent">{bundle.beFranchised}</button>
        </div>
    </div>
  );
}