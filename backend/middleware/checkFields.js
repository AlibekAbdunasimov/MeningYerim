import { check } from 'express-validator'

const userAddField = [
    check('user')
        .notEmpty()
        .withMessage("User bo'lishi kerak")
        .bail()
        .trim()
        .matches(/^[a-zA-Z0-9]*$/g)
        .withMessage('Bu user emas'),
    check('phone')
        .notEmpty()
        .withMessage("Telefon raqami bo'lishi kerak")
        .bail()
        .trim()
        .isNumeric()
        .withMessage('Faqat raqam bolishi kerak'),
    check('password')
        .notEmpty()
        .withMessage("Password bo'lishi kerak")
        .bail()
        .trim()
        .isLength({ min: 8 })
        .withMessage("Kamida 8ta harf bo'lishi kerak")
        .bail()
        .isLength({ max: 16 })
        .withMessage("Ko'pida 16ta harf bo'lishi kerak"),
    check('cpassword')
        .notEmpty()
        .withMessage("Confirm password bo'lishi kerak")
        .bail()
        .trim()
        .custom((value, { req }) => {
            if (value !== req.body.password) throw new Error('Passwordga teng emas')
            else return true
        })
        .bail()
        .isLength({ min: 8 })
        .withMessage("Kamida 8ta harf bo'lishi kerak")
        .bail()
        .isLength({ max: 16 })
        .withMessage("Ko'pida 16ta harf bo'lishi kerak"),
]

const userLoginField = [
    check('phone')
        .notEmpty()
        .withMessage("Telefon raqam bo'lishi shart")
        .bail()
        .trim()
        .isNumeric()
        .withMessage('Faqat raqam bolishi kerak'),
    check('password')
        .notEmpty()
        .withMessage('password_required')
        .bail()
        .trim()
        .isLength({ min: 8 })
        .withMessage('minimum_8_letters')
        .bail()
        .isLength({ max: 16 })
        .withMessage('maximum_16_letters'),
]

const userUpdateField = [
    check('user')
        .notEmpty()
        .withMessage('username_required')
        .bail()
        .trim()
        .matches(/^[a-zA-Z0-9]*$/g)
        .withMessage('not_username'),
    check('phone')
        .notEmpty()
        .withMessage('fullname_required')
        .bail()
        .trim()
        .matches(/[A-z]+\s[A-z]+/)
        .withMessage('not_fullname'),
    check('currentPassword')
        .if(check('newPassword').exists())
        .notEmpty()
        .withMessage('current_password_required')
        .bail()
        .if(check('confirmNewPassword').exists())
        .notEmpty()
        .withMessage('current_password_required')
        .bail()
        .trim()
        .isLength({ min: 8 })
        .withMessage('minimum_8_letters')
        .bail()
        .isLength({ max: 16 })
        .withMessage('maximum_16_letters'),
    check('newPassword')
        .if(check('currentPassword').exists())
        .notEmpty()
        .withMessage('new_password_required')
        .bail()
        .if(check('confirmNewPassword').exists())
        .notEmpty()
        .withMessage('new_password_required')
        .bail()
        .trim()
        .isLength({ min: 8 })
        .withMessage('minimum_8_letters')
        .bail()
        .isLength({ max: 16 })
        .withMessage('maximum_16_letters'),
    check('confirmNewPassword')
        .if(check('currentPassword').exists())
        .notEmpty()
        .withMessage('confirm_password_required')
        .bail()
        .if(check('newPassword').exists())
        .notEmpty()
        .withMessage('confirm_password_required')
        .bail()
        .trim()
        .isLength({ min: 8 })
        .withMessage('minimum_8_letters')
        .bail()
        .isLength({ max: 16 })
        .withMessage('maximum_16_letters')
        .bail()
        .custom((value, { req }) => {
            if (value !== req.body.newPassword) throw new Error('not_same_confirm_password')
            else return true
        }),
]

const landField = [
    check('landSize').notEmpty().withMessage("Land size bo'lishi kerak"),
    check('landPrice').notEmpty().withMessage("Land price bo'lishi kerak"),
    check('desc').notEmpty().withMessage("Desciption bo'lishi kerak"),
    check('rent').isBoolean().withMessage("Rent boolean bo'lishi kerak"),
    check('location').notEmpty().withMessage("Location bo'lishi kerak"),
]

export { userAddField, userLoginField, userUpdateField, landField }
