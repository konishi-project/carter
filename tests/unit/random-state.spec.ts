import { expect } from 'chai';
import { getRandomNote } from '@/random-state';
import { SSL_OP_PKCS1_CHECK_1 } from 'constants';

// we save original Math.random here
let random: typeof Math.random;

function getAuthors() {
  return [
    {
      firstName: 'John',
      lastName: 'Doe',
      username: 'rollychair13',
      get fullName() {
        return 'John Doe';
      },
      avatarUrl: 'someurl',
    },
  ];
}

describe('random-state.ts', () => {
  describe('getRandomNote', () => {
    beforeEach(() => {
      random = Math.random;
      Math.random = () => 1;
    });

    it('produces a note with no children with nesting level 0', () => {
      const authors = getAuthors();
      const note = getRandomNote(authors, 0);
      expect(note.children).to.be.null;
    });

    it('produces a note with children with nesting level 1', () => {
      const authors = getAuthors();
      const note = getRandomNote(authors, 1);
      expect(note.children, 'there are children').to.have.length;
      for (const kid of note.children!) {
        expect(kid.children, 'child note children is null').to.be.null;
      }
    });

    afterEach(() => {
      Math.random = random;
    });
  });
});
