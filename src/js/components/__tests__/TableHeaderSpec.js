import React from 'react';
import TableHeader from '../TableHeader';
import renderer from 'react-test-renderer';

it('should render TableHeader', () => {
  const tableHeader = renderer.create(
    <TableHeader />
  ).toJSON();
  expect(tableHeader).toMatchSnapshot();
});
