export default parseAction;

function parseAction(content, commands) {
    let command = content
        .replace(/^\./, '')   // strip leading period prefix
        .split(/\s+/)[0]
        .toLowerCase()        // accept oddly cased commands
        .replace(/\s+$/, ''); // ignore trailing whitespace

    if (command in commands) {
        return commands[command];
    }
    else {
        return undefined;
    }
}
