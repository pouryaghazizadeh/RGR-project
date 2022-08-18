const { frameworkData} = require("../../db/framework.db")
const _ = require("lodash");
const jsFrameworkResolver = {
  Query: {
    allFrameworks: () => {
      return frameworkData;
    },
    framework: (parent, args) => {
      const id = args.id;
      const framework = _.find(frameworkData, { id: Number(id) });
      return framework;
    },
  },
};

module.exports = { jsFrameworkResolver };
