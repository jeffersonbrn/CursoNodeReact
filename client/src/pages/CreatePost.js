import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

function CreatePost() {
  return (
    <div className="createPostPage">
      <Formik initialValues={1} onSubmit={1} validationSchema={1}>
        <Form>
          <Field
            id="inputCreatePost"
            name="title"
            placeholder="(Ex. Bruno..."
          />
        </Form>
      </Formik>
    </div>
  );
}

export default CreatePost;
