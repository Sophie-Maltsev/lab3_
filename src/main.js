import HeaderComponent from './view/header-component.js';
import FormAddTaskComponent from './view/form-add-task-component.js';
import TasksBoardPresenter from './presenter/tasks-board-presenter.js';
import TaskModel from './model/task-model.js';
import {render, RenderPosition} from './framework/render.js';
import {tasks} from './mock/task.js';

const bodyContainer = document.querySelector('.board-app');
const formContainer = document.querySelector('.add-task');
const taskboardContainer = document.querySelector('.taskboard');

render(new HeaderComponent(), bodyContainer, RenderPosition.BEFOREBEGIN);

render(new FormAddTaskComponent(), formContainer);

const taskModel = new TaskModel(tasks);

const tasksBoardPresenter = new TasksBoardPresenter(taskboardContainer, taskModel);
tasksBoardPresenter.init();