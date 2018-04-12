import appConfig from '../package.json';

export default {
    places: ['contextMenu', 'viewMenu'],
    filter: `${appConfig['identity']['appName']}-view`,
    defaults: {
        index: 600,
    },
    menuModelProvider: () => [
        { actionId: 'user.action' }
    ],
};