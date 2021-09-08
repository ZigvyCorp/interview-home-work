import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    },

    //header
    headerText: {
        fontSize: 20,
        paddingHorizontal: 5
    },
    headerImg: {
        width: 40,
        height: '100%',
        resizeMode: 'contain'
    },
    headerLeftContainer: {
        height: 40,
        flexDirection: "row",
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: 'black'
    },
    headerCenterContainer: {
        height: 40,
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'black',
        borderTopWidth: 2,
        borderBottomWidth: 2
    },
    headerRightContainer: {
        height: 40,
        flexDirection: "row",
        justifyContent: 'flex-end',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: 'black'
    },

    //item post
    postSeperator: {
        width: '100%',
        height: 2,
        backgroundColor: 'black'
    },
    postContainer: {
        padding: 5
    },
    postTitle: {
        fontSize: 22,
        fontWeight: '600',
        textAlign: 'center'
    },
    postInfo: {
        fontWeight: '500'
    },
    postContent: {
        fontSize: 16
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
        fontSize: 15,
        fontWeight: '500',
    },
    commentContent: {
        fontSize: 14,
    }
});

export default styles;