const Teste = () => true;

const invertString = string => [...string].reverse().join('');
const checkPalindrome = string => string === invertString(string);

describe('Palindrome Exercise', () => {
    it('should check if "kaiak" is a palindrome and expected return true', () => {
        expect(checkPalindrome('kaiak')).toBe(true);
    });
    it('should check if "jungle" is a palindrome and expected return false', () => {
        expect(checkPalindrome('jungle')).toBe(false);
    });
});
describe('Invert String', () => {
    it('should invert "xablau"', () => {
        expect(invertString('xablau')).toBe('ualbax');
    });
});
describe('Remove item', () => {
    it('should invert "xablau"', () => {
        expect(invertString('xablau')).toBe('ualbax');

        /*
            var test = ['a', 'b', 'c', 'a'];

            var func = (arr, ind) => {
                if (!(arr instanceof Array)) return [];
            
                return arr.reduce((accumulator, current) => {
                    const acc = (accumulator || []);

                    if (current !== ind) {
                        acc.push(current);
                    }
                    
                    return acc;
                }, []);
            }
        */
    });
});

