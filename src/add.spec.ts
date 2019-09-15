import {add} from './add';

describe('add test', (): void => {
    test('should return 3', (): void => {
        expect(add(1, 2)).toEqual(3);
    });
});
