import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { reports, reportsId } from './reports';
import type { users, usersId } from './users';

export interface rewardsAttributes {
  id: string;
  task_owner_id: string;
  report_owner_id: string;
  report_id: string;
  criteria: object;
  points: number;
}

export type rewardsPk = "id";
export type rewardsId = rewards[rewardsPk];
export type rewardsOptionalAttributes = "id";
export type rewardsCreationAttributes = Optional<rewardsAttributes, rewardsOptionalAttributes>;

export class rewards extends Model<rewardsAttributes, rewardsCreationAttributes> implements rewardsAttributes {
  id!: string;
  task_owner_id!: string;
  report_owner_id!: string;
  report_id!: string;
  criteria!: object;
  points!: number;

  // rewards belongsTo reports via report_id
  report!: reports;
  getReport!: Sequelize.BelongsToGetAssociationMixin<reports>;
  setReport!: Sequelize.BelongsToSetAssociationMixin<reports, reportsId>;
  createReport!: Sequelize.BelongsToCreateAssociationMixin<reports>;
  // rewards belongsTo users via task_owner_id
  task_owner!: users;
  getTask_owner!: Sequelize.BelongsToGetAssociationMixin<users>;
  setTask_owner!: Sequelize.BelongsToSetAssociationMixin<users, usersId>;
  createTask_owner!: Sequelize.BelongsToCreateAssociationMixin<users>;
  // rewards belongsTo users via report_owner_id
  report_owner!: users;
  getReport_owner!: Sequelize.BelongsToGetAssociationMixin<users>;
  setReport_owner!: Sequelize.BelongsToSetAssociationMixin<users, usersId>;
  createReport_owner!: Sequelize.BelongsToCreateAssociationMixin<users>;

  static initModel(sequelize: Sequelize.Sequelize): typeof rewards {
    return rewards.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    task_owner_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    report_owner_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    report_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'reports',
        key: 'id'
      }
    },
    criteria: {
      type: DataTypes.JSON,
      allowNull: false
    },
    points: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'rewards',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "rewards_pk",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
