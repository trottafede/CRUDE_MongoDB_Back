const customQuery = require("../db/customQuery");
class User {
  name;
  email;
  static async index() {
    const result = await customQuery("find", {});
    return result;
  }

  static async create(data) {
    const result = await customQuery("create", data);
    return result;
  }

  static async update(data) {
    const result = await customQuery("update", data);
    return result;
  }

  static async destroy(data) {
    const result = await customQuery("destroy", data);
    return result;
  }
}

module.exports = User;
