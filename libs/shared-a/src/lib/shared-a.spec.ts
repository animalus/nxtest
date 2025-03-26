import { sharedA } from './shared-a';

describe('sharedA', () => {
  it('should work', () => {
    expect(sharedA()).toEqual('shared-a');
  });
});
