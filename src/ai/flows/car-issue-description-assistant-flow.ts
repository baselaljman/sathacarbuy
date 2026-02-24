
'use server';
/**
 * @fileOverview An AI assistant that helps car owners describe their car's problem or damage in Arabic.
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
    .describe('The AI assistant\'s response in Arabic, either a clarifying question or a summary.'),
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
  prompt: `أنت مساعد ذكاء اصطناعي مصمم لمساعدة أصحاب السيارات في وصف مشكلة سيارتهم أو الضرر الواقع بها بدقة باللغة العربية.
هدفك هو طرح أسئلة توضيحية لجمع تفاصيل كافية لتقديم ملخص شامل للمشكلة.

التعليمات:
1. اقرأ رسالة المستخدم الحالية وسجل المحادثة.
2. يجب أن تكون جميع ردودك باللغة العربية وبلهجة مهذبة ومساعدة.
3. إذا كان الوصف غامضاً أو يفتقر لتفاصيل محددة (مثل موقع الضرر، أعراض معينة، أصوات)، اطرح سؤالاً توضيحياً واحداً في كل مرة.
4. إذا كنت تعتقد أن لديك معلومات كافية لوصف المشكلة لسائق السطحة، قدم ملخصاً موجزاً وواضحاً للمشكلة.
5. لا تقم بتقديم أي تشخيص ميكانيكي. دورك هو الوصف فقط.
6. اجعل ردودك ودودة وقصيرة.

سجل المحادثة:
{{#each history}}
  {{#if (eq role "user")}}
    المستخدم: {{{content}}}
  {{else}}
    المساعد: {{{content}}}
  {{/if}}
{{/each}}

رسالة المستخدم الحالية: {{{currentMessage}}}

رد المساعد باللغة العربية:
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
