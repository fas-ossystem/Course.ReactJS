import React from "react";
import NotificationComponent from "./task2/index";

class TextComponent extends React.Component {
  render() {
    return (
      <div>
        Текст текст текст еще текст и еще текст и снова текст
        <NotificationComponent notifyType={app.data.msg} />и снова текст и опять
        текст{" "}
        <NotificationComponent notifyType="error">ошибка</NotificationComponent>
        текст текст текст текст (уже устал писать слово текст) текст и снова
        текст и опять текст, неожиданно но текст и т.д.
      </div>
    );
  }
}

export default TextComponent;
