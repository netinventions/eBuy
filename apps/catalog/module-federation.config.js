
const moduleFederationConfig = {
    name: 'catalog',
    remote: ['recommendations'],
    exposes: {
    './Module': './src/remote-entry.ts',
    },
};
module.exports = moduleFederationConfig;