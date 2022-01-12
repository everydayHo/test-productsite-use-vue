module.exports = {
  productList: {
    query: `select t1.*, t2.path, t3.category1, t3.category2, t3.category3 
    from t_product t1, t_image t2, t_category t3
    where t1.id = t2.product_id and t2.type = 1 and t1.category_id = t3.id`,
  },
  productDetail: {
    query: `select t1.*, t2.path, t3.category1, t3.category2, t3.category3 
    from t_product t1, t_image t2, t_category t3
    where t1.id = ? and t1.id = t2.product_id and t2.type = 3 and t1.category_id = t3.id`,
  },
  productMainImages: {
    query: `select * from t_image where product_id = ? and type = 2 `,
  },
  productInsert: {
    query: `insert into t_product(product_name, product_price, delivery_price, add_delivery_price, tags, outbound_days, seller_id, category_id)
    values(?, ?, ?, ?, ?, ?, ?, ?)`,
  },
  productImageInsert: {
    query: `insert into t_image(product_id, type, path)
    values (?, ?, ?)`,
  },
  sellerList: {
    query: `select * from t_seller`,
  },
};
