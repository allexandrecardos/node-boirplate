import dotenv from 'dotenv';

dotenv.config({
  path: '.env.local',
  encoding: 'utf8',
  debug: true,
  override: true
});

const port = process.env.PORT || 2000;

console.log(`Server running on port ${port}`);