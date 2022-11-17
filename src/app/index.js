/**
 * Copyright 2022 by Avid Technology, Inc.
 */
import { getLocalization } from './localization';
import l10nData from '../l10n/lang.en.json';

export default class ApplicationContainer {
    getTitle() {
        return 'Your first AVID app title';
    }

    render(element) {
        element.innerHTML = getLocalization(l10nData)('example-plugin-message');
    }
}
