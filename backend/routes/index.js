const express = require("express");
const authController = require("../controller/authController");
const router = express.Router();
const auth = require("../middlewares/auth");
const blogController = require("../controller/blogController");
const commitController = require("../controller/commentController");

// testing
// router.get("/test", (req, res) => {
//   res.json({ msg: "working!" });
// });

// user

// register
router.post("/register", authController.register);

// login
router.post("/login", authController.login);

// logout
router.post("/logout", auth, authController.logout);

// refresh
router.get("/refresh", authController.refresh);

// blog

// create
router.post("/blog", auth, blogController.create);

// get all

router.get("/blog/all", auth, blogController.getAll);

//  read blogs by id

router.get("/blog/:id", auth, blogController.getById);

// update
router.put("/blog", auth, blogController.update);

// delete
router.delete("/blog/:id", auth, blogController.delete);

// comment
// create comment
router.post("/comment", auth, commitController.create);

// get
router.get("/comment/:id", auth, commitController.getById);

module.exports = router;
