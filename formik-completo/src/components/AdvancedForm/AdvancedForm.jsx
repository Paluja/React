/* eslint-disable no-unused-vars */
import {Formik, Form } from 'formik';
import { initialValues } from './utils/form';
import { AdvancedFormSchema } from './AdvancedFormSchema';
import Input from '../ui/Input';
import Select from '../ui/Select';
import Checkbox from '../ui/Checkbox';

const onSubmit = async (values, actions) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log(values)
  actions.resetForm();
};

function AdvancedForm() {
  return (
   <>
    <Formik
      initialValues={initialValues}
      validationSchema={AdvancedFormSchema}
      onSubmit={onSubmit}
    >
   {({isSubmitting, values, errors}) => (
    <Form>
      <Input label="Username" name="username" type="text" placeholder="Enter your username"/>
      <Select label="Job Type" name="jobType" placeholder="Please select a job">
        <option value="">Please select a job type</option>
        <option value="developer">Developer</option>
        <option value="designer">Designer</option>
        <option value="manager">Product Manager</option>
        <option value="other">Other</option>
      </Select>
      <Checkbox type="checkbox" name="acceptedTC"/>
      <button disabled={isSubmitting} type='submit'>Submit</button>
      {/* <pre>{JSON.stringify({ values, errors }, null, 1)}</pre> */}
    </Form>
   )}
    </Formik>
   </>
  )
}

export default AdvancedForm