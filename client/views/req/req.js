
Template.req.rendered = function() {
  $('[data-toggle="popover"]').popover()
  this.$('.date').datepicker();
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


  },
  'submit form': function(event){
    event.preventDefault();
    var first = event.target.firstName.value;
    var last = event.target.lastName.value;
    var date = event.target.date.value;
    Requests.insert({
      first: first,
      last: last,
      date: date
    });
    event.target.firstName.value ="";
    event.target.lastName.value = "";
    event.target.date.value = "";
    return false;
    console.log("got it");
    console.log(event.type);
  }
});
