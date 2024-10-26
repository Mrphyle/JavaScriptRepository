const mysql = require('mysql2/promise');
const xlsx = require('xlsx');

async function xlstosql(excelFile, sheetName, dbName, tableName) {
    try {
        const workbook = xlsx.readFile(excelFile);
        const worksheet = workbook.Sheets[sheetName];
        const data = xlsx.utils.sheet_to_json(worksheet);

        // Conectar ao banco de dados MySQL
        const connection = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: dbName
        });

        // Criar a tabela e inserir os dados
        const columns = Object.keys(data[0]).map(col => `\`${col}\` VARCHAR(255)`).join(', ');
        await connection.query(`CREATE TABLE IF NOT EXISTS \`${tableName}\` (${columns})`);
        
        for (const row of data) {
            const values = Object.values(row).map(value => `'${value}'`).join(', ');
            await connection.query(`INSERT INTO \`${tableName}\` (${Object.keys(row).join(', ')}) VALUES (${values})`);
        }

        await connection.end();
    } catch (error) {
        console.error('Erro:', error);
    }
}
const arquivo = 'bdexcel.xlsx';
const planilha = 'Planilha1';
const banco = 'ruby';
const tabela = 'aluno';
xlstosql(arquivo, planilha, banco, tabela);