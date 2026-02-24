'use server';
/**
 * @fileOverview An AI assistant that helps car owners describe their car's problem or damage.
 *
 * - describeCarIssue - A function that interacts with the AI assistant to clarify car issues.
 * - CarIssueDescriptionAssistantInput - The input type for the describeCarIssue function.
 * - CarIssueDescriptionAssistantOutput - The return type for the describeCarIssue function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const CarIssueDescriptionAssistantInputSchema = z.object({
  history: z
    .array(
      z.object({
        role: z.enum(['user', 'model']),
        content: z.string(),
      })
    )
    .describe('Previous conversation history between the user and the assistant.'),
  currentMessage: z.string().describe('The user\'s current message about the car issue.'),
});
export type CarIssueDescriptionAssistantInput = z.infer<
  typeof CarIssueDescriptionAssistantInputSchema
>;

const CarIssueDescriptionAssistantOutputSchema = z.object({
  response: z
    .string()
    .describe('The AI assistant\'s response, either a clarifying question or a summary.'),
});
export type CarIssueDescriptionAssistantOutput = z.infer<
  typeof CarIssueDescriptionAssistantOutputSchema
>;

export async function describeCarIssue(
  input: CarIssueDescriptionAssistantInput
): Promise<CarIssueDescriptionAssistantOutput> {
  return carIssueDescriptionAssistantFlow(input);
}

const prompt = ai.definePrompt({
  name: 'carIssueDescriptionAssistantPrompt',
  input: { schema: CarIssueDescriptionAssistantInputSchema },
  output: { schema: CarIssueDescriptionAssistantOutputSchema },
  prompt: `You are an AI assistant designed to help car owners accurately describe their car's problem or damage.
Your goal is to ask clarifying questions to gather enough detail to provide a comprehensive summary of the issue.

Instructions:
1.  Read the user's current message and the conversation history.
2.  If the description is vague or lacks specific details (e.g., location of damage, specific symptoms, sounds), ask a clarifying question.
3.  If you believe you have enough information to describe the problem for a tow truck driver, provide a concise summary of the issue.
4.  Do not make assumptions or diagnose the problem. Your role is only to help describe it.
5.  Keep your responses conversational and helpful.

Conversation History:
{{#each history}}
  {{#if (eq role "user")}}
    User: {{{content}}}
  {{else}}
    Assistant: {{{content}}}
  {{/if}}
{{/each}}

User's current message: {{{currentMessage}}}

Assistant's response:
`,
});

const carIssueDescriptionAssistantFlow = ai.defineFlow(
  {
    name: 'carIssueDescriptionAssistantFlow',
    inputSchema: CarIssueDescriptionAssistantInputSchema,
    outputSchema: CarIssueDescriptionAssistantOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  }
);
