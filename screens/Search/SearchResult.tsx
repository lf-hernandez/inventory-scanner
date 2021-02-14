import React, { useState } from 'react';
import { Text, StyleSheet, View, TouchableWithoutFeedback, Button } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import itemData from './itemData.json';
const SearchResult = ({ route, navigation }) => {
    const [itemList, setItemList] = useState(['Biotin', 'Hairtamin', "Puritan's pride "]);
    const [itemId, setItemId] = useState(0);
    const { item } = route.params;

    return (
        <SafeAreaProvider>
            <View style={style.screen}>
                <View style={style.itemsBeingMapped}>
                    {itemData.products.map((items) => (
                        <View key={Math.random()}>
                            {items.itemName.toLowerCase().includes(item.toLowerCase()) && (
                                <Button
                                    title={items.itemName}
                                    onPress={() => {
                                        setItemId(items.itemId);
                                        navigation.navigate('ItemDetails', { items });
                                    }}
                                />
                            )}
                        </View>
                    ))}
                </View>
                <Text>You are searching {item}</Text>
            </View>
        </SafeAreaProvider>
    );
};

const style = StyleSheet.create({
    screen: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 100,
    },
    itemsBeingMapped: {
        textAlign: 'center',
        flexDirection: 'column',
    },
    styleMapText: {
        flex: 1,
    },
});
export default SearchResult;
