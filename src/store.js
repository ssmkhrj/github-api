import { createStore } from "redux";

const initialState = {
  user: {
    login: "kentcdodds",
    id: 1500684,
    node_id: "MDQ6VXNlcjE1MDA2ODQ=",
    avatar_url: "https://avatars.githubusercontent.com/u/1500684?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/kentcdodds",
    html_url: "https://github.com/kentcdodds",
    followers_url: "https://api.github.com/users/kentcdodds/followers",
    following_url:
      "https://api.github.com/users/kentcdodds/following{/other_user}",
    gists_url: "https://api.github.com/users/kentcdodds/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/kentcdodds/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/kentcdodds/subscriptions",
    organizations_url: "https://api.github.com/users/kentcdodds/orgs",
    repos_url: "https://api.github.com/users/kentcdodds/repos",
    events_url: "https://api.github.com/users/kentcdodds/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/kentcdodds/received_events",
    type: "User",
    site_admin: false,
    name: "Kent C. Dodds",
    company: "@remix-run",
    blog: "https://kentcdodds.com",
    location: "Salt Lake City, Utah, USA",
    email: null,
    hireable: null,
    bio: "Improving the world with quality software · Husband, Father, Latter-day Saint, Teacher, OSS · @remix-run · TestingJavaScript.com · EpicReact.Dev · Be Kind",
    twitter_username: "kentcdodds",
    public_repos: 653,
    public_gists: 236,
    followers: 25126,
    following: 43,
    created_at: "2012-03-04T22:32:01Z",
    updated_at: "2022-06-06T14:31:18Z",
  },
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_USER":
      console.log("Action", action);
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

export const store = createStore(reducer);
