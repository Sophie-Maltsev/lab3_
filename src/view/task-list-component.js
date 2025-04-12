import {createElement} from '../framework/render.js';

function createTaskListComponentTemplate(title, status) {
    return `
        <div class="taskboard__list" data-status="${status}">
            <h3 class="taskboard__heading">${title}</h3>
        </div>
    `;
}

export default class TaskListComponent {
    #element = null;
    #title = null;
    #status = null;

    constructor(title, status) {
        this.#title = title;
        this.#status = status;
    }

    getTemplate() {
        return createTaskListComponentTemplate(this.#title, this.#status);
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