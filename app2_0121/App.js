import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native';
import ImageList from './ImageList';

const App = () => {

    // require(모듈을 import하는 역할. 사전처리=>후로딩이X)는 정적임.
    // 동적으로 바뀌지 않기때문에(연산이 불가능하기 때문에) 문자열로 한다음 나중에 require 할 수 없다.
    // (전달받은 문자열로 require괄호 안에서 연산할 수 없기 때문) 
    const arr = [
        {no:1, src: require("../assets_0121/antman1.jpg")},
        {no:2, src: require("../assets_0121/antman2.jpg")},
        {no:3, src: require("../assets_0121/antman3.jpg")},
    ]
    
    return(
        <View style={style.container}>
            <Text style={style.containerText}>ANTMAN FOREVER♥</Text>
            <ImageList arr={arr}></ImageList>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex : 1,
        backgroundColor : 'black',
    },
    containerText: {
        fontSize: 40,
		color: 'white',
		fontWeight: '100'
    }
})

export default App