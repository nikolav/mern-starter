const connection = require('../../config/sequelize');
const configureMain = require('./main');
const configureMessage = require('./messages');
const configureSession = require('./session');
const configureRole = require('./roles');
const configureRoleUser = require('./role-user');
const configureTokens = require('./tokens');
const configureUpload = require('./upload');

module.exports = new Promise(async (resolve, reject) => {
  try {
    const client = await connection;

    const Main = configureMain(client);
    const Message = configureMessage(client);
    const Role = configureRole(client);
    const RoleUser = configureRoleUser(client);
    const Session = configureSession(client);
    const Tokens = configureTokens(client);
    const Upload = configureUpload(client);

    // // declare schema.relations here
    // // 1-m
    // Post.belongsTo(User, { constraints: true, onDelete: 'CASCADE', as: 'author', foreignKey: 'user_id' });
    // User.hasMany(Post);
    // // 1-1
    // User.hasOne(Cart);
    // Cart.belongsTo(User);
    // // 1-m
    // Order.belongsTo(User);
    // User.hasMany(Order);
    // // m-n
    // Cart.belongsToMany(Product, { through: CartItem });
    // Product.belongsToMany(Cart, { through: CartItem });
    // // m-n
    // Order.belongsToMany(Product, { through: OrderItem });
    // Product.belongsToMany(Order, { through: OrderItem });

    // quick shortcut in models
    RoleUser.Role = Role;

    // collect all models in namespace
    const model = {
      Main,
      Message,
      Session,
      Role,
      RoleUser,
      Tokens,
      Upload,
    };

    // schema.push
    await client

      // just create new tables, no drop-create
      .sync();

    // drop/rebuild tables
    // .sync({ force: true });

    // modify table schema and columns
    // .sync({ alter: true });

    resolve(model);
  } catch (error) {
    reject(error);
  }
});
