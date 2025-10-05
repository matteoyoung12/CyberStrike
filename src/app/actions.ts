'use server';

import { summarizeScrapedContent } from '@/ai/flows/summarize-scraped-content';

export async function getSummary(
  content: string
): Promise<{ summary?: string; error?: string }> {
  if (content.length < 100) {
    return {
      error: 'Content is too short to summarize. Please provide more text.',
    };
  }
  try {
    const result = await summarizeScrapedContent({ content });
    return { summary: result.summary };
  } catch (error) {
    console.error('Error generating summary:', error);
    return { error: 'Failed to generate summary. Please try again later.' };
  }
}
