const { Text, Select, Integer, Decimal, Relationship, Checkbox } = require('@keystonejs/fields');

const sweaterFields = {
    fields: {
        title: {
            type: Text,
            isRequired: true,
        },
        description: {
            type: Text,
            isMultiline: true,
            isRequired: true
        },
        fit: {
            type: Select,
            options: [
                { value: 'regular', label: 'Regular' },
                { value: 'long', label: 'Long' },
                { value: 'short', label: 'Short' },
                { value: 'fitted', label: 'Fitted' },
                { value: 'loose', label: 'loose' }
            ],
            defaultValue: 'Regular',
            isRequired: true
        },
        season: {
            type: Select,
            options: [
                { value: 'summer', label: 'Summer' },
                { value: 'spring', label: 'Spring' },
                { value: 'fall', label: 'Fall' },
                { value: 'winter', label: 'Winter' },
            ],
            defaultValue: 'Winter',
            isRequired: true
        },
        fabric: {
            type: Select,
            options: [
                { value: 'cotton', label: 'Cotton' },
                { value: 'cottonBlend', label: 'Cotton-Blend' },
                { value: 'wool', label: 'Wool' },
                { value: 'woolBlend', label: 'Wool-Blend' },
                { value: 'cashmire', label: 'Cashmire' },
            ],
            defaultValue: 'Cotton',
            isRequired: true
        },
        quantityInStock: {
            type: Integer,
            isRequired: true
        },
        purchasePrice: {
            type: Decimal,
            isRequired: true
        },
        retailPrice: {
            type: Decimal,
            isRequired: true
        },
        currentlyListed: {
            type: Checkbox
        },
        author: {
            type: Relationship,
            ref: 'User',
            many: false,
            isRequired: true
        },
    },
}

module.exports = sweaterFields

