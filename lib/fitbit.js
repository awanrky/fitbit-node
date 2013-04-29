var _ = require('lodash'),
	Urls = require('./urls'),
	Oauth = require('oauth').OAuth
	defer = require('node-promise').defer;

_.string = require('underscore.string');
_.mixin(_.string.exports());

module.exports = function (settings, user) {

	var urls = new Urls(settings);

	var oauth = new Oauth(
		settings.requestTokenUrl,
		settings.accessTokenUrl,
		settings.consumerKey,
		settings.consumerSecret,
		settings.version,
		settings.callbackUrl,
		settings.signatureMethod
	);

	function get(url) {
		var deferred = defer();
		oauth.get(
			url,
			user.accessToken,
			user.accessTokenSecret,
			function(error) {
				if (_.isNull(error)) {
//					console.log(arguments[1]);
					var args = _.toArray(arguments);
					args.shift();
					deferred.resolve(args[0], args[1]);
				} else {
					deferred.reject(error);
				}
			}
		);
		return deferred.promise;
	}

	/**
	 * gets all the user's body weight entries for a given time period
	 *
	 * @param date {Date} _optional_
	 * @param period {Date} or {string} _optional_
	 * @param user {string} _optional_
	 *
	 * @returns promise {object}
	 */
	this.getBodyWeight = function (date, period, user) {
		return get(urls.getBodyWeightUrl(date, period, user));
	};

	/**
	 * gets all the user's body fat entries for a given time period
	 *
	 * @param date {Date} _optional_
	 * @param period {Date} or {string} _optional_
	 * @param user {string} _optional_
	 */
	this.getBodyFat = function (date, period, user) {
		return get(urls.getBodyFatUrl(date, period, user));
	};

	/**
	 * gets the user's profile
	 *
	 * @param user {string} _optional_
	 */
	this.getUserProfile = function (user) {
		return get(urls.getUserProfileUrl(user));
	};

	/**
	 * gets the user's heart rate
	 *
	 * @param user {string} _optional_
	 * @param date {Date} _optional_
	 */
	this.getHeartRate = function (user, date) {
		return get(urls.getHeartRateUrl(user, date));
	};

	/**
	 * gets the user's blood pressure
	 *
	 * @param user {string} _optional_
	 * @param date {Date} _optional_
	 */
	this.getBloodPressure = function (user, date) {
		return get(urls.getBloodPressureUrl(user, date));
	};

	/**
	 * gets the user's glucose
	 *
	 * @param user {string} _optional_
	 * @param date {Date} _optional_
	 */
	this.getGlucose = function (user, date) {
		return get(urls.getGlucoseUrl(user, date));
	};
};