import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    },

    //item post
    postContainer: {
        padding: 5
    },
    postTitle: {
        fontSize: 24,
        fontWeight: '600',
        textAlign: 'center'
    },
    postInfo: {
        fontWeight: '500'
    },
    postContent: {
        fontSize: 18
    },

    //item comment
    commentContainer: {
        backgroundColor: 'lightcyan',
        padding: 5
    },
    commentRightContainer: {
        flex: 1,
        paddingLeft: 5
    },
    commenterAvatar: {
        width: 40,
        height: 40,
        borderRadius: 40 / 2
    },
    commenterName: {
        fontSize: 17,
        fontWeight: '500',
    },
    commentContent: {
        fontSize: 16,
    }
});

export default styles;