import Head from "next/head";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import MobileSidebar from "./components/MobileSidebar";
const GlobalStyle = createGlobalStyle`
  body {
    overflow-y: hidden;
    height: 100vh;
  }
`;
const GridContainer = styled.div`
  display: grid;
  margin-top: 52px;
  grid-template-columns: ${(props) => (props.collapse ? "70px" : "235px")} 1fr;
  grid-template-rows: 52px 1fr;
  grid-template-areas: "sidebar main";
  height: calc(100vh - 52px);
  .header {
    grid-area: head;
    box-shadow: 0 1px 0 0 #eaedf3;
  }
  @media only screen and (max-width: 1000px) {
    grid-template-columns: 1fr;
    grid-template-rows: 52px 1fr;
    grid-template-areas: "main";
  }
`;

const ChatContainer = styled.div`
  display: grid;
  grid-template-columns: 275px 1fr;
  grid-template-rows: 71px 1fr 78px;
  grid-template-areas:
    "search-container chat-title"
    "conversation-list chat-message-list"
    "conversation-list chat-form";
  @media only screen and (max-width: 700px) {
    grid-template-columns: 1fr;
    grid-template-rows: 71px 1fr 78px;
    grid-template-areas:
      "chat-title"
      "chat-message-list"
      "chat-form";
  }
  width: 100%;
  height: 100%;
  background: #fff;
  overflow-y: scroll;
`;
const ChatBody = styled.div`
  height: calc(100vh - 52px);
  overflow: hidden;
  display: grid;
  grid-area: main;
  place-items: center center;
`;
const SearchContainer = styled.div`
  display: grid;
  align-items: center;
  grid-area: search-container;
  z-index: 1;
  padding: 0 20px;
  @media only screen and (max-width: 700px) {
    display: none;
  }
  input {
    width: 167px;
    color: #eee;
    outline: none;
    font-weight: bold;
    border-radius: 2px;
    height: 30px;
    border: 0;
    padding-left: 48px;
    padding-right: 20px;
    font-size: 1.2rem;
    background: url("../static/search.svg") no-repeat rgba(255, 255, 255, 0.3);
    background-position: 15px center;
    background-size: 20px 20px;
  }
`;
const ConversationList = styled.div`
  grid-area: conversation-list;
  border-right: 0.2px solid #dcdde1;
  color: #353b48;
  overflow-y: scroll;
  @media only screen and (max-width: 700px) {
    display: none;
  }
`;
const NewMessageContainer = styled.div`
  grid-area: new-message-container;
  display: grid;
  grid: 40px / 40px;
  align-content: center;
  border-radius: 0 0 0 10px;
  padding: 0 15px;
  font-size: 3.6rem;
  a {
    background: url("../static/add.svg") no-repeat rgba(255, 255, 255, 0);
    background-position: center center;
    background-size: 40px 40px;
  }
  @media only screen and (max-width: 700px) {
    display: none;
  }
`;
const ChatTitle = styled.div`
  display: grid;
  grid: 36px / 1fr 36px;
  align-content: center;
  align-items: center;
  grid-area: chat-title;
  font-weight: bold;
  font-size: 1.3rem;
  border-radius: 0 10px 0 0;
  padding: 0 20px;
`;
const ChatMessageList = styled.div`
  grid-area: chat-message-list;
  display: flex;
  flex-direction: column-reverse;
  padding: 0 20px;
  overflow-y: scroll;
`;
const ChatForm = styled.div`
  grid-area: chat-form;
  display: grid;
  grid: 51px / 32px 1fr;
  grid-gap: 15px;
  align-items: center;
  align-content: center;
  border-radius: 0 0 10px 0;

  padding-left: 42px;
  padding-right: 22px;
  img {
    cursor: pointer;
  }
  input {
    outline: none;
    padding: 15px;
    border: 2px solid #ddd;
    color: #330;
    border-radius: 6px;
    font-size: 1.4rem;
  }
`;
const ConversationSnippet = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  cursor: pointer;
  color: #353b48;
  font-size: 1rem;
  padding: 10px;
  .active,
  :hover {
    background: #dcdde1;
    color: #fff;
  }
  img {
    border-radius: 50%;
    width: 40px;
    height: 40px;
  }
  .title-text {
    font-weight: bold;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .created-date {
    white-space: nowrap;
    font-size: 0.8rem;
  }
  .lead-details {
    display: grid;
    grid-template-columns: 40px 1fr;
    grid-gap: 15px;
    align-items: center;
  }
  .conversation-message {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
const chatMessages = [
  {
    id: 1,
    messages: [
      {
        id: 1,
        from: "user",
        person: {
          id: 123,
          image:
            "https://res.cloudinary.com/dvqw5uhrr/image/upload/r_max,h_48,w_48/v1570485426/Raices/ClientPhotos/Kim_Chen.jpg",
          name: "Scottie",
        },
        content:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        time: "3:46 pm",
      },
      {
        id: 1,
        from: "user",
        person: {
          id: 123,
          image:
            "https://res.cloudinary.com/dvqw5uhrr/image/upload/r_max,h_48,w_48/v1570485426/Raices/ClientPhotos/Kim_Chen.jpg",
          name: "Scottie",
        },
        content:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        time: "3:46 pm",
      },
      {
        id: 2,
        from: "lead",
        person: {
          id: 123,
          image:
            "https://res.cloudinary.com/dvqw5uhrr/image/upload/r_max,h_48,w_48/v1570485426/Raices/ClientPhotos/Kim_Chen.jpg",
          name: "Lead mc gee",
        },
        img:
          "https://res.cloudinary.com/dvqw5uhrr/image/upload/r_max,h_48,w_48/v1570485426/Raices/ClientPhotos/Kim_Chen.jpg",
        content: "For sure, happy to help",
        time: "10:01am",
      },
    ],
  },
  {
    id: 2,
    messages: [
      {
        id: 1,
        from: "user",
        person: {
          id: 123,
          image:
            "https://res.cloudinary.com/dvqw5uhrr/image/upload/v1570485426/Raices/ClientPhotos/Kim_Chen.jpg",
          name: "Scottie",
        },
        content: "Right! This is exactly what I needed.",
        time: "3:46 pm",
      },
      {
        id: 2,
        from: "lead",
        person: {
          id: 123,
          image:
            "https://res.cloudinary.com/dvqw5uhrr/image/upload/v1570485426/Raices/ClientPhotos/Kim_Chen.jpg",
          name: "Lead mc gee",
        },
        img:
          "https://res.cloudinary.com/dvqw5uhrr/image/upload/v1570485426/Raices/ClientPhotos/Kim_Chen.jpg",
        content: "For sure, happy to help",
        time: "10:01am",
      },
    ],
  },
];
const conversations = [
  {
    id: 1,
    img:
      "https://res.cloudinary.com/dvqw5uhrr/image/upload/v1570485426/Raices/ClientPhotos/Kim_Chen.jpg",
    date: "3 minutes ago",
    name: "Al E Gater",
    message: "This is a rather long message, that should (not) overflow.",
  },
  {
    id: 2,
    img:
      "https://res.cloudinary.com/dvqw5uhrr/image/upload/v1570485426/Raices/ClientPhotos/Kim_Chen.jpg",
    date: "1 hour ago",
    name: "Holly Wood",
    message: "Very funny",
  },
  {
    id: 3,
    img:
      "https://res.cloudinary.com/dvqw5uhrr/image/upload/v1570485426/Raices/ClientPhotos/Kim_Chen.jpg",
    date: "Apr 16 9:04pm",
    name: "Ben Dover",
    message: "Yes I love how Python does that.",
  },
  {
    id: 4,
    img:
      "https://res.cloudinary.com/dvqw5uhrr/image/upload/v1570485426/Raices/ClientPhotos/Kim_Chen.jpg",
    date: "Apr 16 9:04pm",
    name: "Anita Room",
    message: "Yeah Miami Heat are done",
  },
  {
    id: 5,
    img:
      "https://res.cloudinary.com/dvqw5uhrr/image/upload/v1570485426/Raices/ClientPhotos/Kim_Chen.jpg",
    date: "Apr 16 9:04pm",
    name: "Jack Pott",
    message: "No it does not",
  },
  {
    id: 6,
    img:
      "https://res.cloudinary.com/dvqw5uhrr/image/upload/v1570485426/Raices/ClientPhotos/Kim_Chen.jpg",
    date: "Apr 16 9:04pm",
    name: "Kay Oss",
    message: "This is a rather long message, that should (not) overflow.",
  },
  {
    id: 7,
    img:
      "https://res.cloudinary.com/dvqw5uhrr/image/upload/v1570485426/Raices/ClientPhotos/Kim_Chen.jpg",
    date: "Apr 16 9:04pm",
    name: "Bennie Factor",
    message: "This is a rather long message, that should (not) overflow.",
  },
  {
    id: 8,
    img:
      "https://res.cloudinary.com/dvqw5uhrr/image/upload/v1570485426/Raices/ClientPhotos/Kim_Chen.jpg",
    date: "Apr 16 9:04pm",
    name: "Ima Hogg",
    message: "This is a rather long message, that should (not) overflow.",
  },
  {
    id: 9,
    img:
      "https://res.cloudinary.com/dvqw5uhrr/image/upload/v1570485426/Raices/ClientPhotos/Kim_Chen.jpg",
    date: "Apr 16 9:04pm",
    name: "Joe King",
    message: "This is a rather long message, that should (not) overflow.",
  },
];
const HeaderStyle = styled.div`
  grid-area: header;
  display: none;
  align-items: center;
  z-index: 9;
  @media (min-width: 600px) {
    display: flex;
  }
  .menu {
    display: ${(props) => (props.open ? "none" : "flex")};
    width: 50px;
    height: 100%;
    align-items: center;
  }
  .workspaces {
    align-items: center;
    grid-gap: 10px;
    grid-auto-flow: column;
    display: grid;
  }
  svg {
    display: block;
  }
  @media only screen and (min-width: 1000px) {
    svg {
      display: none;
    }
  }
`;
const workspaces = [
  {
    id: 1,
    color: "red",
    initial: "W",
  },
  {
    id: 2,
    color: "blue",
    initial: "S",
  },
  {
    id: 3,
    color: "green",
    initial: "B",
  },
];
const StyledWorkspaceBlock = styled.div`
  background: ${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  width: 30px;
  color: white;
  border-radius: 5px;
`;

const WorkspaceBlock = ({ workspace: { color, initial } }) => {
  return <StyledWorkspaceBlock color={color}>{initial}</StyledWorkspaceBlock>;
};

const HeaderNav = ({ handleMenuClick, open }) => {
  return (
    <HeaderStyle open={open}>
      <div className="menu" onClick={handleMenuClick}>
        {/* <MenuIcon size={30} /> */}
      </div>
      <div className="workspaces">
        {workspaces.map((workspace) => (
          <WorkspaceBlock workspace={workspace} />
        ))}
      </div>
    </HeaderStyle>
  );
};
const MessageWrapper = styled.div`
  padding: 1rem 0;
`;

const Message = ({ message }) => {
  let content = {
    id: message.id,
    from: message.from,
    content: message.content,
    time: message.time,
    person: { ...message.person },
  };

  return (
    <MessageWrapper>
      <article class="media">
        <figure class="media-left">
          <p class="image is-48x48">
            <img className="is-rounded" src={content.person.image} />
          </p>
        </figure>
        <div class="media-content">
          <div class="content">
            <p>
              <strong>{content.person.name}</strong>
              <small>{content.time}</small>
              <br />
              {content.content}
            </p>
          </div>
          <nav class="level is-mobile">
            <div class="level-left">
              <a class="level-item">
                <span class="icon is-small">
                  <i class="fas fa-reply"></i>
                </span>
              </a>
              <a class="level-item">
                <span class="icon is-small">
                  <i class="fas fa-retweet"></i>
                </span>
              </a>
              <a class="level-item">
                <span class="icon is-small">
                  <i class="fas fa-heart"></i>
                </span>
              </a>
            </div>
          </nav>
        </div>
        <div class="media-right">
          <button class="delete"></button>
        </div>
      </article>
    </MessageWrapper>
  );
};
const Conversation = ({
  conversation: { id, img, date, name, message },
  handleClick,
}) => {
  return (
    <ConversationSnippet onClick={() => handleClick(id)}>
      <div className="lead-details">
        <img src={img} />
        <div className="created-date">{date}</div>
      </div>
      <div className="title-text">{name}</div>
      <div className="conversation-message">{message}</div>
    </ConversationSnippet>
  );
};

const Inbox = () => {
  const [collapse, setCollapse] = useState(false);
  const collapseMenu = () => {
    setCollapse((p) => !collapse);
  };
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [lead, setLead] = useState(
    conversations.filter((convo) => convo.id == 1)[0]
  );
  const [messages, setMessages] = useState(
    chatMessages.filter((x) => x.id == 1)[0].messages
  );
  const handleClick = (id) => {
    setLead(conversations.filter((convo) => convo.id == id)[0]);
    let messageData = chatMessages.filter((x) => x.id == id);
    if (messageData.length > 0) {
      const messages = messageData[0].messages;
      setMessages((p) => messages);
    } else {
      setMessages([]);
    }
  };
  const handleMenuClick = () => {
    setShowMobileMenu((p) => !showMobileMenu);
  };
  return (
    <GridContainer collapse={collapse}>
      <GlobalStyle overflow={false} />
      <MobileSidebar open={showMobileMenu} handleMenuClick={handleMenuClick} />
      <Sidebar collapseMenu={collapseMenu} collapse={collapse} />
      <ChatBody>
        <ChatContainer>
          <Head>
            <title>Chat App</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <SearchContainer>
            <input type="text" placeholder="search" />
          </SearchContainer>
          <ConversationList>
            {conversations.map((conversation) => (
              <Conversation
                id={conversation.id}
                conversation={conversation}
                handleClick={handleClick}
              />
            ))}
          </ConversationList>
          <ChatTitle>
            <span>{lead.name}</span> <img src="../static/trash-logo.svg"></img>
          </ChatTitle>
          <ChatMessageList>
            {messages !== [] &&
              messages.map((message) => <Message message={message} />)}
            {messages.length == 0 && <p>No messages. How about sending one?</p>}
          </ChatMessageList>
          <ChatForm>
            <img src="../static/attachment-logo.svg"></img>
            <input type="text" placeholder="type a message" />
          </ChatForm>
        </ChatContainer>
      </ChatBody>
    </GridContainer>
  );
};

export default Inbox;
