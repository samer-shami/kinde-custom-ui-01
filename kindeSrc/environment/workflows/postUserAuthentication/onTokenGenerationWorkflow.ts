import {
  onUserTokenGeneratedEvent,
  WorkflowSettings,
  WorkflowTrigger,
  accessTokenCustomClaims,
} from "@kinde/infrastructure";

// The setting for this workflow
export const workflowSettings: WorkflowSettings = {
  id: "addCustomClaimWorkflow",
  name: "Add Custom Claim Workflow",
  trigger: WorkflowTrigger.UserTokenGeneration,
  failurePolicy: {
    action: "stop",
  },
  bindings: {
    "kinde.accessToken": {}, // required to modify access token claims
    url: {}, // required for URL parameters
  },
};

// The workflow code to be executed when the event is triggered
export default async function Workflow(event: onUserTokenGeneratedEvent) {
  const accessToken = accessTokenCustomClaims<{
    companyName: string,
  }>()

  accessToken.companyName = "Acme Inc."
}
