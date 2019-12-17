import React from 'react';
import { connect } from 'react-redux';

import DashboardArea from '../../components/DashboardArea';
import Schedule from '../../components/Schedule';

// TOOD: remove and get real data
import { data } from './data';

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <DashboardArea>
        <Schedule appointments={data} />
      </DashboardArea>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Calendar);
