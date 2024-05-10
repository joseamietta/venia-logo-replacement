import { useQuery } from '@apollo/client';

import DEFAULT_OPERATIONS from './logo.gql';

export const useLogo = () => {
    const { getStoreHeaderLogo } = DEFAULT_OPERATIONS;
    const { data } = useQuery(getStoreHeaderLogo, {
        fetchPolicy: 'cache-and-network',
        nextFetchPolicy: 'cache-first'
    });

    const src = data?.storeConfig.header_logo_src;
    const title = data?.storeConfig.logo_alt;
    const width = data?.storeConfig.logo_width;
    const height = data?.storeConfig.logo_height;

    return {
        src,
        title,
        width,
        height
    };
};
