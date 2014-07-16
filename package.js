Package.describe({
  summary: 'User locale methods'
});

Package.on_use(function (api) {
	api.use('underscore', ['client', 'server']);
	api.use('jquery', 'client');

	// for helpers
	api.use('ui', 'client');
	api.use('templating', 'client');

	api.add_files('lib/client/user-locale.js', ['client']);
});
