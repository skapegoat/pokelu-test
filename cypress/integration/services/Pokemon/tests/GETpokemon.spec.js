// pegar o Gengar
import * as GETpokemon from '../requests/GETpokemon.request';

describe('Get one pokemon', () => {
    it('pegar o pokemon fantasma Gengar', () => {
    GETpokemon.takeGengar().should((response) => {
        expect(response.status).to.eq(200);
    })
})
})