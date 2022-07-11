import homePageData, { updateValue } from '../slice';

import { AnyAction } from '@reduxjs/toolkit';

describe('Redux HomePage Reducer', () => {
  it('should create reducer with initial props', () => {
    const initial = {
      data: 'Hello'
    };
    const reducer = homePageData(initial, {} as AnyAction);
    expect(reducer).toEqual(initial);
  });
  it('updateValue should update the homePage data', () => {
    const initial = {
      data: 'Hello'
    };
    const expected = {
      data: 'Updated'
    };
    const reducer = homePageData(initial, updateValue('Updated'));
    expect(reducer).toEqual(expected);
  });
});

describe('Redux Actions', () => {
  describe('HomePage Actions', () => {
    it('increase should return increase.type', () => {
      const action = updateValue('update');
      expect(action.type).toBe(updateValue.type);
    });
  });
});
