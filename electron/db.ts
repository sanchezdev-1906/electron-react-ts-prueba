import { type App } from "electron";
import { Sequelize } from "sequelize";
import { join } from "node:path";

export const getConnection = (app: App) => {
  return new Sequelize({
    dialect: "sqlite",
    storage: join(app.getPath("userData"), "data", "main.sqlite"),
  });
};
