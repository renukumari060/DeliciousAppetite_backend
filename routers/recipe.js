const { Router } = require("express");
const auth = require("../auth/middleware");
const Recipe = require("../models").recipe;
const Ingredient = require("../models").ingredient;
const User = require("../models").user;
const router = new Router();

//Homepage:
//http GET :4000/recipe

router.get("/", async (req, res, next) => {
  try {
    const recipes = await Recipe.findAll({
      where: { isPublic: true },
      include: [Ingredient],
    });
    console.log(recipes);
    if (!recipes) {
      res.status(404).send("Recipes not found!");
    } else {
      res.json(recipes);
    }
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

//DetailsPage:

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  //console.log("details id", id);

  if (isNaN(parseInt(id))) {
    return res.status(400).send({ message: "Recipe id is not a number" });
  }

  const recipe = await Recipe.findByPk(id, {
    include: [Ingredient],
    order: [[Ingredient, "createdAt", "DESC"]],
  });
  console.log(recipe);
  if (recipe === null) {
    return res.status(404).send({ message: "Recipe not found" });
  }

  res.status(200).send({ message: "ok", recipe });
});

//Form for posting recipes.
//http POST :4000/recipe/ title="sweets" videoUrl="www.photo"

router.post("/", auth, async (req, res) => {
  try {
    const { title, videoUrl, time, serving, steps, isPublic, ingredients } =
      req.body;

    const newRecipe = await Recipe.create({
      title,
      videoUrl,
      time,
      serving,
      steps,
      isPublic,
      userId: req.user.id,
    });

    const addIngredients = ingredients.map(async (item) => {
      const newIngredients = await Ingredient.create({
        text: item.text,
        amount: item.amount,
        units: item.units,
        recipeId: newRecipe.id,
      });
      return newIngredients;
    });

    await Promise.all(addIngredients);

    return res.status(201).send({ message: "Recipes created", newRecipe });
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

module.exports = router;
