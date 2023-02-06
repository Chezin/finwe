
import { placeHolderImageSRC1, placeHolderImageSRC2 } from "../bundles/pt_BR";


export default function ImageBanner() {
  return (
    <div>
      <div className="carousel w-full">
        <div className="carousel-item" id="item1">
          <img src={placeHolderImageSRC1} alt="" className="w-full" />
        </div>
        <div className="carousel-item" id="item2">
          <img src={placeHolderImageSRC2} alt="" className="w-full"/>
        </div>
        <div className="carousel-item" id="item3">
          <img src={placeHolderImageSRC1} alt="" className="w-full"/>
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2 sticky">
      <a href="#item1" className="btn">1</a> 
      <a href="#item2" className="btn">2</a> 
      <a href="#item3" className="btn">3</a> 
      </div>
    </div>
  );
}