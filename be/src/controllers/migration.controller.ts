import { StatusCodes } from "http-status-codes";
import { MigrationService } from "../services/migration.service";
import { HandleFunc } from "../utils/controller";

class MigrationController {
  migrationDataUser(): HandleFunc {
    return async (req, res, next) => {
      await MigrationService.migrationDataUser();
      res.status(StatusCodes.OK).json({ success: true });
    };
  }
  migrationDataComment(): HandleFunc {
    return async (req, res, next) => {
      await MigrationService.migrationDataComment();
      res.status(StatusCodes.OK).json({ success: true });
    };
  }
  migrationDataPost(): HandleFunc {
    return async (req, res, next) => {
      await MigrationService.migrationDataPost();
      res.status(StatusCodes.OK).json({ success: true });
    };
  }
  migrationAllData(): HandleFunc {
    return async (req, res, next) => {
      await MigrationService.migrationAllData();
      res.status(StatusCodes.OK).json({ success: true });
    };
  }
}

export default new MigrationController();
