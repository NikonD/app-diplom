import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { reports, reportsId } from './reports';
import type { rewards, rewardsId } from './rewards';
import type { tasks, tasksId } from './tasks';
import type { works, worksId } from './works';

export interface usersAttributes {
  id: string;
  fullname: string;
  email: string;
  phone: string;
  organization: string;
  password: string;
  type: number;
  date_created: Date;
  verify?: boolean;
  verify_code?: string;
}

export type usersPk = "id";
export type usersId = users[usersPk];
export type usersOptionalAttributes = "id" | "verify" | "verify_code";
export type usersCreationAttributes = Optional<usersAttributes, usersOptionalAttributes>;

export class users extends Model<usersAttributes, usersCreationAttributes> implements usersAttributes {
  id!: string;
  fullname!: string;
  email!: string;
  phone!: string;
  organization!: string;
  password!: string;
  type!: number;
  date_created!: Date;
  verify?: boolean;
  verify_code?: string;

  // users hasMany reports via user_id
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
  // users hasMany rewards via task_owner_id
  rewards!: rewards[];
  getRewards!: Sequelize.HasManyGetAssociationsMixin<rewards>;
  setRewards!: Sequelize.HasManySetAssociationsMixin<rewards, rewardsId>;
  addReward!: Sequelize.HasManyAddAssociationMixin<rewards, rewardsId>;
  addRewards!: Sequelize.HasManyAddAssociationsMixin<rewards, rewardsId>;
  createReward!: Sequelize.HasManyCreateAssociationMixin<rewards>;
  removeReward!: Sequelize.HasManyRemoveAssociationMixin<rewards, rewardsId>;
  removeRewards!: Sequelize.HasManyRemoveAssociationsMixin<rewards, rewardsId>;
  hasReward!: Sequelize.HasManyHasAssociationMixin<rewards, rewardsId>;
  hasRewards!: Sequelize.HasManyHasAssociationsMixin<rewards, rewardsId>;
  countRewards!: Sequelize.HasManyCountAssociationsMixin;
  // users hasMany rewards via report_owner_id
  report_owner_rewards!: rewards[];
  getReport_owner_rewards!: Sequelize.HasManyGetAssociationsMixin<rewards>;
  setReport_owner_rewards!: Sequelize.HasManySetAssociationsMixin<rewards, rewardsId>;
  addReport_owner_reward!: Sequelize.HasManyAddAssociationMixin<rewards, rewardsId>;
  addReport_owner_rewards!: Sequelize.HasManyAddAssociationsMixin<rewards, rewardsId>;
  createReport_owner_reward!: Sequelize.HasManyCreateAssociationMixin<rewards>;
  removeReport_owner_reward!: Sequelize.HasManyRemoveAssociationMixin<rewards, rewardsId>;
  removeReport_owner_rewards!: Sequelize.HasManyRemoveAssociationsMixin<rewards, rewardsId>;
  hasReport_owner_reward!: Sequelize.HasManyHasAssociationMixin<rewards, rewardsId>;
  hasReport_owner_rewards!: Sequelize.HasManyHasAssociationsMixin<rewards, rewardsId>;
  countReport_owner_rewards!: Sequelize.HasManyCountAssociationsMixin;
  // users hasMany tasks via user_id
  tasks!: tasks[];
  getTasks!: Sequelize.HasManyGetAssociationsMixin<tasks>;
  setTasks!: Sequelize.HasManySetAssociationsMixin<tasks, tasksId>;
  addTask!: Sequelize.HasManyAddAssociationMixin<tasks, tasksId>;
  addTasks!: Sequelize.HasManyAddAssociationsMixin<tasks, tasksId>;
  createTask!: Sequelize.HasManyCreateAssociationMixin<tasks>;
  removeTask!: Sequelize.HasManyRemoveAssociationMixin<tasks, tasksId>;
  removeTasks!: Sequelize.HasManyRemoveAssociationsMixin<tasks, tasksId>;
  hasTask!: Sequelize.HasManyHasAssociationMixin<tasks, tasksId>;
  hasTasks!: Sequelize.HasManyHasAssociationsMixin<tasks, tasksId>;
  countTasks!: Sequelize.HasManyCountAssociationsMixin;
  // users hasMany works via user_id
  works!: works[];
  getWorks!: Sequelize.HasManyGetAssociationsMixin<works>;
  setWorks!: Sequelize.HasManySetAssociationsMixin<works, worksId>;
  addWork!: Sequelize.HasManyAddAssociationMixin<works, worksId>;
  addWorks!: Sequelize.HasManyAddAssociationsMixin<works, worksId>;
  createWork!: Sequelize.HasManyCreateAssociationMixin<works>;
  removeWork!: Sequelize.HasManyRemoveAssociationMixin<works, worksId>;
  removeWorks!: Sequelize.HasManyRemoveAssociationsMixin<works, worksId>;
  hasWork!: Sequelize.HasManyHasAssociationMixin<works, worksId>;
  hasWorks!: Sequelize.HasManyHasAssociationsMixin<works, worksId>;
  countWorks!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof users {
    return users.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    fullname: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    email: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    phone: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    organization: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    type: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false
    },
    verify: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    verify_code: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'users',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "users__index",
        unique: true,
        fields: [
          { name: "email" },
        ]
      },
      {
        name: "users_phone_uindex",
        unique: true,
        fields: [
          { name: "phone" },
        ]
      },
      {
        name: "users_pk",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
