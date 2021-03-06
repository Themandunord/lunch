import ActionTypes from '../constants/ActionTypes';
import { processResponse, jsonHeaders } from '../core/ApiClient';
import { flashError } from './flash';

export function deleteTeam() {
  return {
    type: ActionTypes.DELETE_TEAM
  };
}

export function teamDeleted() {
  return {
    type: ActionTypes.TEAM_DELETED
  };
}

export function removeTeam() {
  return (dispatch, getState) => {
    const state = getState();
    const teamId = state.team.id;
    const host = state.host;
    dispatch(deleteTeam());
    return fetch(`//${host}/api/teams/${teamId}`, {
      method: 'delete',
      credentials: 'include',
      headers: jsonHeaders
    })
      .then(response => processResponse(response))
      .then(() => dispatch(teamDeleted()))
      .catch(err => {
        dispatch(flashError(err.message));
        throw err;
      });
  };
}

export function patchTeam(obj) {
  return {
    type: ActionTypes.PATCH_TEAM,
    team: obj
  };
}

export function teamPatched(json) {
  return {
    type: ActionTypes.TEAM_PATCHED,
    team: json
  };
}

export function updateTeam(payload) {
  return (dispatch, getState) => {
    const state = getState();
    const teamId = state.team.id;
    const host = state.host;
    dispatch(patchTeam(payload));
    return fetch(`//${host}/api/teams/${teamId}`, {
      method: 'PATCH',
      credentials: 'include',
      headers: jsonHeaders,
      body: JSON.stringify(payload)
    })
      .then(response => processResponse(response))
      .then(json => dispatch(teamPatched(json)))
      .catch(err => {
        dispatch(flashError(err.message));
        throw err;
      });
  };
}
