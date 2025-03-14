////////////////////1-misol////////////////////////////////
// function swap<T>(arg1: T, arg2: T): [T, T] {
//     return [arg2, arg1];
// }

// let a = 1;
// let b = 2;
// [a, b] = swap(a, b);
// console.log(`a: ${a}, b: ${b}`); 

// let x = "hello";
// let y = "world";
// [x, y] = swap(x, y);
// console.log(`x: ${x}, y: ${y}`); 

////////////////////2-misol////////////////////////////////
// function assertString(input: unknown): void {
//     if (typeof input !== "string") {
//       throw new Error("Input is not a string");
//     }
//   }
  
//   try {
//     assertString("hello"); 
//     console.log("Input is a string");
//   } catch (e) {
//     console.error((e as Error).message);
//   }
  
//   try {
//     assertString(123); 
//   } catch (e) {
//     console.error((e as Error).message);
//   }
  

////////////////////3-misol////////////////////////////////
// function quicksort(arr) {
//     if (arr.length <= 1) return arr;
//     const pivot = arr[arr.length - 1];
//     const left = [], right = [];
//     for (let i = 0; i < arr.length - 1; i++) {
//       if (arr[i] < pivot) left.push(arr[i]);
//       else right.push(arr[i]);
//     }
//     return [...quicksort(left), pivot, ...quicksort(right)];
//   }
  
//   function mergesort(arr) {
//     if (arr.length <= 1) return arr;
//     const mid = Math.floor(arr.length / 2);
//     const left = mergesort(arr.slice(0, mid));
//     const right = mergesort(arr.slice(mid));
//     return merge(left, right);
//   }
  
//   function merge(left, right) {
//     let result = [], i = 0, j = 0;
//     while (i < left.length && j < right.length) {
//       if (left[i] < right[j]) result.push(left[i++]);
//       else result.push(right[j++]);
//     }
//     return [...result, ...left.slice(i), ...right.slice(j)];
//   }
  
//   const array = Array.from({ length: 1000 }, () => Math.floor(Math.random() * 10000));
  
//   const quicksortStart = performance.now();
//   const quicksortedArray = quicksort([...array]);
//   const quicksortEnd = performance.now();
//   console.log(`Quicksort ishlash vaqti: ${(quicksortEnd - quicksortStart).toFixed(4)} ms`);
  
//   const mergesortStart = performance.now();
//   const mergesortedArray = mergesort([...array]);
//   const mergesortEnd = performance.now();
//   console.log(`Mergesort ishlash vaqti: ${(mergesortEnd - mergesortStart).toFixed(4)} ms`);



////////////////////4-misol////////////////////////////////
// class Person {
//     public name: string;

//     constructor(name: string) {
//         this.name = name;
//     }

//     sayHello(): void {
//         console.log(`Hello, my name is ${this.name}`);
//     }
// }

// const person = new Person("John");
// person.sayHello(); 

////////////////////5-misol////////////////////////////////
// class Employee {
//     protected salary: number;

//     constructor(salary: number) {
//         this.salary = salary;
//     }
// }

// class Developer extends Employee {
//     constructor(salary: number) {
//         super(salary); 
//     }

//     showSalary(): void {
//         console.log(`My salary is ${this.salary}`);
//     }
// }

// const developer = new Developer(5000);
// developer.showSalary(); 

////////////////////6-misol////////////////////////////////
// interface Vehicle {
//     brand: string;
//     speed: number;
// }

// const car: Vehicle = {
//     brand: "Toyota",
//     speed: 120
// };

// console.log(`Brand: ${car.brand}, Speed: ${car.speed} km/h`);


////////////////////7-misol////////////////////////////////
// interface Vehicle {
//     brand: string;
//     speed: number;
// }

// class Car implements Vehicle {
//     brand: string;
//     speed: number;

//     constructor(brand: string, speed: number) {
//         this.brand = brand;
//         this.speed = speed;
//     }

//     showInfo(): void {
//         console.log(`Brand: ${this.brand}, Speed: ${this.speed} km/h`);
//     }
// }

// const myCar = new Car("Tesla", 250);
// myCar.showInfo(); 