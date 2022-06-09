// make routes from controllers folder 
const { Router } = require("express");
const constrollers = require("../controllers");
const router = Router();

router.get('/', (req, res) => res.send('Home'));
router.get('/lamb_recipes', constrollers.getLambRecipes);
router.get('/lamb_recipes/:id', constrollers.getSingleRecipe);

router.post('/create_lamb_recipes', constrollers.createLambRecipe);
router.put('/update_lamb_recipes/:id', constrollers.updateLambRecipe);
router.delete('/delete_lamb_recipes/:id', constrollers.deleteLambRecipe);

module.exports = router;
