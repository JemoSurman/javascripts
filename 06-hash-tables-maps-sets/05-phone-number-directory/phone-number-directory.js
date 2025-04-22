function phoneNumberDirectory(phoneNumbers) {
    const directory = new Map();

    for(const entry of phoneNumbers){
        const [name, phoneNumbers] = entry.split(':');

        directory.set(name, phoneNumbers);
    }

    return directory;
}

module.exports = phoneNumberDirectory;
