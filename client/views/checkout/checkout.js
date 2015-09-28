
 /*events*/

Template.checkout.events({
    'click .delete': function(event, template){
        console.log(this.name);
        var order = Session.get('order');
        console.log(order);
        for(var i =0; i<order.length; i++){
            if(order[i].name == this.name){
                var index = order.indexOf(order[i]);
                if (index > -1) {
                    order.splice(index, 1);
                    Session.update('order', order);
                }
                break;
            }
        }
    },
    'click .confirm': function(event, template){
        var order = Session.get('order');
        var total = Session.get('total');
        var category = Session.get('category');
        var id = Orders.insert({
            items: order,
            total: total,
            category: category,
            owner: Meteor.userId(),
            time: Date.now(),
            status: 'initiated',
            delTime: 30
        });

        Session.update('order', []);
        Session.update('total', 0);
        Session.update('category', "");
    }
});

 /*helpers*/

Template.checkout.helpers({
    items: function(){
        var order = Session.get('order');
        order.sort(function(a, b){
         var nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase();
         if (nameA < nameB)
          return -1 ;
         if (nameA > nameB)
          return 1;
         return 0; 
        });
        return order;
    },
    total: function(){
        var order = Session.get('order');
        var total = 0;
        for(var i =0; i<order.length; i++){
            total += parseInt(order[i].price);
        }
        Session.set('total', total);
        return total;
    },
    enough: function(){
        var credit = Meteor.user().profile.credit + 150;
        var total = Session.get('total');
        var dif = credit - total;
        if(dif<0){
            return false;
        }else{
           return true; 
        }
        
    }
});

    