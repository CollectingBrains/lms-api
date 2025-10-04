import express, { Request, Response } from 'express';
export declare const getUser: (req: Request, res: Response) => Promise<express.Response<any, Record<string, any>>>;
export declare const register: (req: Request, res: Response) => Promise<express.Response<any, Record<string, any>>>;
export declare const login: (req: Request, res: Response) => Promise<express.Response<any, Record<string, any>> | undefined>;
export declare const getUserById: (req: Request, res: Response) => Promise<express.Response<any, Record<string, any>> | undefined>;
//# sourceMappingURL=user.controller.d.ts.map