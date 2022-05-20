import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from "react-native";
import SearchBar from "../components/SearchBar";
import ListOfArticles from "../components/ListOfArticles";
import axios from "../api/axios";

const MainScreen = () => {
    const [articles, setArticles] = useState([]);
    const [term, setTerm] = useState('');

    const getResponse = async () => {
        const response = await axios.get();
        setArticles(response.data.articles);
    }

    useEffect(() => {
        if (term.length === 0) {
            getResponse();
        } // it may look a bit silly, but the API doesn't provide an opportunity to search by input, that's why I did it like this
        const result = articles.filter(article => article.title.includes(term));
        setArticles(result)
    }, [term]);

    return (
        <View style={styles.background}>
            <SearchBar term={term} handleTerm={setTerm}/>
            <ListOfArticles articles={articles}/>
        </View>
    );
};

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#D2D3D5',
        height: '100%',
        borderLeftWidth: 5,
        borderRightWidth: 5,
        borderColor: '#DFDFDF'
    }
})

export default MainScreen;