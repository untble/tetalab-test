import React from 'react';
import {TextInput, View, StyleSheet} from "react-native";
import {Feather} from '@expo/vector-icons'

const SearchBar = ({term, handleTerm}) => {
    return (
        <View style={styles.background}>
            <Feather style={styles.iconStyle} name="search"/>
            <TextInput
                onChangeText={handleTerm}
                value={term}
                autoCorrect={false}
                style={styles.inputStyle}
                placeholder="Search"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    background: {
        marginTop: 15,
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: "row",
        marginBottom: 10
    },
    inputStyle: {
        borderColor: 'black',
        fontSize: 18
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: "center",
        marginHorizontal: 15
    }
});

export default SearchBar;