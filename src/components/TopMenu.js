import React from 'react'
import TopMenuSpecialSections from './TopMenuSpecialSections'
import TopMenuNormalSections from './TopMenuNormalSections'

const TopMenu = () => {
    return (
        <div className="top-menu">
            <nav className="navbar">
                <ul className="top-menu-2-parts-wrapper">
                    <TopMenuSpecialSections />
                    <TopMenuNormalSections />
                </ul>
            </nav>
        </div>
    )
}

export { TopMenu as default }
