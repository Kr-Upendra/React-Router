import blog from "../data.json";

export const getAllBlogs = () => {
  return blog;
};

export const getBlog = (id) => {
  return blog[id - 1];
};
