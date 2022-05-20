import React from 'react';
import {FlatList} from "react-native";
import Article from "./Article";

const ListOfArticles = ({articles}) =>
        <FlatList
            data={articles}
            renderItem={({item}) => <Article item={item}/>}/>

export default ListOfArticles;