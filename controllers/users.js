const User = require("../models/User");

const index = async (req, res) => {
  const result = await User.index();
  res.send(result);
};

const create = async (req, res) => {
  const result = await User.create(req.body);
  res.send(result);
};

const update = async (req, res) => {
  const result = await User.update(req.body);
  res.send(result);
};

const destroy = async (req, res) => {
  const result = await User.destroy(req.body);
  res.send(result);
};

module.exports = { index, create, update, destroy };
