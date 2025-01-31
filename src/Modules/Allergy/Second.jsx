import line from "../../assets/line.png";
import "@fontsource/chela-one";

function Second() {
  return (
    <div className="p-6">
      {/* Section Title */}
      <h1 className="flex items-center justify-center gap-4 mb-12">
        <img src={line} alt="line" className="w-24 h-1" />
        <span className="text-orange-500 font-chela-one text-4xl">Ingredients</span>
        <span className="text-[#101828] font-chela-one text-4xl">Used</span>
        <img src={line} alt="line" className="w-24 h-1" />
      </h1>

      {/* Ingredients Sections */}
      <div className="space-y-6">
        {/* Dough Section */}
        <div>
          <h2 className="text-xl font-semibold">For the Dough</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>120 gms refined flour</li>
            <li>1/4 tsp baking powder</li>
            <li>1/2 tsp salt water (for kneading)</li>
          </ul>
        </div>

        {/* Chicken Filling Section */}
        <div>
          <h2 className="text-xl font-semibold">For the Chicken Filling</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>1 cup chicken (minced)</li>
            <li>1/2 cup onions, finely chopped</li>
            <li>1/4 tsp black pepper powder</li>
            <li>1 tbsp oil</li>
            <li>1/2 tsp garlic paste</li>
            <li>1/2 tsp soya sauce</li>
            <li>Salt</li>
            <li>1/4 tsp vinegar</li>
          </ul>
        </div>

        {/* Vegetarian & Sauce Section */}
        <div className="space-y-6">
          {/* Vegetarian Filling */}
          <div>
            <h2 className="text-xl font-semibold">For the Vegetarian Filling</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>1 cup cabbage and carrots, grated</li>
              <li>2 tbsp onions, finely chopped</li>
              <li>1/2 tsp garlic, finely chopped</li>
              <li>1 tbsp oil</li>
              <li>1/4 tsp vinegar</li>
              <li>1/2 tsp soya sauce</li>
              <li>Salt to taste</li>
              <li>Pepper to taste</li>
              <li>1 tbsp cornflour</li>
            </ul>
          </div>

          {/* Chilli Sauce Section */}
          <div>
            <h2 className="text-xl font-semibold">For Chilli Sauce</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>25 gram garlic, peeled</li>
              <li>6 gms whole red chillies</li>
              <li>3 tbsp vinegar</li>
              <li>1 tbsp oil</li>
              <li>Salt to taste</li>
              <li>Sugar to taste</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Second;