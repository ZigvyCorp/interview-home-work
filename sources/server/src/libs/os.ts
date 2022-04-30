function getOsEnv(key: string): string {
    /**
     * Get value environment by key
     */
    const value = process.env[key];
    if (!value) {
        throw new Error(`Environment variable ${key} is not defined`);
    }
    return value;
}

function normalizePort(port: any): number {
    const parsedPort = parseInt(port, 10);
    if (Number.isNaN(parsedPort)) {
        // If covert error -> port
        return port;
    }

    if (parsedPort >= 0) {
        // Port number
        return parsedPort;
    }

    return port;
}

function toNumber(value: string) {
    return parseInt(value, 10);
}

function toBool(value: string) {
    return value === 'true';
}

export { getOsEnv, normalizePort, toNumber, toBool };
