/**
 * Copyright 2017 by Avid Technology, Inc.
 */

import appConfig from './package.json';

import ViewConfig from './avid_api/view/ViewConfig';
import AppEntry from './avid_api/entry/EntryConfig';
import Action from './app/action';
import Binding from './app/binding';

export const avid = [
    {
        name: `${appConfig.identity.appName}-view`,
        provides: ['views'],
        create: () => ViewConfig,
    },
    {
        name: `${appConfig.identity.appName}-view`,
        provides: ['theme'],
        create: () => ({
            key: 'dark',
            css: './style.css',
        }),
    },
    {
        name: appConfig.identity.appName,
        provides: ['apps'],
        create: () => AppEntry,
    },
    {
        name: Action.id,
        provides: ['actions'],
        create: () => Action,
    },
    {
        name: Action.id,
        provides: ['actionBindings'],
        create: () => Binding,
    },
];
