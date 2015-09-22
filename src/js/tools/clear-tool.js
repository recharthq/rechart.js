import CONST from '../canvas-const.js';
import Browser from '../browser-api.js';

class ResetTool {
    constructor(canvasWrapper, eventAggregator) {
    	eventAggregator.subscribeTo(CONST.TOOL.CLEAR, 'ResetTool', initClear);
		function initClear(topic, sender, payload) {
			if (payload !== 'toolbar-deactivate' &&
				confirm('This will restore your image to its default state.\nAll your modifications will be deleted.\nDo you want to continue?')) {
				clearAllElements();
			}
		}	

		function clearAllElements() {
			var c = canvasWrapper.canvas;
			var all = c.getObjects();
			for (var i = all.length - 1; i >= 0; i--) {
				c.remove(all[i]);
			}
		}
    }
}
var toolProps = {
    label: 'Clear'
};

(new Browser()).getFromWindow('redraw').registerTool(CONST.TOOL.CLEAR, ResetTool, toolProps);
export default ResetTool;