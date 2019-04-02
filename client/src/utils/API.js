import axios from "axios";

export default {
  authUser: () => {
    return axios.post("/auth")
  },
  // Gets all rooms
  getRooms: function() {
    let token = this.getCookie('token');
    return axios.get("/api/rooms",
      {headers: 
        {"Authorization":  `Bearer ${token}`}
      }      
    );
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
    let token = this.getCookie('token');
    return axios.get("/api/tasks/" + roomID + "/room",
      {headers: 
        {"Authorization":  `Bearer ${token}`}
      }  
    );
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
    let token = this.getCookie('token');
    console.log(taskData);
    return axios.post("/api/tasks", taskData,
      {headers: 
        {"Authorization":  `Bearer ${token}`}
      }  
    );
  },
  // Updates a task by id to the database
  updateTask: function(id, taskData) {
    let token = this.getCookie('token');
    console.log(taskData)
    console.log(id)
    return axios.put("/api/tasks/" + id, taskData,
      {headers: 
        {"Authorization":  `Bearer ${token}`}
      }  
    );
  },
  getCookie:function(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
  }
};
