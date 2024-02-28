const fs = require('fs');
const path = require('path');
const { pool } = require('./config/connectDB');

// Function to execute SQL file
async function executeSqlFile() {
    try {
        const sql = fs.readFileSync('src/sql/Test_Zigvy.sql', 'utf8');
        await pool.query(sql);
        console.log('SQL file executed successfully.');
        return true;
    } catch (error) {
        console.error('Error executing SQL file:', error);
        return false;
    }
}

executeSqlFile();