const ages = [22, 25, 27, 29, 19];
const ages2 = [12, 15, 16];
const ages3 = [33, 37, 40, 45];
/* const allAges = ages.concat(ages2).concat(5,7).concat(ages3); */
const allAges = [...ages, 5, ...ages2, ...ages3];
//console.log(allAges);

const business = 650;
const minister = 450;
const doctor  = 250;
/* const maximum = Math.max(business, minister, doctor); */
const takaPaisa = [650, 450, 250, 800, 750];
const maximum = Math.max(...takaPaisa,); 
console.log(maximum);