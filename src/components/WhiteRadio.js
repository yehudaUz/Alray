import React from 'react'
import { connect } from 'react-redux';
import Radio from '@material-ui/core/Radio';
import { withStyles } from '@material-ui/core/styles';


const handleChange = (e) => {
    // setValue(event.target.value);
    console.log(e.target.value)
};

const RadioComp = withStyles({
    root: {
        color: "white",
        '&$checked': {
            color: "white",
        },
    },
    // checked: {},
})((props) => <Radio color="default" {...props} onClick={handleChange} />);


const WhiteRadio = (props) => {
    return (
        <RadioComp
            value={props.value}
            checked={props.isChecked}
        />
    )
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps)(WhiteRadio);