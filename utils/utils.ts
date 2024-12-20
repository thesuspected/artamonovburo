export const silenceSomeSassDeprecationWarnings = {
    verbose: true,
    logger: {
        warn(message: string, options: any) {
            const { stderr } = process
            const span = options.span ?? undefined
            const stack = (options.stack === "null" ? undefined : options.stack) ?? undefined

            if (options.deprecation) {
                if (message.startsWith("Using / for division outside of calc() is deprecated") || message.startsWith("Sass @import rules are deprecated and will be removed")) {
                    // silences above deprecation warning
                    return
                }
                stderr.write("DEPRECATION ")
            }
            stderr.write(`WARNING: ${message}\n`)

            if (span !== undefined) {
                // output the snippet that is causing this warning
                stderr.write(`\n"${span.text}"\n`)
            }

            if (stack !== undefined) {
                // indent each line of the stack
                stderr.write(`    ${stack.toString().trimEnd().replace(/\n/gm, "\n    ")}\n`)
            }

            stderr.write("\n")
        },
    },
}