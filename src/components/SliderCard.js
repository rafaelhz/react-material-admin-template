import React, {PropTypes} from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import Slider from 'material-ui/Slider';

export default class SliderCard extends React.Component {

  constructor(props) {
    super(props);

    this.subtitle = '(click to show)';

    this.state = {
      subtitle: this.subtitle
    }
  }

  // Change the subtitle when we open the slider
  expandChange(open) {
    this.setState({
      subtitle: open ? this.props.description : this.subtitle
    })
  }

  render() {
    return (
      <Card style={{marginBottom: '1em'}} onExpandChange={this.expandChange.bind(this)} >
        <CardHeader
          title={this.props.label}
          subtitle={this.state.subtitle}
          actAsExpander={true}
          showExpandableButton={false}
        />
        <CardText expandable={true}>
          <Slider step={1} value={this.props.value} max={5} min={1} onChange={this.props.handleChange}
          sliderStyle={{}}
          />
        </CardText>
        {/* <CardActions>

        </CardActions> */}
      </Card>
    );
  }
}

SliderCard.propTypes = {
};
