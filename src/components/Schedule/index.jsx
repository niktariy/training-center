import * as React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
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

const makeQueryString = (currentDate, currentViewName) => {
  const format = 'YYYY-MM-DDTHH:mm:ss';
  const start = moment(currentDate).startOf(currentViewName.toLowerCase());
  const end = start.clone().endOf(currentViewName.toLowerCase());
  return { start, end };
};

const mapAppointmentData = appointment => ({
  ...appointment,
  startDate: appointment.StartDate,
  endDate: appointment.EndDate,
});

class Schedule extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.appointments.map(item => mapAppointmentData(item)),
      currentDate: currentDate,
      shadePreviousCells: true,
      shadePreviousAppointments: true,
      updateInterval: 10000,
      loading: true,
      currentViewName: 'Week',
    };
    this.loadData = this.loadData.bind(this);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
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

  componentDidUpdate() {
    this.loadData();
  }

  loadData() {
    setTimeout(() => {
      this.setState({
        loading: false,
      });
    }, 600);
  }

  render() {
    const {
      data,
      loading,
      currentDate,
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
            <ViewState defaultCurrentDate={currentDate} />
            <EditingState onCommitChanges={this.onCommitChanges} />

            <WeekView startDayHour={9} endDayHour={19} />
            <MonthView startDayHour={9} endDayHour={19} />

            <Toolbar
              {...(loading ? { rootComponent: ToolbarWithLoading } : null)}
            />
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
};

export default Schedule;
