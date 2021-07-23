const Pet = require("../models/exam.model")

module.exports.test = (req, res) => {
    res.json({
        message:"working"
    })
}

module.exports.allPets = (req, res) => {
    Pet.find({}).sort({type: "asc"})
    .then(getallPets => res.json({getallPets}))
    .catch(err => res.json({err}));
}

module.exports.createPet = (req, res) => {
    Pet.create(req.body)
    .then(newPet => res.json({newPet}))
    .catch(err => res.status(400).json(err));
}

module.exports.findOnePet = (req, res) => {
    Pet.findOne({ _id: req.params._id })
        .then(oneSinglePet => res.json({ pet: oneSinglePet }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.deletePet = (req, res) => {
    Pet.deleteOne({ _id: req.params._id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.updatePet = (req, res) => {
    Pet.findOneAndUpdate(
        { _id: req.params._id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedPet => res.json({ pet: updatedPet }))
        .catch(err => res.status(400).json(err));
}