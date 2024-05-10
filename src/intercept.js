module.exports = targets => {
    const { Targetables } = require('@magento/pwa-buildpack');

    const targetables = Targetables.using(targets);
    const { specialFeatures } = targets.of('@magento/pwa-buildpack');

    specialFeatures.tap(flags => {
        /**
         *  Wee need to activated esModules and cssModules to allow build pack to load our extension
         * {@link https://magento.github.io/pwa-studio/pwa-buildpack/reference/configure-webpack/#special-flags}.
         */
        flags[targets.name] = {
            esModules: true,
            cssModules: true,
            graphqlQueries: true
        };
    });

    const HeaderComponent = targetables.reactComponent(
        '@magento/venia-ui/lib/components/Header/header'
    );
    HeaderComponent.addImport(
        `LogoComponent from '${targets.name}/src/components/Logo'`
    );
    HeaderComponent.replaceJSX(
        'Logo',
        '<LogoComponent classes={{ logo: classes.logo }} />'
    );
};
