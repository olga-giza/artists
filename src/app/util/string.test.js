import { forbiddenChars, stringParser } from './string';

describe('string', () => {
   it('replaces invalid `/` char', () => {
       expect(stringParser('/')).toBe(forbiddenChars['/']);
   });

   it('replaces invalid `*` char', () => {
       expect(stringParser('*')).toBe(forbiddenChars['*']);
   });

   it('replaces invalid `\` char', () => {
       expect(stringParser('\\')).toBe(forbiddenChars['\\']);
   });

   it('replaces invalid `?` char', () => {
       expect(stringParser('?')).toBe(forbiddenChars['?']);
   });

   it('does not affect on valid strings', () => {
       expect(stringParser('aaaAaaaA aaAaa')).toBe('aaaAaaaA aaAaa');
   });

   it('replaces invalid characters globally', () => {
       const map = forbiddenChars;

       expect(stringParser('aAa*x*X\\_\\ss'))
           .toBe(`aAa${map['*']}x${map['*']}X${map['\\']}_${map['\\']}ss`);
   });
});