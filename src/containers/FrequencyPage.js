import React from 'react';
// import {Link} from 'react-router';
// import RaisedButton from 'material-ui/RaisedButton';
// import MenuItem from 'material-ui/MenuItem';
// import TextField from 'material-ui/TextField';
// import SelectField from 'material-ui/SelectField';
// import Toggle from 'material-ui/Toggle';
// import DatePicker from 'material-ui/DatePicker';
// import {grey400} from 'material-ui/styles/colors';
// import Divider from 'material-ui/Divider';
import PageBase from '../components/PageBase';
import FrequencyFormComp from '../components/frequencyComp/FrequencyFormComp';
import FrequencyLineComp from '../components/frequencyComp/FrequencyLineComp';
import FrequencyTableComp from '../components/frequencyComp/FrequencyTableComp';
// import globalStyles from '../styles';

const FrequencyPage = () => {

  return (
    <div>
        <div className="row">
            <div className="col-md-12">
            <PageBase title="Frequency Form"
              navigation="Application / Frequency Analysis">

                <FrequencyFormComp/>
            </PageBase>
            </div>
        </div>
        <div className="row">
            <div className="col-md-8">
                <PageBase title="Frequency Chart">
                    <FrequencyLineComp/>
                </PageBase>
                <PageBase title="Data Table">
                    <FrequencyTableComp/>
                </PageBase>
            </div>

            <div className="col-md-4">

            </div>
        </div>
    </div>
  );
};

export default FrequencyPage;
