import React from 'react';
import { render, screen }  from '@testing-library/react';
import LoadingPageIndicator from './loading-page-indicator.component';

// 1 Setup 
// 2 Act
// 3 Assertion
describe('Test LoadingPageIndicator Component', () => {
  // Test to mount the Loading indicator page with default label (Loading...)
  it('Should render the LoadingPageIndicator with the label "Loading..."', () => {
    const defaultlabel = 'Loading...';
    render(<LoadingPageIndicator />);
    expect(screen.queryByText(defaultlabel)).toBeInTheDocument();
  });
  // Test to mount the Loading indicator page with custom label (Loading with custom Label...)
  it ('Should render the LoadingPageIndicator with the label "Loading with custom Label..."', () => {
    const section = document.createElement('section')
    const label = 'Loading with custom Label...';
    const {container} = render(
      <LoadingPageIndicator label={label} /> ,
      {
        container: document.body.appendChild(section)
      }
    );
    expect(screen.queryByText(label)).toBeInTheDocument();
  });
});
