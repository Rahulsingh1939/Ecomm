import bcrypt from 'bcryptjs';

export const hashPassword = (password) => {
    try{
        const saltrounds = 10;
        const hashedPassword = bcrypt.hashSync(password,saltrounds);
        return hashedPassword;
    }    catch(error){
        console.log(error);
    }
}

export const comparePassword = async (password, hashedPassword) => {
    try{
        return bcrypt.compare(password, hashedPassword);
    }    catch(error){
        console.log(error);
    }
}