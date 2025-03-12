import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchDrink } from "../redux/Info/infoSlice";
import './drink.css'

function CoctailInfo() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { drink, loading, error } = useSelector((state) => state.drink);

  useEffect(() => {
    dispatch(fetchDrink(id));
  }, [dispatch, id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;
  if (!drink) return <p>No cocktail found.</p>;

  const ingredients = [];
  for (let i = 1; i <= 15; i++) {
    const ingredient = drink[`strIngredient${i}`];
    const measure = drink[`strMeasure${i}`];

    if (ingredient) {
      ingredients.push({
        name: ingredient,
        measure: measure || "",
        image: `https://www.thecocktaildb.com/images/ingredients/${ingredient}-Small.png`
      });
    }
  }

  return (
    <div className="CoctailInfoContainer">
      <div className="CoctailInfoGrid">
        <div className="heroCoctail">
          <h1>{drink.strDrink}</h1>
          <img src={drink.strDrinkThumb} alt={drink.strDrink} />
        </div>
        <div>
          <div className="IngredientsGrid">
            {ingredients.map((ing, index) => (
              <div key={index} className="IngredientCard">
                <img src={ing.image} alt={ing.name} />
                <p>{ing.measure} {ing.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="Instructions">
        <p>{drink.strInstructions}</p>
      </div>
    </div>
  );
}

export default CoctailInfo;