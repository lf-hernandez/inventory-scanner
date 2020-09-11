import React, { FunctionComponent, useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, Keyboard, TextInput } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { transform } from '@babel/core';

interface BarCode {
    type: string;
    data: string;
}

const CameraScanner: FunctionComponent = () => {
    const [hasPermission, setHasPermission] = useState<boolean | null>(null);
    const [scanned, setScanned] = useState(false);

  useEffect(() => {
      (async () => {
          const { status } = await BarCodeScanner.requestPermissionsAsync();
          setHasPermission(status === 'granted');
      })();
  }, []);

    const handleScan = ({ type, data }: BarCode) => {
        setScanned(true);
        alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    };

    if (hasPermission === null) {
        return <Text>Requesting camera permission</Text>;
    }

    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <View
            style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'flex-end'
            }}
        >
            <BarCodeScanner
                barCodeTypes={[
                    BarCodeScanner.Constants.BarCodeType.code128,
                    BarCodeScanner.Constants.BarCodeType.ean13
                ]}
                onBarCodeScanned={scanned ? undefined : handleScan}
                style={StyleSheet.absoluteFillObject}
            />

            <View style={styles.overlay}>
                <View style={styles.unfocusedContainer}></View>
                <View style={styles.middleContainer}>
                    <View style={styles.unfocusedContainer}></View>
                    <View style={styles.focusedContainer}>
                        <View
                            style={[
                                styles.crosshair,
                                {
                                    transform: [{ translateX: -90 }, { translateY: 90 }]
                                }
                            ]}
                        ></View>
                    </View>
                    <View style={styles.unfocusedContainer}></View>
                </View>
                <View style={styles.unfocusedContainer}></View>
            </View>

            {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
        </View>
    );
};

export default CameraScanner;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative'
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    },
    unfocusedContainer: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.7)'
    },
    middleContainer: {
        flexDirection: 'row',
        flex: 1.5
    },
    focusedContainer: {
        flex: 6
    },
    crosshair: {
        position: 'absolute',
        right: 32,
        top: 32,
        width: 32,
        height: 32,
        color: 'red'
    }
});
