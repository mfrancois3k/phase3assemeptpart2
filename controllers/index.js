// make crud functions for controllers
const LambRecipe = require("../models/lambRecipes");
const OriginCountry = require("../models/originCountry");

const createLambRecipe = async (req, res) => {
    const { title, origin_country, ingredients, picture } = req.body;
    const originCountry = await OriginCountry.findOne({ name: origin_country });
    const lambRecipe = await new LambRecipe({
        title,
        origin_country: originCountry._id,
        ingredients,
        picture,
    });
    await lambRecipe.save();
    res.status(201).json({
        message: "lamb recipe created successfully",
        lambRecipe,
    });
    };

    const getLambRecipes = async (req, res) => {
        const lambRecipes = await LambRecipe.find();
        res.status(200).json({
            message: "lamb recipes fetched successfully",
            lambRecipes,
        });
        };

        const getSingleRecipe = async (req, res) => {
            const { id } = req.params;
            const lambRecipe = await LambRecipe.findById(id);
            res.status(200).json({
                message: "lamb recipe fetched successfully",
                lambRecipe,
            });
            };

            const updateLambRecipe =  (req, res) => {
                const { id } = req.params;
                const { title, origin_country, ingredients, picture } = req.body;
                const originCountry =  OriginCountry.findOne({ name: origin_country });
                const lambRecipe = LambRecipe.findByIdAndUpdate(
                    id,
                    {
                        title,
                        origin_country: originCountry._id,
                        ingredients,
                        picture,
                    },
                    { new: true }
                );
                res.status(200).json({
                    message: "lamb recipe updated successfully",
                    lambRecipe,
                });
                };

                const deleteLambRecipe = async (req, res) => {
                    const { id } = req.params;
                    await LambRecipe.findByIdAndDelete(id);
                    res.status(200).json({
                        message: "lamb recipe deleted successfully",
                    });
                    };

                    module.exports = {
                        createLambRecipe,
                        getLambRecipes,
                        getSingleRecipe,
                        updateLambRecipe,
                        deleteLambRecipe,
                    };

                    // Compare this snippet from controllers\index.js: