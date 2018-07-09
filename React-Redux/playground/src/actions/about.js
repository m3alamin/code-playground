export const CHANGE_AGE = 'CHANGE_AGE';
export const CHANGE_NAME = 'CHANGE_NAME';

export function changeAge(age) {
  return {
    type: CHANGE_AGE,
    payload: age
  }
}

export function changeName(name) {
  return {
    type: CHANGE_NAME,
    payload: name
  }
}