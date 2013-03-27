var expect = require('chai').expect,
	index = require('../lib/index'),
	settings = require('../fitbit-private').settings;

describe('index', function () {
	"use strict";

	it('should create a fitbit object', function (done) {
		expect(index, 'index should be an object').to.be.an('object');
		expect(index.Fitbit, 'index.Fitbit should be a function').to.be.a('function');

		var fitbit = new index.Fitbit(settings);
		expect(fitbit, 'fitbit should be an object').to.be.an('object');
		expect(fitbit.getBodyWeight, 'fitbit.getBodyWeight should be a function').to.be.a('function');
		done();
	});

});