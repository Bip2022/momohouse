import line from "../../assets/allergy/line.png";
import img1 from "../../assets/allergy/allergy2(1).png";
import img2 from "../../assets/allergy/backgr.png";
import img3 from "../../assets/allergy/allergy2(3).png";
import "@fontsource/chela-one";

function Second() {
  return (
    <div className=" relative w-full min-h-screen flex flex-col items-center justify-center">
      {/* Background Images */}
      <img src={img1} alt="background" className="absolute left-[460px] top-[95px] w-[380px] h-[340px]" />
      <img src={img2} alt="background" className="absolute top-[520px] w-[1400px] h-[800px]" />
      <img src={img3} alt="background" className="absolute  right-[400px] top-[1520px] bottom-0 w-[230px] h-[260px]" />

      {/* Section Title */}
      <h1 className="relative inline-flex items-center justify-center gap-4 mb-12 z-10 text-[40px] leading-[48px]">
        <img src={line} alt="decorative line" className="w-24 h-1" />
        <span className="text-orange-500 font-chela-one">Ingredients</span>
        <span className="text-[#101828] font-chela-one">Used</span>
        <img src={line} alt="decorative line" className="w-24 h-1" />
      </h1>

      {/* Ingredients Sections */}
      <div className="relative flex flex-col mt-12 space-y-6 items-center w-full max-w-2xl z-10">
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
            className="border-4 border-green-600 p-4 rounded-lg w-full bg-white bg-opacity-80"
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
