/**
 * Copyright 2017 by Avid Technology, Inc.
 */
import { getLocalization } from './localization';
import l10nData from '../l10n/lang.en.json';

export default class ApplicationContainer {
    constructor() {
        this.div = document.createElement('div');
        this.div.innerHTML = getLocalization(l10nData)('example-plugin-message');
    }

    returnElement() {
        return this.div;
    }
}
