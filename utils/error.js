import chalk from "chalk";

export const errorMessage = (message) => {
    console.log(`\n${chalk.red('[ ERROR ] :')} ${chalk.redBright(message)}\n`);
}

export const createError = (status, message) => {
    const err = new Error();
    err.status = status;
    err.message = message;
    return err;
}