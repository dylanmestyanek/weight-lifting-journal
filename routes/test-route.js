const router = require("express").Router();

const Users = require("../config/db-config");

router.get("/users", (req, res) => {
    Users.get()
    .then(users => res.json(users))
    .catch(err => res.json({ error: "Failed" }))
});

module.exports = router;