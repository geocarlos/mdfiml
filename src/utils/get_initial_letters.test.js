import getInitialLetters from './get_initial_letters';

const words = [
    'apple',
    'airplane',
    'cake',
    'deer',
    'daily',
    'gate',
    'cat',
    'zebra',
    'lion',
    'veil'
]

const check = new Set([ 'a', 'c', 'd', 'g', 'l', 'v', 'z' ]);

describe('getInitialLetters', () => {
    it('returns a sorted set of initial letters', done => {
        getInitialLetters(words)
        .then(letters => {
            expect(letters).toEqual(check);
            done();
        })
        .catch(error => console.error(error));
    });
});