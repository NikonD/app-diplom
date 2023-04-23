import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { rewards, rewardsId } from './rewards';
import type { tasks, tasksId } from './tasks';
import type { users, usersId } from './users';
import type { works, worksId } from './works';

export interface reportsAttributes {
  id: string;
  date_created: Date;
  date_updated?: Date;
  status: number;
  criteria?: object;
  user_id?: string;
  task_id?: string;
  work_id?: string;
}

export type reportsPk = "id";
export type reportsId = reports[reportsPk];
export type reportsOptionalAttributes = "id" | "date_updated" | "status" | "criteria" | "user_id" | "task_id" | "work_id";
export type reportsCreationAttributes = Optional<reportsAttributes, reportsOptionalAttributes>;

export class reports extends Model<reportsAttributes, reportsCreationAttributes> implements reportsAttributes {
  id!: string;
  date_created!: Date;
  date_updated?: Date;
  status!: number;
  criteria?: object;
  user_id?: string;
  task_id?: string;
  work_id?: string;

  // reports hasMany rewards via report_id
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
  // reports belongsTo tasks via task_id
  task!: tasks;
  getTask!: Sequelize.BelongsToGetAssociationMixin<tasks>;
  setTask!: Sequelize.BelongsToSetAssociationMixin<tasks, tasksId>;
  createTask!: Sequelize.BelongsToCreateAssociationMixin<tasks>;
  // reports belongsTo users via user_id
  user!: users;
  getUser!: Sequelize.BelongsToGetAssociationMixin<users>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<users, usersId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<users>;
  // reports belongsTo works via work_id
  work!: works;
  getWork!: Sequelize.BelongsToGetAssociationMixin<works>;
  setWork!: Sequelize.BelongsToSetAssociationMixin<works, worksId>;
  createWork!: Sequelize.BelongsToCreateAssociationMixin<works>;

  static initModel(sequelize: Sequelize.Sequelize): typeof reports {
    return reports.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false
    },
    date_updated: {
      type: DataTypes.DATE,
      allowNull: true
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    criteria: {
      type: DataTypes.JSON,
      allowNull: true
    },
    user_id: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    task_id: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'tasks',
        key: 'id'
      }
    },
    work_id: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'works',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'reports',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "reports_pk",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
