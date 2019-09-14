import { sequelize as db } from "../../../models";
export default async (req, res) => {
  const { Post } = db.models;
  const posts = await Post.findAll();
  res.status(200).send(posts);
};
