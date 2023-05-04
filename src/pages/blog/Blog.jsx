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
            <p>
              -- In controlled component, the parent component has held over the
              form data, whereas, in uncontrolled component the DOM itself holds
              control over the data.
            </p>
            <p>
              -- Controlled component does not maintain its internal state,
              whereas, uncontrolled component maintain its internal state.
            </p>
            <p>
              -- Controlled component allows validation control, whereas,
              uncontrolled component does not allow validation control.
            </p>
            <p>
              -- Controlled component stores the current value in the form of
              props, whereas, uncontrolled component stores the current value
              using react ref.
            </p>

            <p>
              -- Controlled component has better control over the form data,
              whereas, uncontrolled component has limited control over the form
              data.
            </p>
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
            <p>
              In React, PropTypes is a built-in library that allows us to define
              the expected data types and values for the props that are passed
              to our components. We can use PropTypes to validate our props and
              ensure that they meet the requirements of our component.
            </p>
            <p className="underline">
              Here are some of the common prop types that we can use with
              PropTypes:
            </p>
            <p>
              - <code>PropTypes.any</code>, The props can be of any data type.
            </p>
            <p>
              - <code>PropTypes.bool</code>, The props should be a boolean.
            </p>
            <p>
              - <code>PropTypes.number</code>, The props should be a number.
            </p>
            <p>
              - <code>PropTypes.string</code>, The props should be a string.
            </p>
            <p>
              - <code>PropTypes.func</code>, The props should be a function.
            </p>
            <p>
              - <code>PropTypes.array</code>, The props should be an array.
            </p>
            <p>
              - <code>PropTypes.object</code>, The props should be an object.
            </p>
            <p>
              - <code>PropTypes.symbol</code>, The props should be a symbol.
            </p>{" "}
            And so on...
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
            <p className="underline">
              Here is the prime differences base on features between node.js and
              express.js:
            </p>

            <p>
              i. <span className="text-primary">Usage:</span> Express.js is used
              to build web-apps using approaches and principles of Node.js, and
              Node.js is used to build server-side, input-output, event-driven
              apps.
            </p>
            <p>
              ii. <span className="text-primary">Level of features:</span> In
              Express.js, more features than Node.js, and in Node.js, fewer
              features than Express.js.
            </p>
            <p>
              iii. <span className="text-primary">Building Block:</span>{" "}
              Express.js is built on Node.js and Node.js is built on Google's V8
              engine.
            </p>
            <p>
              iv. <span className="text-primary">Written in:</span> Express.js
              written in JavaScript and Node.js written in C, C++, JavaScript.
            </p>
            <p>
              v. <span className="text-primary">Framework/Platform:</span>{" "}
              Express.js is framework based on Node.js and Node.js is Run-time
              platform or environment designed for serer-side execution of
              JavaScript.
            </p>
            <p>
              vi. <span className="text-primary">Controllers:</span> Controllers
              are provided in Express.js and controllers are not provided in
              Node.js
            </p>
            <p>
              vii. <span className="text-primary">Routing:</span> Routing is
              provided in Express.js and routing is not provided in Node.js
            </p>
            <p>
              viii. <span className="text-primary">Coding time:</span>{" "}
              Express.js requires less codding time and Node.js requires more
              coding time.
            </p>
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
            <p>
              Custom React JS hooks are reusable functions that a React JS
              software developer can use to add special and unique functionality
              to the React applications. Usually, if there is a requirement to
              add a feature, one can install a third-party library and solve the
              problem. But what if there is no such library with hooks that can
              be used? This problem is solved by using custom React JS hooks.
            </p>

            <p className="underline">
              Here are the some reasons that's why I will create a custom hook:
            </p>

            <p>
              <span className="text-primary">Reusability</span>: Custom hooks
              allow us to encapsulate and reuse logic across multiple
              components, reducing code duplication and making it easier to
              maintain and update your codebase.
            </p>

            <p>
              <span className="text-primary">Abstraction</span>: Custom hooks
              can help abstract away complex logic, making it easier to reason
              about and test our code.
            </p>

            <p>
              <span className="text-primary">Organization</span>: Custom hooks
              provide a way to organize your code and keep it clean and readable
              by separating concerns and encapsulating logic in a single place.
            </p>

            <p>
              <span className="text-primary">Composition</span>: Custom hooks
              enable us to compose and combine different hooks and functions to
              create more complex logic and functionality, making it easier to
              build and maintain complex applications.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
