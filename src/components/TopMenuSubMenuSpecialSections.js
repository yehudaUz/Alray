import React from 'react'

const TopMenuSubMenuSpecialSections = (props) => {
    const renderButtons = () => {
        return props.buttonsCategory.special.reverse().map((nameAndSymbol) => (
            <React.Fragment key={nameAndSymbol.name}>
                <li key={nameAndSymbol.name} className="top-subMenu-li">{nameAndSymbol.name}</li>
                {
                    nameAndSymbol.path !== "" ?
                        <img key={nameAndSymbol.name + "img"} src={nameAndSymbol.path}
                            alt={nameAndSymbol.name} className="top-subMenu-small-icon" ></img>
                        : ""
                }
            </React.Fragment>
        ))
    }

    return (
        <div className="special-topBar-wrapper TopMenuSubMenuSpecialSections">
            {renderButtons()}
        </div>
    )
}

export { TopMenuSubMenuSpecialSections as default }
