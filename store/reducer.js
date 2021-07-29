import {
  SET_USER,
  LOGIN,
  ADD_VOTE,
  ADD_POLL,
  ADD_USER,
} from './types.js'
const INTIAL_STATE = {
  currentUser: null,
  headersData: [],
  users: [
    {
      name: "Ali",
      image: 'https://idsb.tmgrup.com.tr/2017/07/25/i-revolt-therefore-i-am-in-the-personality-of-muhammad-ali-1501009105456.jpg',
      answeredPolls: 3,
      createdPolls: 1,
    },
    {
      name: "Iqbal",
      image: 'https://i.dawn.com/large/2018/11/5be426644a78b.jpg?r=1489738040',
      answeredPolls: 3,
      createdPolls: 1,
    },
    {
      name: "Ahmed",
      image: 'https://i.redd.it/56wtab9my5z21.jpg',
      answeredPolls: 3,
      createdPolls: 1,
    },
  ],
  polls: [
    {
      statement: "Why?",

      options: [{ name: "eh" }, { name: "dntknow" }, { name: "what" }],
      creator: 0,
      votes: [
        { user: 0, option: 0 },
        { user: 1, option: 2 },
      ],
    },
    {
      statement: "Where?",

      options: [{ name: "eh" }, { name: "dntknow" }, { name: "what" }],
      creator: 1,
      votes: [
        { user: 2, option: 0 },
        { user: 0, option: 2 },
      ],
    },
    {
      statement: "Who?",
      options: [{ name: "eh" }, { name: "dntknow" }, { name: "what" }],
      creator: 2,
      votes: [
        { user: 2, option: 0 },
        { user: 1, option: 2 },
      ],
    },
  ],
};

export default (state = INTIAL_STATE, action) => {
  switch (action.type) {    
    case SET_USER:
      return {
        ...state,
        currentUser: action.user,
        headersData: [
          {
            label: "Home",
            href: "/home",
          },
          {
            label: "Add Polls",
            href: "/add",
          },
          {
            label: "Leader Board",
            href: "/leader",
          },
          {
            label: "Log Out",
            href: "/",
          },
        ],
      };
    case ADD_USER:
      return {
        ...state,
        users: [...state.users, action.user],
      };
    case ADD_POLL:
      return {
        ...state,
        polls: [...state.polls, action.poll],
        users: [...action.users],
      };
    case ADD_VOTE:
      return {
        ...state,
        polls: [...action.polls],
        users: [...action.users],
      };
    case LOGIN:
      return {
        ...state,
        headersData: [],
        currentUser: null,
      };

    default:
      return state;
  }
};
