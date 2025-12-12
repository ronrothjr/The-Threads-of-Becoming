module.exports = {
  apps: [
    {
      name: 'threads-mongodb',
      script: '/usr/bin/mongod',
      args: [
        '--dbpath',
        '/data/db',
        '--port',
        '27017',
        '--bind_ip',
        '127.0.0.1',
      ],
      exec_interpreter: 'none',
      exec_mode: 'fork',
      autorestart: true,
      watch: false,
      env: {
        NODE_ENV: 'development',
      },
    },
    {
      name: 'threads-server',
      cwd: './server',
      script: 'npm',
      args: 'run start:dev',
      exec_mode: 'fork',
      autorestart: true,
      watch: false,
      env: {
        NODE_ENV: 'development',
        PORT: 5050,
        MONGODB_URI: 'mongodb://127.0.0.1:27017/threads-db',
        JWT_SECRET: 'your-secret-key-change-in-production',
      },
    },
    {
      name: 'threads-client',
      cwd: './client',
      script: 'npm',
      args: 'run dev',
      exec_mode: 'fork',
      autorestart: true,
      watch: false,
      env: {
        NODE_ENV: 'development',
      },
    },
  ],
};
