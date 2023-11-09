import { PrismaClient } from "@prisma/client";
import DataForSaving from "../types/databaseData.js";
import HttpException from "../exceptions/HttpException.js";

class FormDataService {
  constructor(private readonly prisma: PrismaClient) {}

  public saveToDatabase = async (formData: DataForSaving) => {
    const { firstName, lastName, address, phone, email } = formData;

    const result = await this.prisma.formData.create({
      data: {
        firstName,
        lastName,
        address,
        phone,
        email,
      },
    });
    if (!result) {
      throw new HttpException(500, "Error while saving to database.");
    }
    return result;
  };
}

export default FormDataService;
