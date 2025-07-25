const routes = require("express").Router();
const stateController = require("../controllers/StateController");

routes.post("/addstate",stateController.addState);
routes.get("/getallstates",stateController.getAllState);
routes.delete("/deletestatebyid/:id",stateController.deleteStateById)

module.exports = routes;