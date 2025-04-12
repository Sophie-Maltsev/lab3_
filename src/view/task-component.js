import {createElement} from '../framework/render.js';

function createTaskComponentTemplate(task) {
    return `
        <div class="taskboard__item task">
            <div class="task__body">
                <p class="task__view">${task.title}</p>
                <input type="text" class="task__input" value="${task.title}">
            </div>
            <button class="task__edit" type="button" aria-label="Изменить"></button>
        </div>
    `;
}

export default class TaskComponent {
    #task = null;
    #element = null;

    constructor(task) {
        this.#task = task;
    }

    getTemplate() {
        return createTaskComponentTemplate(this.#task);
    }

    getElement() {
        if (!this.#element) {
            this.#element = createElement(this.getTemplate());
        }
        return this.#element;
    }

    removeElement() {
        this.#element = null;
    }
}