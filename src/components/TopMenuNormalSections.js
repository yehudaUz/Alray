import React from 'react'
import { connect } from 'react-redux';
import DropDownContent from './DropDownContent'
import { updateAds, updateMenu } from '../actions/actions'
import { nadlanDropDownContentArrText, carDropDownContentArrText } from '../other/textData'

const topMenuData = [
    { text: "...עוד", href: "/more", comp: <DropDownContent dropDownContentArrText={nadlanDropDownContentArrText} /> },
    { text: "בעלי מקצוע", href: "/professional", comp: <DropDownContent dropDownContentArrText={nadlanDropDownContentArrText} /> },
    { text: "חיות מחמד", href: "/pets", comp: <DropDownContent dropDownContentArrText={nadlanDropDownContentArrText} />, adsPath: "/pets.jpg" },
    { text: "הכל לעסק", href: "/business", comp: <DropDownContent dropDownContentArrText={nadlanDropDownContentArrText} />, adsPath: "/business.png" },
    { text: "דרושים", href: "/wanted", comp: <DropDownContent dropDownContentArrText={nadlanDropDownContentArrText} /> },
    { text: "יד שנייה", href: "/secondHand", comp: <DropDownContent dropDownContentArrText={nadlanDropDownContentArrText} />, adsPath: "/secondHand.jpg" },
    { text: "רכב", href: "/cars", comp: <DropDownContent dropDownContentArrText={carDropDownContentArrText.reverse()} />, adsPath: "/cars.gif" },
    { text: `נדל"ן`, href: "/realestate", comp: <DropDownContent dropDownContentArrText={nadlanDropDownContentArrText.reverse()} />, adsPath: "/nadlan.jpg" },
]

const TopMenuNormalSections = (props) => {
    const renderButtons = () => {
        return topMenuData.map((menuButtonData) => (
            <li key={menuButtonData.href} className="dropbtn"><a  href={menuButtonData.href}
                onClick={(e) => {
                    props.dispatch(updateAds(menuButtonData.adsPath))
                    props.dispatch(updateMenu(["ראשי",menuButtonData.text,menuButtonData.comp.props.dropDownContentArrText[0]]))
                }}>{menuButtonData.text}</a>
                <ul key={menuButtonData.href} className="dropdown">
                    {menuButtonData.comp}
                </ul></li>
        ))
    }

    return (
        <div className="normal-topBar-wrapper">
            {renderButtons()}
            <a href="/" className="yad2-logo-link">
                <img src="/yad2Logo.png" alt="yad2Logo" className="yad2-logo"
                    onClick={(e) => {
                        props.dispatch(updateAds("/yad2Ad.PNG"))
                    }}></img></a>
        </div >
    )
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps)(TopMenuNormalSections);
