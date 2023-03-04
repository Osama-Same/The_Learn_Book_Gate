const Admin = require("../model/admin");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const getAdmin = (req, res) => {
  Admin.find((err, result) => {
    if (err) {
      res.send(err);
      console.log(err);
    }
    res.json(result);
  });
};

const newAdmin = (req, res) => {
  let admin = new Admin({
    name: req.body.name,
    password: req.body.password,
    x_trusted: req.body.x_trusted,
  });
  admin.password = bcrypt.hashSync(admin.password, Number("salt"));
  admin
    .save()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
};

const login = async (req, res) => {
  try {
    let name = req.body.name;
    let password = req.body.password;
    let admin = await Admin.findOne({ name });
    if (admin) {
      if (await bcrypt.compare(password, admin.password)) {
        let id = admin.id;
        const token = jwt.sign({ id }, "jwtSecret", {
          expiresIn: process.env.TOKEN_EXPIRATION,
        });
        res.json({ result: admin, token: token });
      } else {
        res.json("Wrong password.");
      }
    } else {
      res.json("Wrong name or password.");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server error Occured");
  }
};


module.exports = {
  getAdmin,
  newAdmin,
  login,
};
