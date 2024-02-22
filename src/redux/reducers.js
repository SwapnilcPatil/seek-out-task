const initialState = {
    teamMembers: [
        {
          id: '1',
          firstname: 'John',
          lastname: 'Doe',
          phone: '123-456-7890',
          email: 'john@example.com',
          role: 'admin'
        },
        {
          id: '2',
          firstname: 'Jane',
          lastname: 'Smith',
          phone: '987-654-3210',
          email: 'jane@example.com',
          role: 'regular'
        },
        {
          id: '3',
          firstname: 'Bob',
          lastname: 'Johnson',
          phone: '456-789-0123',
          email: 'bob@example.com',
          role: 'regular'
        },
        {
          id: '4',
          firstname: 'Alice',
          lastname: 'Williams',
          phone: '789-012-3456',
          email: 'alice@example.com',
          role: 'regular'
        }
      ]
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TEAM_MEMBER':
        return {
          ...state,
          teamMembers: [...state.teamMembers, action.payload]
        };
      case 'EDIT_TEAM_MEMBER':
        return {
          ...state,
          teamMembers: state.teamMembers.map(member =>
            member.id === action.payload.id ? action.payload : member
          )
        };
      case 'DELETE_TEAM_MEMBER':
        return {
          ...state,
          teamMembers: state.teamMembers.filter(member => member.id !== action.payload)
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  