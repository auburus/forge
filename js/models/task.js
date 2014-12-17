App.Task = DS.Model.extend({
	name: DS.attr('string'),
	release: DS.belongsTo('release', {async:true})
});

App.Task.FIXTURES = [
	{id: 1, name: 'task 1', release: 1},
	{id: 2, name: 'task 2', release: 1},
	{id: 3, name: 'task 3', release: 1},
	{id: 4, name: 'task 4', release: 2},
	{id: 5, name: 'task 5', release: 2}
];
