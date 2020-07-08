import React from 'react'
import { connect } from 'react-redux';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

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
    const [value, setValue] = React.useState([0, 6000]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className="priceSlider">
            <div className="priceSlider-header">
                <label>טווח מחירים לאדם</label>
            </div>
            <div className={classes.root}>
                {/* <Typography id="range-slider" gutterBottom>
                    Temperature range
        </Typography> */}
                <MySlider
                    // valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={20}
                    min={890}
                    max={6000}
                    value={value}
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