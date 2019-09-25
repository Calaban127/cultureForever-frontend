const { forwardTo } = require("prisma-binding");

const Query = {
  //allows use same api on client and backend
  items: forwardTo("db")
  //async items(parent, args, ctx, info) {
  // console.log("getting items");
  // const items = await ctx.db.query.items();
  // return items;
};

// async items(parent, args, ctx, info) {
//   console.log('Getting Items!!');
//   const items = await ctx.db.query.items();
//   return items;
// },
//};

module.exports = Query;
