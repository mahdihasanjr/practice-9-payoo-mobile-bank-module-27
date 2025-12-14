// const today = new Date().toLocaleString();
const today = new Date().toLocaleString('en-GB');
// const today = new Date().getDay()
console.log(today)

const date = new Date('2025/11/14');
console.log( date.getMonth())
console.log(date.getDay());

const specificDate = new Date(2025,12,20)
console.log( specificDate)
specificDate.setMonth(10)
console.log(specificDate)
