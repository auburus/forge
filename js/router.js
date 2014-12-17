App.Router.map(function(){
	this.resource('application', {path: '/' });
});

App.ApplicationRoute = Ember.Route.extend({
	model: function(){
		return this.store.find('release');
	}
});
