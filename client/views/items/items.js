
var order = [];
  /*events*/
Template.items.events({
    'click #delete-button': function(){
        Items.remove(this._id);
    },
    'click #add-button': function(event, template){
        var id = this._id.toString();
        var name = Items.findOne({_id: id}).name;
        var price = Items.findOne({_id: id}).price;
        var item = {
            name: name,
            price: price
        }
        order.push(item);
        console.log(order);
        Session.setPersistent('order', order);
        document.getElementById("added").style.display = "block";
        $( "#added" ).fadeOut(600);
    }
});
  /*helpers*/
  
Template.items.helpers({
    items: function(){
        
        return Items.find();
    },
    admin: function(){
        if(Meteor.user().profile.role == 'admin'){
            return true;
        }
    }
});