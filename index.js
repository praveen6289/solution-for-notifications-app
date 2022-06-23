const Notification = (props) => {
  //  Write your code here.
  const { notificationCard, notificationImgUrl, notificationText } = props;
  return (
    <div className={`notification ${notificationCard}`}>
      <img className="img" src={notificationImgUrl} />
      <p className="message">{notificationText}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="notification-bg-container">
    <h1 className="heading">Notifications</h1>
    <div className="notification-list-container">
      <Notification
        notificationImgUrl="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
        notificationText="Information Message"
        notificationCard="information"
      />
      <Notification
        notificationImgUrl="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        notificationText="Success Message"
        notificationCard="success"
      />
      <Notification
        notificationImgUrl="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
        notificationText="Warning Message"
        notificationCard="warning"
      />
      <Notification
        notificationImgUrl="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
        notificationText="Error Message"
        notificationCard="error"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
