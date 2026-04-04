import { useState, useEffect } from "react";
import axios from "../axiosConfig";

const MentorPage = () => {
    const [mentors, setMentors] = useState([]);
    const [editingId, setEditingId] = useState(null);
    useEffect(() => {
    fetchMentors();
  }, []);

  const fetchMentors = async () => {
    try {
      const res = await axios.get("/api/mentors");
      setMentors(res.data);
    } catch (err) {
      console.error(err);
    }
  };
  const deleteMentor = async (id) => {
  try {
    await axios.delete(`/api/mentors/${id}`);
    fetchMentors(); // refresh list
  } catch (err) {
    console.error(err);
  }
};
const editMentor = (mentor) => {
  setName(mentor.name);
  setExpertise(mentor.expertise);
  setAvailability(mentor.availability);
  setEditingId(mentor._id);
};
  const [name, setName] = useState("");
  const [expertise, setExpertise] = useState("");
  const [availability, setAvailability] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
    if (editingId) {
      // UPDATE
      await axios.put(`/api/mentors/${editingId}`, {
        name,
        expertise,
        availability,
      });

      alert("Mentor updated!");
      setEditingId(null);
    } else {
      // CREATE
      await axios.post("/api/mentors", {
        name,
        expertise,
        availability,
      });

      alert("Mentor created!");
    }

    // clear form
    setName("");
    setExpertise("");
    setAvailability("");

    fetchMentors(); // refresh list
  } catch (err) {
    console.error(err);
    alert(err.response?.data?.message || "Error");
  }
  };

  return (
  <div className="min-h-screen bg-gray-100 p-6">
    
    <div className="max-w-3xl mx-auto">
      
      {/* TITLE */}
      <h1 className="text-3xl font-bold text-center mb-6">
        Mentor Management
      </h1>

      {/* FORM CARD */}
      <div className="bg-white rounded-xl shadow p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">
          {editingId ? "Edit Mentor" : "Add Mentor"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Expertise"
            value={expertise}
            onChange={(e) => setExpertise(e.target.value)}
          />

          <input
            className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Availability"
            value={availability}
            onChange={(e) => setAvailability(e.target.value)}
          />

          <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
            {editingId ? "Update Mentor" : "Add Mentor"}
          </button>
        </form>
      </div>

      {/* LIST CARD */}
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Mentor List</h2>

        {mentors.length === 0 ? (
          <p className="text-gray-500 text-center">No mentors yet</p>
        ) : (
          <div className="space-y-3">
            {mentors.map((mentor) => (
              <div
                key={mentor._id}
                className="flex justify-between items-center bg-gray-50 p-4 rounded"
              >
                <div>
                  <p className="font-semibold">{mentor.name}</p>
                  <p className="text-sm text-gray-600">
                    {mentor.expertise}
                  </p>
                  <p className="text-xs text-gray-500">
                    {mentor.availability}
                  </p>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => editMentor(mentor)}
                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => deleteMentor(mentor._id)}
                    className="bg-green-500 text-white px-3 py-1 rounded hover:bg-Green-800"
                  >
                    Delete
                  </button>
                 
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  </div>
);
};

export default MentorPage;