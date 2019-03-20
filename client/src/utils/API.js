import axios from "axios";

export default {
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
  }
};
