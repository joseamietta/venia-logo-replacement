import { gql } from '@apollo/client';

const GET_STORE_HEADER_LOGO = gql`
    query getStoreHeaderLogo {
        storeConfig {
            store_code
            header_logo_src
            logo_alt
            logo_height
            logo_width
        }
    }
`;

export default {
    getStoreHeaderLogo: GET_STORE_HEADER_LOGO
};
