import {
    StyleSheet
} from 'react-native';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp
} from 'react-native-responsive-screen';

export const BlogStyle = StyleSheet.create({
    postContainer: {
        height: hp('35%'),
        width: wp('90%'),
        backgroundColor: '#D2CCCC',
        borderRadius: hp('1%'),
        marginTop: hp('2%'),
        display: 'flex'
    },
    postHeaderContainer: {
        flex: 1.5,
        flexDirection: 'row'
    },
    ownerAvatarContainer: {
        flex: 0.8,
        alignItems: 'center'
    },
    ownerAvatarHolder: {
        height: hp('6.5%'),
        width: hp('6.5%'),
        borderRadius: hp('6.5%') / 2,
    },
    ownerName: {
        fontSize: hp('3%'),
        fontWeight: '600',
        marginLeft: wp('1%'),
        marginTop: hp('0.5%')
    },
    postCreatedDate:{ 
        fontSize: hp('2.5%'),
        marginLeft: wp('1%'), 
        marginTop: hp('0.2%'), 
        color: '#464646' 
    },
    postContentContainer:{ 
        flex: 2.5, 
        alignItems: 'center', 
        marginBottom: hp('0.5%') 
    },
    postCommentContainer:{ 
        flex: 1, 
        flexDirection: 'row' 
    }
})