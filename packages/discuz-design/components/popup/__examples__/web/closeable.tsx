import React, { useState } from "react";
import { Popup, Button } from '@discuzq/design';
import "./index.scss";

export default function PopupExample() {
  const [visible, setVisible] = useState(false);

  return (
    <div className="page">
      <div className="popup-section">
        <Button
          onClick={() => setVisible(true)}
          className="popup-btn"
          type="primary"
        >
          带有关闭 icon 的弹出层
        </Button>
        <Popup withCloseIcon position={"bottom"} visible={visible} onClose={() => setVisible(false)}>
          <div className="popup-box">
            <div className="popup-header">Mask Popup</div>
            <div className="popup-content">
              <div>Some contents...</div>
              <div>Some contents...</div>
              <div>Some contents...</div>
              <div className="popup-btn-wrap">
                <Button type="primary" className="popup-btn" onClick={() => setVisible(false)}>
                  关闭
                </Button>
              </div>
            </div>
          </div>
        </Popup>
      </div>
    </div>
  );
}
