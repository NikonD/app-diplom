import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { reports, reportsId } from './reports';
import type { users, usersId } from './users';

export interface tasksAttributes {
  id: string;
  user_id: string;
  title: string;
  description: string;
  status: number;
  date_created: Date;
  date_ended?: Date;
  criteria: string[];
}

export type tasksPk = "id";
export type tasksId = tasks[tasksPk];
export type tasksOptionalAttributes = "id" | "status" | "date_ended";
export type tasksCreationAttributes = Optional<tasksAttributes, tasksOptionalAttributes>;

export class tasks extends Model<tasksAttributes, tasksCreationAttributes> implements tasksAttributes {
  id!: string;
  user_id!: string;
  title!: string;
  description!: string;
  status!: number;
  date_created!: Date;
  date_ended?: Date;
  criteria!: string[];

  // tasks hasMany reports via task_id
  reports!: reports[];
  getReports!: Sequelize.HasManyGetAssociationsMixin<reports>;
  setReports!: Sequelize.HasManySetAssociationsMixin<reports, reportsId>;
  addReport!: Sequelize.HasManyAddAssociationMixin<reports, reportsId>;
  addReports!: Sequelize.HasManyAddAssociationsMixin<reports, reportsId>;
  createReport!: Sequelize.HasManyCreateAssociationMixin<reports>;
  removeReport!: Sequelize.HasManyRemoveAssociationMixin<reports, reportsId>;
  removeReports!: Sequelize.HasManyRemoveAssociationsMixin<reports, reportsId>;
  hasReport!: Sequelize.HasManyHasAssociationMixin<reports, reportsId>;
  hasReports!: Sequelize.HasManyHasAssociationsMixin<reports, reportsId>;
  countReports!: Sequelize.HasManyCountAssociationsMixin;
  // tasks belongsTo users via user_id
  user!: users;
  getUser!: Sequelize.BelongsToGetAssociationMixin<users>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<users, usersId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<users>;

  static initModel(sequelize: Sequelize.Sequelize): typeof tasks {
    return tasks.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    title: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false
    },
    date_ended: {
      type: DataTypes.DATE,
      allowNull: true
    },
    criteria: {
      type: DataTypes.ARRAY(DataTypes.TEXT),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'tasks',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "tasks_pk",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
