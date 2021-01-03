import React from 'react';
import { Button, TextInput, View, StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

type QuantitySelectorProps = {
    quantity: number;
    setQuantity: (quantity: number) => void;
};

export default function QuantitySelector(props: QuantitySelectorProps) {
    const isDecButtonDisabled = () => props.quantity <= 1;
    const incrementQuantity = () => props.setQuantity(props.quantity + 1);
    const decrementQuantity = () => {
        if (props.quantity > 1) {
            props.setQuantity(props.quantity - 1);
        }
    };
    const quantityInputHandler = (value: string) => {
        let parsedValue = parseInt(value);
        if (isNaN(parsedValue)) {
            parsedValue = 1;
        }
        props.setQuantity(parsedValue);
    };

    return (
        <View style={styles.quantitySelector}>
            <TouchableOpacity onPress={decrementQuantity} style={styles.button}>
                <Text style={styles.buttonLabel}>-</Text>
            </TouchableOpacity>
            <TextInput
                style={styles.quantityInput}
                onChangeText={quantityInputHandler}
                value={props.quantity.toString()}
                keyboardType="number-pad"
                maxLength={4}
            />
            <TouchableOpacity onPress={incrementQuantity} disabled={isDecButtonDisabled()} style={styles.button}>
                <Text style={styles.buttonLabel}>+</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    quantitySelector: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 50,
    },
    quantityInput: {
        width: 50,
        padding: 10,
        marginHorizontal: 10,
        borderBottomColor: '#9E9E9E',
        borderBottomWidth: 1,
        textAlign: 'center',
    },
    button: {
        height: 50,
        width: 40,
        backgroundColor: '#2196F3',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonLabel: {
        color: 'white',
        fontSize: 15,
    },
});
