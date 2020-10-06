import React, { FunctionComponent, useState } from 'react';
import { StyleSheet, View} from 'react-native';
import QuantitySelector from '../../components/QuantitySelector';
import BarcodeInput from '../../components/BarcodeInput';
import NewItemModal from '../../components/NewItemModal';

const ExternalScanner: FunctionComponent = () => {
    const [barcode, setBarcode] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [isModalVisible, setModalVisible] = useState(false);
    const [itemName, setItemName] = useState('');
    const [itemDescription, setItemDescription] = useState('');
    const [selectedImage, setSelectedImage] = useState(null);
    const [price, setPrice] = useState('');
    const [total, setTotal] = useState('');
    const [min, setMin] = useState('');

    const barcodeHandler = () => {
        setModalVisible(true);
    };

    return (
        <View style={styles.container}>
            <NewItemModal
                isModalVisible={isModalVisible}
                itemName={itemName}
                itemDescription={itemDescription}
                price={price}
                total={total}
                min={min}
                quantity={quantity}
                setModalVisible={setModalVisible}
                setItemDescription={setItemDescription}
                setItemName={setItemName}
                setPrice={setPrice}
                setTotal={setTotal}
                setMin={setMin}
            />
            <BarcodeInput
                barcode={barcode}
                setBarcode={setBarcode}
                barcodeHandler={barcodeHandler}/>
            <QuantitySelector
                quantity={quantity}
                setQuantity={setQuantity}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 50
    }
});

export default ExternalScanner;
