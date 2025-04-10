/// <reference types="@bahmutov/cy-grep" />

/**
 * The only allowed test tags in this project
 */
type AllowedTag =
  | '@smoke'
  | '@misc'
  | '@new-todo'
  | '@add'
  | '@complete'
  | '@counter'
  | '@edit'
  | '@persistence'
  | '@routing'

declare namespace Cypress {
  interface SuiteConfigOverrides {
    tags?: AllowedTag | AllowedTag[]
    requiredTags?: AllowedTag | AllowedTag[]
  }

  interface TestConfigOverrides {
    tags?: AllowedTag | AllowedTag[]
    requiredTags?: AllowedTag | AllowedTag[]
  }

  interface Chainable<Subject> {
    /**
     * Create several Todo items via UI
     * @example
     * cy.createDefaultTodos()
     */
    createDefaultTodos(): Chainable<any>
    /**
     * Creates one Todo using UI
     * @example
     * cy.createTodo('new item')
     */
    createTodo(title: string): Chainable<any>
    /**
     * Returns the todo LI items
     */
    getTodos(): Chainable<JQuery>
  }
}
