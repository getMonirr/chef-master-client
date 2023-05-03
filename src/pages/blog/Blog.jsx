import React from "react";
import Pdf from "react-to-pdf";
const q1ref = React.createRef();
const q2ref = React.createRef();
const q3ref = React.createRef();
const q4ref = React.createRef();
const allQRef = React.createRef();

import { FaFilePdf } from "react-icons/fa";

const Blog = () => {
  return (
    <>
      
      <div ref={allQRef} className="container mx-auto py-10 space-y-8 px-5">
      <div className="lg:w-3/6 mx-auto">
        <Pdf targetRef={allQRef} filename="allQuestions.pdf">
          {({ toPdf }) => (
            <span
              onClick={toPdf}
              className="m-4 cursor-pointer flex items-center justify-end gap-4"
            >
              <FaFilePdf />
              Download All Questions
            </span>
          )}
        </Pdf>
      </div>
        {/* blog one */}
        <div className="card lg:w-3/6 bg-orange-400 mx-auto">
          <div className="flex justify-between items-center">
            <h1 className="m-4 font-extrabold">Q1: </h1>
            <Pdf targetRef={q1ref} filename="q1.pdf">
              {({ toPdf }) => (
                <span
                  onClick={toPdf}
                  className="m-4 cursor-pointer flex items-center gap-4"
                >
                  <FaFilePdf />
                  Download PDF
                </span>
              )}
            </Pdf>
          </div>
          <div ref={q1ref} className="card-body">
            <h2 className="card-title">
              Tell us the differences between uncontrolled and controlled
              components
            </h2>
            <p>Answer goes here</p>
          </div>
        </div>

        {/* blog two */}
        <div className="card lg:w-3/6 bg-orange-400 mx-auto">
          <div className="flex justify-between items-center">
            <h1 className="m-4 font-extrabold">Q2: </h1>
            <Pdf targetRef={q2ref} filename="q2.pdf">
              {({ toPdf }) => (
                <span
                  onClick={toPdf}
                  className="m-4 cursor-pointer flex items-center gap-4"
                >
                  <FaFilePdf />
                  Download PDF
                </span>
              )}
            </Pdf>
          </div>
          <div ref={q2ref} className="card-body">
            <h2 className="card-title">
              How to validate React props using PropTypes
            </h2>
            <p>Answer goes here</p>
          </div>
        </div>

        {/* blog three */}
        <div className="card lg:w-3/6 bg-orange-400 mx-auto">
          <div className="flex justify-between items-center">
            <h1 className="m-4 font-extrabold">Q3: </h1>
            <Pdf targetRef={q3ref} filename="q3.pdf">
              {({ toPdf }) => (
                <span
                  onClick={toPdf}
                  className="m-4 cursor-pointer flex items-center gap-4"
                >
                  <FaFilePdf />
                  Download PDF
                </span>
              )}
            </Pdf>
          </div>
          <div ref={q3ref} className="card-body">
            <h2 className="card-title">
              Tell us the difference between nodejs and express js.
            </h2>
            <p>Answer goes here</p>
          </div>
        </div>

        {/* blog four */}
        <div className="card lg:w-3/6 bg-orange-400 mx-auto">
          <div className="flex justify-between items-center">
            <h1 className="m-4 font-extrabold">Q4: </h1>
            <Pdf targetRef={q4ref} filename="q4.pdf">
              {({ toPdf }) => (
                <span
                  onClick={toPdf}
                  className="m-4 cursor-pointer flex items-center gap-4"
                >
                  <FaFilePdf />
                  Download PDF
                </span>
              )}
            </Pdf>
          </div>
          <div ref={q4ref} className="card-body">
            <h2 className="card-title">
              What is a custom hook, and why will you create a custom hook?
            </h2>
            <p>Answer goes here</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
