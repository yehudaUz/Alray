import React from 'react'
import { connect } from 'react-redux';

const SiteMapLink = (props) => {
    const renderMapTexts = () => {
        return props.menuText.map(text => (
            <li key={text} className="sitemap-link-text">{
                text != props.menuText[props.menuText.length - 1] ? "  < " + text : text}</li>
        )).reverse()
    }

    return (
        <div className="sitemap-link">
            {props.menuText.length > 1 ?
                <ul>
                    {renderMapTexts()}
                </ul>
                :
                ""
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps)(SiteMapLink);