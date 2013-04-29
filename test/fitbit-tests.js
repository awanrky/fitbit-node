describe('external.fitbit', function () {

	var expect = require('chai').expect,
		Urls = require('../lib/urls'),

		// TODO: replace the Fitbit object with a mock that doesn't hit the fitbit site
		Fitbit = require('../lib/fitbit'),

		settings = require('../fitbit-private').settings;

//		settings.currentUser = settings.awanrky;

	var fitbit = new Fitbit(settings, settings.awanrky);
	var urls = new Urls(settings);

	it('should have a fitbit object to work with', function () {
		expect(fitbit).to.be.an('object');
	});

	describe('body weight', function () {
		var returnError, returnValue;

		before(function(done) {
			fitbit.getBodyWeight()
			.then(function(data) {
				returnValue = data;
				done();
			}, function(error) {
				returnError = error;
				done();
			});
		});

		it('should get the current user\'s body weight', function() {
			expect(returnError).to.be.undefined;
			expect(JSON.parse(returnValue).weight).to.be.an('array');
		});
	});

	describe('body fat', function () {
		var returnError, returnValue;

		before(function(done) {
			fitbit.getBodyFat()
			.then(function(data) {
				returnValue = data;
				done();
			}, function(error) {
				returnError = error;
				done();
			});
		});

		it('should get the current user\'s body fat', function() {
			expect(returnError).to.be.undefined;
			expect(JSON.parse(returnValue).fat).to.be.an('array');
		});
	});

	describe('user profile', function () {
		var returnError, returnValue;

		before(function(done) {
			fitbit.getUserProfile()
			.then(function(data) {
				returnValue = data;
				done();
			}, function(error) {
				returnError = error;
				done();
			});
		});

		it('should get the current user\'s profile', function() {
			expect(returnError).to.be.undefined;
			expect(JSON.parse(returnValue).user).to.be.an('object');
		});
	});

	describe('heart rate', function () {
		var returnError, returnValue;

		before(function(done) {
			fitbit.getHeartRate()
			.then(function(data) {
				returnValue = data;
				done();
			}, function(error) {
				returnError = error;
				done();
			});
		});

		it('should get the current user\'s heart rate', function() {
			expect(returnError).to.be.undefined;
			var heartRateInformation = JSON.parse(returnValue);
			expect(heartRateInformation).to.be.an('object');
			expect(heartRateInformation.average).to.be.an('array');
			expect(heartRateInformation.heart).to.be.an('array');
		});
	});

	describe('blood pressure', function () {
		var returnError, returnValue;

		before(function(done) {
			fitbit.getBloodPressure()
			.then(function(data) {
				returnValue = data;
				done();
			}, function(error) {
				returnError = error;
				done()
			});
		});

		it('should get the current user\'s blood pressure', function() {
			expect(returnError).to.be.undefined;
			var bloodPressureInformation = JSON.parse(returnValue);
			expect(bloodPressureInformation).to.be.an('object');
//				expect(bloodPressureInformation.average).to.be.an('object');
			expect(bloodPressureInformation.bp).to.be.an('array');
		});
	});

	describe('glucose', function () {
	var returnError, returnValue;

		before(function(done) {
			fitbit.getGlucose()
			.then(function(data) {
				returnValue = data;
				done();
			}, function(error) {
				returnError = error;
				done();
			});
		});

		it('should get the current user\'s glucose', function() {
			expect(returnError).to.be.undefined;
			var glucoseInformation = JSON.parse(returnValue);
			expect(glucoseInformation).to.be.an('object');
			expect(glucoseInformation.glucose).to.be.an('array');
//				expect(glucoseInformation.hba1c).to.be.a('string');
		});
	});

});