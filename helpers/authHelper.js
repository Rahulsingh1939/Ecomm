import bcrypt from 'bcryptjs';

export const hashPassword = (password) => {
    try{
        const saltrounds = 10;
        const hashedPassword = bcrypt.hashSync(password,saltrounds);
        return hashedPassword;
    },
    catch(error){
        console.log(error);
    }
}