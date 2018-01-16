const example = new Promise<number>((resolve, reject) => {
  // Use resolve or reject to determine the fate of the promise
resolve(123)
// reject(new Error('failed'));
});

example.then(value => {
console.log('then', value);
})

example.catch(error => {
console.log('catch', error);
})

const first = new Promise<number>((resolve, reject) => {
// Use resolve or reject to determine the fate of the promise
resolve(123)
});
const second = 
first
  .then(value => {
    // return new Promise((res, rej) => rej(new Error('example')));
    // throw new Error('example')
    // foo.bar
  })
// console.log(first === second);

second.then(value => {
console.log('second then', value);
})
second.then(error => {
console.log('second catch', error);
})


new Promise<number>((resolve, reject) => {
// Use resolve or reject to determine the fate of the promise
resolve(123)
})
.then(res => {
  console.log(res);
  foo.bar
  return 456;
})
.then(res => {
  console.log(res);
  return 789;
})
.then(res => {
  console.log(res);
})
.then(err => {
  console.log('ERROR', err);

})