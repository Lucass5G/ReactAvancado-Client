/* eslint-disable prettier/prettier */
import { render, screen } from '@testing-library/react'

import Button from '.'

describe('<Button />', () => {
  it('should render the heanding', () => {
    const { container } = render(<Button />)

    expect(
      screen.getByRole('heading', { name: /Button/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

})
