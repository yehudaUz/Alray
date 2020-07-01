import React from 'react';
import { onOffDropList } from '../logic/elementsmManipulation '

const DropDownButton = (isWithArrowIcon, buttonText, dropDownClassName) => {
    return (
        <button className="search-bar-input search-bar-input-radio-text" onClick={() => onOffDropList(dropDownClassName)} >
            {isWithArrowIcon && <i className="fi fi-angle-down"></i>}
            <label className="dropDown-button-text">{buttonText}</label>
        </button>
    )
}

export default DropDownButton