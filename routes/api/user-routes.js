const router = require("express").Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
  updateUser,
  addFriend,
  removeFriend,

} = require("../../controllers/userController");

// /api/users
router.route("/").get(getUsers).post(createUser);

// /api/users/:userId
router.route("/:userId").get(getSingleUser).put(updateUser).delete(deleteUser);
//add update add friend remove friend
router.route('/userId/friends/friendsId').post(addFriend).delete(removeFriend);

module.exports = router;
