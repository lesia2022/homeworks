'use strict';
void function () {
    const form = document.getElementById('todoForm');
    const todoItemsContainer = document.getElementById('todoItems');
    const formInputs = Array.from(form.querySelectorAll('textarea, input:not([type=reset])'));
    const dataKey = 'todoListData';
    const attributeKey = 'data-id';
    const maxId = 'maxId';

    const makeTodoItemTemplate = ({ title, description, id }) => {
        const wrapper = document.createElement('div');
        wrapper.classList.add('col-4');
        wrapper.setAttribute(attributeKey, id);
        wrapper.innerHTML = `
        <div class="taskWrapper">
            <div class="taskHeading">${title}</div>
            <div class="taskDescription">${description}</div>
            <div class="buttonWrapper">
                <button class="mt-3 removeTask btn-danger btn-sm">
                    <i class="bi bi-trash3"></i><span>Remove</span>
                </button>
            </div>
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
    const removeItemDOM = (item) => {
        const element = document.querySelector(`[${attributeKey}='${item.id}']`);

        if (element) {
            element.remove();
        }
    };

    const getAllItems = () => JSON.parse(localStorage.getItem(dataKey)) || [];

    const saveTodoItem = (formData) => {
        const existData = getAllItems();
        const newId = localStorage.getItem(maxId) || 0;
        const saveDataDuplicate = {
            ...formData,
            id: parseInt(newId) + 1
        };

        existData.push(saveDataDuplicate);

        updateStorageWithItemAndMaxId(existData, saveDataDuplicate);

        return saveDataDuplicate;
    };

    function updateStorageWithItemAndMaxId(itemsToUpdate, saveDataDuplicate) {
        localStorage.setItem(dataKey, JSON.stringify(itemsToUpdate));
        localStorage.setItem(maxId, saveDataDuplicate.id);
    }

    const removeFromStorageById = (id) => {
        const existData = getAllItems();
        const indexTodoItem = existData.findIndex(item => item.id === id);

        if (indexTodoItem === -1) {
            return null;
        }

        const removedItem = existData.splice(indexTodoItem, 1);
        localStorage.setItem(dataKey, JSON.stringify(existData));

        return removedItem[0];
    };

    const removeElementById = (id) => {
        const deletedElement = removeFromStorageById(id);
        removeItemDOM(deletedElement)
    }

    form.addEventListener('submit', event => {
        event.preventDefault();
        event.stopPropagation();

        const formData = formInputs.reduce((acc, {name, value}) => {
            acc[name] = value;
            return acc;
        }, {});
        const savedElement = saveTodoItem(formData);

        drawTodoItem(
            makeTodoItemTemplate(savedElement)
        );
    });

    todoItemsContainer.addEventListener('click', (event) => {
        event.stopPropagation();
        const removeTaskButton = event.target.closest('.removeTask');

        if (!removeTaskButton) return;

        const getTodoItemID = Number(event.target.closest(`[${attributeKey}]`).getAttribute(attributeKey));

        removeElementById(getTodoItemID);
    });

    const uploadHandler = () => {
        const data = getAllItems();
        if (!data.length) return;

        for (const { title, description, id } of data) {
            const template = makeTodoItemTemplate({ title, description, id });
            drawTodoItem(template);
        }
    };

    document.addEventListener('DOMContentLoaded', uploadHandler);


    document.addEventListener('DOMContentLoaded', uploadHandler);
}();
