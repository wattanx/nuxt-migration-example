import DOMPurify from 'dompurify';
import { toHtml } from '~/composables/markdown';
import type { IHttpClient } from '~/types/IHttpClient';
import type { GitHubIssueType } from '~/types/github';
import type { IssueType } from '~/types/IssueType';

type Params = {
  issueNumber: string;
  repo: string;
};

export const getIssue = async (
  client: IHttpClient,
  { issueNumber, repo }: Params
) => {
  const res = await client.get<GitHubIssueType>(
    `https://api.github.com/repos/${repo}/issues/${issueNumber}`
  );

  if (!res.data.title) {
    const error = new Error('There is no data.');
    throw error;
  }

  const html = DOMPurify().sanitize(toHtml(res.data.body));
  const issues: IssueType = {
    title: res.data.title,
    body: html,
    state: res.data.state,
    issueNumber: res.data.number,
  };
  return issues;
};
