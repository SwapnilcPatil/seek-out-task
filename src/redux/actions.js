export const addTeamMember = (member) => {
    return {
      type: 'ADD_TEAM_MEMBER',
      payload: member
    };
  };
  
  export const editTeamMember = (member) => {
    return {
      type: 'EDIT_TEAM_MEMBER',
      payload: member
    };
  };
  
  export const deleteTeamMember = (id) => {
    return {
      type: 'DELETE_TEAM_MEMBER',
      payload: id
    };
  };
  