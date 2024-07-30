import { CompanyService } from './company.service';
import { Company } from './entities/company.entity';
export declare class CompanyController {
    private readonly companyService;
    constructor(companyService: CompanyService);
    getAllCompanyName(page?: number, limit?: number, search?: string, name?: string): Promise<Company[]>;
}
