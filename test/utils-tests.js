var expect = require('chai').expect,
	utils = require('../lib/utils');

describe('utility methods', function() {

	describe('formatDate()', function () {
		it('should format a date correctly', function() {
			expect(utils.formatDate(new Date(1967, 2, 13))).to.equal('1967-03-13');
		});
	});

	describe('formatPeriod()', function () {

		it('should get an empty string if the period is undefined', function () {
			expect(utils.formatPeriod(undefined)).to.equal('');
			expect(utils.formatPeriod()).to.equal('');
		});

		it('should get the correct period string for a day', function () {
			expect(utils.formatPeriod('day')).to.equal('/1d');
			expect(utils.formatPeriod('1d')).to.equal('/1d');
		});

		it('should get the correct period string for a week', function () {
			expect(utils.formatPeriod('week')).to.equal('/1w');
			expect(utils.formatPeriod('1w')).to.equal('/1w');
			expect(utils.formatPeriod('7d')).to.equal('/1w');
		});

		it('should get the correct period string for a month', function () {
			expect(utils.formatPeriod('month')).to.equal('/1m');
			expect(utils.formatPeriod('1m')).to.equal('/1m');
			expect(utils.formatPeriod('30d')).to.equal('/1m');
		});

		it('should get the correct period string for a date', function () {
			expect(utils.formatPeriod(new Date(2013, 2, 10))).to.equal('/2013-03-10');
		});
	});
});