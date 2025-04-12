import TaskBoardComponent from '../view/taskboard-component.js';
import TaskListComponent from '../view/task-list-component.js';
import TaskComponent from '../view/task-component.js';
import ClearBasketButtonComponent from '../view/clear-basket-button-component.js';
import {render} from '../framework/render.js';
import {TaskStatus, TaskStatusLabel} from '../const.js';

export default class TasksBoardPresenter {
    #boardContainer = null;
    #taskModel = null;
    #boardComponent = new TaskBoardComponent();

    constructor(boardContainer, taskModel) {
        this.#boardContainer = boardContainer;
        this.#taskModel = taskModel;
    }

    init() {
        const tasks = this.#taskModel.getTasks();
        
        render(this.#boardComponent, this.#boardContainer);

        for (const status of Object.values(TaskStatus)) {
            const taskList = new TaskListComponent(TaskStatusLabel[status], status);
            render(taskList, this.#boardComponent.getElement());

            const filteredTasks = tasks.filter((task) => task.status === status);
            filteredTasks.forEach((task) => {
                render(new TaskComponent(task), taskList.getElement());
            });

            if (status === TaskStatus.BASKET) {
                render(new ClearBasketButtonComponent(), taskList.getElement());
            }
        }
    }
}