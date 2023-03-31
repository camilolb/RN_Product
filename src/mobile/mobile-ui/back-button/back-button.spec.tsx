import React from 'react';
import {render} from '@testing-library/react-native';

import BackButton from './back-button';

describe('BackButton', () => {
  it('should render successfully', () => {
    const {container} = render(<BackButton />);
    expect(container).toBeTruthy();
  });
});
