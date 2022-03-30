import React from 'react';
import {wait} from '../utils/common';

const useAsyncRefresh = (): [boolean, () => void] => {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(1000).then(() => setRefreshing(false));
  }, []);

  return [refreshing, onRefresh];
};

export default useAsyncRefresh;
