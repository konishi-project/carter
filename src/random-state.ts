import Faker from 'faker';
import { range } from 'lodash';
import { IUser, INote } from '@/app-state';

const DUMMY_PICTURE_COUNT = 3;
const DUMMY_AVATAR_COUNT = 3;

const POST_COUNT = 30;
const USER_COUNT = 5;

/* From https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random */
function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; // The maximum is exclusive and the minimum is inclusive
}

function getRandomImageUrl() {
  return require(`./assets/dummy-data/pictures/${getRandomInt(
    1,
    DUMMY_PICTURE_COUNT + 1,
  )}.png`);
}

function getRandomAvatarUrl() {
  return require(`./assets/dummy-data/avatars/${getRandomInt(
    1,
    DUMMY_AVATAR_COUNT + 1,
  )}.png`);
}

function getRandomItem<T>(items: T[]) {
  return items[Math.floor(Math.random() * items.length)];
}

export function getRandomUser() {
  return {
    firstName: Faker.name.firstName(),
    lastName: Faker.name.lastName(),
    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    },
    username: Faker.internet.userName(),
    avatarUrl: getRandomAvatarUrl(),
  };
}

export function getRandomNote(userPool: IUser[], nestingLevel = 0): INote {
  const now = new Date();
  const fiveDaysAgo = new Date();
  fiveDaysAgo.setDate(fiveDaysAgo.getDate() - 5);

  return {
    imageUrl: Math.random() < 0.5 ? getRandomImageUrl() : null,
    text: Faker.lorem.sentences(getRandomInt(1, 5)),
    time: Faker.date.between(now, fiveDaysAgo),
    author: getRandomUser(),
    children:
      nestingLevel === 0
        ? null
        : range(Math.random() < 0.7 ? 0 : getRandomInt(1, 5)).map(() =>
            getRandomNote(userPool, nestingLevel - 1),
          ),
  };
}

const users = range(USER_COUNT).map(() => getRandomUser());

export default {
  posts: range(POST_COUNT).map(() => getRandomNote(users, 2)),
  users,
};
