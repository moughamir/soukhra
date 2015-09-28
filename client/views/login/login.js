Template.login.events({
    'submit #loginForm': function(event, template){
        event.preventDefault();
        var email = template.find('.email').value.toLowerCase();
        var password = template.find('.password').value;
        Meteor.loginWithPassword(
            email, 
            password,
            function(error){
                email = "";
                password = "";
                console.log(error);
            }    
        );
    }
});