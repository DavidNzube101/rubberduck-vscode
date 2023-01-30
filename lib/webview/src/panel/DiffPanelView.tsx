import { webviewApi } from "@rubberduck/common";
import React from "react";
import { DiffView } from "../component/DiffView";
import { SendMessage } from "../vscode/SendMessage";

export const DiffPanelView: React.FC<{
  sendMessage: SendMessage;
  panelState: webviewApi.PanelState;
}> = ({ panelState, sendMessage }) => {
  if (panelState == null) {
    return <></>;
  }

  if (panelState.type !== "diff") {
    throw new Error(
      `Invalid panel state '${panelState.type}' (expected 'diff'))`
    );
  }

  return (
    <div>
      <DiffView diff={panelState.diff} />
    </div>
  );
};
