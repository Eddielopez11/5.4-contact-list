import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  getDefaultProps() {
    return {
      cont: {
        "joyce byers": {
          contact: "Joyce Byers",
          avatar: "http://ia.media-imdb.com/images/M/MV5BMTQ3NzM3MTc2NF5BMl5BanBnXkFtZTcwODMxNjA0NA@@._V1_SY1000_CR0,0,734,1000_AL_.jpg",
          email: "JoyceByers@strangerthings.com",
          number: "(782)940-2348",
          loc: "Hawkins, Indiana"
        },
        "jim hopper": {
          contact: "Jim Hopper",
          avatar: "http://ia.media-imdb.com/images/M/MV5BMTM1MDkxMTY2N15BMl5BanBnXkFtZTcwNTcxMjAyMg@@._V1_.jpg",
          email: "JimHopper@strangerthings.com",
          number: "(782)940-2348",
          loc: "Hawkins, Indiana"
        },
        "mike wheeler": {
          contact: "Mike Wheeler",
          avatar: "http://67.media.tumblr.com/8206825a8f28ec97df30b273446ec9aa/tumblr_oatqsrBvTK1vb3e4to7_400.jpg",
          email: "MikeWheeler@strangerthings.com",
          number: "(782)940-2348",
          loc: "Hawkins, Indiana"
        },
        "jane ives": {
          contact: "Jane 'Eleven' Ives",
          avatar: "http://images.complex.com/complex/rjjdktrbv42nwnzuepxc.jpg",
          email: "JaneAKAelevenIves@strangerthings.com",
          number: "(782)940-2348",
          loc: "Hawkins, Indiana"
        },
        "dustin henderson": {
          contact: "Dustin Henderson",
          avatar: "http://images.hellogiggles.com/uploads/2016/08/05064304/dustin.jpg",
          email: "DustinHenderson@strangerthings.com",
          number: "(782)940-2348",
          loc: "Hawkins, Indiana"
        },
        "lucas sinclair": {
          contact: "Lucas Sinclair",
          avatar: "https://pbs.twimg.com/media/CoT6Cr7XYAEKWc_.jpg",
          email: "LucasSinclair@strangerthings.com",
          number: "(782)940-2348",
          loc: "Hawkins, Indiana"
        },
        "will byers": {
          contact: "Will Byers",
          avatar: "http://www.famousbirthdays.com/faces/schnapp-noah-image.jpg",
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
        <div className="contact__avatarDiv">
          <img className="contact__avatar" src={ currentContactObject.avatar } alt={ currentContactObject.contact } />
          <Link className="contactInfo__back" to="/">Back</Link>
        </div>
        <ul className="contactInfo__list">
          <li className="contactInfo__item">{ currentContactObject.contact }</li>
          <li className="contactInfo__item">{ currentContactObject.email }</li>
          <li className="contactInfo__item">{ currentContactObject.number }</li>
          <li className="contactInfo__item">{ currentContactObject.loc }</li>
        </ul>
      </main>
    )
  }
})
