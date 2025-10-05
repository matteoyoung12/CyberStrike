'use server';

/**
 * @fileOverview A Genkit flow for summarizing scraped content.
 *
 * - summarizeScrapedContent - A function that summarizes scraped content.
 * - SummarizeScrapedContentInput - The input type for the summarizeScrapedContent function.
 * - SummarizeScrapedContentOutput - The return type for the summarizeScrapedContent function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeScrapedContentInputSchema = z.object({
  content: z.string().describe('The content to be summarized.'),
});
export type SummarizeScrapedContentInput = z.infer<typeof SummarizeScrapedContentInputSchema>;

const SummarizeScrapedContentOutputSchema = z.object({
  summary: z.string().describe('The summary of the content.'),
});
export type SummarizeScrapedContentOutput = z.infer<typeof SummarizeScrapedContentOutputSchema>;

export async function summarizeScrapedContent(
  input: SummarizeScrapedContentInput
): Promise<SummarizeScrapedContentOutput> {
  return summarizeScrapedContentFlow(input);
}

const summarizeScrapedContentPrompt = ai.definePrompt({
  name: 'summarizeScrapedContentPrompt',
  input: {schema: SummarizeScrapedContentInputSchema},
  output: {schema: SummarizeScrapedContentOutputSchema},
  prompt: `Summarize the following content:\n\n{{content}}`,
});

const summarizeScrapedContentFlow = ai.defineFlow(
  {
    name: 'summarizeScrapedContentFlow',
    inputSchema: SummarizeScrapedContentInputSchema,
    outputSchema: SummarizeScrapedContentOutputSchema,
  },
  async input => {
    const {output} = await summarizeScrapedContentPrompt(input);
    return output!;
  }
);
