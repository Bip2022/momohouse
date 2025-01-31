import quality from "../../assets/qualitylogo.png";

function Third() {
  return (
    <div>
          <div className="flex flex-col items-center text-center w-[360px] max-h-[289px]">
          <img src={quality} alt="Quality Food" className="w-32 h-32 object-contain mb-4" />
          <h1 className="text-xl font-bold mb-2">Quality Food</h1>
          <p className="text-sm w-[280px] h-[52px] overflow-hidden">
            Only the best food with top quality products and ingredients
          </p>
        </div>
    </div>
  )
}

export default Third
