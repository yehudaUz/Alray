

import React from 'react'

const TopMenuSubMenuNormalSections = (props) => {
    const renderButtons = () => {
                return props.buttonsCategory.normal.reverse().map((button) => (
                    <li key={button}>{button}</li>
                ))
    }

    return (
        <div className="normal-topBar-wrapper sub-menu">
            {renderButtons()}
        </div>
    )
}

export { TopMenuSubMenuNormalSections as default }
