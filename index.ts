// let age : number = 21;
// let firstName: string ='Aaron'
// let isTall: boolean = true;
// let childrenNames: string[] = ['ilan', 'brian']

// //console.log(`${firstName} is ${age} years old `)
// if(isTall) {
//  // console.log("and so tall")
// } else{
//   //console.log('and so pretty')
// }

// for(let i: number = 0; i < childrenNames.length; i++) {
//   // console.log(childrenNames[i])
// }



enum taxForm {
  standardTaxForm = '1040',
  childTaxForm = '641',
  cryptTaxForm = '420S'
}

// console.log("the crypto one is:" ,taxForm.cryptTaxForm)
// console.log("the crypto one is:" ,taxForm.cryptTaxForm)
// console.log("the crypto one is:" ,taxForm.cryptTaxForm)
// console.log("the child one is:" ,taxForm.childTaxForm)


let zipCode: string | number = 12345
zipCode ="abcde" //good
// zipCode = true //bad
// console.log(zipCode)

function sum (x: number ,y: number) : number {
  return x + y
}

let total: number = sum(5,6)
// console.log(total)

function debug(message: string) : void {
  console.log(message)
}
//  debug(" hello world")

interface person {
  firstName: string,
  age: number,
  children: string[],
  hasCertificate?: boolean,
}

 let Aaron: person= {
  firstName: 'me',
  age: 23,
  children:['ilan, brian'],
  hasCertificate: true 
 }

 console.log(Aaron)