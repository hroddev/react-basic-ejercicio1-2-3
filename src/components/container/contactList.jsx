import React from 'react'
import ContactComponent from '../pure/contactComponent'
import { Contact } from '../../models/contact.class'

export default function contactList() {

    const defaultValue = new Contact('Hector', 'Rodriguez', 'hector@hrod.dev', false) 
  return (
    <>
        <h1>Contactos</h1>
        <ContactComponent contact = { defaultValue }/>
    </>
  )
}
