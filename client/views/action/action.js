    /*events*/
 
Template.action.events({
    'dblclick .forAdmin': function(){
        console.log(this._id);
        var id = this._id;
        console.log(id);
        if(Meteor.user().profile.role == 'admin'){
            Meteor.call('updateOrder', id);
        }
    }
}); 

    /*helpers*/
Template.action.helpers({
    initiated: function(){
        var id = this._id;
        var status = Orders.find({_id: id}, {fields: {status:1}}).fetch();
        if(status[0].status == 'initiated'){
            return true;
        }else{
            return false;
        }
    },
    waiting: function(){
        var id = this._id;
        var status = Orders.find({_id: id}, {fields: {status:1}}).fetch();
        if(status[0].status == 'waiting'){
            return true;
        }else{
            return false;
        }
    },
    done: function(){
        var id = this._id;
        var status = Orders.find({_id: id}, {fields: {status:1}}).fetch();
        if(status[0].status == 'done'){
            return true;
        }else{
            return false;
        }
    },
    delTime: function(){
        var id = this._id;
        var time = Orders.find({_id: id}, {fields: {delTime:1}}).fetch(); 
        return time[0].delTime;
    },
    time: function(){
        var id = this._id;
        var time = Orders.find({_id: id}, {fields: {time:1}}).fetch(); 
        return time[0].time;
    },
    admin: function(){
        if(Meteor.user().profile.role == 'admin'){
            return true;
        }
    }
});