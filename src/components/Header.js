import React from 'react'
import { connect } from 'react-redux';
import HeaderField from './HeaderField'
import Currency from './Currency'
import HomeLink from './HomeLink'

const Header = (props) => {
    return (
        <div className="header-wrapper">
            <div className="header-centerize-wrapper">
                <div className="header-left">
                    <Currency />
                    <HomeLink />
                </div>
                <div className="header-right">
                    <HeaderField text="צור קשר" link="/contact" />
                    <HeaderField text="טיולים מאורגנים" link="/orginaizedTrips" />
                    <HeaderField text="טיסות" link="/flights" />
                    <HeaderField text="חבילות נופש" link="/holidaysPackges" />
                    <HeaderField text="דף הבית" link="/" />
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps)(Header);