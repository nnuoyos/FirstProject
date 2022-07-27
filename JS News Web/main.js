/* API를 호출하는 함수 만들기 */
//postman에서 쓴 url 그대로 들고 오기
//자바스크립트에서 제공해주는 tool을 이용해서 url을 보여준다

let articles = [];

const getLatestNews = async () => {
    let url = new URL(`https://api.newscatcherapi.com/v2/latest_headlines?countries=KR&topic=sport&page_size=2`);
    //console.log(url);
    let header = new Headers({ 'x-api-key': 'H5bBKeDDN1pzJlqRuinWFwTqBlcoS06fSd4_B91s7BE' });
    let response = await fetch(url, { headers: header });
    let data = await response.json(); //json : 서버통신에 사용 되어짐.텍스트 타입인 객체라고 보면 된다
    //console.log(response);
    news = data.articles; //아티클만 따로 뽑아내기 (뉴스 기사만 유저들에게 보여주기)
    console.log(news);
};
getLatestNews();
