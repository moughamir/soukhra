Meteor.startup(function () {
    navigator.geolocation.getCurrentPosition(success);
  });
success = function(position){
    console.log(position.coords);
    var coords = position.coords.latitude;
    Session.set('location', coords);
    console.log(Session.get('location'));
};


