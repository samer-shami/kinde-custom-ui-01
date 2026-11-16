export const workflowSettings = {
  id: "onTokenGeneration",
  name: "User token generation",
  trigger: "user:tokens_generation"
};

export default async function Workflow({request, context}) {
  console.log("Generated Token was intercepted");
}
