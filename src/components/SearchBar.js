import React from 'react';
import { connect } from 'react-redux';
import { updateCarSearchParams } from '../actions/actions'
import { onOffDropList, clearCheckedItemsFromList } from '../logic/elementsmManipulation '
import { makersAndModels, areas } from '../other/textData'
import { updateCarSearchResult } from '../actions/actions'

const sendSearchRequest = async (props, isSearchWithParams) => {
    let urlPath = "http://localhost:3000/carSearchInitial"
    if (isSearchWithParams)
        urlPath = "http://localhost:3000/carSearch"
    fetch(urlPath, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ carSearchParams: props.carSearchParams, sortBy: props.sortBy })
    }).then(response => response.json()).then(data => {
        console.log(data)
        props.dispatch(updateCarSearchResult(data.body))
        return (data.body)
    }).catch((error) => {
        console.log("ERROR: " + error)
    })
}

const setText = (textEmpty, textMoreThenOne, arr) => {
    if (Array.isArray(arr) && arr.length === 0)
        return textEmpty
    else if ((Array.isArray(arr) && arr.length === 1) || typeof (arr) === "string") {
        if (Array.isArray(arr))
            return arr[0]
        else if (arr !== "")
            return arr
        else return textEmpty
    }
    return arr.length + " " + textMoreThenOne
}

const SearchBar = (props) => {
    let counter = 0;

    const renderYears = () => {
        let years = []
        for (let i = 1971; i <= 2020; i++)
            years.push(i)
        years.push("הכל")
        return years.reverse().map(year => (
            <li key={++counter}>{year}</li>
        ))
    }

    const updateSearchParams = (e, propName, theProp, isClearList) => {
        if (isClearList) {
            if (propName === "maker") {
                props.dispatch(updateCarSearchParams({ maker: [] }))
                props.dispatch(updateCarSearchParams({ model: [] }))
            }
            else {
                props.dispatch(updateCarSearchParams({ [propName]: [] }))
            }
        } else if (propName === "area") {
            const arrWithoutUncheckedItem = [];
            [...document.getElementsByClassName("zone-input")].forEach(zoneInput => {
                if (zoneInput.checked)
                    arrWithoutUncheckedItem.push(zoneInput.parentElement.innerText)
            })
            props.dispatch(updateCarSearchParams({ [propName]: [...arrWithoutUncheckedItem] }))
        } else if (!(e.target.checked)) {
            const arrWithoutUncheckedItem = theProp.filter(onePropItem => onePropItem !== e.target.parentNode.textContent)
            if (propName === "maker") {
                const validModelsArrs = makersAndModels.filter(oneMakerModel => arrWithoutUncheckedItem.includes(oneMakerModel.maker)).map(modelMaker => modelMaker.models)
                let validModelsArr = []
                validModelsArrs.forEach(modelsArr => modelsArr.forEach(model => validModelsArr.push(model)))
                const newModelsProps = props.carSearchParams.model.filter(oneModel => validModelsArr.includes(oneModel))
                props.dispatch(updateCarSearchParams({ [propName]: [...arrWithoutUncheckedItem], model: newModelsProps }))
            } else
                props.dispatch(updateCarSearchParams({ [propName]: [...arrWithoutUncheckedItem] }))
        } else {
            const newPropArr = [...theProp, e.target.parentNode.textContent]
            props.dispatch(updateCarSearchParams({ [propName]: newPropArr }))
        }
    }

    const updateMenuInputs = () => {
        let maker = document.getElementsByClassName("choose-maker")[0],
            model = document.getElementsByClassName("choose-model")[0],
            fromYear = document.getElementsByClassName("choose-fromYear")[0],
            toYear = document.getElementsByClassName("choose-toYear")[0],
            area = document.getElementsByClassName("choose-area")[0];

        if (maker && model && fromYear && toYear && area)
            Object.entries(props.carSearchParams).forEach(keyValue => {
                switch (keyValue[0]) {
                    case "maker": maker.placeholder = setText("בחרו יצרן", "יצרנים נבחרו", keyValue[1])
                        break;
                    case "model": model.placeholder = setText("בחרו דגם", "פריטים נבחרו", keyValue[1])
                        break;
                    case "fromYear": fromYear.placeholder = setText("משנה", "error", keyValue[1])
                        break;
                    case "toYear": toYear.placeholder = setText("עד שנה", "error", keyValue[1])
                        break;
                    case "area": area.placeholder = setText("בחרו איזור", "פריטים נבחרו", keyValue[1])
                        break;
                    default:
                }
            })
    }

    const renderZones = (area) => {
        const zonesLi = area.zones.map((oneZone) => (
            <li key={oneZone}><input key={oneZone} type="checkbox" className={"zone-input " + oneZone} />{oneZone}</li>
        ))
        zonesLi.unshift(<li><b><input key={area.region} type="checkbox" className={"zone-input " + area.region + " region"} />{area.region}</b></li>)
        return zonesLi
    }

    const selectZonesOfRegion = (e, areasList) => {
        areasList.forEach(area => {
            if (area.region === e.target.parentElement.innerText) {
                area.zones.forEach(zone => {
                    [...document.getElementsByClassName("zone-input " + zone)].forEach(z => {
                        if (!z.classList.contains("region"))                     //.checked = e.target.checked
                            z.checked = e.target.checked;
                    })
                })
            }
            console.log(area.region)
        })
    }

    const inputWithDropDownList = (title, placeHolder, className, dropDownListArr) => (
        <>
            {title}
            <input className={"search-bar-input choose-" + className} placeholder={placeHolder} readOnly onClick={() => onOffDropList("." + className)}></input >
            <div className="search-bar-dropDown-wrapper">
                <ul className={"searchBarDropDown " + className + " hidden"} onChange={(e) => {
                    if (className === "area") selectZonesOfRegion(e, dropDownListArr)
                    updateSearchParams(e, className, props.carSearchParams[className])
                }}>
                    {dropDownListArr.map((oneElement) => (
                        (className === "maker" &&
                            <li key={oneElement.maker}><input key={oneElement.maker} type="checkbox" />{oneElement.maker}</li>)
                        ||
                        (className === "model" && props.carSearchParams.maker !== "" && props.carSearchParams.maker !== undefined &&
                            props.carSearchParams.maker.includes(oneElement.maker) && oneElement.models.map((oneModel) => (
                                <li key={++counter}><input key={++counter} type="checkbox" />{oneModel}</li>)))
                        || (className === "area" && renderZones(oneElement)) ||
                        (className !== "maker" && className !== "model" &&
                            <li key={oneElement}><input key={oneElement} type="checkbox" />{oneElement}</li>)
                    ))}
                </ul>
                <div className="search-bar-buttons-strip-wrapper hidden">
                    <div className="search-bar-buttons-strip">
                        <button type="button" className="search-bar-clear-button" onClick={
                            (e) => clearCheckedItemsFromList(e, "." + className).then(() => {
                                updateSearchParams(e, className, props.carSearchParams[className], true)
                            })
                        }>נקה</button>
                        <button type="button" className="search-bar-select-button" onClick={(e) => onOffDropList("." + className)}>בחר</button>
                    </div>
                </div>
            </div>
        </>
    )

    updateMenuInputs()

    window.onclick = (e) => { //close dropDown menu when click on window frame
        console.log("clciked", e.target.tagName)
        if (e.target && e.target.tagName && e.target.tagName !== "INPUT") {
            let allDropDownsMenus = [...document.getElementsByClassName("searchBarDropDown")]
            allDropDownsMenus.forEach(dropDown => {
                if (dropDown.classList && !dropDown.classList.contains("hidden")) {
                    if ((e.target.classList && e.target.classList.contains("search-bar-input")) ||
                        (e.target.parentNode && e.target.parentNode.classList && e.target.parentNode.classList.contains("search-bar-input")))
                        return;
                    dropDown.classList.add("hidden")
                    if (dropDown.nextElementSibling && dropDown.nextElementSibling.classList &&
                        !dropDown.nextElementSibling.classList.contains("search-bar-input-double"))//button strip
                        dropDown.nextElementSibling.classList.add("hidden")
                }
            })
        }
    }

    return (
        <div className="search-bar-div">
            <form className="search-form">
                <h3><span className="search-bar-header">?איזה רכב תרצו לחפש</span></h3>
                <ul className="search-columns">
                    <li className="search-button-li" onClick={(e) => { e.preventDefault(); sendSearchRequest(props, true) }}><button type="submit" className="search-button">
                        <span className="button_content"><i className="y2i_search"></i> <span className="search-button">חיפוש</span>
                        </span></button>
                    </li>
                    <li><div className="dropdown_btn"><button type="button" className="advance-search">
                        <span className="button_content"><i className="y2i_plus_o"></i>
                            <span className="button_text">חיפוש מתקדם</span></span></button></div>
                    </li>
                    <li>
                        {inputWithDropDownList("אזור", "בחרו אזור", "area", areas)}
                    </li>
                    <li>מחיר בש"ח
                    <div className="search-bar-input-wrapper">
                            <input className="search-bar-input-double choose-toPrice" type="text" name="" autoComplete="off" placeholder="עד מחיר"
                                onChange={(e) => props.dispatch(updateCarSearchParams({ toPrice: e.target.value }))}></input>
                            <input className="search-bar-input-double choose-fromPrice" type="text" name="" autoComplete="off" placeholder="ממחיר"
                                onChange={(e) => props.dispatch(updateCarSearchParams({ fromPrice: e.target.value }))}></input>
                        </div>
                    </li>
                    <li>שנה
                    <div className="search-bar-input-wrapper">
                            <li className="from-year-to-year-li">
                                <input className="search-bar-input-double choose-toYear" type="text" name="" autoComplete="off" placeholder="עד שנה" readOnly
                                    onClick={() => onOffDropList(".toYear")}></input>
                                <ul className="searchBarDropDown toYear hidden" onClick={(e) => {
                                    e.target.innerText === "הכל" ?
                                        props.dispatch(updateCarSearchParams({ toYear: "" })) :
                                        props.dispatch(updateCarSearchParams({ toYear: e.target.innerText }))
                                }}>
                                    {renderYears()}
                                </ul>
                                <input className="search-bar-input-double choose-fromYear" type="text" name="" autoComplete="off" placeholder="משנה" readOnly
                                    onClick={() => onOffDropList(".fromYear")} ></input>
                                <ul className="searchBarDropDown fromYear hidden" onClick={(e) => {
                                    e.target.innerText === "הכל" ?
                                        props.dispatch(updateCarSearchParams({ fromYear: "" })) :
                                        props.dispatch(updateCarSearchParams({ fromYear: e.target.innerText }))
                                }}>
                                    {renderYears()}
                                </ul>
                            </li>
                        </div>
                    </li>
                    <li>
                        {inputWithDropDownList("דגם", "בחרו דגם", "model", makersAndModels)}
                    </li>
                    <li>
                        {inputWithDropDownList("יצרן", "בחרו יצרן", "maker", makersAndModels)}
                    </li>
                </ul>

            </form>
        </div >
    )
}

const mapStateToProps = (state) => {
    return state
};

const SearchBarConnected = (connect(mapStateToProps)(SearchBar))
export { SearchBarConnected as default, sendSearchRequest }	