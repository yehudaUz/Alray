import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            // margin: theme.spacing(1),
            // width: '',
            // backgroundColor:"white"
        },
        // backgroundColor: "white"
    },
}));

// export default function BasicTextFields() {

//     return (
//         <form className={classes.root} noValidate autoComplete="off">
//             <TextField id="outlined-basic" label="חיפוש לפי שם מלון" variant="outlined" />
//         </form>
//     );
// }


const SearchInput = (props) => {

    const classes = useStyles();
    return (
        <div className="search-input ">
                <InputBase 
                    placeholder="חיפוש לפי שם מלון"
                    classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                    }}
                    inputProps={{ 'aria-label': 'search' }}
                    startAdornment={<SearchIcon />}
                />
            {/* </div > */}
        </div>
    )
}

export default SearchInput
