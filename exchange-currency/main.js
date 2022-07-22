/* 
1. box 2개 만들기 
2. 드롭다운 리스트 만들기
3. 환율 정보 들고오기 드랍다운 리스트에서 아이템 선택하면 아이템이 바뀜
4. 금액을 입력하면 환전이 된다
5. 드랍다운 리스트에서 아이템을 선택하면 다시 그 단위 기준으로 환전이 됨

(숙제)
7. 반대로 아래 박스에서 숫자를 바꿔도 위에 박스에 환율이 적용 된다
6. 숫자를 한국어로 읽는 법 
*/

let currencyRatio = {
  USD: {
    KRW: 1313.5,
    USD: 1,
    VND: 23405.0,
    unit: "달러",
  },
  KRW: {
    KRW: 1,
    USD: 0.00076,
    VND: 17.82,
    unit: "원",
  },
  VND: {
    KRW: 0.056,
    USD: 0.000043,
    VND: 1,
    unit: "동",
  },
};

/* 객체 정리 */
// console.log(currencyRatio.USD.unit) => 달러
//console.log(currencyRatio["VND"].unit) => 동

let fromCurrency ="USD";
let toCurrency ="USD";

document.querySelectorAll("#from-currency-list a").forEach((menu) =>
  menu.addEventListener("click", function () {
    // 1. 버튼을 가져온다
    // 2. 버튼에 값을 바꾼다
    document.getElementById("from-button").textContent = this.textContent;
    // 3. 선택 된 currency 값을 변수에 저장해준다
    fromCurrency = this.textContent;
    console.log("fromCurrency는", fromCurrency);
    convert();
  })
);

document.querySelectorAll("#to-currency-list a").forEach((menu) =>
  menu.addEventListener("click", function () {
    // 1. 버튼을 가져온다
    // 2. 버튼에 값을 바꾼다
    document.getElementById("to-button").textContent = this.textContent;
    // 3. 선택 된 currency 값을 변수에 저장해준다
    toCurrency = this.textContent;
    convert();
  })
);


// 1. 키를 입력하는 순간
// 2. 환전이 됨
// 3. 환전된 값이 보인다


function convert(){
    // 1. 환전
    // 얼마를 환전? 가지고 있는 돈이 뭔지, 바꾸고자하는 돈이 뭔지?
    // 돈 * 환율 = 환전금액
    let amount = document.getElementById("from-input").value;
    let convertedAmount = amount * currencyRatio[fromCurrency][toCurrency] //동적인 값을 위해 변수를 넣어줌
    console.log("환전 결과!", convertedAmount);

    document.getElementById("to-input").value = convertedAmount;
}

// 1. 드랍다운 리스트에 값이 바뀔때마다 
// 2. 환전을 다시한다