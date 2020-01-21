import React, {useState} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Button,
    Alert,
    TextInput,
    Linking
} from 'react-native';



// Flex 이용 예제 

const Test2 = () => {

    const [text,setText] = useState('')

    const handlePress = () => {
        Alert.alert("CLICK", "WANT TO RUN?")
    }

    const handleTextChange = (text) => {
        console.log(text)
        setText(text)
    }

    return (
        <View style={style.container}>

            <View style={style.header}>
                <Text>THIS IS HEADER</Text>
            </View>
            <View style={style.center}>
                <Text onPress={()=> Linking.openURL('http://naver.com')}>THIS IS CENTER</Text>
                <TextInput placeholder='INPUT YOUR TEXT' style={{backgroundColor:'white'}} value={text} onChangeText={handleTextChange}></TextInput>
                <Button title="CLICK" onPress={handlePress}></Button>
            </View>
            <View style={style.footer}>
                <Text onPress={()=> {Linking.openURL('tel:010-9764-9658')}}>THIS IS FOOTER</Text>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'gray',
    },
    left: {
        backgroundColor: 'white',
        flex: 2
    },
    right: {
        flex: 2
    },
    header: {
        flex: 1,
        backgroundColor: 'skyblue'
    },
    center: {
        flex: 3,
        backgroundColor: 'pink'
    },
    footer: {
        flex: 1,
        backgroundColor: 'yellow'
    }
})

export default Test2