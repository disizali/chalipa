import { sequelize as db } from "../../../models";

export default async (req, res) => {
  const {
    query: { id }
  } = req;
  const { Product } = db.models;
  const products = await Product.findAll({ where: { category: id } });
  res.status(200).send(products);
};
