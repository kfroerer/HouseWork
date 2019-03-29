const router = require("express").Router();
const houseController = require("../../controllers/houseController");
cosnt db = require("../../models")
// Matches with "/api/house"
router
  .route("/register")
  .post(houseController.create) 


  

  // .get(houseController.findAll)
  
    
    
    
    
//we need to fix this because the id won't be shown....
// house will be passed through as a header
// Matches with "/api/house/:id"
router
  .route("/")
  .get(houseController.findById)
  .put(houseController.update)
  .delete(houseController.remove);

module.exports = router;


if (req.cookies.token) {
  var user = jwt.verify(req.cookies.token, "your_jwt_secret");
  console.log(user);
  if (user) {
    db.User.findOne({
      where: {
        id: user.id
      },
      include: [db.Account]
    }).then(function(dbUser) {
      return res.render("account", {
        account: dbUser.Accounts
      });
    });
  } else {
    return res.render("login");
  }
} else {
  return res.render("login");
}
});