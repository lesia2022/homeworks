'use strict';
void function () {
    const form = document.getElementById('todoForm');
    const todoItemsContainer = document.getElementById('todoItems');
    const formInputs = Array.from(form.querySelectorAll('textarea, input:not([type=reset])'));
    const dataKey = 'todoListData';

    const makeTodoItemTemplate = ({title, description}) => {
        const wrapper = document.createElement('div');
        wrapper.classList.add('col-4');

        wrapper.innerHTML = `
            <div class="taskWrapper">
                <div class="taskHeading">${title}</div>
                <div class="taskDescription">${description}</div>
            </div>`;
        return wrapper;
    };

    const drawTodoItem = (domElement) => {
        if (typeof domElement === 'object' && domElement instanceof Element) {
            todoItemsContainer.prepend(domElement);
        } else {
            throw new Error('Invalid DOM element');
        }
    };

    const getTodoItem = () => {
        let localStorageArray = JSON.parse(localStorage.getItem(dataKey));
        if (!localStorageArray) localStorageArray = [];
        return localStorageArray;
    };


    const saveTodoItem = (formData) => {
        const existData = getTodoItem();
        existData.push(formData);
        localStorage.setItem(dataKey, JSON.stringify(existData));
        return getTodoItem().at(-1);
    };

    form.addEventListener('submit', event => {
        event.preventDefault();
        event.stopPropagation();

        const formData = formInputs.reduce((acc, {name, value}) => {
            acc[name] = value;
            return acc;
        }, {});
        const savedElements = (saveTodoItem(formData))
        saveTodoItem(formData);

        drawTodoItem(
            makeTodoItemTemplate(savedElements)
        );
    });

    const uploadHandler = () => {
        const data = getTodoItem();
        if(!data.length) return;

        data.forEach(todoItem => {
            const template = makeTodoItemTemplate(todoItem);
            drawTodoItem(template)
        })
        document.removeEventListener('DOMContentLoaded', uploadHandler)
    }
    document.addEventListener('DOMContentLoaded', uploadHandler)

}();
