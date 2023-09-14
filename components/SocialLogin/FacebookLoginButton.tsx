import React from 'react';
import { GestureResponderEvent, StyleSheet, TouchableOpacity, View, ViewStyle, TextStyle, Image } from 'react-native';
import useTheme from "../../hooks/useTheme";
import { AppTheme } from "../../config/DefaultConfig";
import ThemedText from '../UI/ThemedText';
import FontAwesome, { SolidIcons, RegularIcons, BrandIcons } from 'react-native-fontawesome';

interface Props {
    label: string;
    onPress?: (event: GestureResponderEvent) => void,
    buttonStyle?: any,
    labelStyle?: any,
};

const ImagePath = require("../../images/facebook.png");

const FacebookLoginButton: React.FunctionComponent<Props> = ({
    onPress,
    label,
    buttonStyle,
    labelStyle,
}: Props) => {
    const theme: AppTheme = useTheme();

    return (
        <TouchableOpacity onPress={onPress}>
            <View style={[style.container, { shadowColor: theme.labelBgColor, backgroundColor: '#4285F4', borderColor: theme.lightBottomColor, justifyContent : "center" }, buttonStyle]}>
                {/* <FontAwesome icon={BrandIcons.facebook} style={{fontSize: 24, color :'white', marginRight : 30}} /> */}
                <Image source={ImagePath} style={[{left : -30}]} />
                <ThemedText styleKey="highlightTextColor" style={[style.userNameStyle, labelStyle]}>{label}</ThemedText>
            </View>
        </TouchableOpacity>
    );
};

export default FacebookLoginButton;

interface Style {
    container: ViewStyle;
    userNameStyle: TextStyle;
}

const style: Style = StyleSheet.create<Style>({
    container: {
        flexDirection: 'row',
        padding: 10,
        justifyContent: "center",
        borderRadius: 45,
        borderWidth: 1,
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.2,
        elevation: 6,
        minWidth: 30,
        height: 50,
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: 10,
        marginBottom: 10,
        textAlign: 'center',
    },
    userNameStyle: {
        fontWeight: "bold",
        paddingTop: 2,
        paddingBottom: 2,
        fontSize: 16,
    }
})
