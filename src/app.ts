/* let age: number; // this will create a "let" instead of "var" variable due to the compiler target "es2016"
age = 30;

const userName = 'Maximilian';


console.log(userName)

 */

const button = document.querySelector('button')!; //since Typescript is not sure if this button exists, we can add a "!" just telling Typescript to not worry that this button will eventually exist

button.addEventListener('click', () => {
    console.log('Clicked!')
});