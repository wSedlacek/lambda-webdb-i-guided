export const development = {
  client: 'sqlite3',
  connection: {
    filename: './src/data/posts.db',
  },
  useNullAsDefault: true,
  migrations: {
    directory: './src/data/migrations',
  },
  seeds: {
    directory: './src/data/seeds',
  },
};
