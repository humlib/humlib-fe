import React from 'react';
import renderer from 'react-test-renderer';
import {SocialBar} from "../components/SocialBar";


it('renders correctly', () => {
    const tree = renderer
        .create(<SocialBar/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
