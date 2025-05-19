// src/components/Settings/EditProfileTab.tsx
import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import TextInput from '../../../components/UI/TextInput';
import Button from '../../../components/UI/Button';
import { UserProfile } from '../UserProfile';


export type EditProfileValues = {
  fullName: string;
  userName: string;
  email: string;
  password: string;
  dob: string;
  presentAddress: string;
  permanentAddress: string;
  city: string;
  postalCode: string;
  country: string;
};

const initialValues: EditProfileValues = {
  fullName: '',
  userName: '',
  email: '',
  password: '',
  dob: '',
  presentAddress: '',
  permanentAddress: '',
  city: '',
  postalCode: '',
  country: '',
};

const validationSchema = Yup.object({
  fullName: Yup.string().required('Required'),
  userName: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(6, 'Min 6 chars'),
  dob: Yup.string().required('Required'),
  presentAddress: Yup.string().required('Required'),
  permanentAddress: Yup.string().required('Required'),
  city: Yup.string().required('Required'),
  postalCode: Yup.string().required('Required'),
  country: Yup.string().required('Required'),
});

export default function EditProfileTab() {
  return (
    <>
    <div>
        <UserProfile />
    </div>
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        console.log('Edit Profile:', values);
        setSubmitting(false);
      }}
    >
      {({ handleSubmit, isSubmitting, isValid }) => (
        <Form onSubmit={handleSubmit} className="space-y-4">
          <TextInput label="Your Name" name="fullName" placeholder="Enter your full name" />
          <TextInput label="User Name" name="userName" placeholder="Choose a username" />
          <TextInput label="Email" name="email" placeholder="you@example.com" type="email" />
          <TextInput label="Password" name="password" placeholder="••••••••" type="password" />
          <TextInput label="Date of Birth" name="dob" placeholder="YYYY-MM-DD" type="date" />
          <TextInput label="Present Address" name="presentAddress" placeholder="Street, City, Country" />
          <TextInput label="Permanent Address" name="permanentAddress" placeholder="Street, City, Country" />
          <TextInput label="City" name="city" placeholder="City" />
          <TextInput label="Postal Code" name="postalCode" placeholder="Postal Code" />
          <TextInput label="Country" name="country" placeholder="Country" />
          <div className="pt-4">
            <Button
              type="submit"
              title="Save"
              color="primary"
              isLoading={isSubmitting}
              disableOnError={!isValid}
            />
          </div>
        </Form>
      )}
    </Formik>
    </>
  );
}
