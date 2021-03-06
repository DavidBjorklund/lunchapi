const db = require("../models");
const config = require("../config/auth.config");
const User = db.user;
const Role = db.role;

const Op = db.Sequelize.Op;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};

exports.userBoard = (req, res) => {
  res.status(200).send("User Content.");
};

exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};

exports.moderatorBoard = (req, res) => {
  res.status(200).send("Moderator Content.");
};

exports.userFavourites = (req, res) => {
  User.findOne({
    where: {
      username: req.body.username
    }
  }).then(user => {
    user.update({
      favourites: req.body.favourites
    })
    res.status(200).send({
      id: user.id,
      username: user.username,
      email: user.email,
      favourites: user.favourites,
      mode: user.mode,
      school: user.school
    });
  })
};

exports.userSchool = (req, res) => {
  User.findOne({
    where: {
      username: req.body.username
    }
  }).then(user => {
    user.update({
      school: req.body.school
    })
    res.status(200).send({
      id: user.id,
      username: user.username,
      email: user.email,
      favourites: user.favourites,
      mode: user.mode,
      school: user.school
    });
  })
};

exports.userMode = (req, res) => {
  User.findOne({
    where: {
      username: req.body.username
    }
  }).then(user => {
    user.update({
      mode: req.body.mode
    })
    res.status(200).send({
      id: user.id,
      username: user.username,
      email: user.email,
      favourites: user.favourites,
      mode: user.mode,
      school: user.school
    });
  })
};


exports.userForgot = (req, res) => {
  res.status(200).send({
    message: "Email Does Not Exist!"
  });
};
