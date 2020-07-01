import React from 'react'
import { connect } from 'react-redux';
import { updateUser } from '../actions/actions'

const PersonalArea = (props) => {

    const updateUserData = async () => {
        let urlPath = "http://localhost:3000/getUserData"
        fetch(urlPath, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            // body: JSON.stringify(props.carSearchParams)
        }).then(response => response.json()).then(data => {
            console.log(data)
            // throw new Error()
            if (Object.keys(Response).includes("error"))
                props.dispatch(updateUser({ name: "לא ידוע" }))

            props.dispatch(updateUser(data.body))
            return (data.body)
        }).catch((error) => {
            console.log("ERROR: " + error)
        })
    }
    if (!props.user)// || (props.user && props.user.name == "לא ידוע"))
        updateUserData()
    console.log("gadsg")
    return (
        <div className="login-wrapper">
            <div className="login-header">
                <div className="login-logo">
                    <a href="/"> <img src="//images.yad2.co.il/Pic/yad2new/page/yad2_madad.jpg"
                        alt="לוח יד2- לוח המודעות הגדול באינטרנט"></img></a>
                </div>
                <div className="login-title">
                    האזור האישי שלי
                    </div>
                <div className="personal-information">
                    שלום, {(props.user && props.user.name) ? props.user.name : "לא ידוע"}! יש לך
                    ({(props.user && props.user.ads) ? props.user.ads.length : "0"}) מודעות פעילות |
                    <img src="//my.yad2.co.il/images/myYad2Secure/logout_small.jpg"
                        border="0" alt="logout">
                    </img>
                    <a href="/logout" className="logout">התנתק</a>
                </div>
            </div>



            <div className="nav">
                <ul className="nav-list">
                    <li className="menu_element  active "><a href="//my.yad2.co.il/newOrder/index.php?action=personalAreaIndex">עדכון ועריכת מודעות</a></li><li className="menu_element  ">
                        <a href="//my.yad2.co.il/newOrder/index.php">פרסום מודעה חדשה</a>
                    </li><li className="menu_element1  ">
                        <a href="//my.yad2.co.il/newOrder/index.php?action=personalAreaCustomerInfo">עדכון פרטים</a></li>
                </ul>
                <div className="searchFormNav">
                    <form name="searchSiteform">
                        <span>
                            <select name="page" className="categorySelect">
                                <option value="-1">בחר קטגוריה</option>
                                <optgroup label="רכב"><option value="HomePageSearch.php?Cat=1_1">-- פרטי</option>
                                    <option value="HomePageSearch.php?Cat=1_2">-- מסחרי</option>
                                    <option value="HomePageSearch.php?Cat=1_3">-- ג'יפים</option>
                                    <option value="HomePageSearch.php?Cat=1_4">-- אופנועים</option>
                                    <option value="HomePageSearch.php?Cat=1_5">-- קטנועים</option>
                                    <option value="HomePageSearch.php?Cat=1_6">-- מיוחדים</option>
                                    <option value="HomePageSearch.php?Cat=1_7">-- אביזרים</option>
                                    <option value="HomePageSearch.php?Cat=1_9">-- משאיות</option>
                                    <option value="HomePageSearch.php?Cat=1_13">-- כלי שייט</option>
                                </optgroup><optgroup label="נדל''ן"><option value="HomePageSearch.php?Cat=2_1">-- מכירה</option>
                                    <option value="HomePageSearch.php?Cat=2_2">-- השכרה</option><option value="HomePageSearch.php?Cat=2_3">-- שותפים</option>
                                    <option value="HomePageSearch.php?Cat=2_4">-- מסחרי</option><option value="HomePageSearch.php?Cat=2_5">-- תיווך מכירה</option>
                                    <option value="HomePageSearch.php?Cat=2_6">-- תיווך השכרה</option><option value="HomePageSearch.php?Cat=2_7">-- תיווך מסחרי</option>
                                </optgroup><optgroup label="מכירות/יד שנייה"><option value="HomePageSearch.php?Cat=3_0">-- יד שניה</option>
                                    <option value="HomePageSearch.php?Cat=3_2">-- מוצרים חדשים</option>
                                </optgroup><option value="HomePageSearch.php?Cat=5_0">חיות מחמד</option>
                                <option value="HomePageSearch.php?Cat=6_0">לימודים</option>
                                <option value="HomePageSearch.php?Cat=10_0">תיירות</option>
                                <option value="HomePageSearch.php?Cat=11_0">אלטרנטיבי</option>
                            </select>
                        </span>
                        <span>
                            <input name="q" id="q" type="text" autoComplete="on"></input>
                        </span>
                        <span className="searchSitebtn" onClick={() => { }}>חפש</span>

                    </form>
                </div>
            </div>

            <form className="personal-all-input-wrapper" action="/postNewAd" method="post" encType="multipart/form-data">
                <input placeholder="maker" name="maker" className="personal-area-maker" type="text"></input>
                <input placeholder="model" name="model" className="personal-area-model" type="text"></input>
                <input placeholder="price" name="price" className="personal-area-price" type="text"></input>
                <input placeholder="year" name="year" className="personal-area-year" type="text"></input>
                <input placeholder="hand" name="hand" className="personal-area-hand" type="text"></input>
                <input placeholder="engineCc" name="engineCc" className="personal-area-engineCc" type="text"></input>
                <input placeholder="area" name="area" className="personal-area-area" type="text"></input>
                <input placeholder="freeText" name="freeText" className="personal-area-freeText" type="text"></input>
                <input placeholder="km" name="km" className="personal-area-km" type="text"></input>
                <input placeholder="engineType" name="engineType" className="personal-area-engineType" type="text"></input>
                <input placeholder="transmitionType" name="transmitionType" className="personal-area-transmitionType" type="text"></input>
                <input placeholder="dateOnTheRoad" name="dateOnTheRoad" className="personal-area-dateOnTheRoad" type="date"></input>
                <input placeholder="testUntil" name="testUntil" className="personal-area-testUntil" type="date"></input>
                <input placeholder="ownership" name="ownership" className="personal-area-ownership" type="text"></input>
                <input placeholder="lastOwnership" name="lastOwnership" className="personal-area-lastOwnership" type="text"></input>
                <input placeholder="color" name="color" className="personal-area-color" type="text"></input>
                <div className="disability">
                    <p>is replace ok?</p>
                    <input name="isReplaceOk" className="personal-area-isReplaceOk" type="radio" value="true"></input>
                    <label>yes</label>
                    <input name="isFitToDisability" className="personal-area-isFitToDisability" type="radio" value="false"></input>
                    <label>no</label>
                </div>
                <div className="disability">
                    <p>fit disability?</p>
                    <input name="isFitToDisability" className="personal-area-isFitToDisability" type="radio" value="true"></input>
                    <label>yes</label>
                    <input name="isFitToDisability" className="personal-area-isFitToDisability" type="radio" value="false"></input>
                    <label>no</label>
                </div>
                <div className="disability">
                    <input className="files-upload-input" type="file" name="photo" multiple />
                </div>
                <button type="submit" value="upload" onClick={(e) => {
                    e.preventDefault()
                    // console.log(document.getElementsByClassName("files-upload-input")[0].files)
                    if (document.getElementsByClassName("files-upload-input")[0].files.length < 1)
                        document.getElementsByClassName("personal-all-input-wrapper")[0].removeAttribute("encType")
                    document.getElementsByClassName("personal-all-input-wrapper")[0].submit()
                }
                }> שלח מודעה</button>
            </form>
        </div >
    )
}

const mapStateToProps = (state) => {
    return state
};

export default connect(mapStateToProps)(PersonalArea);

// [{
//     maker: "מרצדס", model: "amg", price: "50000", year: "1965", hand: "3", engineCc: "2000", area: "ירושלים", freeText: "ידשה ושמורה", km: "80000",
//     engineType: "בנזין", transmitionType: "אוטומט", dateOnTheRoad: "15032015", testUntil: "180321", ownership: "פרטי", isReplaceOk: "false",
//     isFitToDisability: "false", lastUpadte: "21052020", imgs: ["https://img.yad2.co.il/Pic/202006/07/1_1/o/o1_1_1_01240_20200607150613.jpg?l=7&c=6&w=1024&h=768"]
// },