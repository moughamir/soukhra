Template.profile.helpers({
    username: function(){
        return Meteor.user().username;
    },
    credit: function(){
        return Meteor.user().profile.credit;
    },
    admin: function(){
        if(Meteor.user().profile.role == 'admin'){
            return true;
        }
    },
    phone: function(){
        return Meteor.user().profile.phone;
    }
});