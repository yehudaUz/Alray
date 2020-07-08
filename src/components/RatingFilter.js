import React from 'react'
import { connect } from 'react-redux';
import LabelWithRadio from './LabelWithRadio'
import { Rating } from '@material-ui/lab';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import WhiteRadio from './WhiteRadio'

const RatingFilter = (props) => {
    return (
        <div className="ratingFilter-wrapper">
            <div className="ratingFilter-header">
                <label>דירוג מלון</label>
            </div>
            {/* <div className="ratingFilter">
                <LabelWithRadio isChecked={true} value={"1star"} className={"radio 1star"} labelText={<Rating defaultValue={1} readOnly />} />
                <LabelWithRadio isChecked={true} value={"2star"} className={"radio 2star"} labelText={<Rating defaultValue={2} readOnly />} />
                <LabelWithRadio isChecked={true} value={"3star"} className={"radio 2star"} labelText={<Rating defaultValue={3} readOnly />} />
                <LabelWithRadio isChecked={true} value={"4star"} className={"radio 4star"} labelText={<Rating defaultValue={4} readOnly />} />
                <LabelWithRadio isChecked={true} value={"5star"} className={"radio 5star"} labelText={<Rating defaultValue={5} readOnly />} />
            </div> */}
            <RadioGroup defaultValue="start">
                <FormControlLabel labelPlacement="start" value="start" control={<WhiteRadio />}
                    label={<Rating defaultValue={1} readOnly />} />
                <FormControlLabel labelPlacement="start" value="start" control={<WhiteRadio />}
                    label={<Rating defaultValue={2} readOnly />} />
                <FormControlLabel labelPlacement="start" value="start" control={<WhiteRadio />}
                    label={<Rating defaultValue={3} readOnly />} />
                <FormControlLabel labelPlacement="start" value="start" control={<WhiteRadio />}
                    label={<Rating defaultValue={4} readOnly />} />
                <FormControlLabel labelPlacement="start" value="start" control={<WhiteRadio />}
                    label={<Rating defaultValue={5} readOnly />} />
            </RadioGroup>
        </div>
    )
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps)(RatingFilter);