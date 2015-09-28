  /*Publish*/
Meteor.publish('items', function(){
    return Items.find();
});
Meteor.publish('orders', function(){
    var id = this.userId;
    var role = Meteor.users.findOne("LLsftgrQPbJdo3ge8").profile.role
    if(role == 'admin'){
        return Orders.find();
    }else{
        return Orders.find({owner: id});
    }
});
Meteor.publish('order', function(id){
    return Orders.find({_id: id});
});
  /*Methods*/
 
Meteor.methods({
    updateOrder: function(id){
        var status = Orders.find({_id: id}, {fields: {status:1}}).fetch();
        if(status[0].status == 'initiated'){
            Orders.update(id, {$set: {status: 'waiting'} });
        }else if(status[0].status == 'waiting'){
            Orders.update(id, {$set: {status: 'done'} });
        }else{
            Orders.remove(id);
        }
    }
});