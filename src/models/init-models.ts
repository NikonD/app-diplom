import type { Sequelize } from "sequelize";
import { reports as _reports } from "./reports";
import type { reportsAttributes, reportsCreationAttributes } from "./reports";
import { rewards as _rewards } from "./rewards";
import type { rewardsAttributes, rewardsCreationAttributes } from "./rewards";
import { tasks as _tasks } from "./tasks";
import type { tasksAttributes, tasksCreationAttributes } from "./tasks";
import { users as _users } from "./users";
import type { usersAttributes, usersCreationAttributes } from "./users";
import { works as _works } from "./works";
import type { worksAttributes, worksCreationAttributes } from "./works";

export {
  _reports as reports,
  _rewards as rewards,
  _tasks as tasks,
  _users as users,
  _works as works,
};

export type {
  reportsAttributes,
  reportsCreationAttributes,
  rewardsAttributes,
  rewardsCreationAttributes,
  tasksAttributes,
  tasksCreationAttributes,
  usersAttributes,
  usersCreationAttributes,
  worksAttributes,
  worksCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
  const reports = _reports.initModel(sequelize);
  const rewards = _rewards.initModel(sequelize);
  const tasks = _tasks.initModel(sequelize);
  const users = _users.initModel(sequelize);
  const works = _works.initModel(sequelize);

  rewards.belongsTo(reports, { as: "report", foreignKey: "report_id"});
  reports.hasMany(rewards, { as: "rewards", foreignKey: "report_id"});
  reports.belongsTo(tasks, { as: "task", foreignKey: "task_id"});
  tasks.hasMany(reports, { as: "reports", foreignKey: "task_id"});
  reports.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(reports, { as: "reports", foreignKey: "user_id"});
  rewards.belongsTo(users, { as: "task_owner", foreignKey: "task_owner_id"});
  users.hasMany(rewards, { as: "rewards", foreignKey: "task_owner_id"});
  rewards.belongsTo(users, { as: "report_owner", foreignKey: "report_owner_id"});
  users.hasMany(rewards, { as: "report_owner_rewards", foreignKey: "report_owner_id"});
  tasks.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(tasks, { as: "tasks", foreignKey: "user_id"});
  works.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(works, { as: "works", foreignKey: "user_id"});
  reports.belongsTo(works, { as: "work", foreignKey: "work_id"});
  works.hasMany(reports, { as: "reports", foreignKey: "work_id"});

  return {
    reports: reports,
    rewards: rewards,
    tasks: tasks,
    users: users,
    works: works,
  };
}
