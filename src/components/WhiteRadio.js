import React from 'react'
import { connect } from 'react-redux';
import Radio from '@material-ui/core/Radio';
import { withStyles } from '@material-ui/core/styles';

const WhiteRadio = (props) => {
    const [isClicked, setClick] = React.useState(true);

    const handleChange = (e) => {
        e.target.checked ? setClick(false) : setClick(true)
        console.log(isClicked)
    }

    const RadioComp = withStyles({
        root: {
            color: "white",
            '&$checked': {
                color: "white",
            },
        },
        // checked: {},
    })((props) => <Radio color="default" {...props} />);




    return (
        <RadioComp
            onClick={handleChange}
            value={isClicked}
            checked={isClicked}
        />
    )
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps)(WhiteRadio);