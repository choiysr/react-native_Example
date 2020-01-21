import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';


const Test1 = () => {
    return(
        // react-native는 <div>쓸 수 없음. 위에 react-native 라이브러리에서 import한 태그로 사용해야함.
        // html태그를 쓸 수 없다.  
        // <div>에 상응하는 <view>를 사용하자
        <View>
            {/* style을 직접 지정하는게 지저분하지만, react의 사상 자체가 componet자체가 고유한 스타일,이벤트,돔을 갖는 것 이기 때문에
            react가지고 코딩할때는 컴포넌트당 스타일을 잡는게 일반적임. 
            so, 컴포넌트당 스타일 단위를 object로 잡고 사용하자. (아래 style Object(StyleSheet.create))
            or css파일을 따로 빼는 방법도 많이 씀. */}
            <Text style={style.title}>TEST1 COMPONENT</Text>
        </View>
    )
}

/* 최근 레이아웃을 잡는 방법 2가지 1)grid, 2)css flexbox

css로 레이아웃을 잡기는 쉽지 않다. but css flexbox는 쉽게 구성할 수 있음.(인터넷에 가이드들 많음)
react-native에서는 vh,vw단위를 사용 할 수 없다. 
flex 옵션으로 내가 part별로 가중치를 줄 수 있음. 




*/

const style = StyleSheet.create({
    // .class 같은 개념이 없음
    title : {
        fontSize : 40,
        backgroundColor : 'pink'
    }
})

export default Test1