import type { IssueType } from '../../types/IssueType';

type State = {
  issues: Pick<IssueType, 'title' | 'issueNumber'>[];
};

export const state = (): State => ({
  issues: [],
});

export const getters = {
  getIssues(state: State) {
    return state.issues;
  },
};

export const mutations = {
  setIssue(state: State, issue: IssueType) {
    state.issues.push(issue);
  },
};

export const actions = {
  setIssue({ commit }: any, issue: IssueType) {
    commit('setIssue', issue);
  },
};
