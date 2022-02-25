import React from "react";
import { useHistory } from "react-router-dom";

export default function RouteGuard(props) {
  const qs = new URLSearchParams(document.location.search);
  const history = useHistory();
  if (qs.has("_redir")) {
    history.push(qs.get("_redir"));
  }

  return props.children;
}
