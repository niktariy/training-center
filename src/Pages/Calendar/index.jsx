import React from 'react';
import Paper from '@material-ui/core/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  WeekView,
  MonthView,
  Appointments,
  Toolbar,
  ViewSwitcher,
} from '@devexpress/dx-react-scheduler-material-ui';

import DashboardArea from '../../_components/DashboardArea';

const data = [
  {
    startDate: '2018-10-31 10:00',
    endDate: '2018-10-31 11:00',
    title: 'Meeting',
  },
  {
    startDate: '2018-11-01 18:00',
    endDate: '2018-11-01 19:30',
    title: 'Go to a gym',
  },
];
const currentDate = new Date();

const Calendar = () => (
  <DashboardArea pageTitle="">
    <Paper>
      <Scheduler data={data}>
        <ViewState currentDate={currentDate} />
        <WeekView startDayHour={9} endDayHour={18} />
        <MonthView startDayHour={10} endDayHour={19} />
        <Toolbar />
        <ViewSwitcher />
        <Appointments />
      </Scheduler>
    </Paper>
  </DashboardArea>
);

export default Calendar;
