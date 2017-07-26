import React from 'react';
import { AppRegistry,StatusBar,StyleSheet,View,Platform,TouchableHighlight, Text} from 'react-native'; //Most of the react native components can be found in NativeBase
import {Font} from 'expo';
import {
    Container,
    Header,
    Title,
    Content,
    Footer,
    FooterTab,
    Button,
    Left,
    Right,
    Icon,
    List,
    ListItem,
    Fab
} from 'native-base';//include font from expo.


let randomHex = () => {

    let letters = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


export default class App extends React.Component {

    //checking state for if font is loaded or not.
    state = {
        fontLoaded: false,
        count: 0,
        backgroundColor: randomHex(),

    };



    onClick() {
        this.setState({backgroundColor: randomHex()});
    }


    async componentDidMount() {
      await Font.loadAsync({'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),});
        //Setting the state to true when font is loaded.
        this.setState({fontLoaded: true});

        setInterval(() => {
            this.setState(
                {count: this.state.count + 1},this.onClick()
                )
        }, 1000)

    }

    render() {

      if (this.state.fontLoaded) {

        return (

                <View style={styles.container}>
                    <Text style={[styles.titleText, {color: this.state.backgroundColor}]}>
                        {this.state.count}
                    </Text>
                </View>

        )//end return
      }//end if
       else {  return (<Container></Container>) } //end else
    }//end render
}//end class


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    titleText : {
        fontSize: 150,
        fontWeight: 'bold',
    }
});
AppRegistry.registerComponent('randomBackground', () => randomBackground);