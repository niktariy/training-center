import React, { useState, useEffect } from 'react';
import useForm from 'react-hook-form';
import { format, addYears } from 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDateTimePicker,
} from '@material-ui/pickers';
import {
  Button,
  TextField,
  MenuItem,
  Typography,
  CircularProgress,
} from '@material-ui/core';

const FormLessonCreator = ({ courseId, action, minDate }) => {
  const { handleSubmit, register, reset, getValues, setValue } = useForm({
    mode: 'onBlur',
    defaultValues: {
      startTime: minDate,
    },
  });
  const [selectedDate, setSelectedDate] = useState(minDate);

  const handleDateTimeChange = dateTime => {
    setSelectedDate(dateTime);
    setValue('startTime', format(new Date(dateTime), 'yyyy-MM-dd HH:mm'));
  };

  useEffect(() => {
    register({ name: 'startTime', type: 'text', required: true });
  }, [minDate, register]);

  const onSubmit = values => {
    debugger;
    action(courseId, values);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        id="lessonTitle"
        name="lessonTitle"
        label="Lesson Title"
        type="text"
        margin="normal"
        inputRef={register({
          required: true,
        })}
      />
      <TextField
        id="lessonDuration"
        name="lessonDuration"
        label="Lesson Duration"
        type="number"
        margin="normal"
        inputRef={register({
          required: true,
        })}
      />
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDateTimePicker
          name="startTime"
          id="startTime"
          variant="inline"
          ampm={false}
          label="Start time"
          value={selectedDate}
          minDate={minDate}
          onChange={handleDateTimeChange}
          disablePast
          InputLabelProps={{ shrink: true }}
          format="yyyy/MM/dd HH:mm"
          autoOk
        />
      </MuiPickersUtilsProvider>

      <Button type="submit" type="submit" variant="contained" color="primary">
        {'Create'}
      </Button>
    </form>
  );
};

export default FormLessonCreator;
