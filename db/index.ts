const { Pool } = require('pg');
const pool = new Pool();

export default {
  query: (text: any, params?: any) => pool.query(text, params),
};
