import React from "react";

import { BlockComponent } from "blockprotocol/react";
import { Button, ButtonProps } from "@kickstartds/base/lib/button";

import '@kickstartds/core/lib/design-tokens/tokens.css';
import '@kickstartds/base/lib/global/base.js';
import '@kickstartds/base/lib/global/base.css';

type AppProps = ButtonProps;

export const App: BlockComponent<AppProps> = ({ entityId, name, ...rest }) =>
  <Button
    {...rest}
  />;
