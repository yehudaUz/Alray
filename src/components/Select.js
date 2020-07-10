import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const simpleList = () => (
    <ul>
        <li>מחיר, מהנמוך לגבוה</li>
        <li>מחיר, מהגבוה לנמוך</li>
        <li>דירוג, מהגבוה לנמוך</li>
        <li>דירוג, מהנמוך לגבוה</li>
        <li>הכי משתלם</li>
    </ul>
)


const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        // botton:50
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default function SimpleSelect() {
    const classes = useStyles();
    const [sortType, setSortType] = React.useState('מחיר, מהנמוך לגבוה');

    const handleChange = (event) => {
        console.log(event.currentTarget.innerText)
        setSortType(event.currentTarget.innerText);
    };

    return (
        <div className="select">

            <FormControl className={classes.formControl + " select-form"}>
                {/* <InputLabel id="demo-simple-select-filled-label">מיין לפי</InputLabel> */}
                <Select
                    // labelId="demo-simple-select-filled-label"
                    // id="demo-simple-select-filled"
                    value={sortType}
                    onChange={handleChange}
                >
                    <MenuItem value={"מחיר, מהנמוך לגבוה"}>מחיר, מהנמוך לגבוה</MenuItem>
                    <MenuItem value={"מחיר, מהגבוה לנמוך"}>מחיר, מהגבוה לנמוך</MenuItem>
                    <MenuItem value={`דירוג, מהגבוה לנמוך`}>דירוג, מהגבוה לנמוך</MenuItem>
                    <MenuItem value={"דירוג, מהנמוך לגבוה"}>דירוג, מהנמוך לגבוה</MenuItem>
                    <MenuItem value={"הכי משתלם"}>הכי משתלם</MenuItem>

                    {/* <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem> */}
                </Select>
            </FormControl>
            <label className="select-sortBy-label">:מיין לפי</label>

        </div>
    );
}