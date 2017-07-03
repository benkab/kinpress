import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    StatusBar,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import HeaderImageScrollView,
{ TriggeringView } from 'react-native-image-header-scroll-view';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const postImage = require('../../assets/images/post.jpg');

class Post extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <HeaderImageScrollView
                    maxHeight={height / 2.2}
                    minHeight={15}
                    renderHeader={() => (
                        <Image source={postImage} style={styles.image} />
                    )}
                    overlayColor="rgba(0, 0, 0, 0.5)"
                    showsVerticalScrollIndicator={false}
                >
                    <StatusBar
                        backgroundColor="#fff"
                        barStyle="light-content"
                    />

                    <TriggeringView>
                        <View style={styles.content}>
                            <Text style={styles.title}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Accusantium amet dignissimos distinction.
                            </Text>
                            <Text style={styles.writter}>
                                by <Text style={styles.writterBold}>Beni Kabona</Text>
                            </Text>
                            {/*<Text style={styles.company}>*/}
                                {/*Actualite.cd*/}
                            {/*</Text>*/}
                            <View style={styles.textContainer}>
                                <Text style={styles.text}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Accusantium amet dignissimos distinctio, dolor eius id
                                magnam nam quod quos, reiciendis tenetur voluptate. Cum
                                dolorem eveniet fugiat fugit minima sunt tempore.Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Accusantium amet dignissimos distinctio, dolor eius id
                                    magnam nam quod quos, reiciendis tenetur voluptate. Cum
                                    dolorem eveniet fugiat fugit minima sunt tempore.Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Accusantium amet dignissimos distinctio, dolor eius id
                                    magnam nam quod quos, reiciendis tenetur voluptate. Cum
                                    dolorem eveniet fugiat fugit minima sunt tempore.Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Accusantium amet dignissimos distinctio, dolor eius id
                                    magnam nam quod quos, reiciendis tenetur voluptate. Cum
                                    dolorem eveniet fugiat fugit minima sunt tempore.Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Accusantium amet dignissimos distinctio, dolor eius id
                                    magnam nam quod quos, reiciendis tenetur voluptate. Cum
                                    dolorem eveniet fugiat fugit minima sunt tempore.Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Accusantium amet dignissimos distinctio, dolor eius id
                                    magnam nam quod quos, reiciendis tenetur voluptate. Cum
                                    dolorem eveniet fugiat fugit minima sunt tempore.Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Accusantium amet dignissimos distinctio, dolor eius id
                                    magnam nam quod quos, reiciendis tenetur voluptate. Cum
                                    dolorem eveniet fugiat fugit minima sunt tempore.Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Accusantium amet dignissimos distinctio, dolor eius id
                                    magnam nam quod quos, reiciendis tenetur voluptate. Cum
                                    dolorem eveniet fugiat fugit minima sunt tempore.

                                </Text>
                            </View>
                        </View>
                    </TriggeringView>
                </HeaderImageScrollView>
                {/*<View style={styles.imageContainer}>*/}
                    {/*<View style={styles.imageOverlay} />*/}
                    {/*<View style={styles.actionsTop}>*/}
                        {/*<View>*/}
                            {/*<TouchableOpacity>*/}
                                {/*/!*<Icon name="ei-close"/>*!/*/}
                            {/*</TouchableOpacity>*/}
                        {/*</View>*/}
                        {/*<View >*/}
                            {/*<Text style={styles.day}>01</Text>*/}
                            {/*<Text style={styles.month}>July</Text>*/}
                            {/*<Text style={styles.year}>2017</Text>*/}
                        {/*</View>*/}
                    {/*</View>*/}
                {/*</View>*/}
                <View style={styles.postTabContainer}>
                    <View>
                        <Text>Some</Text>
                    </View>
                    <View>
                        <Text>Some</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative'
    },
    imageContainer: {
        position: 'relative'
    },
    content: {
        backgroundColor: '#fff',
        paddingVertical: 20,
        paddingHorizontal: 25
    },
    image: {
        position: 'absolute',
        width: undefined,
        height: undefined,
        resizeMode: 'cover',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    },
    actionsTop: {
        position: 'absolute',
        backgroundColor: '#000',
        flexDirection: 'row',
        top: '10%',
        left: 10,
        right: 10,
        height: 30,
        justifyContent: 'space-between',
        padding: 5,

    },
    imageOverlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 999999999
    },
    icon: {
        borderColor: '#000',
        position: 'absolute',
        top: '10%',
        left: 10,
        right: 10,
        height: 30,
    },
    day: {
        color: "#fff",
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'right',
    },
    month: {
        color: "#fff",
        fontSize: 13,
        fontWeight: 'bold',
        textAlign: 'right'
    },
    year: {
        color: "#fff",
        fontSize: 8,
        fontWeight: 'bold',
        textAlign: 'right'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        lineHeight: 28
    },
    writter: {
        paddingTop: 10,
    },
    writterBold: {
        fontWeight: 'bold',
        color: '#3CC9BA',
        fontSize: 13
    },
    company: {
        paddingVertical: 3,
        paddingHorizontal: 4,
        borderRadius: 8
    },
    textContainer: {
        marginTop: 25,
        borderTopWidth: 1,
        borderTopColor: '#F5F5F5'
    },
    text: {
        marginTop: 25,
        lineHeight: 26,
        color: "#5F5F5F",
        fontSize: 14.5
    },
    postTabContainer: {
        height: 55,
        borderTopWidth: 1,
        borderTopColor: '#F5F5F5',
        backgroundColor: '#FFF',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 25,
    }

});

export default Post;
