 function msToTime(s) {
          var ms = s % 1000;
          s = (s - ms) / 1000;
          var secs = s % 60;
          s = (s - secs) / 60;
          var mins = s % 60;
          var hrs = (s - mins) / 60;
        
          return hrs + 'h : ' + mins + 'min : ' + secs +"s" ;
}
Template.order.helpers({
    time: function(){
        var id = this._id;
        var time = Orders.find({_id: id}, {fields: {time:1}}).fetch(); 
        var timeNow = Date.now();
        var difference = timeNow - time[0].time;
        console.log(msToTime(difference));
        return msToTime(difference);
    }
});