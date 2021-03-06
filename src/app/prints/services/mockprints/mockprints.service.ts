import { Injectable } from '@angular/core';
import { PRINTS, FILAMENTSPRINTSLIBRARYVIEW, PRINTERSPRINTSLIBRARYVIEW } from './mockprints'

@Injectable()
export class PrintsService
{
    public getPrints(userId: number): Promise<PrintDetailView[]> {
        return Promise.resolve(PRINTS.filter(print => print.UserId == userId));
    }

    public getPrintById(printId: number): Promise<PrintDetailView> {
        return Promise.resolve(PRINTS.find(print => print.PrintId == printId));
    }

    public getFilaments(userId: number): Promise<FilamentPrintsView[]> {
        return Promise.resolve(FILAMENTSPRINTSLIBRARYVIEW.filter(filament => filament.UserId == userId));
    }

    public getPrinters(userId: number): Promise<PrinterPrintsView[]> {
        return Promise.resolve(PRINTERSPRINTSLIBRARYVIEW.filter(printer => printer.UserId == userId));
    }
}

export class PrintDetailView {
    PrintId: number;
    PrintName: string;
    SourceUrl: string;
    ModelPath: string;
    Success: boolean;
    PrintTimeHours: number;
    PrintTimeMinutes: number;
    MainPrintImageUrl: string;
    FilamentId: number;
    FilamentName: string;
    PrinterId: number;
    PrinterName: string;
    UserId: number;
    PrintDate: Date;
    ModelFileUrl: string;
    LengthUsed: number;
    PrintConfigId: number;
}

export class PrinterPrintsView {
    UserId: number;
    PrinterName: string;
    PrinterId: number;
}

export class FilamentPrintsView {
    UserId: number;
    FilamentName: string;
    FilamentId: number;
}