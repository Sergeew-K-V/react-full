import react, { useContext, useEffect } from 'react'
import { Fragment } from 'react/cjs/react.production.min'
import { Form } from '../componets/Form'
import { Loader } from '../componets/Loader'
import { Notes } from '../componets/Notes'
import { FirebaseContext } from '../context/firebase/firebaseContext'

export const Home = () => {
  const { loading, notes, fetchNotes, removeNote } = useContext(FirebaseContext)
  useEffect(() => {
    fetchNotes()
  }, [])
  return (
    <Fragment>
      <Form />
      <hr />
      {loading ? <Loader /> : <Notes notes={notes} onRemove={removeNote} />}
    </Fragment>
  )
}
