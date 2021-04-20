import React from "react";
import * as L from "korus-ui";

const hooks1 = {
  text: `
<h4>Этот сайт использует cookie</h4>
<p>Продолжая работу, вы&nbsp;подтверждаете своё согласие на&nbsp;хранение и&nbsp;обработку данных</p>
`,
  delay: 0,
};

const Notification = () => {
  const [items, setItems] = React.useState([hooks1]);

  return (
    <L.Notifications
      value={items}
      onChange={(ev) => setItems(ev.component.value)}
    />
  );
};

export default Notification;
