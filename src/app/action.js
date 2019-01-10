/* eslint-disable */

const action = {
    id: 'user.action',

    getText() {
        return 'Example Action';
    },

    isVisible() {
        return true;
    },

    handler({ selection, component }) {
        alert('Hello from example Action');
    },
};

export default action;
