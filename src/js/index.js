import {
	inputElement,
	buttonClearMobileElement,
	buttonClearElement,
	infoElement
} from './dom';

import { getTodo, clearCompleted, filterFocus } from './funtions';

inputElement.addEventListener('keydown', getTodo);
buttonClearMobileElement.addEventListener('click', clearCompleted);
buttonClearElement.addEventListener('click', clearCompleted);
infoElement.addEventListener('click', filterFocus);
