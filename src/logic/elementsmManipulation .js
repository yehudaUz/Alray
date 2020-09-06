export const clearCheckedItemsFromList = (e, className) => {
    return new Promise((resolve, reject) => {
        [...document.getElementsByClassName(className.substring(1))].forEach(child => {
            [...child.children].forEach(li => {
                let input = li.firstElementChild.tagName === "INPUT" ? li.firstElementChild : li.firstElementChild.firstElementChild;
                if (input.checked)
                    input.checked = false;
            });
            resolve();
        })
    })
}

// const obj = { vehicle: { mazda: { price: 50000, year: "", undi: undefined, nul: null } } }
// const validate = (varible) => {
//     console.log("ZZZZ",[varible])
// }
// console.log("validate obj exist: " + validate(obj.vehicle.mazda.price))
// console.log("validate obj empty string: " + validate(obj.vehicle.mazda.year))
// console.log("validate obj not exist: " + validate(obj.vehicle.mazda.blalba))
// console.log("validate obj not exist: " + validate(obj.vehicle.honda.blalba))
// console.log("validate obj null: " + validate(obj.vehicle.mazda.nul))
// console.log("validate obj undidined: " + validate(obj.vehicle.mazda.undi))

export const onOffDropList = (className) => {
    if (document.querySelectorAll(className).length > 0) {
        switch (className) {
            // case ".fromYear":
            //     if (document.querySelectorAll(className + ".hidden").length > 0) {
            //         document.querySelectorAll(className + ".hidden")[0].classList.remove("hidden")
            //         document.querySelectorAll(".toYear")[0].classList.add("hidden")
            //     } else
            //         document.querySelectorAll(className)[0].classList.add("hidden")
            //     break;
            // case ".toYear":
            //     if (document.querySelectorAll(className + ".hidden").length > 0) {
            //         document.querySelectorAll(className + ".hidden")[0].classList.remove("hidden")
            //         document.querySelectorAll(".fromYear")[0].classList.add("hidden")
            //     } else
            //         document.querySelectorAll(className)[0].classList.add("hidden")
            //     break;
            default:
                if (document.querySelectorAll(className + ".hidden").length > 0 &&
                    document.querySelectorAll(className + ".hidden")[0].childElementCount > 0)
                    document.querySelectorAll(className + ".hidden")[0].classList.remove("hidden")
                else
                    document.querySelectorAll(className)[0].classList.add("hidden")
                console.log("unknown " + className + "  for dropList onOff!")
                // if (document.querySelectorAll(className)[0].nextElementSibling.classList.contains("search-bar-buttons-strip-wrapper"))
                //     if (!document.querySelectorAll(className)[0].nextElementSibling.classList.contains("hidden"))
                //         document.querySelectorAll(className)[0].nextElementSibling.classList.add("hidden")
                //     else
                //         document.querySelectorAll(className)[0].nextElementSibling.classList.remove("hidden")
                document.querySelectorAll(".search-bar-buttons-strip-wrapper").forEach(buttonsWrapper => {
                    const list = buttonsWrapper.previousElementSibling
                    if ((list.classList.contains("hidden") && !buttonsWrapper.classList.contains("hidden")) ||
                        (!list.classList.contains("hidden") && !list.classList.contains(className) &&
                            !buttonsWrapper.classList.contains("hidden")))
                        buttonsWrapper.classList.add("hidden")
                })
                break;
        }

        if (document.querySelectorAll(className)[0] && document.querySelectorAll(className)[0].classList &&
            document.querySelectorAll(className)[0].classList.contains("hidden")) { //for buttons strip 
            if (document.querySelectorAll(className)[0].nextElementSibling &&
                document.querySelectorAll(className)[0].nextElementSibling.classList.contains("hidden"))
                document.querySelectorAll(className)[0].nextElementSibling.classList.add("hidden")
        } else if (document.querySelectorAll(className)[0].nextElementSibling &&
            document.querySelectorAll(className)[0].nextElementSibling.classList.contains("hidden"))
            document.querySelectorAll(className)[0].nextElementSibling.classList.remove("hidden")

        const menus = document.getElementsByClassName("searchBarDropDown")
        for (let i = 0; i < menus.length; i++) {
            let oneMenu = menus[i]
            if (!oneMenu.classList.contains("hidden") && !oneMenu.classList.contains(className.substring(1)))
                oneMenu.classList.add("hidden")
        }
    }
}

export const offNewTab = (e) => {
    let element = e.target//.parentNode
    while ((element && element.classList && !element.classList.contains("master")) ||
        (element && !element.classList && element.parentNode))
        element = element.parentNode

    if (element && element.firstElementChild && element.firstElementChild.firstElementChild &&
        element.firstElementChild.firstElementChild.firstElementChild &&
        element.firstElementChild.firstElementChild.firstElementChild.tagName &&
        element.firstElementChild.firstElementChild.firstElementChild.tagName === "I") {
        let iconImage = element.firstElementChild.firstElementChild.firstElementChild
        if (iconImage && iconImage.classList && !iconImage.classList.contains("hidden"))
            iconImage.classList.add("hidden")
    }

    if (element && element.firstElementChild && element.firstElementChild.firstElementChild &&
        element.firstElementChild.firstElementChild.children.length > 1 &&
        element.firstElementChild.firstElementChild.children[1].tagName &&
        element.firstElementChild.firstElementChild.children[1].tagName === "SPAN") {
        let newTabText = element.firstElementChild.firstElementChild.children[1]
        if (newTabText && newTabText.classList && !newTabText.classList.contains("hidden"))
            newTabText.classList.add("hidden")
    }
}

export const onNewTab = (e) => {
    let element = e.target//.parentNode
    while ((element && element.classList && !element.classList.contains("master")) ||
        (element && !element.classList && element.parentNode))
        element = element.parentNode

    if (element.classList.contains("expend"))
        return;

    if (element && element.firstElementChild && element.firstElementChild.firstElementChild &&
        element.firstElementChild.firstElementChild.firstElementChild &&
        element.firstElementChild.firstElementChild.firstElementChild.tagName &&
        element.firstElementChild.firstElementChild.firstElementChild.tagName === "I") {
        let iconImage = element.firstElementChild.firstElementChild.firstElementChild
        if (iconImage && iconImage.classList && iconImage.classList.contains("hidden"))
            iconImage.classList.remove("hidden")
    }

    if (element && element.firstElementChild && element.firstElementChild.firstElementChild &&
        element.firstElementChild.firstElementChild.children.length > 1 &&
        element.firstElementChild.firstElementChild.children[1].tagName &&
        element.firstElementChild.firstElementChild.children[1].tagName === "SPAN") {
        let newTabText = element.firstElementChild.firstElementChild.children[1]
        if (newTabText && newTabText.classList && newTabText.classList.contains("hidden"))
            newTabText.classList.remove("hidden")
    }
}

const fetchSellerData = async (userId) => {
    let urlPath = "http://localhost:3000/fetchSellerData"
    return fetch(urlPath, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ userId })
    }).then(response => response.json()).then(data => {
        console.log("ddddddddddd", data)
        // throw new Error()
        // if (Object.keys(Response).includes("error"))
        // props.dispatch(updateUser({ name: "לא ידוע" }))

        // props.dispatch(updateUser(data.body))
        return (data)
    }).catch((error) => {
        console.log("ERROR: " + error)
    })
}

export const onOffResult = (e) => {
    try {
        console.log(e);
        console.log(e.target)
        //this is for showNumber buttons
        if (e.target && e.target.classList && (
            e.target.classList.contains("search-result-contact-seller-button") ||
            e.target.classList.contains("search-result-button-text") ||
            e.target.classList.contains("search-result-icon")
        )) {
            if (e.target.classList.contains("search-result-contact-seller-button")) {
                if (e.target.nextElementSibling && e.target.nextElementSibling.classList &&
                    e.target.nextElementSibling.classList.contains("show-phone-number-wrapper"))
                    if (e.target.nextElementSibling.classList.contains("hidden")) {
                        let showSellerButton = e.target
                        fetchSellerData(e.target.lastElementChild.innerText).then((sellerData) => {
                            console.log(sellerData)
                            showSellerButton.nextElementSibling.children[0].firstElementChild.innerText = sellerData.name
                            showSellerButton.nextElementSibling.children[1].firstElementChild.innerText = sellerData.phone
                            showSellerButton.nextElementSibling.children[2].firstElementChild.href = "mailto:" + sellerData.email
                            showSellerButton.nextElementSibling.classList.remove("hidden")
                        })
                    }
                    else
                        e.target.nextElementSibling.classList.add("hidden")
            }
            else if (e.target.classList.contains("search-result-button-text") ||
                e.target.classList.contains("search-result-icon")) {
                if (e.target.parentElement && e.target.parentElement.nextElementSibling &&
                    e.target.parentElement.nextElementSibling.classList &&
                    e.target.parentElement.nextElementSibling.classList.contains("show-phone-number-wrapper"))
                    if (e.target.parentElement.nextElementSibling.classList.contains("hidden")) {
                        if (e.target.parentElement && e.target.parentElement.lastElementChild &&
                            e.target.parentElement.lastElementChild.outerText && e.target.parentElement.lastElementChild.tagName &&
                            e.target.parentElement.lastElementChild.tagName === "LABEL") {
                            let showSellerIconOrText = e.target
                            fetchSellerData(e.target.parentElement.lastElementChild.outerText).then((sellerData) => {
                                console.log(sellerData)
                                showSellerIconOrText.parentElement.nextElementSibling.children[0].firstElementChild.innerText = sellerData.name
                                showSellerIconOrText.parentElement.nextElementSibling.children[1].firstElementChild.innerText = sellerData.phone
                                showSellerIconOrText.parentElement.nextElementSibling.children[2].firstElementChild.href = "mailto:" + sellerData.email
                                showSellerIconOrText.parentElement.nextElementSibling.classList.remove("hidden")
                            })
                        }
                    }
                    else
                        e.target.parentElement.nextElementSibling.classList.add("hidden")
            }
            // else if (e.target.classList.contains("search-result-icon")) {
            //     if (e.target.nextElementSibling && e.target.nextElementSibling.classList &&
            //         e.target.nextElementSibling.classList.contains("show-phone-number-wrapper"))
            //         if (e.target.nextElementSibling.classList.contains("hidden"))
            //             e.target.nextElementSibling.classList.remove("hidden")
            //         else
            //             e.target.nextElementSibling.classList.addF("hidden")
            // }

            // console.log("button cliced")
            // e.target.click()
            return
        }

        //this is for normal ads expend when clicked
        if (e.target && e.target.parentNode) {
            let element = e.target//.parentNode
            while (element && element.classList &&
                !element.classList.contains("search-result-table") && element.parentNode)
                element = element.parentNode

            if (element.classList.contains("search-result-table")) {//closing open ad
                if (element.classList.contains("search-result-button-text"))
                    return;
                if (element.classList.contains("expend")) {
                    element.classList.remove("expend") //table
                    if (element.childNodes[1].classList.contains("search-result-middle-part"))
                        element.childNodes[1].classList.remove("hidden")
                    if (element.nextElementSibling.classList.contains("expendable-table"))
                        element.nextElementSibling.classList.add("hidden")
                    if (element.childNodes[0].childNodes[3])
                        element.childNodes[0].childNodes[3].classList.add("hidden")
                    if (element.childNodes[2]) //right part
                        element.childNodes[2].classList.remove("expend")
                    if (element.childNodes[0]) //left part
                        element.childNodes[0].classList.remove("expend")
                    if (element.nextElementSibling && element.nextElementSibling.nextElementSibling &&
                        element.nextElementSibling.nextElementSibling.classList.contains("footer"))
                        element.nextElementSibling.nextElementSibling.classList.add("hidden")
                    //this is to close showNumber  when closing ad
                    if (element.firstElementChild && element.firstElementChild.children &&
                        element.firstElementChild.children && element.firstElementChild.children[4] &&
                        element.firstElementChild.children[4].classList &&
                        element.firstElementChild.children[4].classList.contains("show-phone-number-wrapper") &&
                        !element.firstElementChild.children[4].classList.contains("hidden"))
                        element.firstElementChild.children[4].classList.add("hidden")
                }
                else { //expending the ads/table
                    element.classList.add("expend")//table
                    if (element.childNodes[1].classList.contains("search-result-middle-part"))
                        element.childNodes[1].classList.add("hidden")
                    if (element.nextElementSibling.classList.contains("expendable-table"))
                        element.nextElementSibling.classList.remove("hidden")
                    if (element.childNodes[0].childNodes[3])
                        element.childNodes[0].childNodes[3].classList.remove("hidden")
                    if (element.childNodes[2]) //right part
                        element.childNodes[2].classList.add("expend")
                    if (element.childNodes[0]) //left part
                        element.childNodes[0].classList.add("expend")
                    if (element.nextElementSibling && element.nextElementSibling.nextElementSibling &&
                        element.nextElementSibling.nextElementSibling.classList.contains("footer"))
                        element.nextElementSibling.nextElementSibling.classList.remove("hidden")
                }
            }
        }
    } catch (e) { console.log("onoffresult error", e) }
}
