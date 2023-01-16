import { Model, INTEGER, STRING } from 'sequelize';
import db from './index';

class Author extends Model {
  declare id: number;
  declare name: string;
}

Author.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: STRING(30),
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'authors',
  timestamps: false,
});

let statusCode: (number|string)[] = []

let statusCode2: [string, number]= ['1', 1]

let statusCode3: [number, string][]= [[1, '2']]

// npx tsc nameCodigo

export default Author;