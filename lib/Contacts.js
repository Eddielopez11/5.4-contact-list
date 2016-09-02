import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  getInitialState() {
    return {
      contacts: [
        {
          id: 1,
          name: "Joyce Byers",
          pathRoute: "/contactinfo/joyce byers"
        },
        {
          id: 2,
          name: "Jim Hopper",
          pathRoute: "/contactinfo/jim hopper"
        },
        {
          id: 3,
          name: "Mike Wheeler",
          pathRoute: "/contactinfo/mike wheeler"
        },
        {
          id: 4,
          name: "Jane 'Eleven' Ives",
          pathRoute: "/contactinfo/jane ives"
        },
        {
          id: 5,
          name: "Dustin Henderson",
          pathRoute: "/contactinfo/dustin henderson"
        },
        {
          id: 6,
          name: "Lucas Sinclair",
          pathRoute: "/contactinfo/lucas sinclair"
        },
        {
          id: 7,
          name: "Will Byers",
          pathRoute: "/contactinfo/will byers"
        }
      ]
    }
  },
  render() {
    return (
      <main>
        <h1>Contacts</h1>
        {
          this.state.contacts.map((contact) => {
            return <Link key={contact.id} id={contact.id} to={contact.pathRoute}>{contact.name}</Link>
          })
        }
      </main>
    )
  }
})
