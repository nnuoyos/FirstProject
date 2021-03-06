/* API를 호출하는 함수 만들기 */
//postman에서 쓴 url 그대로 들고 오기
//자바스크립트에서 제공해주는 tool을 이용해서 url을 보여준다

let articles = [];

const getLatestNews = async () => {
    let url = new URL(`https://api.newscatcherapi.com/v2/latest_headlines?countries=KR&topic=sport&page_size=10`);
    //console.log(url);
    let header = new Headers({ 'x-api-key': 'H5bBKeDDN1pzJlqRuinWFwTqBlcoS06fSd4_B91s7BE' });
    let response = await fetch(url, { headers: header });
    let data = await response.json(); //json : 서버통신에 사용 되어짐.텍스트 타입인 객체라고 보면 된다
    //console.log(response);
    news = data.articles; //아티클만 따로 뽑아내기 (뉴스 기사만 유저들에게 보여주기)
    console.log(news);
    render();
};
const render = () => {
    let newsHTML = '';

    newsHTML = news
        .map((news) => {
            //``백틱 안에서 동적구현이 가능하다
            return `<div class="row news">
        <div class="col-lg-4">
            <img class="news-img-size"
            src="${news.media || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqEWgS0uxxEYJ0PsOb2OgwyWvC0Gjp8NUdPw&usqp=CAU'}" alt="news img" />
        </div>
        <div class="col-lg-8">
            <h2>${news.title}</h2>
            <p>${news.summary == null || news.summary == '' ? '내용 없음' : news.summary.length > 200 ? news.summary.substring(0, 200) + '...' : news.summary}</p>
            <div> ${news.rights || 'No source'} * ${moment(news.published_date).fromNow()}</div>
        </div>
    </div>`;
        })
        .join(''); //join():배열을 스트링으로 바꿈 /array [a,b,c]에 나오는 ,콤마가 화면에 나타나는 것을 없앤다 (기사들 사이에 , 찍혀있음)

    document.getElementById('news-board').innerHTML = newsHTML;
};
getLatestNews();


topicButton.addEventListener('click',showTopic);
const showTopic = (topicButton) => {
    
    let topicButton = document.querySelectorAll('.menus button');
    if(
        const newUrl = `https://api.newscatcherapi.com/v2/latest_headlines?countries=KR&topic=${topicButton}&page_size=10`
        )
    



}

/* 해당 메뉴에 해당하는 토픽 기사 보여주는 기능 */

/* let topicButton = document.querySelectorAll('.menus button');
topicButton.addEventListener('click',showTopic);

//topic 버튼 클릭시 실행할 함수
//array 객체의 topic ="sport"와 메뉴버튼의 sport 값과 일치하면 해당 기사 보여주기
function showTopic() {
    let topicUrl = new URL = (`https://api.newscatcherapi.com/v2/latest_headlines?countries=KR&topic=${topicButton}&page_size=10`)
    let newsHTML = '';

    newsHTML = news
        .map((news) =>{
            return `<div class="menus">
            <button>${news.topic == "sport"}</button>
            <button>Tech</button>
            <button>World</button>
            <button>Finance</button>
            <button>Politics</button>
            <button>Business</button>
            <button>Economics</button>
            <button>Entertainment</button>
            <button>Beauty</button>
            <button>Travel</button>
            <button>Music</button>
            <button>Food</button>
            <button>Science</button>
            <button>Gaming</button>
            <button>Energy</button>
            </div>`
        })
        render();
} */



