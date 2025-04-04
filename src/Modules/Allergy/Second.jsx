import line from "../../assets/allergy/line.png";
import img1 from "../../assets/allergy/allergy2(1).png";
import img2 from "../../assets/allergy/backgr.png";
import img3 from "../../assets/allergy/allergy2(3).png";
import "@fontsource/chela-one";

function Second() {
  return (
    <div className="px-4 sm:px-6 relative w-full min-h-screen flex flex-col items-center justify-center">
      {/* Background Images */}
      <img src={img1} alt="background" className="absolute  lg:left-[200px] left-[18px] md:left-[60px] sm:left-[30px] xl:left-[300px] 2xl:left-[400px]  top-[120px] lg:top-[95px]  lg:w-[380px] lg:h-[340px] w-[200px] h-[200px]" />
      <img src={img2} alt="background" className="absolute lg:top-[520px] sm:w-[1000px] w-[320px] lg:w-[1400px] xl:w-[1100px] lg:h-[800px]  sm:h-[700px]" />
<img 
  src={img3} 
  alt="background" 
  className="absolute right-[10px] sm:right-[20px] md:right-[50px] lg:right-[180px] xl:right-[290px] 2xl:right-[400px] 
  bottom-[20px] sm:bottom-auto sm:top-[1590px] lg:top-[1520px] 
  w-[130px] h-[140px] sm:w-[150px] sm:h-[160px] lg:w-[230px] lg:h-[260px] 
  z-0" 
/>

      {/* Section Title */}
      <h1 className="relative inline-flex items-center justify-center gap-4 mb-12 z-10 text-[40px] leading-[48px]">
        <img src={line} alt="decorative line" className="w-24 h-1" />
        <span className="text-orange-500 font-chela-one">Ingredients</span>
        <span className="text-[#101828] font-chela-one">Used</span>
        <img src={line} alt="decorative line" className="w-24 h-1" />
      </h1>

      {/* Ingredients Sections */}
      <div className="relative flex flex-col mt-12 sm:px-6 space-y-6 items-center w-full max-w-2xl z-10">
        {[
          {
            title: "For the Dough",
            items: [
              "120 gms refined flour",
              "1/4 tsp baking powder",
              "1/2 tsp salt water (for kneading)",
            ],
          },
          {
            title: "For the Chicken Filling",
            items: [
              "1 cup chicken (minced)",
              "1/2 cup onions, finely chopped",
              "1/4 tsp black pepper powder",
              "1 tbsp oil",
              "1/2 tsp garlic paste",
              "1/2 tsp soya sauce",
              "Salt",
              "1/4 tsp vinegar",
            ],
          },
          {
            title: "For the Vegetarian Filling",
            items: [
              "1 cup cabbage and carrots, grated",
              "2 tbsp onions, finely chopped",
              "1/2 tsp garlic, finely chopped",
              "1 tbsp oil",
              "1/4 tsp vinegar",
              "1/2 tsp soya sauce",
              "Salt to taste",
              "Pepper to taste",
              "1 tbsp cornflour",
            ],
          },
          {
            title: "For Chilli Sauce",
            items: [
              "25 grams garlic, peeled",
              "6 gms whole red chillies",
              "3 tbsp vinegar",
              "1 tbsp oil",
              "Salt to taste",
              "Sugar to taste",
            ],
          },
        ].map((section, index) => (
          <div
            key={index}
            className="border-4 border-green-600 p-4 rounded-lg w-full bg-white"
          >
            <h2 className="text-xl font-semibold pl-6">{section.title}</h2>
            <ul className="list-none pl-6 pt-5 space-y-5">
              {section.items.map((item, i) => (
                <li key={i} className="relative flex items-center">
                  <span className="w-2 h-2 bg-orange-400 rounded-full inline-block mr-3"></span>
                  <span className="flex-1 border-b border-gray-300 pb-1">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Second;

