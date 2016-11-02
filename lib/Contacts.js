import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  getInitialState() {
    return {
      contacts: [
        {
          name: "Joyce Byers",
          pathRoute: "/contactinfo/joyce byers"
        },
        {
          name: "Jim Hopper",
          pathRoute: "/contactinfo/jim hopper"
        },
        {
          name: "Mike Wheeler",
          pathRoute: "/contactinfo/mike wheeler"
        },
        {
          name: "Jane 'Eleven' Ives",
          pathRoute: "/contactinfo/jane ives"
        },
        {
          name: "Dustin Henderson",
          pathRoute: "/contactinfo/dustin henderson"
        },
        {
          name: "Lucas Sinclair",
          pathRoute: "/contactinfo/lucas sinclair"
        },
        {
          name: "Will Byers",
          pathRoute: "/contactinfo/will byers"
        }
      ]
    }
  },
  render() {
    return (
      <main className="contacts__main">
        <div className="header__div">
          <h1 className="strangerHeader">Stranger</h1>
          <h1 className="strangerHeader">Contacts</h1>
        </div>
        <ul className="contact__list">
          {
            this.state.contacts.map((contact, i) => {
              return <li key={i} id={i} className="contact__li"><Link className="contacts"  to={contact.pathRoute}>{contact.name}</Link></li>
            })
          }
        </ul>
      </main>
    )
  }
})
