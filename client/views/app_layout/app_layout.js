
 /*Events*/




   /* Helpers */
   
Template.appLayout.helpers({
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
    }
});
