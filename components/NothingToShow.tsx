import React from 'react';

import { Text, View } from 'react-native';

const NothingToShow = (props) => {
    return <View>{props.renderView && <Text>Rendering View Nothing to show</Text>}</View>;
};
export default NothingToShow;
