import {
	inputElement,
	listContainerElement,
	infoElement,
	rootStyles,
	nightElement
} from './dom';

let nightMode = false;

const createTodoContainer = () => {
	const newTodoContainer = document.createElement('li');
	newTodoContainer.classList.add('container', 'todo-container');
	return newTodoContainer;
};

const createCheckBox = () => {
	const newCheckBox = document.createElement('input');
	newCheckBox.type = 'checkbox';
	newCheckBox.id = Date.now() + 1;
	newCheckBox.classList.add('todo-checkbox');
	return newCheckBox;
};

const createTodoText = todo => {
	const newTodo = document.createElement('p');
	newTodo.textContent = todo;
	newTodo.classList.add('todo-text');
	return newTodo;
};

const createDelateButton = () => {
	const newDelateButton = document.createElement('button');
	newDelateButton.id = Date.now();
	newDelateButton.classList.add('todo-button');
	return newDelateButton;
};

const createDelateCross = () => {
	const newDelateCross = document.createElement('img');
	newDelateCross.classList.add('todo-cross');
	newDelateCross.src = './assets/images/icon-cross.svg';
	return newDelateCross;
};

const delateTodo = event => {
	listContainerElement.removeChild(event.target.parentNode);
};

const completedTodo = event => {
	event.target.parentNode.classList.toggle('todo-completed');
};

const emptyInput = () => {
	inputElement.value = '';
};

const printTodo = todo => {
	if (todo === '') {
		return;
	}
	const newTodoContainer = createTodoContainer();
	const newCheckBox = createCheckBox();
	const newTodo = createTodoText(todo);
	const newDelateButton = createDelateButton();
	const newDelateCross = createDelateCross();

	newDelateButton.append(newDelateCross);
	newTodoContainer.append(newCheckBox, newTodo, newDelateButton);
	listContainerElement.prepend(newTodoContainer);

	const buttonDelateTodoElement = document.getElementById(newDelateButton.id);
	buttonDelateTodoElement.addEventListener('click', delateTodo);

	const checkCompletedElement = document.getElementById(newCheckBox.id);
	checkCompletedElement.addEventListener('change', completedTodo);

	emptyInput();
};

const getTodo = event => {
	if (event.key === 'Enter') {
		printTodo(event.target.value);
	}
};

const clearCompleted = () => {
	const numberOfTodo = listContainerElement.children.length;
	for (let i = numberOfTodo - 1; i >= 0; i--) {
		if (listContainerElement.children[i].classList.contains('todo-completed')) {
			listContainerElement.removeChild(listContainerElement.children[i]);
		}
	}
};

const filterList = button => {
	let todo;
	for (todo of listContainerElement.children) {
		todo.classList.remove('hidden');
		if (button.textContent === 'Active') {
			if (todo.classList.contains('todo-completed')) {
				todo.classList.add('hidden');
			}
		} else if (button.textContent === 'All') {
			todo.classList.remove('hidden');
		} else {
			if (!todo.classList.contains('todo-completed')) {
				todo.classList.add('hidden');
			}
		}
	}
};

const filterFocus = event => {
	let child;
	for (child of infoElement.children) {
		child.classList.remove('info-focus');
	}
	event.target.classList.add('info-focus');

	filterList(event.target);
};

const changeNightMode = () => {
	if (!nightMode) {
		rootStyles.setProperty('--bg-color-main', '#25273D');
		nightElement.children[0].src = './assets/images/icon-moon.svg';
		nightMode = true;
	} else {
		rootStyles.setProperty('--bg-color-main', '#fff');
		nightElement.children[0].src = './assets/images/icon-sun.svg';
		nightMode = false;
	}
};

export { getTodo, clearCompleted, filterFocus, changeNightMode };
