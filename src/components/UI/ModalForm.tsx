/* eslint-disable @typescript-eslint/no-explicit-any */
import { Fragment } from "react";
import { Dialog, DialogPanel, DialogTitle, Transition } from "@headlessui/react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { IoClose } from "react-icons/io5"; 
import TextInput from "../UI/TextInput";
import Button from "../UI/Button";

interface FieldConfig {
  name: string;
  label: string;
  type: string;
  placeholder?: string;
}

interface ModalFormProps {
  header: string;
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (values: any) => void;
  fields: FieldConfig[];
  validationSchema: Yup.ObjectSchema<any>;
}

const ModalForm: React.FC<ModalFormProps> = ({
  isOpen,
  onClose,
  onSubmit,
  fields,
  validationSchema,
  header,
}) => {
  const initialValues = fields.reduce((acc, field) => {
    acc[field.name] = "";
    return acc;
  }, {} as Record<string, string>);

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={() => {}}>

        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm" />

        <div className="fixed inset-0 flex items-center justify-center p-4">
          <DialogPanel className="relative bg-white p-6 rounded-lg shadow-xl w-[400px]">

            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 p-2"
              onClick={onClose}
            >
              <IoClose size={24} />
            </button>

            <DialogTitle className="text-xl font-semibold text-gray-800 text-center">
              {header}
            </DialogTitle>

            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={(values, { resetForm }) => {
                onSubmit(values);
                resetForm();
                onClose();
              }}
            >
              {({  isSubmitting, isValid }) => (
                <Form>
                  <fieldset className="mt-4 space-y-3">
                    <legend className="sr-only">Form Fields</legend>

                    {fields.map((field) => (
                      <TextInput
                        key={field.name}
                        label={field.label}
                        name={field.name}
                        placeholder={field.placeholder || ""}
                        type={field.type}
                      />
                    ))}

                    <div className="flex justify-end gap-3 mt-4">
                      <Button
                        title="Cancel"
                        color="secondary"
                        type="button"
                        onClick={onClose}
                        icon={<IoClose />}
                      />
                      <Button
                        title="Submit"
                        color="primary"
                        type="submit"
                        isLoading={isSubmitting}
                        disableOnError={!isValid}
                      />
                    </div>
                  </fieldset>
                </Form>
              )}
            </Formik>
          </DialogPanel>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ModalForm;
