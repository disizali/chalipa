import { sequelize as db } from "../../../models";

export default async (req, res) => {
  // console.log(db.models);
  const { Price } = db.models;
  const prices = await Price.findAll();
  res.status(200).send(prices);
};
