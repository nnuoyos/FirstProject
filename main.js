let computerNumber = 0;
let playButton = document.getElementById('play-button');
/* 
document 는 DOM트리의 최상위 객체이다
DOM(Document Object Model)이라 하면 자바스크립트 입장에서 그저 일종의 문자열일 뿐인 HTML을
자바스크립트가 이해할 수 있게 객체의 형태로 바꿔둔 것
(도큐먼트를 HTML이라고 이해하면 편하다) 이 DOM을 이제 자바스크립트가 마음대로 컨트롤 할 수 있어야 하는데
이 때 필요한 기본 함수들과 속성값을 제공해주는 게 document라는 객체이다
*/

/* 
document.getElementById : id로 선택
document.getElementByClassName : class로 선택, 같은 클래스가 여러개 있을 경우 모두 다 선택되서 배열에 저장된다
*/
/* 
document.querySelector : id, class 둘다 선택 가능하고 좀더 디테일한 선택이 가능. 참고로 선택가능한 값이 여러개일 경우 첫번째 태그 하나만 반환

let userInput = document.querySelector("#user-input");
>>id=user-input 을 선택
let resultAreaImg = document.querySelector(".main-img");
>>class=main-img 를 선택
let menus = document.querySelector("nav a");
>>nav태그 밑에 있는 a를 선택

document.querySelectorAll : 위에 있는 document.querySelector와 같고, All 선택된 값을 모두 NodeList에 담아 반환
*/
console.log(playButton);

function pickRandomNumber() {
    computerNumber = Math.floor(Math.random() * 100) + 1;
    //1~100까지 숫자 설정하기
    //Math.random() 는 0~1 사이의 소수가 랜덤으로 나온다 여기서 *100을 해주고 Math.floor로 소수점 아래를 버린다
    //이렇게 되면 0~99 까지의 숫자가 나오는데 마지막에 + 1을 해줘서 100을 포함하게 설정한다
    /* 
    Math : 자바스크립트에서 유용한 객체중 하나인 Math
    수학적으로 사용되는 함수들이 다 들어가 있다

    Math.random() : 0~1 사이값을 반환 (1에 근접한 값 까지만 나오고 1은 미포함)
    Math.floor() : 소수점 버림
    Math.ceil() : 소수점 올림
    Math.round() : 소수점 반올림
    Math.max() : 여러개의 값 중 제일 큰 값 반환
    Math.min() : 여러개의 값 중 제일 작은값 반환
    등등
    */
    console.log(computerNumber);
}

pickRandomNumber();
