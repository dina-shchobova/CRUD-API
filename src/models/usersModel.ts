import { users } from '../data/users.js';
import { RawUser, User } from "../utils/interfaces";
import { v4 as uuidv4 } from 'uuid';
import { writeDataToFile } from '../utils/writeData.js';

const findUsers = () => {
  return new Promise((resolve) => {
    resolve(users);
  })
}

const findUserById = (id: string) => {
  return new Promise((resolve) => {
    const user = users.find((item: User) => item.userId === id );
    resolve(user);
  })
}

const createUser = (user: RawUser) => {
  return new Promise((resolve) => {
    const newUser = { userId: uuidv4(), ...user};
    users.push(newUser);
    console.log(users);
    const newContent = `export const users = ${JSON.stringify(users)}`;
    writeDataToFile(newContent);
    resolve(newUser);
  })
}

export { findUsers, findUserById, createUser };
