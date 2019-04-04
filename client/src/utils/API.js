import axios from "axios";
const Cookie = require('js-cookie');

export default {
  authUser: (body) => {
    return axios.post("/auth", {
      username: body.username,
      password: body.password,
    })
  },
  createHouse: (houseData) => {
    return axios.post("/house", houseData)
  },
  // Gets all rooms
  getRooms: function() {
    let token = Cookie.get('token');
    return axios.get("/api/rooms",
      {headers: 
        {"Authorization":  `Bearer ${token}`}
      }      
    );
  },
  // Gets the room with the given id
  getRoom: function(id) {
    let token = Cookie.get('token');

    return axios.get("/api/rooms/" + id,
      {headers: 
        {"Authorization":  `Bearer ${token}`}
      }  
    );
  },
  // Deletes the room with the given id
  deleteRoom: function(id) {
    let token = Cookie.get('token');

    return axios.delete("/api/rooms/" + id,
      {headers: 
        {"Authorization":  `Bearer ${token}`}
      }  
    );
  },
  // Saves a book to the database
  saveRoom: function(roomData) {
    let token = Cookie.get('token');

    return axios.post("/api/rooms", roomData,
      {headers: 
        {"Authorization":  `Bearer ${token}`}
      }  
    );
  },
  // Gets all tasks for a specific room ID
  getTasksByRoom: function(roomID) {
    let token = Cookie.get('token');
    return axios.get("/api/tasks/" + roomID + "/room",
      {headers: 
        {"Authorization":  `Bearer ${token}`}
      }  
    );
  },
  // Gets the task with the given id
  getTask: function(id) {
    let token = Cookie.get('token');

    return axios.get("/api/tasks/" + id,
      {headers: 
        {"Authorization":  `Bearer ${token}`}
      }  
    );
  },
  // Deletes the task with the given id
  deleteTask: function(id) {
    let token = Cookie.get('token');

    return axios.delete("/api/tasks/" + id,
      {headers: 
        {"Authorization":  `Bearer ${token}`}
      }  
    );
  },
  // Saves a task to the database
  saveTask: function(taskData) {
    let token = Cookie.get('token');
    console.log(taskData);
    return axios.post("/api/tasks", taskData,
      {headers: 
        {"Authorization":  `Bearer ${token}`}
      }  
    );
  },
  // Updates a task by id to the database
  updateTask: function(id, taskData) {
    let token = Cookie.get('token');
    console.log(taskData)
    console.log(id)
    return axios.put("/api/tasks/" + id, taskData,
      {headers: 
        {"Authorization":  `Bearer ${token}`}
      }  
    );
  },
 
};

/**
 * ### PSEUDOCODE
 */

//  authUser.then((data) => {
//    cookie.set('token', data.token);
//  })
