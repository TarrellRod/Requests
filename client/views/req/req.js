Template.req.rendered = function() {
  $('[data-toggle="popover"]').popover()
};

Template.req.helpers({
  tables: function(){
    var countChr = 300;
    var used = 5;
     return countChr - used;
  }
});

Template.req.events({

  'click .tableCheck':function(event){
    var numChair = 300;
    console.log(numChair);

  }
});
