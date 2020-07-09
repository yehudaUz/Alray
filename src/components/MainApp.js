import React from 'react'
import { connect } from 'react-redux';
import RatingFilter from './RatingFilter'
import PriceSlider from './PriceSlider'
import HostingBase from './HostingBase'
import SearchInput from './SearchInput'
import ButtonWithIcon from './ButtonWithIcon'
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import Paper from './Paper'
import Select from './Select'
const trophyIcon = () => <i className="fa fa-trophy" aria-hidden="true"></i>


const MainApp = (props) => {
    return (
        <div className="mainApp-wrapper">
            <div className="mainApp-centerize-wrapper">

                <div className="mainApp-sortAndResult">
                    <div className="mainApp-sort">
                        {/* <ButtonWithIcon text="מיין לפי" paper={<Paper />} /> */}
                        <Select/>
                        <span className="mainApp-vertical-line">|</span>
                        <ButtonWithIcon text="הכי משתלם" icon={CreditCardIcon} />
                        <ButtonWithIcon text="הכי פופולרי" icon={trophyIcon} />
                        <ButtonWithIcon text="הכי זול" icon={AttachMoneyIcon} />
                    </div>
                    <div className="mainApp-result">
                        <div className="mainApp-result-header">
                            <label>סה"כ נמצאו {"7"} תוצאות</label>
                        </div>
                    </div>
                </div>

                <div className="mainApp-filter-wrapper">
                    <div className="mainApp-filter-header">
                        <label>סינון תוצאות</label>
                    </div>
                    <RatingFilter />
                    <PriceSlider />
                    <HostingBase />
                    <SearchInput />
                </div>

            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps)(MainApp);