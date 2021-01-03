import React, { useEffect, useState } from 'react';
import { StyleSheet, Modal, Text, TextInput, View } from 'react-native';
import { Button } from 'react-native-elements';
import { Camera } from 'expo-camera';

type NewItemModalProps = {
    isModalVisible: boolean;
    setModalVisible: (isVisible: boolean) => void;
    itemName: string;
    setItemName: (itemName: string) => void;
    itemDescription: string;
    setItemDescription: (itemDescription: string) => void;
    setPrice: (price: number) => void;
    setTotal: (price: number) => void;
    setMin: (min: number) => void;
    quantity: number;
};

export default function NewItemModal({
    isModalVisible,
    setModalVisible,
    itemName,
    setItemName,
    itemDescription,
    setItemDescription,
    setPrice,
    setTotal,
    setMin,
    quantity,
}: NewItemModalProps) {
    const parseNumber = (value: string) => {
        let parsedValue = parseInt(value);

        if (isNaN(parsedValue) || parsedValue < 0) {
            parsedValue = 0;
        }

        return parsedValue;
    };

    const [priceFormField, setPriceFormField] = useState('');
    const [totalFormField, setTotalFormField] = useState('');
    const [minFormField, setMinFormField] = useState('');

    const itemNameInputHandler = (value: string) => setItemName(value);
    const itemDescriptionHandler = (value: string) => setItemDescription(value);
    const itemPriceHandler = (value: string) => {
        setPriceFormField(value);
        setPrice(parseNumber(value));
    };
    const minHandler = (value: string) => {
        setMinFormField(value);
        setMin(parseNumber(value));
    };

    const cancelSubmission = () => setModalVisible(false);
    const submitNewItem = () => console.log('submission');

    const [hasPermission, setHasPermission] = useState(false);
    const [type, setType] = useState(Camera.Constants.Type.back);

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    useEffect(() => {
        const parsedPrice = parseNumber(priceFormField);
        if (parsedPrice > 0) {
            const computedTotal = parsedPrice * quantity;
            setTotal(computedTotal);
            setTotalFormField(`${computedTotal.toString()}`);
        }
    }, [priceFormField]);

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <Modal animationType="slide" transparent={true} visible={isModalVisible}>
            <View style={styles.modalContainer}>
                <View style={styles.modalView}>
                    <Text style={styles.heading}>Add new inventory item</Text>

                    <View style={styles.formContainer}>
                        <TextInput
                            style={styles.input}
                            onChangeText={itemNameInputHandler}
                            value={itemName}
                            placeholder="Item name"
                            placeholderTextColor="black"
                        ></TextInput>

                        <TextInput
                            style={styles.input}
                            onChangeText={itemDescriptionHandler}
                            value={itemDescription}
                            placeholder="Item description"
                            placeholderTextColor="black"
                        ></TextInput>

                        <TextInput
                            style={styles.input}
                            onChangeText={itemPriceHandler}
                            value={priceFormField}
                            placeholder="Price"
                            placeholderTextColor="black"
                        ></TextInput>

                        <TextInput
                            style={styles.input}
                            editable={false}
                            value={totalFormField}
                            placeholder="Total value"
                            placeholderTextColor="black"
                        ></TextInput>

                        <TextInput
                            style={styles.input}
                            onChangeText={minHandler}
                            value={minFormField}
                            placeholder="Min"
                            placeholderTextColor="black"
                        ></TextInput>
                    </View>

                    <View style={styles.actionsContainer}>
                        <Button onPress={cancelSubmission} title="Cancel" buttonStyle={styles.button} />
                        <Button onPress={cancelSubmission} title="Save" buttonStyle={styles.button} />
                    </View>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: '#E0E0E0',
        borderRadius: 20,
        padding: 35,

        shadowColor: 'white',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    heading: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    formContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        width: 200,
        padding: 10,
        borderBottomColor: '#9E9E9E',
        borderBottomWidth: 1,
        color: 'black',
        marginVertical: 8,
    },
    actionsContainer: {
        marginTop: 20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    button: {
        minWidth: 40,
        paddingHorizontal: 30,
    },
});
