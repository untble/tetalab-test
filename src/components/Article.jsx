import React from 'react';
import {View, StyleSheet, TouchableOpacity, Linking, Image, Text} from "react-native";
import {Feather} from '@expo/vector-icons'

const Article = ({item}) => {
    const {url, title, urlToImage, source, publishedAt, description} = item;
    const date = new Date(publishedAt).toISOString().split("T")[1].split(".")[0].split(':');
    const time = `${date[0]}:${date[1]}`;

    return (
        <View
            style={styles.container}
        >
            {urlToImage && <Image style={styles.image} source={{uri: urlToImage}}/>}
            <View style={styles.innerContainer}>
                <Text style={styles.title}>{title}</Text>
                <View>
                    <Text style={{color: '#8A8C91'}}>{time}</Text>
                    <TouchableOpacity onPress={() => Linking.openURL(String(url)).catch(err => console.error("Couldn't load page", err))}>
                        <Feather style={styles.inputStyle} name='arrow-right'/>
                    </TouchableOpacity>
                </View>
            </View>
            <Text style={{paddingLeft: 10, fontSize: 16}}>{source.name}</Text>
            <Text style={styles.description}>{description}</Text>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 10,
        borderRadius: 5,
        marginVertical: 5,
        backgroundColor: '#FFFFFF',
        height: 400
    },
    image: {
        width: '100%',
        height: 150,
    },
    innerContainer: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
        paddingHorizontal: 10
    },
    title: {
        fontWeight: "500",
        fontSize: 16,
        width: '60%'
    },
    inputStyle: {
        color: '#8A8C91',
        fontSize: 48
    },
    description: {
        marginTop: 10
    }
});

export default Article;