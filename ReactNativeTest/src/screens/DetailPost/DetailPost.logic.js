import {useDispatch} from 'react-redux';

export const DetailPostLogic = props => {
  const dispatch = useDispatch();

  const _onPressBackButton = () => props.navigation.goBack();

  return {_onPressBackButton};
};
