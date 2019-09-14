import { sequelize as db } from "../../../models";
export default async (req, res) => {
  const {
    query: { id }
  } = req;

  const { Post } = db.models;
  const post = await Post.findByPk(id);
  res.status(200).send(post);
};
