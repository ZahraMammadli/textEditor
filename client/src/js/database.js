import { openDB } from 'idb';
import { header } from './header';

const dbName = 'jate';
const storeName = 'jate';
const contentKey = 1;

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains(storeName)) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore(storeName, { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database

export const putDb = async (content) => {
  const db = await openDB(dbName);
  const store = db.transaction(storeName, 'readwrite').objectStore(storeName);
  await store.put({ content, id: contentKey });
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  const db = await openDB(dbName);
  const store = db.transaction(storeName, 'readwrite').objectStore(storeName);
  const data = await store.get(contentKey);
  if (!data) {
    return header;
  }
  return data.content;
};

initdb();
