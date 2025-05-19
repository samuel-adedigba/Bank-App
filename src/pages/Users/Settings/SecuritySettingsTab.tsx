// src/components/Settings/SecuritySettingsTab.tsx
import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import TextInput from '../../../components/UI/TextInput';
import Button from '../../../components/UI/Button';

export type SecurityValues = {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
};

const initialValues: SecurityValues = {
  currentPassword: '',
  newPassword:     '',
  confirmPassword: '',
};

const validationSchema = Yup.object({
  currentPassword: Yup.string().required('Required'),
  newPassword:     Yup.string().min(6, 'Min 6 chars').required('Required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('newPassword')], 'Passwords must match')
    .required('Required'),
});

export default function SecuritySettingsTab() {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        console.log('Security:', values);
        setSubmitting(false);
      }}
    >
      {({ handleSubmit, isSubmitting, isValid }) => (
        <Form onSubmit={handleSubmit} className="space-y-4">
          <TextInput
            label="Current Password"
            name="currentPassword"
            placeholder="••••••••"
            type="password"
          />
          <TextInput
            label="New Password"
            name="newPassword"
            placeholder="••••••••"
            type="password"
          />
          <TextInput
            label="Confirm Password"
            name="confirmPassword"
            placeholder="••••••••"
            type="password"
          />
          <div className="pt-4">
            <Button
              type="submit"
              title="Update Password"
              color="primary"
              isLoading={isSubmitting}
              disableOnError={!isValid}
            />
          </div>
        </Form>
      )}
    </Formik>
  );
}
