import React from 'react'
import '../assets/styles/modules/header.scss'

export default class Header extends React.Component {
  constructor (props) {
    super(props)
  }
  componentDidMount () {
  }

  render () {
    return (
      <header className='header'>
        <span className='avatar' />
        <h1>Hi, I'm Yuri Yakovlev</h1>
        <h2><em>Front-end developer</em></h2>
        <p>Live in Prague, work at <a href='http://cngroup.dk/' title='CN Group CZ s.r.o.' target='_blank'>CN Group</a>, last time was seen at <a id='foursquare' target='_blank' rel='nofollow' href='https://foursquare.com/user/18827111/checkin/5745f32138fabe2bf2d2eb7b' title='Havlíčkovy sady (Grébovka)'>Havlíčkovy sady (Grébovka)</a>.</p>
      </header>
    )
  }
}
