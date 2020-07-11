import React from 'react'
import { connect } from 'react-redux';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import {updateSliderValues} from '../actions/actions'

const useStyles = makeStyles({
    root: {
        width: 200,
    },
});

const MySlider = withStyles({
    rail: {
        // height: 2,
        opacity: 1,
        backgroundColor: "white",
    }, thumb: {
        backgroundColor: "white"
    }, rail: {
        backgroundColor: "white"
    },
})(Slider);

function valuetext(value) {
    return `${value}`;
}



const PriceSlider = (props) => {
    const classes = useStyles();
    // const [value, setValue] = React.useState([0, 6000]);

    const handleChange = (event, newValue) => {
        console.log(newValue)
        props.dispatch(updateSliderValues(newValue))
        // setValue(newValue);
    };

    return (
        <div className="priceSlider">
            <div className="priceSlider-header">
                <label>טווח מחירים לאדם</label>
                <div className="priceSlider-priceRange-wrapper">
                    <label className="priceSlider-priceRange-minPrice-label">{props.searchParams.fromPrice}</label>
                    <label className="priceSlider-priceRange-maxPrice-label">{props.searchParams.toPrice}</label>
                </div>
            </div>
            <div className={classes.root}>
                <MySlider
                    min={0}
                    max={9999}
                    value={[props.searchParams.fromPrice, props.searchParams.toPrice]}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    aria-labelledby="range-slider"
                    getAriaValueText={valuetext}
                    rail={{ backgroundColor: "white" }}
                />
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps)(PriceSlider);