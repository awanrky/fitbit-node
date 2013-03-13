var _ = require('underscore'),
	Urls = require('./urls'),
	Oauth = require('oauth').OAuth;

_.string = require('underscore.string');
_.mixin(_.string.exports());

module.exports = function (settings) {

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

	function splitArguments() {
		var args = _.toArray(arguments[0]);
		var callback = args.pop();
		return {
			callback: callback,
			args: args
		};
	}

	function get(url, callback) {
		oauth.get(
			url,
			settings.currentUser.accessToken,
			settings.currentUser.accessTokenSecret,
			callback
		);
	}

	function getResource(urlFunction, args) {
		var a = splitArguments(args);
		var url = urlFunction(a.args);
		get(url, a.callback);
	}

	//noinspection JSValidateJSDoc,JSCommentMatchesSignature
	/**
	 * gets all the user's body weight entries for a given time period
	 *
	 * @param date {Date} _optional_
	 * @param period {Date} or {string} _optional_
	 * @param user {string} _optional_
	 * @param callback {function}
	 */
	this.getBodyWeight = function () {
		getResource(urls.getBodyWeightUrl, arguments);
	};

	//noinspection JSValidateJSDoc,JSCommentMatchesSignature
	/**
	 * gets all the user's body fat entries for a given time period
	 *
	 * @param date {Date} _optional_
	 * @param period {Date} or {string} _optional_
	 * @param user {string} _optional_
	 * @param callback {function}
	 */
	this.getBodyFat = function () {
		getResource(urls.getBodyFatUrl, arguments);
	};

	//noinspection JSValidateJSDoc,JSCommentMatchesSignature
	/**
	 * gets the user's profile
	 *
	 * @param user {string} _optional_
	 * @param callback {function}
	 */
	this.getUserProfile = function () {
		getResource(urls.getUserProfileUrl, arguments);
	};

	//noinspection JSValidateJSDoc,JSCommentMatchesSignature
	/**
	 * gets the user's heart rate
	 *
	 * @param user {string} _optional_
	 * @param date {Date} _optional_
	 * @param callback {function}
	 */
	this.getHeartRate = function () {
		getResource(urls.getHeartRateUrl, arguments);
	};

	//noinspection JSValidateJSDoc,JSCommentMatchesSignature
	/**
	 * gets the user's blood pressure
	 *
	 * @param user {string} _optional_
	 * @param date {Date} _optional_
	 * @param callback {function}
	 */
	this.getBloodPressure = function () {
		getResource(urls.getBloodPressureUrl, arguments);
	};

	//noinspection JSValidateJSDoc,JSCommentMatchesSignature
	/**
	 * gets the user's glucose
	 *
	 * @param user {string} _optional_
	 * @param date {Date} _optional_
	 * @param callback {function}
	 */
	this.getGlucose = function () {
		getResource(urls.getGlucoseUrl, arguments);
	};
};