import {makeStyles} from '@material-ui/core/styles';

export default makeStyles((theme)=>({
    contaner:{
        backgroundColor : theme.palette.primary.main,
        color : 'white',
        marginBottom : 20,
        fontWeight: 'lighter',
        padding : '5px 0',
    },
    toolbar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
      },
      toolbarTitle: {
        flex: 1,
      },
      toolbarSecondary: {
        justifyContent: 'space-between',
        overflowX: 'auto',
      },
      toolbarLink: {
        padding: theme.spacing(1),
        flexShrink: 0,
      },
      toolbarUser: {
        padding: '0 20px 0 0'
      }
}))