import React, { useState, useEffect } from 'react';
import useForm from 'react-hook-form';
import { connect } from 'react-redux';
import { format } from 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDateTimePicker,
} from '@material-ui/pickers';
import { Button, TextField } from '@material-ui/core';
import { getLessonsByCourse } from '../../_actions';

const FormLessonCreator = ({
  courseId,
  action,
  minDate,
  getLessonsByCourse,
  isLessonCreated,
}) => {
  const { handleSubmit, register, setValue, getValues, reset } = useForm({
    mode: 'onBlur',
    defaultValues: {
      lessonDuration: 1,
      startTime: minDate,
    },
  });
  const [selectedDate, setSelectedDate] = useState(minDate);

  const handleDateTimeChange = value => {
    setSelectedDate(value);
    setValue('startTime', format(new Date(value), 'yyyy-MM-dd HH:mm'));
  };

  useEffect(() => {
    setSelectedDate(minDate);
    register({ name: 'startTime', type: 'text', required: true });

    if (isLessonCreated) {
      console.log('created, udpate');

      getLessonsByCourse(courseId);
      reset();
    }
  }, [courseId, getLessonsByCourse, isLessonCreated, minDate, register, reset]);

  const onSubmit = () => {
    setValue('startTime', format(new Date(selectedDate), 'yyyy-MM-dd HH:mm'));

    // values.startTime = format(new Date(values.startTime), 'yyyy-MM-dd HH:mm');
    action(courseId, getValues());
    console.log('courseId');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        id="lessonTitle"
        name="lessonTitle"
        label="Lesson Title"
        type="text"
        margin="normal"
        fullWidth
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
        fullWidth
        inputRef={register({
          required: true,
        })}
      />
      {selectedDate && (
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
            margin="normal"
            fullWidth
            disablePast
            InputLabelProps={{ shrink: true }}
            format="yyyy-MM-dd HH:mm"
            autoOk
          />
        </MuiPickersUtilsProvider>
      )}

      <Button type="submit" variant="contained" color="primary">
        {'Create'}
      </Button>
    </form>
  );
};

const mapStateToProps = state => ({
  isLessonCreated: state.lessonReducer.isLessonCreated,
});

const mapDispatchToProps = {
  getLessonsByCourse,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormLessonCreator);
