import Faker from 'faker';
import { range, random } from 'lodash';
import { IUser, INote } from '@/app-state';

const DUMMY_PICTURE_COUNT = 3;
const DUMMY_AVATAR_COUNT = 3;

const POST_COUNT = 30;
const USER_COUNT = 5;

function getRandomImageUrl() {
  return `/dummy-data/pictures/${random(1, DUMMY_PICTURE_COUNT)}.png`;
}

function getRandomAvatarUrl() {
  return `/dummy-data/avatars/${random(1, DUMMY_AVATAR_COUNT)}.png`;
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
    text: Faker.lorem.sentences(random(1, 10)),
    time: Faker.date.between(now, fiveDaysAgo),
    author: getRandomUser(),
    children:
      nestingLevel === 0
        ? null
        : range(Math.random() < 0.7 ? 0 : random(1, 5)).map(() =>
            getRandomNote(userPool, nestingLevel - 1),
          ),
  };
}

const users = range(USER_COUNT).map(() => getRandomUser());

export default {
  posts: range(POST_COUNT).map(() => getRandomNote(users, 2)),
  users,
};
