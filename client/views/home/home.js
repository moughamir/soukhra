 /*events*/
 
Template.home.events({
    'click #add-order': function(){
        
    }
});

 /* helpers*/

Template.home.helpers({
    'orders': function(){
        return Orders.find();
    }
});