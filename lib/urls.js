var utils = require('./utils');

var settings;

exports = module.exports = function(fitbitSettings) {
	var that = this;
	settings = fitbitSettings;


	this.getUrl = function (path) {
		return settings.baseUrl + path;
	};

	/**
	 * returns a resource url to get all the user's body weight entries for a given time period
	 *
	 *	date {date | string | undefined}
	 *	period {string | undefined}
	 *	user {string | undefined}
	 * @returns {string}
	 */
	this.getBodyWeightUrl = function (date, period, user) {
		var date = utils.formatDate(date || new Date());
		var period = utils.formatPeriod(period);
		var user = user || '-';

		return that.getUrl('user/' + user + '/body/log/weight/date/' + date + period + '.json');
	};

	/**
	 * returns a resource url to get all the user's body fat entries for a given time period
	 *
	 *	date {date | string | undefined}
	 *	period {string | undefined}
	 *	user {string | undefined}
	 * @returns {string}
	 */
	this.getBodyFatUrl = function (date, period, user) {
		var date = utils.formatDate(date || new Date());
		var period = utils.formatPeriod(period);
		var user = user || '-';

		return that.getUrl('user/' + user + '/body/log/fat/date/' + date + period + '.json');
	};

	/**
	 * returns a resource url to get the user's profile
	 *
	 *	user {string | undefined}
	 * @returns {string}
	 */
	this.getUserProfileUrl = function (user) {
		var user = user || '-';

		return that.getUrl('user/' + user + '/profile.json');
	};

	/**
	 * returns a resource url to get the user's heart rate
	 *
	 *	user {string | undefined}
	 *	date {string | date | undefined}
	 * @returns {string}
	 */
	this.getHeartRateUrl = function (user, date) {
		var user = user || '-';
		var date = utils.formatDate(date || new Date());

		return that.getUrl('user/' + user + '/heart/date/' + date + '.json');
	};

	/**
	 * returns a resource url to get the user's blood pressure
	 *
	 *	user {string | undefined}
	 *	date {string | date | undefined}
	 * @returns {string}
	 */
	this.getBloodPressureUrl = function (user, date) {
		var user = user || '-';
		var date = utils.formatDate(date || new Date());

		return that.getUrl('user/' + user + '/bp/date/' + date + '.json');
	};

	/**
	 * returns a resource url to get the user's glucose
	 *
	 *	user {string | undefined}
	 *	date {string | date | undefined}
	 * @returns {string}
	 */
	this.getGlucoseUrl = function (user, date) {
		var user = user || '-';
		var date = utils.formatDate(date || new Date());

		return that.getUrl('user/' + user + '/glucose/date/' + date + '.json');
	};
};