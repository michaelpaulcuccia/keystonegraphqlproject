const { Text, Select, DateTime, Relationship } = require('@keystonejs/fields');

const postFields = {
    fields: {
        title: {
            type: Text,
            isRequired: true,
        },
        body: {
            type: Text,
            isMultiline: true,
        },
        status: {
            type: Select,
            options: [
                { value: 'PUBLISHED', label: 'Published' },
                { value: 'UNPUBLISHED', label: 'Unpublished' },
            ],
            defaultValue: 'PUBLISHED',
        },
        author: {
            type: Relationship,
            ref: 'User',
            many: false,
            isRequired: true
        },
        date: {
            type: DateTime,
            format: 'MM/dd/yyyy HH:mm',
            isRequired: true
        }
    },
}

module.exports = postFields

