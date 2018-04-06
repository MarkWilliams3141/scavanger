import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, FlatList, ScrollView, Image, TouchableOpacity, TextInput, Button} from 'react-native';
import { SearchBar } from 'react-native-elements'


var Thumb = React.createClass({
    getRandomCategory: function(){
        let categories = ['Romance','Mystery','Adventure','Cryptic', 'For Kids'];
        return categories[Math.floor(Math.random() * categories.length)];
    },
    getRandomTitle: function(){
        let categories = ['Explore Shoredich','The City at Night','The Islington Special','Canal Side Lazy Days'];
        return categories[Math.floor(Math.random() * categories.length)];
    },
    getRandomRating: function(){
        let rating = Math.floor(Math.random() * 5) + 1;
        let starStr = '';
        for(let i = 0; i < 5; i++){
            if(i < rating){starStr += '★'}else{starStr +='☆'}
        }
        return starStr + ' ' + Math.floor(Math.random() * 25) + 1;
    },
        shouldComponentUpdate: function(nextProps, nextState) {
        return false;
    },
    render: function() {
        return (
            <View>
                <View style={{height:150, paddingRight:20}}>
                    <Image style={styles.img} source={{uri:this.props.uri}} />
                </View>
                <View>
                    <Text>{this.getRandomCategory()}</Text>
                    <Text>{this.getRandomTitle()}</Text>
                    <Text>Free</Text>
                    <Text>{this.getRandomRating()}</Text>

                </View>
            </View>
        );
    }
});


var THUMBS = [
    'https://cdn.londonandpartners.com/visit/general-london/areas/westminster-st-james/60262-640x360-parliament-bridge-640.jpg',
    'http://london.wtm.com/RXUK/RXUK_WTMLondon/images/SEO/552x450/WTMLondon_552x450_3col_Events3.jpg?v=636179140012734695',
    'http://blog.nationalexpress.com/wp-content/uploads/2016/07/things-to-do-in-shoreditch-brick-lane.jpg'
    ];
//THUMBS = THUMBS.concat(THUMBS); // double length of THUMBS
var createThumbRow = (uri, i) => <Thumb  key={i} uri={uri} />

var CityScroller = React.createClass({


    render() {
        var _scrollView: ScrollView;
        return (

            <View style={styles.container}>

                <Text style={styles.headerCity}>{this.props.cityName}</Text>
                {/*<FlatList
                 style={styles.t1}
                 data={[
                 {key: 'Devisxn'},
                 {key: 'Jackson'},
                 {key: 'James'},
                 {key: 'Joel'},
                 {key: 'John'},
                 {key: 'Jillian'},
                 {key: 'Jimmy'},
                 {key: 'Julie'},
                 ]}
                 renderItem={({item}) => <Text style={styles.t1}>{item.key}</Text>}
                 />*/}
                <View>
                    <ScrollView
                        ref={(scrollView) => { _scrollView = scrollView; }}
                        automaticallyAdjustContentInsets={false}
                        horizontal={true}
                        style={[styles.scrollView, styles.horizontalScrollView]}>
                        {THUMBS.map(createThumbRow)}
                    </ScrollView>
                    {/*<TouchableOpacity
                     style={styles.button}
                     onPress={() => { _scrollView.scrollTo({x: 0}); }}>
                     <Text>Scroll to start</Text>
                     </TouchableOpacity>*/}
                </View>
            </View>
        );
    }
});




//export default class HomeScreen extends Component
export default class HomeScreen extends Component {
    render() {
        var _scrollView: ScrollView;
        return (
            <ScrollView horizontal={false} style={styles.wtf}>
                <View>
                    <SearchBar containerStyle={styles.searchBar} inputStyle={{backgroundColor:'#ffffff'}} placeholder='Search...' />
                </View>
                <View  style={styles.filterButton}>
                    <Button
                        color="#616362"
                        onPress={() => console.log('buttonPressed')}
                        title="Filter"
                        accessibilityLabel="See an informative alert"
                    />
                </View>

                <CityScroller cityName="London"/>
                <CityScroller cityName="Cambridge"/>
                <CityScroller cityName="Brighton"/>


            </ScrollView>
        );
    }
}

;

var styles = StyleSheet.create({
    wtf:{
        height:'100%',
        backgroundColor: '#ffffff',
    },
    searchBar:{
        backgroundColor: '#ffffff',
        borderWidth: 1,
        marginTop:15,
        marginRight:25,
        marginLeft:25,
        marginBottom:0,
        borderRadius: 2,
        padding: 0
    },
    filterButton:{
        display:'flex',
        flexDirection: 'row-reverse',
        marginTop: 5,
        marginLeft: 25,
        backgroundColor: '#ffffff'
    },
    headerCity:{
        fontSize:24,
        color: '#000000',
        paddingLeft: 20
    },
    scrollView: {
        backgroundColor: '#fff',
        height: 350,

    },
    horizontalScrollView: {
        height: 240,
        paddingLeft: 5

    },
    containerPage: {
        height: 50,
        width: 50,
        backgroundColor: '#ffffff',
        padding: 5,
    },
    text: {
        fontSize: 20,
        color: '#e0e7e5',
        left: 80,
        top: 20,
        height: 40,
    },
    button: {
        margin: 7,
        padding: 5,
        alignItems: 'center',
        backgroundColor: '#eaeaea',
        borderRadius: 3,
    },
    buttonContents: {
        flexDirection: 'row',
        width: 64,
        height: 64,
    },
    img: {
        width: 200,
        height: 150,
    },
    container: {
        flex: 1,
        paddingTop: 22,
        backgroundColor:'#ffffff'
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    }
});


