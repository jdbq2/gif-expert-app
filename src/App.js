import React, { useState } from "react";
import Addcategory from "./components/Addcategory";
import GifResult from "./components/GifResult";
const App = (props) => {
  const [categories, setCategories] = useState(["Vikings"]);
  const handleAdd = (cat) => {
    let newCat = [...categories];
    newCat.unshift(cat);
    setCategories(newCat);
  };
  return (
    <>
      <h2>GifExpertApp</h2>
      <Addcategory addCategories={handleAdd} />
      <hr />
      <ol>
        {categories.map((el) => {
          return (
            <li key={el}>
              <GifResult categorie={el} />
            </li>
          );
        })}
      </ol>
    </>
  );
};

export default App;
