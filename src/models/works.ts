import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { reports, reportsId } from './reports';
import type { users, usersId } from './users';

export interface worksAttributes {
  id: string;
  title: string;
  content: string;
  files: string[];
  user_id: string;
  date_created: Date;
  date_updated?: Date;
}

export type worksPk = "id";
export type worksId = works[worksPk];
export type worksOptionalAttributes = "id" | "date_updated";
export type worksCreationAttributes = Optional<worksAttributes, worksOptionalAttributes>;

export class works extends Model<worksAttributes, worksCreationAttributes> implements worksAttributes {
  id!: string;
  title!: string;
  content!: string;
  files!: string[];
  user_id!: string;
  date_created!: Date;
  date_updated?: Date;

  // works belongsTo users via user_id
  user!: users;
  getUser!: Sequelize.BelongsToGetAssociationMixin<users>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<users, usersId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<users>;
  // works hasMany reports via work_id
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

  static initModel(sequelize: Sequelize.Sequelize): typeof works {
    return works.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    title: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    files: {
      type: DataTypes.ARRAY(DataTypes.TEXT),
      allowNull: false
    },
    user_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false
    },
    date_updated: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'works',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "works_pk",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
