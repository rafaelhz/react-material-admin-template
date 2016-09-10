import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import InfoBox from '../dashboard/InfoBox';

describe('<InfoBox />', () => {
  it('should have a span with the title and value', () => {
    const wrapper = shallow(<InfoBox title="Title" value="1500"/>);
    const content = wrapper.find('div > span');

    expect(content).to.have.length.of(2);
    expect('Title').to.equal(content.at(0).text());
    expect('1500').to.equal(content.at(1).text());
  });
});
