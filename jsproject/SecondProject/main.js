/* 
로직 정리
1. 유저가 값을 input에 입력한다
2. +버튼을 누르면 아이템이 추가된다. 할일이 추가 됨
3. 유저가 딜리트 버튼을 누르면 할일이 삭제 된다
4. 체크버튼을 누르면 할일이 끝나면서 밑줄이 생긴다
5. 진행 중 끝남 탭을 누르면 언더바가 이동한다
6. 끝난탭은 끝난 아이템만, 진행중탭은 진행중인 아이템만 보여준다
7. 전체탭을 누르면 전체 목록이 나온다
*/

let taskInput = document.getElementById('task-input');
// console.log(taskInput);
let addButton = document.getElementById('add-button');
// console.log(addButton);

//입력 받은 값을 차례로 배열에 넣을 예정
let taskList = [];

/* 버튼이 클릭 되었을 때 실행할 함수 */
addButton.addEventListener('click', addTask);
function addTask() {
    //console.log('click check'); 확인용
    //taskInput의 value값으로 들어간다
    let taskContent = taskInput.value;
    taskList.push(taskContent);
    //console.log(taskList);
    render();
}

//taskList를 화면상에 나타나도록 하기
function render() {
    let resultHTML = '';
    for (let i = 0; i < taskList.length; i++) {
        resultHTML += `<div class="task">
        <div>${taskList[i]}</div>
        <div>
            <button>Check</button>
            <button>Delete</button>
        </div>
    </div>`;
    }
    document.getElementById('task-board').innerHTML = resultHTML;
}

/* 
innerHTML과 textContent의 차이점
innerHTML : Element의 HTML, XML을 읽어 오거나 설정할 수 있다
태그 안에 있는 HTML 전체내용을 들고 온다

textContent : 해상 노드가 가지고 있는 텍스트 값을 그대로 들고 온다
*/
