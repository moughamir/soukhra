Router.configure({
    layoutTemplate: 'appLayout',
    loadingTemplate: 'loading',
    notFoundTemplate: 'notFound',
});

Router.route('/', {
  name: 'main',
  controller: 'MainController'
});
Router.route('/signup', {
  name: 'signup',
  controller: 'SignupController'
});
Router.route('/profile', function(){
    this.render('profile', {
        data: function(){
            return true;
        }
    });
});
Router.route('/admin', function(){
    this.render('admin', {
        data: function(){
            return true;
        }
    });
});
Router.route('/logout', {
  name: 'logout',
  controller: 'LogoutController'
});
Router.route('/items', {
  name: 'items',
  controller: 'ItemsController'
});
Router.route('/checkout', {
  name: 'checkout',
  controller: 'CheckoutController'
});
Router.route('/categories', function(){
    this.render('categories', {
        data: function(){
            return true;
        }
    });
});
Router.route('/order/:_id', {
  name: 'order',
  controller: 'OrderController'
});

  /* CONTROLLERS*/
MainController = RouteController.extend({
  template: 'home',

  onBeforeAction: function (pause) {
            if (!Meteor.user()) {
                this.render('login');
             }else{
                 this.next();
             }
        },
    data: function(){
            return true;
        },

  action: function () {
    this.render();
  }
});

SignupController = RouteController.extend({
  template: 'signup',

  onBeforeAction: function (pause) {
            if (Meteor.user()) {
                this.redirect('/');
             }else{
                 this.next();
             }
        },
    data: function(){
            return true;
        },

  action: function () {
    this.render();
  }
});

LogoutController = RouteController.extend({
  template: 'logout',

  onBeforeAction: function (pause) {
            if (Meteor.user()) {
                this.render('logout');
             }else{
                 this.redirect('/');
                 this.next();
             }
        },
    data: function(){
            return true;
        },

  action: function () {
    this.render();
  }
});

ItemsController = RouteController.extend({
  template: 'items',

  onBeforeAction: function (pause) {
      var category = Session.get('category');
            if (category != "") {
                this.next();
             }else{
                this.redirect('/categories');
             }
        },
    data: function(){
            return true;
        },
  action: function () {
    this.render();
  }
});

CheckoutController = RouteController.extend({
  template: 'checkout',

  onBeforeAction: function (pause) {
      var total = Session.get('total');
            if (total == 0) {
                this.redirect('/');
             }else{
                this.next();
             }
        },
    data: function(){
            return true;
        },
  action: function () {
    this.render();
  }
});

OrderController = RouteController.extend({
  template: 'order',
    onBeforeAction: function (pause) {
        if(Meteor.user().profile.role == 'admin'){
                this.next();
        }else{
                this.redirect('/');
        }
    },
    waitOn: function () {
        return Meteor.subscribe('order', this.params._id);
    },
    data: function () {
      return Orders.findOne({_id: this.params._id});
    },
    action: function () {
        this.render();
    }
});