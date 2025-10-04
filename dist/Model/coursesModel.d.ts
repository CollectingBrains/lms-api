import mongoose from "mongoose";
declare const _default: mongoose.Model<{
    courseId: string;
    courseTitle: string;
    modules: mongoose.Types.DocumentArray<{
        title: string;
        moduleId: number;
        lessons: mongoose.Types.DocumentArray<{
            lessonId: string;
            title: string;
            quiz: mongoose.Types.DocumentArray<{
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }> & {
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }>;
            explanation?: string | null;
            exampleCode?: string | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            lessonId: string;
            title: string;
            quiz: mongoose.Types.DocumentArray<{
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }> & {
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }>;
            explanation?: string | null;
            exampleCode?: string | null;
        }> & {
            lessonId: string;
            title: string;
            quiz: mongoose.Types.DocumentArray<{
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }> & {
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }>;
            explanation?: string | null;
            exampleCode?: string | null;
        }>;
        duration?: string | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
        title: string;
        moduleId: number;
        lessons: mongoose.Types.DocumentArray<{
            lessonId: string;
            title: string;
            quiz: mongoose.Types.DocumentArray<{
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }> & {
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }>;
            explanation?: string | null;
            exampleCode?: string | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            lessonId: string;
            title: string;
            quiz: mongoose.Types.DocumentArray<{
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }> & {
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }>;
            explanation?: string | null;
            exampleCode?: string | null;
        }> & {
            lessonId: string;
            title: string;
            quiz: mongoose.Types.DocumentArray<{
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }> & {
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }>;
            explanation?: string | null;
            exampleCode?: string | null;
        }>;
        duration?: string | null;
    }> & {
        title: string;
        moduleId: number;
        lessons: mongoose.Types.DocumentArray<{
            lessonId: string;
            title: string;
            quiz: mongoose.Types.DocumentArray<{
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }> & {
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }>;
            explanation?: string | null;
            exampleCode?: string | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            lessonId: string;
            title: string;
            quiz: mongoose.Types.DocumentArray<{
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }> & {
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }>;
            explanation?: string | null;
            exampleCode?: string | null;
        }> & {
            lessonId: string;
            title: string;
            quiz: mongoose.Types.DocumentArray<{
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }> & {
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }>;
            explanation?: string | null;
            exampleCode?: string | null;
        }>;
        duration?: string | null;
    }>;
    description?: string | null;
    url?: string | null;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    courseId: string;
    courseTitle: string;
    modules: mongoose.Types.DocumentArray<{
        title: string;
        moduleId: number;
        lessons: mongoose.Types.DocumentArray<{
            lessonId: string;
            title: string;
            quiz: mongoose.Types.DocumentArray<{
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }> & {
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }>;
            explanation?: string | null;
            exampleCode?: string | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            lessonId: string;
            title: string;
            quiz: mongoose.Types.DocumentArray<{
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }> & {
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }>;
            explanation?: string | null;
            exampleCode?: string | null;
        }> & {
            lessonId: string;
            title: string;
            quiz: mongoose.Types.DocumentArray<{
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }> & {
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }>;
            explanation?: string | null;
            exampleCode?: string | null;
        }>;
        duration?: string | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
        title: string;
        moduleId: number;
        lessons: mongoose.Types.DocumentArray<{
            lessonId: string;
            title: string;
            quiz: mongoose.Types.DocumentArray<{
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }> & {
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }>;
            explanation?: string | null;
            exampleCode?: string | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            lessonId: string;
            title: string;
            quiz: mongoose.Types.DocumentArray<{
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }> & {
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }>;
            explanation?: string | null;
            exampleCode?: string | null;
        }> & {
            lessonId: string;
            title: string;
            quiz: mongoose.Types.DocumentArray<{
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }> & {
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }>;
            explanation?: string | null;
            exampleCode?: string | null;
        }>;
        duration?: string | null;
    }> & {
        title: string;
        moduleId: number;
        lessons: mongoose.Types.DocumentArray<{
            lessonId: string;
            title: string;
            quiz: mongoose.Types.DocumentArray<{
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }> & {
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }>;
            explanation?: string | null;
            exampleCode?: string | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            lessonId: string;
            title: string;
            quiz: mongoose.Types.DocumentArray<{
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }> & {
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }>;
            explanation?: string | null;
            exampleCode?: string | null;
        }> & {
            lessonId: string;
            title: string;
            quiz: mongoose.Types.DocumentArray<{
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }> & {
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }>;
            explanation?: string | null;
            exampleCode?: string | null;
        }>;
        duration?: string | null;
    }>;
    description?: string | null;
    url?: string | null;
}, {}, mongoose.DefaultSchemaOptions> & {
    courseId: string;
    courseTitle: string;
    modules: mongoose.Types.DocumentArray<{
        title: string;
        moduleId: number;
        lessons: mongoose.Types.DocumentArray<{
            lessonId: string;
            title: string;
            quiz: mongoose.Types.DocumentArray<{
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }> & {
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }>;
            explanation?: string | null;
            exampleCode?: string | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            lessonId: string;
            title: string;
            quiz: mongoose.Types.DocumentArray<{
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }> & {
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }>;
            explanation?: string | null;
            exampleCode?: string | null;
        }> & {
            lessonId: string;
            title: string;
            quiz: mongoose.Types.DocumentArray<{
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }> & {
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }>;
            explanation?: string | null;
            exampleCode?: string | null;
        }>;
        duration?: string | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
        title: string;
        moduleId: number;
        lessons: mongoose.Types.DocumentArray<{
            lessonId: string;
            title: string;
            quiz: mongoose.Types.DocumentArray<{
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }> & {
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }>;
            explanation?: string | null;
            exampleCode?: string | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            lessonId: string;
            title: string;
            quiz: mongoose.Types.DocumentArray<{
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }> & {
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }>;
            explanation?: string | null;
            exampleCode?: string | null;
        }> & {
            lessonId: string;
            title: string;
            quiz: mongoose.Types.DocumentArray<{
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }> & {
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }>;
            explanation?: string | null;
            exampleCode?: string | null;
        }>;
        duration?: string | null;
    }> & {
        title: string;
        moduleId: number;
        lessons: mongoose.Types.DocumentArray<{
            lessonId: string;
            title: string;
            quiz: mongoose.Types.DocumentArray<{
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }> & {
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }>;
            explanation?: string | null;
            exampleCode?: string | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            lessonId: string;
            title: string;
            quiz: mongoose.Types.DocumentArray<{
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }> & {
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }>;
            explanation?: string | null;
            exampleCode?: string | null;
        }> & {
            lessonId: string;
            title: string;
            quiz: mongoose.Types.DocumentArray<{
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }> & {
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }>;
            explanation?: string | null;
            exampleCode?: string | null;
        }>;
        duration?: string | null;
    }>;
    description?: string | null;
    url?: string | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    courseId: string;
    courseTitle: string;
    modules: mongoose.Types.DocumentArray<{
        title: string;
        moduleId: number;
        lessons: mongoose.Types.DocumentArray<{
            lessonId: string;
            title: string;
            quiz: mongoose.Types.DocumentArray<{
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }> & {
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }>;
            explanation?: string | null;
            exampleCode?: string | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            lessonId: string;
            title: string;
            quiz: mongoose.Types.DocumentArray<{
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }> & {
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }>;
            explanation?: string | null;
            exampleCode?: string | null;
        }> & {
            lessonId: string;
            title: string;
            quiz: mongoose.Types.DocumentArray<{
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }> & {
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }>;
            explanation?: string | null;
            exampleCode?: string | null;
        }>;
        duration?: string | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
        title: string;
        moduleId: number;
        lessons: mongoose.Types.DocumentArray<{
            lessonId: string;
            title: string;
            quiz: mongoose.Types.DocumentArray<{
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }> & {
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }>;
            explanation?: string | null;
            exampleCode?: string | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            lessonId: string;
            title: string;
            quiz: mongoose.Types.DocumentArray<{
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }> & {
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }>;
            explanation?: string | null;
            exampleCode?: string | null;
        }> & {
            lessonId: string;
            title: string;
            quiz: mongoose.Types.DocumentArray<{
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }> & {
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }>;
            explanation?: string | null;
            exampleCode?: string | null;
        }>;
        duration?: string | null;
    }> & {
        title: string;
        moduleId: number;
        lessons: mongoose.Types.DocumentArray<{
            lessonId: string;
            title: string;
            quiz: mongoose.Types.DocumentArray<{
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }> & {
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }>;
            explanation?: string | null;
            exampleCode?: string | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            lessonId: string;
            title: string;
            quiz: mongoose.Types.DocumentArray<{
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }> & {
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }>;
            explanation?: string | null;
            exampleCode?: string | null;
        }> & {
            lessonId: string;
            title: string;
            quiz: mongoose.Types.DocumentArray<{
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }> & {
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }>;
            explanation?: string | null;
            exampleCode?: string | null;
        }>;
        duration?: string | null;
    }>;
    description?: string | null;
    url?: string | null;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    courseId: string;
    courseTitle: string;
    modules: mongoose.Types.DocumentArray<{
        title: string;
        moduleId: number;
        lessons: mongoose.Types.DocumentArray<{
            lessonId: string;
            title: string;
            quiz: mongoose.Types.DocumentArray<{
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }> & {
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }>;
            explanation?: string | null;
            exampleCode?: string | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            lessonId: string;
            title: string;
            quiz: mongoose.Types.DocumentArray<{
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }> & {
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }>;
            explanation?: string | null;
            exampleCode?: string | null;
        }> & {
            lessonId: string;
            title: string;
            quiz: mongoose.Types.DocumentArray<{
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }> & {
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }>;
            explanation?: string | null;
            exampleCode?: string | null;
        }>;
        duration?: string | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
        title: string;
        moduleId: number;
        lessons: mongoose.Types.DocumentArray<{
            lessonId: string;
            title: string;
            quiz: mongoose.Types.DocumentArray<{
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }> & {
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }>;
            explanation?: string | null;
            exampleCode?: string | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            lessonId: string;
            title: string;
            quiz: mongoose.Types.DocumentArray<{
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }> & {
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }>;
            explanation?: string | null;
            exampleCode?: string | null;
        }> & {
            lessonId: string;
            title: string;
            quiz: mongoose.Types.DocumentArray<{
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }> & {
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }>;
            explanation?: string | null;
            exampleCode?: string | null;
        }>;
        duration?: string | null;
    }> & {
        title: string;
        moduleId: number;
        lessons: mongoose.Types.DocumentArray<{
            lessonId: string;
            title: string;
            quiz: mongoose.Types.DocumentArray<{
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }> & {
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }>;
            explanation?: string | null;
            exampleCode?: string | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            lessonId: string;
            title: string;
            quiz: mongoose.Types.DocumentArray<{
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }> & {
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }>;
            explanation?: string | null;
            exampleCode?: string | null;
        }> & {
            lessonId: string;
            title: string;
            quiz: mongoose.Types.DocumentArray<{
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }> & {
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }>;
            explanation?: string | null;
            exampleCode?: string | null;
        }>;
        duration?: string | null;
    }>;
    description?: string | null;
    url?: string | null;
}>, {}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & mongoose.FlatRecord<{
    courseId: string;
    courseTitle: string;
    modules: mongoose.Types.DocumentArray<{
        title: string;
        moduleId: number;
        lessons: mongoose.Types.DocumentArray<{
            lessonId: string;
            title: string;
            quiz: mongoose.Types.DocumentArray<{
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }> & {
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }>;
            explanation?: string | null;
            exampleCode?: string | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            lessonId: string;
            title: string;
            quiz: mongoose.Types.DocumentArray<{
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }> & {
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }>;
            explanation?: string | null;
            exampleCode?: string | null;
        }> & {
            lessonId: string;
            title: string;
            quiz: mongoose.Types.DocumentArray<{
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }> & {
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }>;
            explanation?: string | null;
            exampleCode?: string | null;
        }>;
        duration?: string | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
        title: string;
        moduleId: number;
        lessons: mongoose.Types.DocumentArray<{
            lessonId: string;
            title: string;
            quiz: mongoose.Types.DocumentArray<{
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }> & {
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }>;
            explanation?: string | null;
            exampleCode?: string | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            lessonId: string;
            title: string;
            quiz: mongoose.Types.DocumentArray<{
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }> & {
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }>;
            explanation?: string | null;
            exampleCode?: string | null;
        }> & {
            lessonId: string;
            title: string;
            quiz: mongoose.Types.DocumentArray<{
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }> & {
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }>;
            explanation?: string | null;
            exampleCode?: string | null;
        }>;
        duration?: string | null;
    }> & {
        title: string;
        moduleId: number;
        lessons: mongoose.Types.DocumentArray<{
            lessonId: string;
            title: string;
            quiz: mongoose.Types.DocumentArray<{
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }> & {
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }>;
            explanation?: string | null;
            exampleCode?: string | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            lessonId: string;
            title: string;
            quiz: mongoose.Types.DocumentArray<{
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }> & {
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }>;
            explanation?: string | null;
            exampleCode?: string | null;
        }> & {
            lessonId: string;
            title: string;
            quiz: mongoose.Types.DocumentArray<{
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }> & {
                question: string;
                options: string[];
                correctAnswer: string;
                suggestion?: string | null;
            }>;
            explanation?: string | null;
            exampleCode?: string | null;
        }>;
        duration?: string | null;
    }>;
    description?: string | null;
    url?: string | null;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export default _default;
//# sourceMappingURL=coursesModel.d.ts.map