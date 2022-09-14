"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "recipes",
      [
        // {
        //   title: "recipe title",
        //   videoUrl: "videoUrl",
        //   time: "time duration",
        //   serving: "string",
        //   isPublic: true,
        //   steps: "steps to prepare",
        //   userId: 1,
        //   createdAt: new Date(),
        //   updatedAt: new Date(),
        // },

        {
          title: "Motichur Ladoo",
          videoUrl: "https://www.youtube.com/embed/DNhlPEwGF1A",
          time: "35 minutes",
          serving: "10 laddoos",
          isPublic: true,
          steps:
            "Firstly, to the hot sugar syrup, add prepared boondi.Mix well and make sure to coat all the boondi with sugar syrupContinue to cook for 2 -3 minutes or until sugar syrup thickens.Cover and keep aside for 10 minutes.After 10 minutes, sugar syrup is absorbed completely by boondi.Add 2 tbsp cashew and 2 tbsp pistachios. mix well.You can see the the mixture is dried and all the sugar syrup has absorbed.Prepare the ladoo taking a small amount of boondi. add milk if required, to make moist laddu.Finally, motichoor laddo is ready to be served or refrigerate for a week.",
          userId: 4,
          categoryId: 1,

          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          title: "Samosa recipe",
          videoUrl: "https://www.youtube.com/embed/AAm95jaoAJc",
          time: "time duration",
          serving: "string",
          isPublic: true,
          steps:
            "Pinch a ball sized dough and grease with oil.Roll the dough into oval shape.Now cut it horizontally, diving into 2 equal portions using a knife.Grease with water and make cone.Stuff 2 tbsp of prepared samosa masala into the cone.Grease little water on the edges.Close and seal tightly by pressing firmly.Deep-fry the samosa on a low flame. alternatively bake at 180 degree celcius for 40 minutes.Stir occasionally, frying the samosa on low flame for atleast 15 minutes.Once the aloo samosa turns golden and crisp, drain off over kitchen paper. Finally, enjoy aloo samosa with green chutney and tamarind chutney.",
          userId: 2,
          categoryId: 3,

          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          title: "Modak Recipe",
          videoUrl: "https://www.youtube.com/embed/KcXhD7vAYmo",
          time: "25 minutes",
          serving: "12 modaks",
          isPublic: true,
          steps:
            "Firstly, take a ball sized rice flour dough and flatten it.With the help of both thumbs start pressing the edges and create a dent in the centre.Slowly press from edges till it forms a cup.Start creating pleats with your index finger and thumb.Now scoop a tbsp of prepared coconut-jaggery stuffing.Get the pleats together to form a bundle.Close the top by pinching and making it pointed.",
          userId: 1,
          categoryId: 3,

          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          title: "Sweet Patoto Kheer",
          videoUrl: "https://www.youtube.com/embed/-FuWmv3sDIE",
          time: "time duration",
          serving: "string",
          isPublic: true,
          steps: "steps to prepare",
          userId: 2,
          categoryId: 2,

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Paneer Masala",
          videoUrl: "https://www.youtube.com/embed/R4Za6SvB-xY",
          time: "time duration",
          serving: "string",
          isPublic: true,
          steps: "steps to prepare",
          userId: 2,
          categoryId: 1,

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Til Ladoo",
          videoUrl: "https://www.youtube.com/embed/J8dOHmWR9Bs",
          time: "time duration",
          serving: "string",
          isPublic: true,
          steps: "steps to prepare",
          userId: 3,
          categoryId: 1,

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Dhokle Recipe",
          videoUrl: "https://www.youtube.com/embed/gIAqWYn3DuY",
          time: "time duration",
          serving: "string",
          isPublic: true,
          steps: "steps to prepare",
          userId: 3,
          categoryId: 2,

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Balushahi Recipe",
          videoUrl: "https://www.youtube.com/embed/QAc429NEgcM",
          time: "time duration",
          serving: "string",
          isPublic: true,
          steps: "steps to prepare",
          userId: 4,
          categoryId: 4,

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Peanut Chikki",
          videoUrl: "https://www.youtube.com/embed/9F5NZZDmEqs",
          time: "time duration",
          serving: "string",
          isPublic: true,
          steps: "steps to prepare",
          userId: 4,
          categoryId: 1,

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Tamarind Chutney",
          videoUrl: "https://www.youtube.com/embed/Z5M-Z63-v3A",
          time: "time duration",
          serving: "string",
          isPublic: true,
          steps: "steps to prepare",
          userId: 1,
          categoryId: 3,

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Eggplant masala",
          videoUrl: "https://www.youtube.com/embed/qkuTBrXA7WA",
          time: "time duration",
          serving: "string",
          isPublic: true,
          steps: "steps to prepare",
          userId: 1,
          categoryId: 2,

          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("recipes", null, {});
  },
};
