import { PrismaClient } from "@prisma/client";
class PrismaService {
    constructor() { }
    static getPrisma() {
        if (!PrismaService.prisma) {
            PrismaService.prisma = new PrismaClient();
        }
        return PrismaService.prisma;
    }
}
export default PrismaService;
//# sourceMappingURL=prismaService.js.map