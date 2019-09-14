import { sequelize as db } from "../../../models";
export default async (req, res) => {
  const { News } = db.models;
  const news = await News.findAll();
  res.status(200).send(news);
};
