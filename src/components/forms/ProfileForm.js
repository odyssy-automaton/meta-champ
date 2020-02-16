import React, { useState, useContext } from 'react';
import { withRouter } from 'react-router-dom';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import Loading from '../shared/Loading';
import { BoxContext } from '../../contexts/Store';



const ProfileForm = (props) => {
    const { address } = props;
    const [box, setBox] = useContext(BoxContext);

    console.log('sampleId', address);

    const [loading, setLoading] = useState(false);

    return (
        <div>
            {loading && <Loading />}



            <Formik
                initialValues={{
                    name: ''
                }}
                onSubmit={async (values, { setSubmitting }) => {
                    console.log(values);
                    if(!box){
                        console.log('box not loaded');
                        return;
                    }
                    console.log('box', box);
                    

                    await box.box.public.set('name', values.name)

                }}
            >
                {({ isSubmitting }) => (
                    <Form className="Form">
                        <Field name="name">
                            {({ field, form }) => (
                                <div className={field.value ? 'Field HasValue' : 'Field '}>
                                    <label>Name</label>
                                    <input type="text" {...field} />
                                </div>
                            )}
                        </Field>
                        <ErrorMessage name="name">
                            {(msg) => <div className="Error">{msg}</div>}
                        </ErrorMessage>


                        <button type="submit" disabled={isSubmitting}>
                            Submit
                            </button>
                    </Form>
                )}
            </Formik>

        </div>

    );
};

export default withRouter(ProfileForm);