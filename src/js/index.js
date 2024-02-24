import {
	inputElement,
	buttonClearMobileElement,
	buttonClearElement,
	infoElement,
	nightElement
} from './dom';

import {
	getTodo,
	clearCompleted,
	filterFocus,
	changeNightMode
} from './funtions';

inputElement.addEventListener('keydown', getTodo);
buttonClearMobileElement.addEventListener('click', clearCompleted);
buttonClearElement.addEventListener('click', clearCompleted);
infoElement.addEventListener('click', filterFocus);
nightElement.addEventListener('click', changeNightMode);
