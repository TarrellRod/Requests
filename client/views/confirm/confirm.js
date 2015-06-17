Template.confirm.rendered = function(){

    return Requests.find();

}
Template.confirm.helpers({
  requests: function(){
    return Requests.find();
  },
  inventory: function () {
    return Inventory.find();
  }
});

Template.confirm.events({
  "submit .button": function(event, template){
    Meteor.call('updateInv');
  }
});
