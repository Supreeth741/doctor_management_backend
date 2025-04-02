import chalk from 'chalk';

export const successMessage = (message) => {
    console.log(`\n${chalk.green('[ SUCCESS ] :')} ${chalk.greenBright(message)}\n`);
}

export const createSuccessRessponse = (statusCode, successMessage, data) => {
    const successObj = {
        status: statusCode,
        message: successMessage,
        data: data
    }
    return successObj;
}