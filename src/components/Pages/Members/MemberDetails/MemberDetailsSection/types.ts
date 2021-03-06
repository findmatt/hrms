import { Address, MemberData } from '../../types';
import { SectionTemplate } from '../types';

const templateParticulars: SectionTemplate<MemberData> = [
    { attributeName: 'born', label: 'Age', formatter: 'computeAge' },
    { attributeName: 'born', label: 'Birth Date', formatter: 'formatDate' },
    {
        attributeName: 'nationality',
        label: 'Nationality',
        formatter: 'formatNationality',
    },
    { attributeName: 'gender', label: 'Gender', formatter: 'formatGender' },
    {
        attributeName: 'maritalStatus',
        label: 'Marital Status',
        formatter: 'formatMaritalStatus',
    },
];

const templateContact: SectionTemplate<MemberData> = [
    { attributeName: 'mobile', label: 'Mobile', formatter: null },
    { attributeName: 'phone', label: 'Tel', formatter: null },
    { attributeName: 'email', label: 'Email', formatter: null },
];

const templateAddress: SectionTemplate<Address> = [
    {
        attributeName: 'country',
        label: 'Country',
        formatter: 'formatCountryName',
    },
    { attributeName: 'postal', label: 'Postal Code', formatter: null },
    { attributeName: 'street', label: 'Block/Street', formatter: null },
    { attributeName: 'building', label: 'Building', formatter: null },
    {
        attributeName: 'unit',
        label: 'Unit No',
        formatter: 'addressUnit',
    },
];

export default { templateParticulars, templateContact, templateAddress };
