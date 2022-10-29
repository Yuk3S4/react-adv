import { ErrorMessage, useField } from 'formik';

interface Props {
    label: string;
    name: string;
    [x: string]: any; // Cualquier parametro de cualquier tipo
}

export const MyCheckBox = ({ label, ...props }: Props ) => {

    const [ field ] = useField({ ...props, type: 'checkbox' });    

    return (
        <>
            <label>
                <input type="checkbox" { ...field } { ...props } />
                { label }
            </label>
            <ErrorMessage name={ props.name } component="span" />
        </>
    )
}
