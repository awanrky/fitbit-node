describe('external.fitbit', function () {

	var expect = require('chai').expect,
		Urls = require('../lib/urls'),

		// TODO: replace the Fitbit object with a mock that doesn't hit the fitbit site
		Fitbit = require('../lib/fitbit'),

		settings = require('../fitbit-private').settings;

		settings.currentUser = settings.awanrky;

	var fitbit = new Fitbit(settings);
	var urls = new Urls(settings);

	it('should have a fitbit object to work with', function () {
		expect(fitbit).to.be.an('object');
	});

	describe('body weight', function () {

		it('should get the current user\'s body weight', function(done) {
			fitbit.getBodyWeight(function(error, data) {
				expect(error).to.be.null;
				expect(JSON.parse(data).weight).to.be.an('array');
				done();
			});
		});
	});

	describe('body fat', function () {
		it('should get the current user\'s body fat', function(done) {
			fitbit.getBodyFat(function(error, data) {
				expect(error).to.be.null;
				expect(JSON.parse(data).fat).to.be.an('array');
				done();
			});
		});
	});

	describe('user profile', function () {
		it('should get the current user\'s profile', function(done) {
			fitbit.getUserProfile(function(error, data) {
				expect(error).to.be.null;
				expect(JSON.parse(data).user).to.be.an('object');
				done();
			});
		});
	});

	describe('heart rate', function () {
		it('should get the current user\'s heart rate', function(done) {
			fitbit.getHeartRate(function(error, data) {
				expect(error).to.be.null;
				var heartRateInformation = JSON.parse(data);
				expect(heartRateInformation).to.be.an('object');
				expect(heartRateInformation.average).to.be.an('array');
				expect(heartRateInformation.heart).to.be.an('array');
				done();
			});
		});
	});

	describe('blood pressure', function () {
		it('should get the current user\'s blood pressure', function(done) {
			fitbit.getBloodPressure(function(error, data) {
				expect(error).to.be.null;
				var bloodPressureInformation = JSON.parse(data);
				expect(bloodPressureInformation).to.be.an('object');
//				expect(bloodPressureInformation.average).to.be.an('object');
				expect(bloodPressureInformation.bp).to.be.an('array');
				done();
			});
		});
	});

	describe('glucose', function () {
		it('should get the current user\'s glucose', function(done) {
			fitbit.getGlucose(function(error, data) {
				expect(error).to.be.null;
				var glucoseInformation = JSON.parse(data);
				expect(glucoseInformation).to.be.an('object');
				expect(glucoseInformation.glucose).to.be.an('array');
//				expect(glucoseInformation.hba1c).to.be.a('string');
				done();
			});
		});
	});

});