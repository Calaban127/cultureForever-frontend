const Query = {
  //parent = parent schema of gql
  //cookies etc will be found in ctx
  dogs(parent, args, ctx, info) {
    //return [{ name: "Snickers" }, { name: "Sunny" }];
    global.dogs = global.dogs || [];
    return global.dogs;
  }
};

module.exports = Query;
