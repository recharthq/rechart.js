var __path__ = '../src/js/tools/arrow.jsx';

jest.dontMock(__path__);
console.log('bravo');
describe('ArrowTool', function() {
	console.log('alpha');
	it('should not work"', function () {
		
		expect(1).toBeNull();
	});
 /* let canvasWrapper = {}, eventAggregator = {};
	let subscriptionTopic, subscriberId, toolbarSubscriptionFn, arrowTool, notificationTopic;;

	eventAggregator.subscribeTo = function(topic, _subscriberId, callback) {
		subscriptionTopic = topic;
		subscriberId = _subscriberId;
		toolbarSubscriptionFn = callback;
	};

	eventAggregator.notify = function(_topic, originId, message) {
		notificationTopic = _topic;
	};	

	describe('should register for toolbar event', function () {
		it('with parameter topicName "arr_t"', function () {
			arrowTool = new ArrowTool(canvasWrapper, eventAggregator);
			expect(subscriptionTopic).to.equal('arr_t');
		});
	

		it('with parameter subscriber "ArrowTool"', function () {
			arrowTool = new ArrowTool(canvasWrapper, eventAggregator);
			expect(subscriberId).to.equal('ArrowTool');
		});
	});*/
});


/*



import ArrowTool from '../src/js/tools/arrow.js';
var chai = require('chai');
var expect = chai.expect;

var expect = chai.expect;

var rewire = require("rewire");

var fab = rewire("../src/js/tools/sample.js");
fab.fabric = {};
fab.__set__("isTest", true);

describe('ArrowTool', function () {
	let canvasWrapper = {}, eventAggregator = {};
	let subscriptionTopic, subscriberId, toolbarSubscriptionFn, arrowTool, notificationTopic;;

	eventAggregator.subscribeTo = function(topic, _subscriberId, callback) {
		subscriptionTopic = topic;
		subscriberId = _subscriberId;
		toolbarSubscriptionFn = callback;
	};

	eventAggregator.notify = function(_topic, originId, message) {
		notificationTopic = _topic;
	};

	describe('should register for toolbar event', function () {
		it('with parameter topicName "arr_t"', function () {
			arrowTool = new ArrowTool(canvasWrapper, eventAggregator);
			expect(subscriptionTopic).to.equal('arr_t');
		});
	

		it('with parameter subscriber "ArrowTool"', function () {
			arrowTool = new ArrowTool(canvasWrapper, eventAggregator);
			expect(subscriberId).to.equal('ArrowTool');
		});
	});

	describe('upon toolbar activation', function () {
		
		beforeEach(function() {
			window.fabric = { Line: function() {} };
			arrowTool = new ArrowTool(canvasWrapper, eventAggregator);
			toolbarSubscriptionFn.apply(toolbarSubscriptionFn, []);

		});

		it('should register for keydown event', function () {
			
			expect(subscriptionTopic).to.equal('keydown');
			expect(subscriberId).to.equal('ArrowTool');
		});

	});
});*/