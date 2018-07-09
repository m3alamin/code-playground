const add  = (x,y) => x+y;

const  languages = {
    server: ['PHP', 'Python'],
    browser: ['Javasctipt', 'typescript']
};
const frameworks = {
    frontend: 'React',
    backend: 'Django'
};

const combine = {...languages, ...frameworks};

console.log('hello world');

console.log('add', combine);