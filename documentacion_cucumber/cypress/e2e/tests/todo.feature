Feature: Gestionar tareas en TodoMVC

  Background:
    Given que estoy en la página de TodoMVC

  Scenario: Crear tarea
    When creo la tarea "Comprar pan"
    Then debería ver la tarea "Comprar pan" en la lista

  Scenario: Marcar tarea como completada
    When creo la tarea "Estudiar Cypress"
    And marco la tarea "Estudiar Cypress" como completada
    Then la tarea "Estudiar Cypress" debería aparecer como completada

  Scenario: Desmarcar tarea completada
    When creo la tarea "Repasar QA"
    And marco la tarea "Repasar QA" como completada
    And desmarco la tarea "Repasar QA"
    Then la tarea "Repasar QA" debería aparecer como activa

  Scenario: Editar tarea
    When creo la tarea "Tarea antigua"
    And edito la tarea "Tarea antigua" por "Tarea editada"
    Then debería ver la tarea "Tarea editada" en la lista

  Scenario: Borrar tarea
    When creo la tarea "Tarea para borrar"
    And borro la tarea "Tarea para borrar"
    Then no debería ver la tarea "Tarea para borrar" en la lista

  Scenario: Filtrar tareas
    When creo la tarea "Tarea activa"
    And creo la tarea "Tarea completada"
    And marco la tarea "Tarea completada" como completada
    When filtro por tareas completadas
    Then solo debería ver la tarea "Tarea completada"
    When filtro por tareas activas
    Then solo debería ver la tarea "Tarea activa"
    When filtro por todas las tareas
    Then debería ver 2 tareas en la lista