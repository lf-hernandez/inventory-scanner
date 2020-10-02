import React, { FunctionComponent, useState } from 'react';
import { Image, Button, TextInput, Text, StyleSheet, View, Modal, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const ExternalScanner: FunctionComponent = () => {
    const [barcode, setBarcode] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [modalVisible, setModalVisible] = useState(false);
    const [itemName, setItemName] = useState('');
    const [itemDescription, setItemDescription] = useState('');
    const [selectedImage, setSelectedImage] = React.useState(null);

    const isDecButtonDisabled = () => quantity <= 1;

    const incrementQuantity = () => setQuantity(quantity + 1);
    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };
    const quantityInputHandler = (value: string) => {
        let parsedValue = parseInt(value);
        if (isNaN(parsedValue)) {
            parsedValue = 1;
        }
        setQuantity(parsedValue);
    };
    const barcodeHandler = (value: string) => {
        setModalVisible(true);
    };

    const cancelSubmission = () => {
        setModalVisible(false);
    };

    const submitNewItem = () => {
        console.log('submission');
    };
    const itemNameInputHandler = (value: string) => {
        setItemName(value);
    };
    const itemDescriptionHandler = (value: string) => {
        setItemDescription(value);
    };

    let openImagePickerAsync = async () => {
        let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

        if (permissionResult.granted === false) {
            alert('Permission to access camera roll is required!');
            return;
        }

        let pickerResult = await ImagePicker.launchImageLibraryAsync();
        console.log(pickerResult);

        if (pickerResult.cancelled === true) {
            return;
        }

        setSelectedImage({ localUri: pickerResult.uri });
    };

    const reset = async () => {
        setSelectedImage(null);
        await openImagePickerAsync();
    };

    if (selectedImage !== null) {
        return (
            <View style={styles.imgContainer}>
                <Image
                    source={{ uri: selectedImage.localUri }}
                    style={styles.thumbnail}
                />

                <TouchableOpacity onPress={reset} style={styles.button}>
                    <Text style={styles.buttonText}>Choose different photo</Text>
                </TouchableOpacity>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}>
                <View style={styles.modalContainer}>
                    <View style={styles.modalView}>
                        <Text>Add New Item</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={itemNameInputHandler}
                            value={itemName}
                            placeholder="Item name">
                        </TextInput>
                        <TextInput
                            style={styles.input}
                            onChangeText={itemDescriptionHandler}
                            value={itemDescription}
                            placeholder="Item description"
                        ></TextInput>

                        <TouchableOpacity onPress={openImagePickerAsync} style={styles.button}>
                            <Text style={styles.buttonText}>Upload item photo</Text>
                        </TouchableOpacity>

                        <View style={styles.actionsContainer}>
                            <Button
                                onPress={cancelSubmission}
                                title="Cancel"
                            />
                            <Button
                                onPress={cancelSubmission}
                                title="Submit"
                            />
                        </View>
                    </View>
                </View>
            </Modal>

            <View>
                <TextInput
                    value={barcode}
                    onChangeText={barcodeHandler}
                    style={styles.input}
                    placeholder="Barcode"
                    clearButtonMode="always" />
            </View>

            <View style={styles.quantitySelector}>
                <Button
                    onPress={decrementQuantity}
                    title="-"
                />
                <TextInput
                    style={styles.quantityInput}
                    onChangeText={quantityInputHandler}
                    value={quantity.toString()}
                    keyboardType="number-pad"
                    maxLength={4}
                />
                <Button
                    onPress={incrementQuantity}
                    title="+"
                    disabled={isDecButtonDisabled()}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 50
    },
    quantitySelector: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 50
    },
    input: {
        width: 200,
        padding: 10,
        borderBottomColor: '#9E9E9E',
        borderBottomWidth: 1,
        color: 'black'
    },
    quantityInput: {
        width: 50,
        padding: 10,
        borderBottomColor: '#9E9E9E',
        borderBottomWidth: 1,
        textAlign: 'center'
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: '#E0E0E0',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: 'white',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    button: {
        marginTop: 35,
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5
    },
    buttonText: {
        fontSize: 20,
        color: '#fff'
    },
    thumbnail: {
        width: 300,
        height: 300,
        resizeMode: 'contain'
    },
    imgContainer: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    actionsContainer: {
        flexDirection: 'row',
        marginTop: 20
    }
});

export default ExternalScanner;
