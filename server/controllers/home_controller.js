const home = require("express").Router();
const db = require("../models");

home.get("/", async (req, res) => {
  try {
    const foundStages = await Stage.findAll({
      where: {
        stage_name: {
          [Op.like]: `%${req.query.stage_name ? req.query.stage_name : ""}%`,
        },
      },
    });
    res.status(200).json(foundStages);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = home;
