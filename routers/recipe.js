const { Router } = require("express");
const auth = require("../auth/middleware");
const Recipe = require("../models").recipe;
const Ingredient = require("../models").ingredient;
const Category = require("../models").category;
const User = require("../models").user;
const Comment = require("../models").comment;
const router = new Router();

//Homepage:
//http GET :4000/recipe

router.get("/", async (req, res, next) => {
  try {
    const recipes = await Recipe.findAll({
      where: { isPublic: true },
      include: [Ingredient, Comment],
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

//Form for posting recipes.
//http POST :4000/recipe/ title="sweets" videoUrl="www.photo"

router.post("/", auth, async (req, res, next) => {
  try {
    const {
      title,
      videoUrl,
      time,
      serving,
      filter,
      steps,
      isPublic,
      ingredients,
    } = req.body;

    const category = await Category.findOne({
      where: { categoryName: filter },
    });

    const newRecipe = await Recipe.create({
      title,
      videoUrl,
      time,
      serving,
      steps,
      isPublic,
      userId: req.user.id,
      categoryId: category?.id,
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
//get categories
//http GET :4000/recipe/category

router.get("/category", async (req, res, next) => {
  try {
    const categories = await Category.findAll({ include: [Recipe] });
    console.log(categories);
    if (!categories) {
      res.status(404).send("categories not found!");
    } else {
      res.json(categories);
    }
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

//MyRecipes:
//http GET :4000/recipe/myrecipes

router.get("/myrecipes", auth, async (req, res, next) => {
  try {
    const myrecipes = await Recipe.findAll({
      where: { userId: req.user.id },
      include: [Ingredient],
    });
    console.log(myrecipes);
    if (!myrecipes) {
      res.status(404).send("Recipes not found!");
    } else {
      res.json(myrecipes);
    }
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

//Form for posting comment.
//http POST :4000/recipe/comment/ comment="nice"

router.post("/:recipeId", auth, async (req, res, next) => {
  try {
    const { recipeId } = req.params;
    const { comment, rating } = req.body;

    console.log("user", req.user);

    const newComment = await Comment.create({
      commentContent: comment,
      userName: req.user.name,
      userId: req.user.id,
      recipeId,
      rating,
    });

    return res.status(201).send({ message: "Comment Added", newComment });
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

//DetailsPage:
router.get("/:id", async (req, res) => {
  const { id } = req.params;

  console.log("details id", id);

  if (isNaN(parseInt(id))) {
    return res.status(400).send({ message: "Recipe id is not a number" });
  }

  const recipe = await Recipe.findByPk(id, {
    include: [Ingredient, Comment, Category],
    order: [[Ingredient, "createdAt", "DESC"]],
  });
  console.log(recipe);
  if (recipe === null) {
    return res.status(404).send({ message: "Recipe not found" });
  }

  res.status(200).send({ message: "ok", recipe });
});

module.exports = router;
