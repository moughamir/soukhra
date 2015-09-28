Template.signup.events({
    'click .signup': function(event, template){
        event.preventDefault();
        var email = template.find('.signupEmail').value.toLowerCase();
        var username = template.find('.signupUsername').value;
        var password = template.find('.signupPassword').value;
        var cPassword = template.find('.signupCPassword').value;
        function validateEmail(email) {
            var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
             return re.test(email);
        }
        if(password == cPassword && validateEmail(email)){
            Accounts.createUser({
                username: username,
                email: email,
                password: password,
                profile: {
                     name: username,
                     credit: 5,
                     role: 'admin'
                }
            }, function(){
                email = "";
                username = "";
                password = "";
                cPassword = "";
            });
        }else if(validateEmail(email) === false){
            $('emailErr').css("visibility", "visible");
        }else{
            $('matchErr').css("visibility", "visible");
        }
        
    }
        
});