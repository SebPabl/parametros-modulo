import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { MonthlySalary } from './entities/monthly-salary.entity';

@Injectable()
export class MonthlySalaryService {
    constructor(
        private readonly monthlySalaryRepository: Repository<MonthlySalary>
    ) {}

    create() {
    }
}
