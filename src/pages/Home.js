import react from 'react'
import { Fragment } from 'react/cjs/react.production.min'
import { Form } from '../componets/Form'
import { Notes } from '../componets/Notes'

export const Home = () => {
  const notes = new Array(3)
    .fill('')
    .map((_, i) => ({ id: i, title: `Note ${i + 1}` }))

  return (
    <Fragment>
      <Form />
      <hr />
      <Notes notes={notes} />
    </Fragment>
  )
}
