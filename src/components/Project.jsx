import React from "react";
import FinanceProject from "../assets/FinanceProject.png";
import ChatProject from "../assets/ChatProject.png";

const Project = () => {
  return (
    <div className="bg-primary w-full px-20">
      <div className="pt-6 pb-10">
        <h3 className="text-white text-4xl font-semibold">
          Take a look at <br /> My recent Projects
        </h3>
      </div>

      <div className="text-white flex gap-8 items-center">
        <div>
          <img src={FinanceProject} alt="Finance Project Img" />
        </div>
        <div>
          <h4 className="text-2xl font-semibold">FINANCE MANAGE WEBSITE</h4>
          <h5 className="text-xl font-medium mt-3">Backend</h5>
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
          <h5 className="text-xl font-medium mt-3">Frontend</h5>
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

      <div className="text-white flex gap-8 items-center">
        <div>
          <h4 className="text-2xl font-semibold">WEB CHAT APPLICATION</h4>

          <h5 className="text-xl font-medium mt-3">Backend</h5>

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

          <h5 className="text-xl font-medium mt-3">Frontend</h5>
          <div className="px-4">
            <p>
              Implement a sign-up and login process, complete proper error
              handling, to authenticate and accurately identify users.
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
        <img src={ChatProject} alt="Chat Project Img" />
      </div>
    </div>
  );
};

export default Project;
