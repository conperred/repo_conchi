describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://todomvc.com/examples/react/dist/#/')
  })
  })
describe('Gestión de tareas - Todo App', () => {

  beforeEach(() => {
    cy.visit('https://todomvc.com/examples/react/dist/#/') 
 })
  it('1. Crear tarea', () => {
    cy.get('input')
      .type('Nueva tarea{enter}')

    cy.contains('Nueva tarea')
      .should('exist')
  })

  it('2. Marcar tarea como completada', () => {
    cy.get('input')
      .type('Tarea completada{enter}')

    cy.contains('Tarea completada')
      .parent()
      .find('.toggle')
      .click()

    cy.contains('Tarea completada')
  .parents('li')
  .should('have.class', 'completed')
      
  })

  it('3. Desmarcar tarea completada', () => {
    cy.get('input')
      .type('Tarea toggle{enter}')

    cy.contains('Tarea toggle')
    .parents('li')
    .find('.toggle')
    .click()

    cy.contains('Tarea toggle')
      .parents('li')
      .find('.toggle')
      .click()

    cy.contains('Tarea toggle')
      .parents('li')
      .should('not.have.class', 'completed')
  })

  it('4. Editar tarea', () => {
    cy.get('input')
      .type('Tarea antigua{enter}')

    cy.contains('Tarea antigua')
      .dblclick()

    cy.get('input')
      .last()
      .clear()
      .type('Tarea nueva{enter}')

    cy.contains('Tarea nueva')
      .should('exist')
  })

  it('5. Borrar tarea', () => {
    cy.get('input')
      .type('Tarea borrar{enter}')

    cy.contains('Tarea borrar')
    .parents('li')
    .find('.destroy')
    .invoke('show')
    .click()

    cy.contains('Tarea borrar')
      .should('not.exist')
  })

  it('6. Filtrar tareas', () => {
    cy.get('.new-todo')
      .type('Task 1{enter}')
    
      cy.get('.new-todo')
        .type('Task 2{enter}')

    cy.contains('Task 1')
      .parents('li')
      .find('.toggle')
      .click()

    cy.contains('a','Completed').click()

    cy.contains('Task 1')
      .should('exist')

    cy.contains('Task 2')
      .should('not.exist')

    cy.contains('Active').click()

    cy.contains('Task 2')
      .should('exist')

    cy.contains('a','All').click()

    cy.contains('Task 1')
      .should('exist')

    cy.contains('Task 2')
      .should('exist')
  })

})

