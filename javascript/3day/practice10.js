'use strict';
//도서 5권의 제목,저서,가격

const bookArray = new Array(5);
bookarray[6] = 1;
//Book객체 정의
// function Book(title,author,price){
//   this.title = title;
//   this.author = author;
//   this.price = price;
// }

//book class 정의
class Book {
  constructor(title,author,price){
    this.title =title;
    this.author =author;
    this.price =price;
  };
   // get title(){
  //   return this.title;
  // }
  // get author(){
  //   return this.author;
  // }
  // get price(){
  //   return this.price;
  // }
}

//도서가격이 가장 비싼 도서 인덱스 반환
function max(arrays){
  let maxBook = arrays[0];
  for(let i=1; i < arrays.length; i++){
    if(maxBook.price < arrays[i].price){
      maxBook = arrays[i];
    }
  }
  return maxBook;
}
let a = "고철환";
let b = parseInt(a);
***
= NaN = 상수가 아님을 나타내는
 isNaN
 IF( !ISNAN)문
 =어떨떄

//도서정보 등록
for(let i=0; i<bookArray.length;i++){
  let bookStr = prompt('도서정보를 입력하세요(제목,저서,가격)',"제목,저서,가격");
  const tokens = bookStr.split(",");
  bookArray[i] = new Book(tokens[0],tokens[1],tokens[2]);
  // bookArray[i] = book;
  // const book = {};
  // const book = new Object();
  // book.title = tokens[0];
  // book.author = tokens[1];
  // book.price = tokens[2];
  // bookArray[i] = book;
}
console.log( max(bookArray));








