 /*events*/

Template.categories.events({
    'click .groceries': function(){
        var category = 'groceries';
        console.log(category);
        Session.setPersistent('category', category);
    },
    'click .food': function(){
        var category = 'food';
        console.log(category);
        Session.setPersistent('category', category);
    },
    'click .dryCleaning': function(){
        var category = 'dry cleaning';
        Session.setPersistent('category', category);
    }
});

 /*helpers*/
 
