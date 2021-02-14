import React, { useState } from 'react';
import { Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { View } from '../../components/Themed';
import itemData from './itemData.json';
import NothingToShow from '../../components/NothingToShow';
const Search = ({ navigation }) => {
    const [itemToGet, setItemToGet] = useState();
    const [itemFilter, setItemFilter] = useState(itemData.products);
    const [viewFiltered, setViewFiltered] = useState([]);
    const [show, setShow] = useState(true);

    const getValue = (text) => {
        setItemToGet(text);
    };
    const searchResultHandler = () => {
        navigation.navigate('SearchResult', {
            item: itemToGet,
        });
    };
    return (
        <View style={styles.inputView}>
            <TextInput
                style={styles.input}
                placeholder="Item Search!"
                value={itemToGet}
                onChangeText={(itemToGet) => getValue(itemToGet)}
            />
            <TouchableOpacity style={styles.button} activeOpacity={0.2} onPress={searchResultHandler}>
                <Text style={styles.buttonText}>Search</Text>
            </TouchableOpacity>

            <NothingToShow renderView={show} />

            {/* {itemToGet !== undefined &&
                itemToGet.length > 0 &&
                itemFilter.map(
                    (items) =>
                        itemToGet &&
                        items.itemName.toLowerCase().includes(itemToGet.toLowerCase()) && (
                            <Text key={Math.random()}>{items.itemName}</Text>
                        ),
                )} */}
        </View>
    );
};
const styles = StyleSheet.create({
    inputView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        padding: 10,
        textAlign: 'center',
        width: '80%',
        borderBottomWidth: 1,
        borderColor: 'black',
        marginBottom: 20,
    },
    button: {
        height: 50,
        width: '80%',
        backgroundColor: '#2196F3',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
    },
});
export default Search;
