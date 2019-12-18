import * as React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { addHours } from 'date-fns';
import { startOfWeek, startOfMonth } from 'date-fns/startOfHour';
import { EditingState, ViewState } from '@devexpress/dx-react-scheduler';
import {
  Appointments,
  Scheduler,
  WeekView,
  MonthView,
  Toolbar,
  ViewSwitcher,
  DateNavigator,
  TodayButton,
  CurrentTimeIndicator,
} from '@devexpress/dx-react-scheduler-material-ui';

import { Grid, Paper } from '@material-ui/core';

import { currentDate } from '../../_utils/dateHelpers';

import { CheckBoxContainer } from './CheckBoxContainer';
import { ToolbarWithLoading } from './Toolbar';

const formatStartEnd = (currentDate, currentViewName) => {
  const format = 'YYYY-MM-DDTHH:mm';
  const start = moment(currentDate).startOf(currentViewName.toLowerCase());
  const end = start.clone().endOf(currentViewName.toLowerCase());
  return { start: start.format(format), end: end.format(format) };
};

class Schedule extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.appointments,
      loading: this.props.isLoading,
      shadePreviousCells: true,
      shadePreviousAppointments: true,
      updateInterval: 10000,
      currentDate: currentDate,
      currentViewName: 'Month',
    };
    this.loadData = this.loadData.bind(this);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    this.currentDateChange = currentDate => {
      this.setState({ currentDate, loading: true });
      this.loadData();
    };
    this.currentViewNameChange = currentViewName => {
      this.setState({ currentViewName, loading: true });
      this.loadData();
    };
  }

  handleCheckboxChange(stateField) {
    const { [stateField]: fieldToChange } = this.state;
    this.setState({
      [stateField]: !fieldToChange,
    });
  }

  componentDidMount() {
    this.loadData();
  }

  loadData() {
    const { currentDate, currentViewName, loading } = this.state;
    const query = formatStartEnd(currentDate, currentViewName);
    if (query === this.lastQuery) {
      this.setState({ loading: false });
      return;
    }
    this.props.getData(query);
    this.setState({
      data: this.props.appointments,
      loading: this.props.isLoading,
    });
    if (!loading) {
      this.lastQuery = query;
    }
  }

  render() {
    const {
      data,
      loading,
      currentDate,
      currentViewName,
      shadePreviousCells,
      shadePreviousAppointments,
    } = this.state;

    return (
      <>
        <Grid container>
          <CheckBoxContainer
            shadePreviousCells={shadePreviousCells}
            shadePreviousAppointments={shadePreviousAppointments}
            handleCheckboxChange={this.handleCheckboxChange}
          />
        </Grid>

        <Paper>
          <Scheduler data={data}>
            <ViewState
              currentDate={currentDate}
              currentViewName={currentViewName}
              onCurrentViewNameChange={this.currentViewNameChange}
              onCurrentDateChange={this.currentDateChange}
            />

            <WeekView startDayHour={9} endDayHour={19} />
            <MonthView startDayHour={9} endDayHour={19} />

            <Toolbar {...(loading ? { rootComponent: ToolbarWithLoading } : null)} />
            <DateNavigator />
            <TodayButton />
            <ViewSwitcher />
            <Appointments />

            <CurrentTimeIndicator
              shadePreviousCells={shadePreviousCells}
              shadePreviousAppointments={shadePreviousAppointments}
            />
          </Scheduler>
        </Paper>
      </>
    );
  }
}

Schedule.propTypes = {
  appointments: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  getData: PropTypes.func.isRequired,
};

export default Schedule;
