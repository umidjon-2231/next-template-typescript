import React, {FC, memo} from 'react';
import {FormFeedback, FormGroup, FormGroupProps, Input, Label, LabelProps} from "reactstrap";
import {ErrorMessage, Field} from "formik";
import {InputType} from "reactstrap/types/lib/Input";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    name: string
    label?: string
    labelOptions?: LabelProps
    groupOptions?: FormGroupProps
    id?: string
    type?: InputType;
    bsSize?: 'lg' | 'sm';
    innerRef?: React.Ref<HTMLInputElement | HTMLTextAreaElement>;
    plaintext?: boolean;
    addon?: boolean;

    [key: string]: any;
}

let deleteField = ['groupOptions']
const AvField: FC<Props> = memo<Props>((props) => {
    let initialized = {...props}
    deleteField.forEach((o) => {
        delete initialized[o];
    })
    return (
        <FormGroup {...props?.groupOptions}>
            {props?.label && <Label for={props?.id ?? props.name} {...props?.labelOptions}>{props.label}</Label>}
            <Field name={props.name}>
                {({field, meta}) => {
                    let isValid = meta.touched && !meta.error && !props.readOnly
                    let isInValid = meta.touched && !!meta.error && !props.readOnly
                    return <Input {...field} valid={isValid} invalid={isInValid}
                                  id={props?.id ?? props.name} {...initialized}>{props?.children}</Input>
                }}
            </Field>
            <ErrorMessage name={props.name}>
                {(errorMessage) => (<FormFeedback>{errorMessage}</FormFeedback>)}
            </ErrorMessage>
        </FormGroup>

    );
});
AvField.displayName = "AvField"
export default AvField;