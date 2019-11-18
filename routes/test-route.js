const router = require("express").Router();

const Users = require("../models/users-model");

router.get("/users", (req, res) => {
    Users.get()
    .then(users => res.json(users))
    .catch(err => res.json({ error: "Failed" }))
});

module.exports = router;