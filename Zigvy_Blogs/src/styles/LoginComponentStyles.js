import { 
    StyleSheet
 } from 'react-native';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp
} from 'react-native-responsive-screen';

export const LoginStyle = StyleSheet.create({
    loginScreenContainer:{
        flex: 1 
    },
    backgroundContainer:{
        flex: 1
    },
    backgroundImg:{
        height: hp('100%'),
        width: wp('100%')
    },
    ScrollViewContainer:{
        flex: 1
    },
    logoContainer:{
        height: hp('30%'), 
        width: wp('100%'), 
        justifyContent: 'flex-end', 
        alignItems: 'center'
    },
    logoWrapper:{
        height: hp('20%'), 
        width: wp('60%')
    },
    logo:{
        height: '100%',
        width: '100%'
    },
    loginSectionContainer:{
        height: hp('70%'), 
        width: wp('100%'), 
        display: 'flex'
    },
    loginFormContainer:{ 
        flex: 3 
    },
    loginFormWrapper:{ 
        flex: 1.5 ,
        alignItems:'center',
        justifyContent:'center'
    },
    inputHolder:{
        height: hp('25%'), 
        width: wp('75%'), 
        display: 'flex' 
    },
    inputWrapper:{ 
        height: hp('8%'), 
        flexDirection: 'row', 
        marginBottom: hp('2%') 
    },
    iconWrapper:{ 
        flex: 1,
        justifyContent:'flex-end',
        alignItems:'flex-start'
    },
    inputContainer:{ 
        flex: 6, 
        borderBottomWidth: 0.25, 
        borderBottomColor: '#BDBDBD' 
    },
    input:{ 
        height: '100%', 
        width: '100%', 
        fontSize: hp('3.7%'), 
        color: '#BDBDBD' 
    },
    buttonContainer:{
        flex:1,
        justifyContent:'flex-start',
        alignItems:'center'
    },



})