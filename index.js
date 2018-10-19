const driver = 'bob';

console.log('this code was called');

console.log(`${driver}`);

console.log(function driver(driver, str){
  let str = 'is the driver variable name';
  return (`${driver} + str`)
})
