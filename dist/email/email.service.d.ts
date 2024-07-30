export declare class EmailService {
    private transporter;
    constructor();
    sendEmail(to: string, subject: string, code: string): Promise<void>;
}
