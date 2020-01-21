import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Image
} from 'react-native';
import Heading from './Heading';
import Button from './Button';
import DisplayWeather from './DisplayWeather';

const App = () => {

    const[run, setRun] = useState(false)
    const[weather, setWeather] = useState('')

    const changeRun = () => {
        setRun(!run)
        console.log("run? : " + run )
    }

    async function getWeather() {
        try{
            let response = await fetch('http://192.168.0.8:8080/weather?code=1111')
            let responseJson = await response.json()
            return responseJson
        }catch(error){
            console.log("error")
            console.log(error)
        }
    }


    useEffect(() => {
        console.log("useEffect가 동작 하나요?")
        getWeather().then(result => {
            console.log(result)
            setWeather(result)
        })
    },[run])

  
    const imgObj = require("../assets_0121/01.jpg")
    const imgObj2 = {uri:'http://192.168.0.13:8080/samples/02.jpg'} // url로 가져오는 이미지는 이미지크기가 넘어버리면 안나옴.
    

    return(
        <View style={style.container}>
{/*             <Image source={imgObj}></Image>
            <Image style={style.box} source={imgObj2}></Image> */}
            <Heading title={"TODAY'S WEATHER"}></Heading>
            <Button submitTodo={changeRun} buttonText={"날씨확인"}></Button>
            <DisplayWeather weather={weather}></DisplayWeather>
        </View>
    )
}

//StyleSheet의 문제점. vw,vh로 주기 힘듦 > 이렇게 할거면 별도의 css파일로 빼야함. 
const style = StyleSheet.create({
    // key-value
    container: {
        flex : 1,
        backgroundColor : 'black',
        color : 'white'
    },
    box: {
        width: 100,
        height: 100
    }
})


export default App