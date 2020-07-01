import React from 'react'

const DropDownContent = ({ dropDownContentArrText }) => {
    const renderList = () => {
        return dropDownContentArrText.map((dropDownbuttonText) =>
            (
                <li key={dropDownbuttonText}><a className="normal-top-menu-a" href="/">{dropDownbuttonText}</a></li>
            ))
    }

    return (
        <>
            {renderList()}
        </>
    )
}

export { DropDownContent as default }