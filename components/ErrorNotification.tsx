import type { RootState } from 'types/state';
import { Alert } from '@material-ui/lab';
import { useSelector, useDispatch } from 'react-redux';
import { setError } from 'actions';

const ErrorNotification = (): JSX.Element => {
  const dispatch = useDispatch();
  const error = useSelector((state: RootState) => state.global.error);

  if (!error) return null;

  return (
    <div className="error">
      <Alert severity="error" onClose={() => { dispatch(setError('', true)); }}>{error}</Alert>
    </div>
  );
};

export default ErrorNotification;
