## React-native Example in class(2020-01-20 ~ )

### 1.(0120) components_0120 folder : react-native StyleSheet, Linking, 버튼이벤트(onPress)
### 2.(0121) app_0121,app2_0121,assets_0121 folder : 컴포넌트의 재사용, fetch()함수를 이용하여 웹(URL)에서 데이터 가져오기, local경로 및 URL을 통한 이미지 불러오기, ScrollView을 이용한 화면 스크롤처리(horizontal={true})
![img](https://user-images.githubusercontent.com/48176963/72778008-dc5c9680-3c5a-11ea-9741-ef0548b5e142.png)

  
  
------------------------------------------------------------------------------------------------
  
  
 
## CLASS NOTE 

### 0121
: require() 모듈을 import하는 역할로, 사전처리 함수(?)이기 때문에 후로딩이 불가하다.<br>
따라서 app2의 경우, 로컬 이미지를 담고있는 배열arr 원소의 src속성을 문자열로 준 후 require에 넣어주는 것이 불가능 하다.<br>
(동적으로 바뀌지 않기 때문에-연산이 불가능 하기 때문에-) 전달받은 문자열로 require괄호 안에서 연산을 할 수 없기 때문이다.<br>
<br>
: fetch()함수는 비동기라 async, await 필수. (json()도 마찬가지) 
