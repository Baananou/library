const Customer = require("../Customer");

module.exports = {
  Query: {
    async customer(_, { ID }) {
      return await Customer.findById(ID);
    },
    async getCustomers(_, { amount }) {
      return await Customer.find().sort({ createdAt: -1 }).limit(amount);
    },
  },
  Mutation: {
    async createCustomer(_, { CustomerInput: { name, email, age } }) {
      const createdCustomer = new Customer({
        name: name,
        email: email,
        age: age,
        createdAt: new Date().toISOString(),
      });
      const res = await createdCustomer.save(); // save Customer to mongodb
      console.log(res._doc);
      return {
        id: res.id,
        ...res._doc,
      };
    },
    async deleteCustomer(_, { ID }) {
      const wasDeleted = (await Customer.deleteOne({ _id: ID })).deletedCount;
      return wasDeleted; // deletecount will return 1 if smth is deleted and 0 if nothing is deleted
    },
    async editCustomer(_, { ID, customerInput: { name, email, age } }) {
      const wasEdited = (
        await Customer.updateOne(
          { _id: ID },
          { name: name, email: email, age: age }
        )
      ).modifiedCount;
      return wasEdited;
    },
  },
};
