// src/components/Settings/PreferenceSettingsTab.tsx
import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import TextInput from '../../../components/UI/TextInput';
import Button from '../../../components/UI/Button';

export type PreferenceValues = {
  theme: 'light' | 'dark';
  language: string;
  notifications: boolean;
};

const initialValues: PreferenceValues = {
  theme: 'light',
  language: 'en',
  notifications: true,
};

const validationSchema = Yup.object({
  theme: Yup.string().oneOf(['light','dark']).required('Required'),
  language: Yup.string().required('Required'),
  notifications: Yup.boolean().required(),
});

export default function PreferenceSettingsTab() {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        console.log('Preferences:', values);
        setSubmitting(false);
      }}
    >
      {({ handleSubmit, isSubmitting, isValid, values, setFieldValue }) => (
        <Form onSubmit={handleSubmit} className="space-y-4">
          <TextInput
            label="Theme"
            name="theme"
            isDropdown
            options={[
              { label: 'Light', value: 'light' },
              { label: 'Dark',  value: 'dark'  },
            ]}
            value={values.theme}
            onChange={(v) => setFieldValue('theme', v)}
          />

          <TextInput
            label="Language"
            name="language"
            isDropdown
            options={[
              { label: 'English', value: 'en' },
              { label: 'Spanish', value: 'es' },
              { label: 'French',  value: 'fr' },
            ]}
            value={values.language}
            onChange={(v) => setFieldValue('language', v)}
          />

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="notifications"
              checked={values.notifications}
              onChange={() => setFieldValue('notifications', !values.notifications)}
            />
            <label htmlFor="notifications" className="text-sm">
              Enable notifications
            </label>
          </div>

          <div className="pt-4">
            <Button
              type="submit"
              title="Save Preferences"
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
