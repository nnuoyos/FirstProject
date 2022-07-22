let handelId = 0; // 시계 움직이는 동작에 대한 아이디 저장
const h1 = document.getElementById("time");
const go = document.getElementById("go");
const stop = document.getElementById("stop");

/* 현재 시간 불러오는 기능 */
function getTime(){
    const data = new Date() //Date 자바스크립트 내장 객체 가져오기
    const hour = data.getHours();
    const minutes = data.getMinutes();
    const seconds = data.getSeconds();
    const time = `${hour}:${minutes}:${seconds}`
    h1.textContent = time;
}

go.onclick = function(){
    //주기적 동작. 시간이 계속해서 흐르도록 하기
    if(handelId == 0){
        handelId = setInterval(getTime, 1000)
        // setInterval : 첫번째 인자로 전달 된 함수를 두번째 인자로 전달된 숫자만큼의 주기를 가지고 동작하겠다 
    }
}

stop.onclick = function (){
    clearInterval(handelId)
    handelId = 0;
}
