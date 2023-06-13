import React, { ClassAttributes, InputHTMLAttributes } from 'react'
import { FieldHookConfig, FormikProps, FormikValues, useField } from "formik";

type InputProps ={
  label?:string,
  css:string,
  name?:string,
  type?:string,
  placeholder?:string,
  id?:string
}

type CheckboxProps ={
children:string,
  size:string,
  name:string
}

const TextInput = ({
  label,
  css,
  ...props
}: InputProps & FieldHookConfig<string> & InputHTMLAttributes<HTMLInputElement> & ClassAttributes<HTMLInputElement>) => {
  const [field, meta] = useField(props);
  // console.log(field)
  return (
    <>
      <div className={css}>
        {label && <label className='font-secondary' htmlFor={props.name}>{label}</label>}
        <input
          className="font-primary font-semibold p-2 text-black rounded my-2 bg-neutral outline-primary"
          {...field}
          {...props}
        />
      </div>
      {meta.touched && meta.error ? (
        <div className="text-sm text-red-500 font-neutral">{meta.error}</div>
      ) : null}
    </>
  );
};

export default TextInput

export const MyCheckbox = ({ children, size, ...props }:CheckboxProps) => {
  // React treats radios and checkbox inputs differently other input types, select, and textarea.
  // Formik does this too! When you specify `type` to useField(), it will
  // return the correct bag of props for you -- a `checked` prop will be included
  // in `field` alongside `name`, `value`, `onChange`, and `onBlur`
  const [field, meta] = useField({...props, type: "checkbox" });
  return (
    <div>
      <div className="flex items-center gap-1">
        <input type="checkbox" className={size} {...field} {...props} />
        <label className='font-primary font-semibold'>{children}</label>
      </div>
      {meta.touched && meta.error ? (
        <div className="text-sm text-red-500 font-neutral">{meta.error}</div>
      ) : null}
    </div>
  );
};