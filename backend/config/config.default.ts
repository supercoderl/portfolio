import configLocal from "./config.local";
import configProd from "./config.prod";
import configUnittest from "./config.unittest";

// Default configuration - the running environment configuration will be automatically merged.
export default () =>
    Object.assign(
        // Default configuration
        {
            // Project startup port
            port: 3000,
            // Database configuration
            mongo: {
                host: 'mongodb+srv://admin:ZSq2rn84LfaFjKuY@supercoderle.4spexdh.mongodb.net/?retryWrites=true&w=majority&appName=supercoderle',
            },
        },
        {
            local: configLocal,
            prod: configProd,
            unittest: configUnittest,
        }[process.env.FM_SERVER_ENV ?? "local"](),
    );
