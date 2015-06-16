Inventory = new Mongo.Collection('inventory');
Inventory.allow({
  insert: function(){
    return true;
  },
  update: function(){
    return true;
  },
  remove: function(){
    return true;
  }

});
