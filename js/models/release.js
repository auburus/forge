App.Release = DS.Model.extend({
	name: DS.attr('string'),
	tasks: DS.hasMany('task', {async: true}),
});

App.Release.FIXTURES = [
	{id: 1, name: "Rel. 28", tasks: [1,2,3]},
	{id: 2, name: "Rel. 29", tasks: [4,5]}
];
