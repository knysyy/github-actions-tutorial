import {sub} from './sub'

describe('sub test', (): void => {
    test('should return 1', (): void => {
        expect(sub(2, 1)).toEqual(1);
        expect(sub(5, 4)).toEqual(1);
    });
});
