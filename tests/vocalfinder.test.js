import { describe, it, expect } from 'vitest';
import { getSentence, searchVocals, deleteDuplicity, getVocals } from '../src/vocalFinder';

describe('getSentence', () => {
  it('should return the sentence as is', () => {
    expect(getSentence('la')).toBe('la');
  });
});

describe('searchVocals', () => {
  it('should return the vowels found in the sentence', () => {
    expect(searchVocals('lo')).toEqual(['o']);
  });

  it('should return the vowels found in the sentence with all vowels', () => {
    expect(searchVocals('la le li lo lu')).toEqual(['a', 'e', 'i', 'o', 'u']);
  });

  it('should return the vowels found in the sentence with all vowels and consonants', () => {
    expect(searchVocals('la le li lo lu pa pe pi po pu')).toEqual(['a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u']);
  });
});

describe('deleteDuplicity', () => {
  it('should remove duplicates from the list', () => {
    expect(deleteDuplicity(['i', 'i'])).toEqual(['i']);
  });
});

describe('getVocals', () => {
  it('should return unique vowels in a comma-separated string', () => {
    expect(getVocals('Hello World!')).toBe('e,o');
  });
});
