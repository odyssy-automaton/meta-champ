import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import { get } from '../../util/requests';
import Loading from '../shared/Loading';



const SampleForm = (props) => {
    const { sampleId } = props;
    console.log('sampleId', sampleId);

    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(false);

    useEffect(() => {
        const getData = async (sampleId) => {

            try {
                setLoading(true);
                const res = await get(`sheet1`);
                const sample = res.data.sheet1.find((item) => item.sampleId === +sampleId)
                setData(sample)

            } catch (err) {
                console.log(err);
            } finally {
                setLoading(false);
            }

        }

        setData(getData(sampleId));
    }, [sampleId])

    return (
        <div>
            <h1 className="Pad">Sample</h1>
            {data && (
                <div className="sampleData">
                    <p>id: {data.sampleId} location: {data.location}</p>
                    <p>id: {data.id}</p>
                    <p>cropId: {data.cropId}</p>
                    <p>location: {data.location}</p>
                    <p>size: {data.size}</p>
                    <p>sampleId: {data.sampleId}</p>
                    <p>sampleSize: {data.sampleSize}</p>
                    <p>date: {data.date}</p>
                    <p>lab: {data.lab}</p>
                    <p>method: {data.method}</p>
                    <p>range: {data.range}</p>
                    <p>range: {data.range}</p>
                    <p>result: {data.result}</p>
                    <p>validTill: {data.validTill}</p>
                    <p>harvestDate: {data.harvestDate}</p>
                    <p>harvestSize: {data.harvestSize}</p>
                    <p>pass: {data.pass}</p>
                    <p>nRetest: {data.nRetest}</p>
                    <p>nDestroy: {data.nDestroy}</p>
                    <p>sold: {data.sold}</p>
                    <p>soldToId: {data.soldToId}</p>
                    <p>shipped: {data.shipped}</p>
                    <p>shippedDate: {data.shippedDate}</p>

                </div>)}
            <div>
                {loading && <Loading />}

                <div>

                    <Formik
                        initialValues={{
                            sampleId: ''
                        }}
                        onSubmit={async (values, { setSubmitting }) => {
                            console.log(values);

                        }}
                    >
                        {({ isSubmitting }) => (
                            <Form className="Form">
                                <Field name="sampleId">
                                    {({ field, form }) => (
                                        <div className={field.value ? 'Field HasValue' : 'Field '}>
                                            <label>Id</label>
                                            <input type="text" {...field} />
                                        </div>
                                    )}
                                </Field>
                                <ErrorMessage name="sampleId">
                                    {(msg) => <div className="Error">{msg}</div>}
                                </ErrorMessage>


                                <button type="submit" disabled={isSubmitting}>
                                    Submit
                            </button>
                            </Form>
                        )}
                    </Formik>

                </div>
            </div>
        </div>
    );
};

export default withRouter(SampleForm);