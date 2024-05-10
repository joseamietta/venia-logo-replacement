import React from 'react';
import PropTypes from 'prop-types';

import resourceUrl from '@magento/peregrine/lib/util/makeUrl';
import { useStyle } from '@magento/venia-ui/lib/classify';

import Image from '@magento/venia-ui/lib/components/Image';

import { useLogo } from '../../talons/Logo/useLogo';
/**
 * A component that renders a logo in the header.
 *
 * @kind functional component
 *
 * @param {props} props React component props
 *
 * @returns {React.Element} A React component that displays a logo.
 */
const Logo = props => {
    const classes = useStyle({}, props.classes);
    const talonProps = useLogo(props);
    const { src, title, width, height } = talonProps;

    if (!src) return null;

    const logoSrc = resourceUrl(`logo/${src}`, {
        type: 'image-',
        width,
        height
    });

    return (
        <Image
            classes={{ image: classes.logo }}
            height={height}
            src={logoSrc}
            alt={title}
            title={title}
            width={width}
        />
    );
};

/**
 * Props for the Logo component.
 *
 * @kind props
 *
 * @property {Object} classes An object containing the class names for the Logo component.
 * @property {string} classes.logo Classes for logo
 */
Logo.propTypes = {
    classes: PropTypes.shape({
        logo: PropTypes.string
    })
};

export default Logo;
