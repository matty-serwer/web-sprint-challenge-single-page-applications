import * as yup from 'yup';

export default yup.object().shape({
    size: yup.string().required('Please select a size'),
    sauce: yup.string().required('Please pick a sauce'),
    pepperoni: yup.boolean(),
    sausage: yup.boolean(),
    mushrooms: yup.boolean(),
    olives: yup.boolean(),
    glutenFree: yup.boolean(),
    special: yup.string(),
})