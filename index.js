const Teste = () => true;

const invertString = string => [...string].reverse().join('');
const checkPalindrome = string => string === invertString(string);

const removeItem = (list, item) => list.filter((current) => current !== item);

const funcSoma = (initial, final) => {
    const notValid = (!initial && !final) || (isNaN(initial) || isNaN(final)) || (initial > final) || (initial === final)
    if (notValid) {
        return false;
    }
    
    let sum = 0;
    for (let index = initial; index <= final; index++) {
        sum = sum + index;
    }
    return sum;    
}

describe('Palindrome Exercise', () => {
    it('should check if "kaiak" is a palindrome and expected return true', () => {
        expect(checkPalindrome('kaiak')).toBe(true);
    });
    it('should check if "jungle" is a palindrome and expected return false', () => {
        expect(checkPalindrome('jungle')).toBe(false);
    });
    it('should check if empty string is a palindrome', () => {
        expect(checkPalindrome('')).toBe(true);
    });
});
describe('Invert String', () => {
    it('should invert "xablau"', () => {
        expect(invertString('xablau')).toBe('ualbax');
    });
});
describe('Remove item', () => {
    it('should not modify an empty list', () => {
        var list = [];
        expect(removeItem(list, '').length).toEqual(0);
    });
    it('should remove passed parameter from the list parameter', () => {
        var list = ['a', 'b', 'c', 'a', ' ', '', 'b', '@'];
        expect(removeItem(list, 'a').length).toEqual(6);
    });
    it('should not remove passed parameter from the list parameter', () => {
        var list = ['a', 'b', 'c', 'a', ' ', '', 'b', '@'];
        expect(removeItem(list, undefined).length).toEqual(8);
    });
});

describe('Factorial sum', () => {
    it('should have at least one parameter', () => {
        expect(funcSoma()).toBe(false);
        expect(funcSoma(5)).toBe(false);
        expect(funcSoma(undefined, 6)).toBe(false);
    });
    it('should check if parameters are numbers', () => {
        expect(funcSoma('q', {})).toBe(false);
        expect(funcSoma(6, {})).toBe(false);
        expect(funcSoma(6, 7)).toBe(13);
    });
    it('should check if first parameter is lesser then second parameter', () =>{
        expect(funcSoma(7, 1)).toBe(false);
        expect(funcSoma(1, 3)).toBe(6);
    });
    it('should check if the are equals', () =>{
        expect(funcSoma(1, 1)).toBe(false);
        expect(funcSoma(1, 3)).toBe(6)
    });
});