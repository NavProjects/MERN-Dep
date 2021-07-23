const ExamController = require("../controllers/exam.controller")

module.exports = app => {
    app.get("/api/test" , ExamController.test);
    app.get("/api/pets", ExamController.allPets);
    app.post("/api/pets/new", ExamController.createPet);
    app.get("/api/pets/:_id", ExamController.findOnePet);
    app.put("/api/pets/:_id", ExamController.updatePet);
    app.delete("/api/pets/delete/:_id", ExamController.deletePet);
}

