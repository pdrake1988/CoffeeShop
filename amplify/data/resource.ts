import { type ClientSchema, a, defineData } from "@aws-amplify/backend";

const schema = a
  .schema({
    Account: a.model({
      accountId: a.id().required(),
      email: a.string(),
      firstName: a.string(),
      lastName: a.string(),
      birthDay: a.date(),
      address: a.string(),
      city: a.string(),
      state: a.string(),
      zipCode: a.string(),
      country: a.string(),
      orders: a.hasMany("Orders", "accountId"),
    }),
    Store: a.model({
      address: a.string(),
      city: a.string(),
      state: a.string(),
      zipCode: a.string(),
      country: a.string(),
      products: a.hasMany("StoreProducts", "storeId"),
      orders: a.hasMany("Orders", "storeId"),
    }),
    Products: a.model({
      name: a.string(),
      description: a.string(),
      price: a.float(),
      imagePath: a.string(),
      calories: a.integer(),
      sugar: a.integer(),
      fat: a.integer(),
      stores: a.hasMany("StoreProducts", "productId"),
      orders: a.hasMany("OrderItems", "productId"),
    }),
    StoreProducts: a.model({
      storeId: a.string().required(),
      productId: a.string().required(),
      quantity: a.integer().required(),
      products: a.belongsTo("Products", "productId"),
      stores: a.belongsTo("Store", "storeId"),
    }),
    Orders: a.model({
      accountId: a.string().required(),
      storeId: a.string().required(),
      orderDate: a.date().required(),
      totalAmount: a.float().required(),
      orderItems: a.hasMany("OrderItems", "orderId"),
      account: a.belongsTo("Account", "accountId"),
      store: a.belongsTo("Store", "storeId"),
    }),
    OrderItems: a.model({
      orderId: a.string().required(),
      productId: a.string().required(),
      quantity: a.integer().required(),
      products: a.belongsTo("Products", "productId"),
      orders: a.belongsTo("Orders", "orderId"),
    }),
  })
  .authorization((allow) => allow.authenticated());

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "userPool",
  },
});
