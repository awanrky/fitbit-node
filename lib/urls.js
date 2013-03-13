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
	 * @param args {Array}
	 *	args[0] = date
	 *	args[1] = period
	 *	args[2] = user
	 * @returns {string}
	 */
	this.getBodyWeightUrl = function (args) {
		args = args || [];
		var date = utils.formatDate(args[0] || new Date());
		var period = utils.formatPeriod(args[1]);
		var user = args[2] || '-';

		return that.getUrl('user/' + user + '/body/log/weight/date/' + date + period + '.json');
	};

	/**
	 * returns a resource url to get all the user's body fat entries for a given time period
	 *
	 * @param args {Array}
	 *	args[0] = date
	 *	args[1] = period
	 *	args[2] = user
	 * @returns {string}
	 */
	this.getBodyFatUrl = function (args) {
		args = args || [];
		var date = utils.formatDate(args[0] || new Date());
		var period = utils.formatPeriod(args[1]);
		var user = args[2] || '-';

		return that.getUrl('user/' + user + '/body/log/fat/date/' + date + period + '.json');
	};

	/**
	 * returns a resource url to get the user's profile
	 *
	 * @param args {Array}
	 *	args[0] = user
	 * @returns {string}
	 */
	this.getUserProfileUrl = function (args) {
		args = args || [];
		var user = args[0] || '-';

		return that.getUrl('user/' + user + '/profile.json');
	};

	/**
	 * returns a resource url to get the user's heart rate
	 *
	 * @param args {Array}
	 *	args[0] = user
	 *	args[1] = date
	 * @returns {string}
	 */
	this.getHeartRateUrl = function (args) {
		args = args || [];
		var user = args[0] || '-';
		var date = utils.formatDate(args[1] || new Date());

		return that.getUrl('user/' + user + '/heart/date/' + date + '.json');
	};

	/**
	 * returns a resource url to get the user's blood pressure
	 *
	 * @param args {Array}
	 *	args[0] = user
	 *	args[1] = date
	 * @returns {string}
	 */
	this.getBloodPressureUrl = function (args) {
		args = args || [];
		var user = args[0] || '-';
		var date = utils.formatDate(args[1] || new Date());

		return that.getUrl('user/' + user + '/bp/date/' + date + '.json');
	};

	/**
	 * returns a resource url to get the user's glucose
	 *
	 * @param args {Array}
	 *	args[0] = user
	 *	args[1] = date
	 * @returns {string}
	 */
	this.getGlucoseUrl = function (args) {
		args = args || [];
		var user = args[0] || '-';
		var date = utils.formatDate(args[1] || new Date());

		return that.getUrl('user/' + user + '/glucose/date/' + date + '.json');
	};
};