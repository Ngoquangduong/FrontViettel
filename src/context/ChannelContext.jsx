import { createContext, useContext, useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "../api/axios.jsx";
import { useNavigate } from "react-router-dom";
import { data } from "autoprefixer";

const ChannelContext = createContext({});

export const ChannelProvider = ({ children }) => {
  const { id } = useParams();
  const csrf = () => axios.get("/sanctum/csrf-cookie");
  const [Channels, setChannels] = useState([]);
  const [errors, setErrors] = useState([]);
  const [channel, setChannel] = useState([]);

  const getChannels = async () => {
    try {
      
      const result = await axios.get("/channel");
      setChannels(result.data.channels);
    } catch (error) {
      console.error("Error fetching city data:", error);
    }
  };
  const getChannelDetail = async () => {
    try {
      const result = await axios.get("/channel/" + id);
      setChannel(result.data.channel[0]);
    } catch (error) {
      console.error("Error fetching channel data:", error);
    }
  };

  const insertChannel = async ({ ...data }) => {
    await csrf();
    try {
      await axios.post("/channel/insert", data);
      await getChannels();
    } catch (e) {
      if (e.response.status === 422) {
        setErrors(e.response.data.errors);
      }
    }
  };
  const updateChannel = async (id, { ...data }) => {
    await csrf();
    try {
      await axios.patch("/channel/update" + id, data);
      await getChannels();
    } catch (e) {
      if (e.response.status === 422) {
        setErrors(e.response.data.errors);
      }
    }
  };
  const deleteChannel = async (id) => {
    await csrf();
    try {
      await axios.patch("/channel/delete" + id);
      await getChannels();
    } catch (e) {
      if (e.response.status === 422) {
        setErrors(e.response.data.errors);
      }
    }
  };
  useEffect(() => {
    getChannels();
  }, []);

  return (
    <ChannelContext.Provider value={{ channels, channel, getChannelDetail }}>
      {children}
    </ChannelContext.Provider>
  );
};
export default function useChannelContext() {
  return useContext(ChannelContext);
}
