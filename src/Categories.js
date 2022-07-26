const Categories = ({ categories }) => {
  return (
    <>
      {categories.map((c) => {
        return <Category key={c.name} category={c} />;
      })}
    </>
  );
};

const Category = ({ category }) => {
  return (
    <div className="typeOfMeal">
      <h2>{category.name}</h2>
      {category.meals.map((happymeal) => {
        return (
          <div className="ficheMeal">
            <div className="leftPart">
              <h4>{happymeal.title}</h4>
              <p>{happymeal.description}</p>
              <p>{happymeal.price} $</p>
            </div>

            <div className="rightPart">
              {happymeal.picture && (
                <img src={happymeal.picture} alt="image"></img>
              )}{" "}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Categories;
