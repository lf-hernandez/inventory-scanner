import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import itemData from './itemData.json';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const IndividualItemResult = ({ route }) => {
    const { items } = route.params;

    return (
        <SafeAreaView>
            <View style={styles.screen}>
                <Text>Name: {items.itemName}</Text>
                <Text>Quantity: {items.quantity}</Text>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    screen: {
        padding: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
export default IndividualItemResult;
