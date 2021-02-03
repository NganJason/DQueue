const dbName = "dqueueDB";

const config = {
  port: process.env.PORT || 5000,
  jwtSecret: process.env.JWT_SECRET,
  mongoUri: `mongodb+srv://admin-jonathan:${process.env.DB_ADMIN_PASSWORD}@cluster0.tmjin.mongodb.net/${dbName}?retryWrites=true&w=majority`,
};

export default config;
