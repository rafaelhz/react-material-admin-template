import React from 'react';
import PropTypes from 'prop-types';
// import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import globalStyles from '../styles';

const PageBase = (props) => {

    const {title, navigation} = props;

    return (
      <div className="row">
        <div className={props.fluid === "true" ? "" : "col-xs-12 col-sm-12 col-md-9 col-lg-6"}>
          <div className="box-row">

            <span style={globalStyles.navigation}>{navigation}</span>

            {/* <Paper style={globalStyles.paper}> */}
              <h3 style={globalStyles.title}>{title}</h3>

              <Divider/>
              {props.children}

              <div style={globalStyles.clear}/>
            {/* </Paper> */}

        </div>
      </div>
    </div>
    );
};

PageBase.propTypes = {
  // title: PropTypes.object,
  navigation: PropTypes.string,
  children: PropTypes.element
};

export default PageBase;
