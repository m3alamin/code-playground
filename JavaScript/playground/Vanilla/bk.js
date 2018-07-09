var willIgetIPhone = (howMuchMoneyIHave)=> {
  return new Promise((resolve, reject)=>{
    if(howMuchMoneyIHave > 999) {
      resolve("I can get an iPhone!");
    } else {
      var moneyNeeded = 999 - parseInt(howMuchMoneyIHave);
      reject("Nah! I need to save more " + moneyNeeded  + " Dollor");
    }
  });
}

willIgetIPhone(500).then(success=>{
  console.log(success);
}, failed=>{
  console.log(failed);
});

willIgetIPhone(1500).then(success=>{
  return 'show friends';
}, failed=>{
  return 'use old one';
}).then(status=>{
  if(status === 'show friends') {
    return 'friends liked it';
  } else {
    console.log('I like my old phone');
  }
}).then(newStatus=>{
  if(newStatus === 'friends liked it') {
    return 'patry';
  }
}).then(patryStatus=> {
  if(patryStatus === 'patry') {
    throw new Error('I don\'t have money');
  }
  
}).catch((e)=> {
  console.error(e.message);
}).then(()=>console.log('Go to bed'));


function findSolution ( target ) {
  function find ( current , history ) {
    if ( current == target )
      return history ;
    else if ( current > target )
      return null ;
    else {
      return find ( current + 5, "(" + history + " + 5) ") || find ( current * 3 , "(" + history + " * 3) ") ;
    }
    
    }
    return find (1 , "1") ;
}

console.log ( findSolution (13) );



let m = (obj) => {
    let a;
    let hasReplace = objectHasProperty(obj,'replace') ? true : false;
    let replace = hasReplace ? obj.replace : false;

    if(hasReplace) {
        delete obj.replace;
    }
    
    if(replace) {
        a = {...obj}
    } else {
        a = {
            a:1,
            b:2,
            c:3
        };
        a = {...a, ...obj}
    }
    
    return a;
}

let isObject = obj => {
    return !!obj && obj.constructor === Object
}


let objectHasProperty = (obj,prop) => {
    return isObject(obj) && obj.hasOwnProperty(prop);
}

let obj = {
    replace: true,
    a:9
}

console.log(m(obj));

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