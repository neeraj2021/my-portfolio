/* eslint-disable import/prefer-default-export */
import FinanceProject from "../assets/FinanceProject.png";
import ChatProject from "../assets/ChatProject.png";

export const projectArr = [
  {
    title: "FINANCE MANAGE WEBSITE",
    link: 'https://finance-chi.vercel.app/',
    github_server: 'https://github.com/neeraj2021/nestjs-finance-server',
    github_client: 'https://github.com/neeraj2021/next-finance-client',
    details: [
      {
        title: "Backend",
        points: [
          `Design and develop multiple APIs for seamless communication and
        data retrieval between the front-end and back-end systems.`,
          `Implement MySQL as the primary database management system to
        manage and handle transactions and user accounts.`,
        ],
      },
      {
        title: "Frontend",
        points: [
          `Build a web app where users can log in with their google account
          and manage the expenses of their multiple accounts.`,
          `Provide users with the ability to view a summary of their
          transactions using various filters and perform CRUD (Create, Read,
          Update and Delete) operations on their transactions.`,
        ],
      },
    ],
    imageSrc: FinanceProject,
    imageAlt: "Finance Project Img",
  },
  {
    title: "WEB CHAT APPLICATION",
    github_server: 'https://github.com/neeraj2021/nestjs_chat_app_server',
    github_client: 'https://github.com/neeraj2021/nextjs_chat_app_client',
    details: [
      {
        title: "Backend",
        points: [
          `A real-time chat application that allows users to send and receive
          messages using the Socket.io library`,
          `Implement a system for storing and delivering messages such that
          the receiver can receive them even if they are offline at the time
          of sending.`,
        ],
      },
      {
        title: "Frontend",
        points: [
          `Implement a sign-up and login process, complete proper error
          handling, to authenticate and accurately identify users.`,
          `Design a user-friendly interface for sending and receiving
          messages, including a feature for searching and finding other
          users.`,
          `The receiver has the ability to view all messages sent by the
          sender, even when the receiver is not online.`,
        ],
      },
    ],
    imageSrc: ChatProject,
    imageAlt: "Chat Project Img",
  },
];
