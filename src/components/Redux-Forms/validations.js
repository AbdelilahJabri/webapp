const required = value => value ? undefined : 'Obligatoire';

const maxLength = max => value =>
    value && value.length > max ? `Doit contenir au maximum ${max} caractères` : undefined;

const number = value => value && isNaN(Number(value)) ? 'Doit être un nombre' : undefined;

const minValue = min => value =>
    value && value < min ? `Doit contenir au minimum ${max} caractères` : undefined;

const email = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
        'Adresse e-mail invalide' : undefined;
