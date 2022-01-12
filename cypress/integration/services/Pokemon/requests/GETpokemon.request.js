// request pra pegar um gengar
/// <reference types="cypress" />

function takeGengar() {
    return cy.request({
        method: 'GET',
        url: 'v2/pokemon/94/',
        failOnStatusCode: false,
    })
}

export {takeGengar};