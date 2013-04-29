var _ = require('lodash');

_.string = require('underscore.string');
_.mixin(_.string.exports());

exports.formatDate = function (date) {
	return _.strLeft(date.toISOString(), 'T');
};

/**
 * returns a date or a period denoted by 'day', 'week', or 'month' in a format
 * that can be used in a route (return value will start with the '/' character
 *
 * returns undefined if undefined is passed as the period
 *
 * @param period
 * @returns {string}
 */
exports.formatPeriod = function(period) {
	if (_.isUndefined(period)) { return ''; }

	if (_.isDate(period)) { return '/' + exports.formatDate(period); }

	//noinspection FallthroughInSwitchStatementJS
	switch(period) {
		case 'day':
		case '1d':
			return '/1d';

		case 'week':
		case '1w':
		case '7d':
			return '/1w';

		case 'month':
		case '30d':
		case '1m':
			return '/1m';

		default:
			return '';
	}
};