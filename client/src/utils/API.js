import axios from "axios";

export default {
  createHouse: () => {
    return axios.post("/api/auth/register")
  },
  //not sure how to do this with the auth
  // loginHouse: (id) => {
  //   return axios.get(`/api/house/ + ${id}`)
  // },
  // Gets all rooms
  getRooms: function() {
    return axios.get("/api/rooms");
  },
  // Gets the room with the given id
  getRoom: function(id) {
    return axios.get("/api/rooms/" + id);
  },
  // Deletes the room with the given id
  deleteRoom: function(id) {
    return axios.delete("/api/rooms/" + id);
  },
  // Saves a book to the database
  saveRoom: function(roomData) {
    return axios.post("/api/rooms", roomData);
  },
  // Gets all tasks for a specific room ID
  getTasksByRoom: function(roomID) {
    return axios.get("/api/tasks/" + roomID + "/room");
  },
  // Gets the task with the given id
  getTask: function(id) {
    return axios.get("/api/tasks/" + id);
  },
  // Deletes the task with the given id
  deleteTask: function(id) {
    return axios.delete("/api/tasks/" + id);
  },
  // Saves a task to the database
  saveTask: function(taskData) {
    console.log(taskData);
    return axios.post("/api/tasks", taskData);
  },
  // Updates a task by id to the database
  updateTask: function(id, taskData) {
    return axios.post("/api/tasks/" + id, taskData);
  }
};
