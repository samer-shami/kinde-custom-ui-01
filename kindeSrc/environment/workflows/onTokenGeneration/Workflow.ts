import {
  onUserTokenGeneratedEvent,
  WorkflowSettings,
  WorkflowTrigger,
  idTokenCustomClaims,
} from "@kinde/infrastructure";

// The setting for this workflow
export const workflowSettings: WorkflowSettings = {
  id: "manipulateIDTokenWorkflow",
  name: "Manipulate SAML assertion",
  trigger: WorkflowTrigger.UserTokenGeneration,
  failurePolicy: {
    action: "stop",
  },
  bindings: {
    "kinde.idToken": {}, // required to modify access token claims
    url: {}, // required for URL parameters
  },
};

// The workflow code to be executed when the event is triggered
export default async function Workflow(event: onUserTokenGeneratedEvent) {
  const idToken = idTokenCustomClaims<{
    companyName: string,
  }>()

  idToken.college = "STEM";
}
