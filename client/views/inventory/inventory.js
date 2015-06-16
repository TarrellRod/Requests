Template.inventory.rendered = function(){

};
Template.inventory.helpers({
  InView: function(){
    return Inventory.find();

  }
});

Template.inventory.events({
  "submit form": function(event){
     event.preventDefault();
     var tbl8 = event.target.tbl8.value;
     var tbl6 = event.target.tbl6.value;
     var metChair = event.target.metChair.value;
     var whiteChair = event.target.whiteChair.value;
     Inventory.insert({
       table8Ft:tbl8,
       table6Ft:tbl6,
       metalChair:metChair,
       whiteChair:whiteChair
     });
  }
});
