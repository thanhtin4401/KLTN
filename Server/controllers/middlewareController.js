const jwt = require("jsonwebtoken");
const middlewareController = {
  //verifyToken
  verifyToken: (req, res, next) => {
    // const token = req.headers["token"];
    // if (token) {
    //   //bearer
    //   const accessToken = token.split(" ")[1];
    //   jwt.verify(accessToken, "Thanhtin4401", (err, user) => {
    //     if (err) {
    //       res.status(403).json("Token is not valid");
    //     }
    //     req.user = user;
    //     //  thoa dieu kien thi di tiep
    //     next();
    //   });
    // } else {
    //   res.status(401).json("You're not authenticated");
    // }
    const authHeader = req.headers["token"];
    const token = authHeader && authHeader.split(" ")[1];

    if (token == null) return res.status(403).json("Token is not valid");

    jwt.verify(token, "Thanhtin4401", (err, user) => {
      if (err) return res.status(401).json("You're not authenticated");
      req.user = user;
      next();
    });
  },
  verifyTokenAndAminAuth: (req, res, next) => {
    middlewareController.verifyToken(req, res, () => {
      if (req.user.id == req.params.id || req.user.role === "admin") {
        next();
      } else {
        res.status(403).json("You're not allowed to delete other");
      }
    });
  },
};
module.exports = middlewareController;
