import React from "react";

const Project = () => {
  return (
    <div className="bg-primary w-full px-20 py-8">
      <div>
        <h3 className="text-white text-4xl font-semibold">
          Take a look at <br /> My recent Projects
        </h3>
      </div>
      <br />
      <br />
      <div className="text-white flex gap-8">
        <h4>FINANCE MANAGE WEBSITE</h4>
        <div>
          <h5>Backend</h5>
          <div className="px-4">
            <p>
              Design and develop multiple APIs for seamless communication and
              data retrieval between the front-end and back-end systems.
            </p>
            <p>
              Implement MySQL as the primary database management system to
              manage and handle transactions and user accounts.
            </p>
          </div>
          <h5>Frontend</h5>
          <div className="px-4">
            <p>
              Build a web app where users can log in with their google account
              and manage the expenses of their multiple accounts.
            </p>
            <p>
              Provide users with the ability to view a summary of their
              transactions using various filters and perform CRUD (Create, Read,
              Update and Delete) operations on their transactions.
            </p>
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />
      <div className="text-white flex gap-8">
        <h4>Web Chat Application</h4>
        <div>
          <h5>Backend</h5>
          <div className="px-4">
            <p>
              A real-time chat application that allows users to send and receive
              messages using the Socket.io library
            </p>
            <p>
              Implement a system for storing and delivering messages such that
              the receiver can receive them even if they are offline at the time
              of sending.
            </p>
          </div>
          <h5>Frontend</h5>
          <div className="px-4">
            <p>
              Implement a sign-up and login process, complete proper
              error handling, to authenticate and accurately identify users.
            </p>
            <p>
              Design a user-friendly interface for sending and receiving
              messages, including a feature for searching and finding other
              users.
            </p>
            <p>
              The receiver has the ability to view all messages sent by the
              sender, even when the receiver is not online.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
