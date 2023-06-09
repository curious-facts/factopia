'use strict';

import { newFact } from '../src/newFact';

import { JSDOM } from 'jsdom';
const dom = new JSDOM('<!DOCTYPE html><html><body><div id="curious-fact"></div></body></html>', {
  url: 'index.html'
});

describe('newFact', () => {
    beforeEach(() => {
      jest.resetModules();
      jest.restoreAllMocks();
    });
  
    it('actualiza el texto del elemento #curious-fact', async () => {
      const fetchMock = require('fetch-mock');
      fetchMock.get('https://uselessfacts.jsph.pl/api/v2/facts/random', { text: 'Test fact' });
  
      await newFact();
  
      expect(document.getElementById('curious-fact').textContent).toBe('Test fact');
    });
  });