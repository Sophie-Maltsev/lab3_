import {createElement} from '../framework/render.js';

function createFormAddTaskComponentTemplate() {
    return `
        <div>
            <h2>Новая задача</h2>
            <form class="add-task__form" aria-label="Форма добавления задачи">
                <div class="add-task__input-wrapper">
                    <input type="text" name="task-name" id="add-task" placeholder="Название задачи..." required>
                </div>
                <button class="add-task__button" type="submit">Добавить</button>
            </form>
        </div>
    `;
}

export default class FormAddTaskComponent {
    getTemplate() {
        return createFormAddTaskComponentTemplate();
    }

    getElement() {
        if (!this.element) {
            this.element = createElement(this.getTemplate());
        }
        return this.element;
    }

    removeElement() {
        this.element = null;
    }
}