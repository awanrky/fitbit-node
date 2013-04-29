describe('urls', function() {

	var expect = require('chai').expect,
		settings = require('../fitbit-private').settings,
		Urls = require('../lib/urls');

	var urls = new Urls(settings);

	describe('body weight', function() {

		it('should get a body weight url for the current user', function () {
			var url = urls.getBodyWeightUrl();
			expect(url).to.contain('user/-/body/log/weight');
		});

		it('should get a body weight url for a date range', function () {
			var url = urls.getBodyWeightUrl(new Date(2013, 0, 1), new Date(2013, 0, 2));
			expect(url).to.contain('user/-/body/log/weight/date/2013-01-01/2013-01-02');
		});

		it('should get a body weight url for a period of a week', function () {
			var url = urls.getBodyWeightUrl(new Date(2013, 2, 13), 'week');
			expect(url).to.contain('user/-/body/log/weight/date/2013-03-13/1w');

			url = urls.getBodyWeightUrl(new Date(2013, 2, 13), '1w');
			expect(url).to.contain('user/-/body/log/weight/date/2013-03-13/1w');

			url = urls.getBodyWeightUrl(new Date(2013, 2, 13), '7d');
			expect(url).to.contain('user/-/body/log/weight/date/2013-03-13/1w');
		});

		it('should get a body weight url for a period of a day', function () {
			var url = urls.getBodyWeightUrl(new Date(2013, 2, 13), 'day');
			expect(url).to.contain('user/-/body/log/weight/date/2013-03-13/1d');

			url = urls.getBodyWeightUrl(new Date(2013, 2, 13), '1d');
			expect(url).to.contain('user/-/body/log/weight/date/2013-03-13/1d');
		});

		it('should get a body weight url for a period of a month', function () {
			var url = urls.getBodyWeightUrl(new Date(2013, 2, 13), 'month');
			expect(url).to.contain('user/-/body/log/weight/date/2013-03-13/1m');

			url = urls.getBodyWeightUrl(new Date(2013, 2, 13), '30d');
			expect(url).to.contain('user/-/body/log/weight/date/2013-03-13/1m');

			url = urls.getBodyWeightUrl(new Date(2013, 2, 13), '1m');
			expect(url).to.contain('user/-/body/log/weight/date/2013-03-13/1m');
		});
	});
});