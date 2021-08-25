import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1d1f',
  },
  containerPostInfo: {
    alignItems: 'center',
    padding: 20,
    flex: 1,
  },
  title: {
    fontSize: 17,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  infoAuthor: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 8,
  },
  txtInfo: {
    fontSize: 12,
    fontFamily: 'KoHo-SemiBold',
    color: '#fff',
  },
  body: {
    fontSize: 14,
    width: '100%',
    marginVertical: 15,
    fontFamily: 'KoHo-Regular',
    color: '#fff',
  },
  comments: {
    width: '100%',
  },
  itemComment: {
    width: '100%',
    paddingEnd: 10,
    paddingStart: 15,
    paddingVertical: 8,
  },
  numberComment: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#ffffffa3',
    alignSelf: 'flex-start',
    marginBottom: 5,
  },
  flatListComments: {
    marginVertical: 8,
    borderTopColor: '#e0e0e0',
    borderTopWidth: 1,
  },
  commentsContainer: {
    flexGrow: 1,
    marginTop: 8,
  },
});
