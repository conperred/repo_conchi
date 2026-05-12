class TodoPage {
  visit() {
    cy.clearLocalStorage();
    cy.visit("https://todomvc.com/examples/react/dist/");
  }

  createTask(taskName) {
    cy.get(".new-todo").type(`${taskName}{enter}`);
  }

  taskShouldBeVisible(taskName) {
    cy.contains(".todo-list li label", taskName).should("be.visible");
  }

  taskShouldNotExist(taskName) {
    cy.contains(".todo-list li label", taskName).should("not.exist");
  }

  markTaskAsCompleted(taskName) {
    cy.contains(".todo-list li", taskName).find(".toggle").click();
  }

  unmarkTask(taskName) {
    cy.contains(".todo-list li", taskName).find(".toggle").click();
  }

  taskShouldBeCompleted(taskName) {
    cy.contains(".todo-list li", taskName).should("have.class", "completed");
  }

  taskShouldBeActive(taskName) {
    cy.contains(".todo-list li", taskName).should("not.have.class", "completed");
  }

editTask(oldName, newName) {
  cy.contains(".todo-list li label", oldName)
    .dblclick({ force: true });

  cy.focused()
    .type(`{selectall}${newName}{enter}`, { force: true });
}

  deleteTask(taskName) {
    cy.contains(".todo-list li", taskName)
      .trigger("mouseover")
      .find(".destroy")
      .click({ force: true });
  }

  filterCompleted() {
    cy.contains("a", "Completed").click();
  }

  filterActive() {
    cy.contains("a", "Active").click();
  }

  filterAll() {
    cy.contains("a", "All").click();
  }

  onlyTaskShouldBeVisible(taskName) {
    cy.get(".todo-list li").should("have.length", 1).and("contain", taskName);
  }

  taskCountShouldBe(number) {
    cy.get(".todo-list li").should("have.length", number);
  }
}

export default TodoPage;