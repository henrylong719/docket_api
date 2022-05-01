const notFound = (
  req: { originalUrl: any },
  res: { status: (arg0: number) => void },
  next: (arg0: Error) => void
) => {
  // when user types illegal url this error message throw out
  const error = new Error(`Not Found - ${req.originalUrl}`);

  res.status(404);

  // pass the error down to next middleware
  next(error);
};

const errorHandler = (
  err: { message: any; stack: any },
  req: any,
  res: {
    statusCode: number;
    status: (arg0: any) => void;
    json: (arg0: { message: any; stack: any }) => void;
  },
  next: any
) => {
  // Status code 200 stands for OK, which does not make sense when an exception happens
  // Therefore, it should be changed to status code 500, which stands for Internal Server Error
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);

  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
};

export { notFound, errorHandler };
