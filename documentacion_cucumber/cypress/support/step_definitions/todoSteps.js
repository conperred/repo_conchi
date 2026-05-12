import {
  Given,
  When,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";

import TodoPage from "../pages/todopage";

const todoPage = new TodoPage();

Given("que estoy en la página de TodoMVC", () => {
  todoPage.visit();
});

When("creo la tarea {string}", (taskName) => {
  todoPage.createTask(taskName);
});

Then("debería ver la tarea {string} en la lista", (taskName) => {
  todoPage.taskShouldBeVisible(taskName);
});

When("marco la tarea {string} como completada", (taskName) => {
  todoPage.markTaskAsCompleted(taskName);
});

Then("la tarea {string} debería aparecer como completada", (taskName) => {
  todoPage.taskShouldBeCompleted(taskName);
});

When("desmarco la tarea {string}", (taskName) => {
  todoPage.unmarkTask(taskName);
});

Then("la tarea {string} debería aparecer como activa", (taskName) => {
  todoPage.taskShouldBeActive(taskName);
});

When("edito la tarea {string} por {string}", (oldName, newName) => {
  todoPage.editTask(oldName, newName);
});

When("borro la tarea {string}", (taskName) => {
  todoPage.deleteTask(taskName);
});

Then("no debería ver la tarea {string} en la lista", (taskName) => {
  todoPage.taskShouldNotExist(taskName);
});

When("filtro por tareas completadas", () => {
  todoPage.filterCompleted();
});

When("filtro por tareas activas", () => {
  todoPage.filterActive();
});

When("filtro por todas las tareas", () => {
  todoPage.filterAll();
});

Then("solo debería ver la tarea {string}", (taskName) => {
  todoPage.onlyTaskShouldBeVisible(taskName);
});

Then("debería ver {int} tareas en la lista", (number) => {
  todoPage.taskCountShouldBe(number);
});