const router = require("express").Router();

const authRouter = require("../auth/auth-router");
const usersRouter = require("../routes/test-route");

router.use("/auth", authRouter);
router.use("/users", usersRouter);

module.exports = router;