/*

Default Settings < Global Settings < User Settings

Global settings stored at Meteor.settings.locale.x
User settings stored at Meteor.user[y].profile.locale.x
 */


Meteor.userLocale = {
	shortDateFormat: shortDateFormat,
	longDateFormat: longDateFormat,
	timeFormat: timeFormat
};

function shortDateFormat() {
	var user = Meteor.user();
	var format = (((user || {}).profile || {}). locale || {}).shortDateFormat;
	format = format || ((Meteor.settings || {}).locale || {}).shortDateFormat;
	return format || 'l';
}

function longDateFormat() {
	var user = Meteor.user();
	var format = (((user || {}).profile || {}). locale || {}).longDateFormat;
	format = format || ((Meteor.settings || {}).locale || {}).longDateFormat;
	return format || 'LL';
}

function timeFormat() {
	var user = Meteor.user();
	var format = (((user || {}).profile || {}). locale || {}).timeFormat;
	format = format || ((Meteor.settings || {}).locale || {}).timeFormat;
	return format || 'LT';
}


UI.registerHelper('shortDate', function(v){
	return moment(v).format(shortDateFormat());
});

UI.registerHelper('longDate', function(v){
	return moment(v).format(longDateFormat());
});

UI.registerHelper('time', function(v){
	return moment(v).format(timeFormat());
});
