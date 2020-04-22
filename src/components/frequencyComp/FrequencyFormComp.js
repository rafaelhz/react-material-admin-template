import React , { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const styles = {
    buttons: {
    marginTop: 30,
    float: 'right'
    },
    saveButton: {
    marginLeft: 5
    }
};
class FrequencyFormComp extends Component {

    render(){
        return (
            <form>
                <TextField
                hintText="Keyword"
                floatingLabelText="See how often you have been mentioned."
                fullWidth={true}
                />

                <div style={styles.buttons}>
                <RaisedButton label="Save"
                                style={styles.saveButton}
                                type="submit"
                                primary={true}/>
                </div>
            </form>
        );
    }
}

export default FrequencyFormComp;
