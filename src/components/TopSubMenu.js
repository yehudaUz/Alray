import React from 'react'
import ReactDOM from 'react-dom'
import TopMenuSubMenuSpecialSections from './TopMenuSubMenuSpecialSections'
import TopMenuSubMenuNormalSections from './TopMenuSubMenuNormalSections'

const TopSubMenu = (props) => {
    return (
        <nav className="subMenu">
            <ul className="top-menu-2-parts-wrapper">
                <TopMenuSubMenuSpecialSections buttonsCategory={props.buttonsCategory} />
                <TopMenuSubMenuNormalSections buttonsCategory={props.buttonsCategory} />
            </ul>
        </nav>
    )
}

export { TopSubMenu as default }