import express, { Request, Response } from 'express';
export declare const getCourse: (req: Request, res: Response) => Promise<void>;
export declare const createCourse: (req: Request, res: Response) => Promise<express.Response<any, Record<string, any>> | undefined>;
export declare const getCourseById: (req: Request, res: Response) => Promise<express.Response<any, Record<string, any>> | undefined>;
//# sourceMappingURL=course.controller.d.ts.map