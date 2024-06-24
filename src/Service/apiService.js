import axios from "../utils/axiosCustomize";

const PostCreateUser = (email, password, username, role,image) => {
    //submit data
    const data = new FormData();
    data.append("email", email);
    data.append("password", password);
    data.append("username", username);
    data.append("role", role);
    data.append("userImage", image);
   return axios.post("/api/v1/participant", data);
}
const GetAllListUser = () => {
    return axios.get("/api/v1/participant/all");
};
const UpdateListUser = (id, username, role, image) => {
    //submit data
    const data = new FormData();
    data.append("id", id);
    data.append("username", username);
    data.append("role", role);
    data.append("userImage", image);
    return axios.put("/api/v1/participant", data);
};
const DeleteListUser = (userId) => {
    return axios.delete("/api/v1/participant", { data: { id: userId } });
};
const PaginateListUser = (page, limit) => {
    return axios.get(`/api/v1/participant?page=${page}&limit=${limit}`);
};
const postLogin = (email,password) => {
    return axios.post(`/api/v1/login`,{email,password});
}
const postSignup = (email,password,username) => {
    return axios.post(`/api/v1/register`,{email,password,username});
}
export { PostCreateUser, GetAllListUser, UpdateListUser, DeleteListUser, PaginateListUser,postLogin, postSignup };