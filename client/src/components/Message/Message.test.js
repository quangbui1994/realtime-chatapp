import React from 'react';
import { shallow } from 'enzyme';
import checkPropTypes from 'check-prop-types';

import Message from './Message';

/**
 * The function capitalizes the first letter of passed text
 * @param {String} text The value of text passed into
 */
const upperCaseFirstLetter = text => text.charAt(0).toUpperCase() + text.slice(1);

/**
 * Return shallow wrapper containing nodes with searched data 
 * @param {ShallowWrapper} wrapper wrapper Enzyme shallow wrapper to search component
 * @param {string} val Value of data test attribute to search
 * @returns {ShallowWrapper}
 */
const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test="${val}"]`);
}

describe('Test Message component', () => {
    let wrapper;
    const props = {
        message: {
            text: 'hello',
            user: 'Quang',
        },
        name: 'Quang'
    }; 

    beforeEach(() => {
        wrapper = shallow(<Message {...props}/>);
    }); 

    it('renders properly', () => {
        const messageContainerComponent = findByTestAttr(wrapper, 'message-container-component');
        expect(messageContainerComponent.length).toBe(1); 
    });

    it('renders name of owner of message', () => {
        const nameComponent = findByTestAttr(wrapper, 'name-component');
        expect(nameComponent.length).toBe(1);
    });

    it('renders exact name', () => {
        const nameComponent = findByTestAttr(wrapper, 'name-component');
        expect(nameComponent.text()).toEqual(props.name);
    })

    it('renders message', () => {
        const messageContainer = findByTestAttr(wrapper, 'message-component');
        expect(messageContainer.length).toBe(1);
    });

    it('renders exact message', () => {
        const messageContainer = findByTestAttr(wrapper, 'message-component');
        expect(messageContainer.text()).toEqual(upperCaseFirstLetter(props.message.text));
    });

    it('does not throw error with expected props', () => {
        const error = checkPropTypes(Message.propTypes, props, 'prop', Message.name);
        expect(error).toBeUndefined();
    });
}); 