import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import useForm from 'react-hook-form';
import { connect } from 'react-redux';
import { addDays, format } from 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import clsx from 'clsx';
import { useParams } from 'react-router-dom';
import {
  Button,
  TextField,
  MenuItem,
  Typography,
  CircularProgress,
} from '@material-ui/core';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

import { getCourseById, updateCourse } from '../../_actions';
import { fields } from '../../constants/courseCreatorFields';
import { categories } from '../../constants/categories';
import { useStyles } from './styles';
import { formatCategory } from '../../_utils/stringFormatter';

const FormCourseUpdater = ({
  courseData,
  getCourseById,
  isCourseCreationProgress,
  isCourseCreated,
  updateCourse,
}) => {
  const { courseId } = useParams();
  const { courseName, courseDescription, startDate, category } = courseData;
  const { handleSubmit, register, getValues, setValue } = useForm({
    mode: 'onBlur',
  });
  const [courseCategory, setCourseCategory] = useState(category);
  const [selectedDate, setSelectedDate] = useState(startDate);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const classes = useStyles();

  useEffect(() => {
    getCourseById(courseId);
    setSelectedDate(new Date(courseData.startDate));

    setLoading(isCourseCreationProgress);
    setSuccess(isCourseCreated);

    register({ name: 'category', type: 'text', required: true });
    register({ name: 'startDate', type: 'text', required: true });
    // setCourseCategory(courseData.category);
    // setSelectedDate(courseData.startDate);
  }, [
    isCourseCreationProgress,
    isCourseCreated,
    register,
    getCourseById,
    courseId,
    courseData,
    setValue,
  ]);

  const handleSelectChange = e => {
    setCourseCategory(e.target.value);
  };

  const handleDateChange = date => {
    setSelectedDate(date);
    setValue('startDate', format(new Date(date), 'yyyy-MM-dd'));
  };

  const buttonClassname = clsx({
    [classes.buttonSuccess]: success,
  });

  const values = getValues();

  const onSubmit = () => {
    debugger;
    setLoading(true);
    updateCourse(courseId, values);
  };

  return (
    courseData && (
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={classes.courseCreatorForm}
      >
        <Typography variant="h5" component="h2">
          Create new course
        </Typography>
        <TextField
          {...fields.CourseNameProps}
          inputRef={register({
            required: 'Required',
          })}
          InputLabelProps={{ shrink: true }}
          defaultValue={courseName}
          margin="normal"
        />
        <TextField
          {...fields.CourseDescriptionProps}
          inputRef={register({
            required: 'Required',
          })}
          InputLabelProps={{ shrink: true }}
          defaultValue={courseDescription}
          margin="normal"
          multiline
        />
        <TextField
          {...fields.CourseCategoryProps}
          InputLabelProps={{ shrink: true }}
          value={courseCategory}
          onChange={handleSelectChange}
          margin="normal"
          select
          helperText="Please select course category"
        >
          {categories.map(item => (
            <MenuItem key={item.key + item.name} value={item.key}>
              {item.name}
            </MenuItem>
          ))}
        </TextField>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            {...fields.StartDateProps}
            defaultValue={selectedDate}
            onChange={handleDateChange}
            disablePast
            disableToolbar
            variant="inline"
            margin="normal"
            KeyboardButtonProps={{
              'aria-label': 'Select course start date',
            }}
          />
        </MuiPickersUtilsProvider>
        <div className={classes.btnWrapper}>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            size="large"
            disabled={loading}
            className={buttonClassname}
          >
            {'Update & Publish'}
          </Button>
          {loading && (
            <CircularProgress size={24} className={classes.buttonProgress} />
          )}
        </div>
      </form>
    )
  );
};

FormCourseUpdater.propTypes = {
  courseData: PropTypes.object.isRequired,
  isCourseUpdatingProgress: PropTypes.bool.isRequired,
  isCourseUpdated: PropTypes.bool.isRequired,
  getCourseById: PropTypes.func.isRequired,
  updateCourse: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  courseData: state.coursesReducer.singleCourseData,
  isCourseUpdatingProgress: state.coursesReducer.isCourseUpdatingProgress,
  isCourseUpdated: state.coursesReducer.isCourseUpdated,
});

const mapDispatchToProps = {
  getCourseById,
  updateCourse,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormCourseUpdater);
