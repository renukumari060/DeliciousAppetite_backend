const { Router } = require("express");
const auth = require("../auth/middleware");
const Recipe = require("../models").recipe;
const Ingredient = require("../models").ingredient;
const router = new Router();

//Homepage:
//http GET :4000/recipe

router.get("/", async (req, res, next) => {
  try {
    const recipes = await Recipe.findAll({ include: [Ingredient] });
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

module.exports = router;
