import axios from "axios";

const API_URL = "/api/goals/";

//create new goal
const createGoal = async (goalData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  //we need to send the config object because it is a protected route and it needs the token in the headers
  const response = await axios.post(API_URL, goalData, config);
  return response.data;
};

//get goals
const getGoals = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  //we need to send the config object because it is a protected route and it needs the token in the headers
  const response = await axios.get(API_URL, config);
  return response.data;
};

//delete goal
const deleteGoal = async (goalId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.delete(API_URL + goalId, config);
  return response.data;
};

const goalService = {
  createGoal,
  getGoals,
  deleteGoal,
};

export default goalService;
