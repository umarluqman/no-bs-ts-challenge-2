// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

/**
 * For each
 */
// My answer
const myForEach = <T>(items: T[], forEachFn: (i: T, index: number) => void) => {
  items.reduce((acc: T[], i: T, index) => {
    forEachFn(i, index);
    return [...acc, i];
  }, []);
};

// Better answer
const betterForEach = <T>(
  items: T[],
  forEachFn: (i: T, index: number) => void
): void => {
  items.reduce((acc, i, index) => {
    forEachFn(i, index);
    return undefined;
  }, undefined);
};

const arr = [1, 2, 3, 4];

myForEach(arr, (i, index) => console.log({ i, index }));

/**
 * Filter
 */

const myFilter = <T>(
  items: T[],
  filterFn: (i: T, index?: number) => boolean
) => {
  return items.reduce((acc: T[], i: T) => {
    if (filterFn(i)) {
      return [...acc, i];
    }
    return acc;
  }, []);
};

console.log(
  'filter',
  myFilter(arr, (i) => {
    return i > 2;
  })
);

/**
 * Map
 */

// My answer
const myMap = <T>(items: T[], mapFn: (i: T, index?: number) => string) => {
  return items.reduce((acc: T[], i: T) => {
    return [...acc, mapFn(i)];
  }, []);
};

// Correct answer
const betterMap = <T, K>(
  items: T[],
  mapFn: (i: T, index?: number) => K
): K[] => {
  return items.reduce((acc: K[], i: T) => {
    return [...acc, mapFn(i)];
  }, []);
};

const array = [
  { name: 'budiman', class: '3 Sejati' },
  { name: 'usop', class: '5 Cekal' },
  { name: 'maimunah', class: '1 Cengkih' },
];

console.log(
  'map',
  betterMap(array, (i) => {
    return i.class;
  })
);
