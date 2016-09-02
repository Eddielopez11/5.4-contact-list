import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  getDefaultProps() {
    return {
      cont: {
        "joyce byers": {
          contact: "Joyce Byers",
          email: "JoyceByers@strangerthings.com",
          number: "(782)940-2348",
          loc: "Hawkins, Indiana"
        },
        "jim hopper": {
          contact: "Jim Hopper",
          email: "JimHopper@strangerthings.com",
          number: "(782)940-2348",
          loc: "Hawkins, Indiana"
        },
        "mike wheeler": {
          contact: "Mike Wheeler",
          email: "MikeWheeler@strangerthings.com",
          number: "(782)940-2348",
          loc: "Hawkins, Indiana"
        },
        "jane ives": {
          contact: "Jane 'Eleven' Ives",
          email: "JaneAKAelevenIves@strangerthings.com",
          number: "(782)940-2348",
          loc: "Hawkins, Indiana"
        },
        "dustin henderson": {
          contact: "Dustin Henderson",
          email: "DustinHenderson@strangerthings.com",
          number: "(782)940-2348",
          loc: "Hawkins, Indiana"
        },
        "lucas sinclair": {
          contact: "Lucas Sinclair",
          email: "LucasSinclair@strangerthings.com",
          number: "(782)940-2348",
          loc: "Hawkins, Indiana"
        },
        "will byers": {
          contact: "Will Byers",
          email: "WillByers@strangerthings.com",
          number: "(782)940-2348",
          loc: "Hawkins, Indiana"
        }
      }
    }
  },
  render() {
    let currentContactObject = this.props.cont[this.props.params.contact];
    return (
      <main>
        <nav>
          <Link to="/">Back to Contacts</Link>
        </nav>
        <ul>
          <li>{ currentContactObject.contact }</li>
          <li>{ currentContactObject.email }</li>
          <li>{ currentContactObject.number }</li>
          <li>{ currentContactObject.loc }</li>
        </ul>
      </main>
    )
  }
})
