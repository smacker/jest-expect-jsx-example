import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';

jest.dontMock('../sum');

function render(component, props) {
    const renderer = ReactTestUtils.createRenderer();
    renderer.render(React.createElement(component, props));

    return renderer.getRenderOutput();
}

describe('SumComponent', function() {
    it('adds 1 + 2 to equal 3', function() {
        const SumComponent = require('../sum');
        const result = render(SumComponent, {v1: 1, v2: 2});

        expect(result).toEqualJSX(<div>3</div>);
    });
});
